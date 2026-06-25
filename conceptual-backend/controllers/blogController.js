import BlogPost from '../models/BlogPost.js';
import crypto from 'crypto';

const generateSlug = (title) => {
  if (!title) return '';
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') 
    .replace(/\s+/g, '-')     
    .replace(/--+/g, '-')     
    .trim();
};

const ensureUniqueSlug = async (slug, currentPostId = null) => {
  let uniqueSlug = slug;
  let counter = 1;
  let query = { slug: uniqueSlug };

  if (currentPostId) {
    query._id = { $ne: currentPostId };
  }

  while (await BlogPost.findOne(query)) {
    const randomSuffix = crypto.randomBytes(3).toString('hex');
    uniqueSlug = `${slug}-${randomSuffix}`;
    if (counter > 1) { 
      uniqueSlug = `${slug}-${counter}-${randomSuffix}`;
    }
    query.slug = uniqueSlug;
    counter++;
    if (counter > 10) { 
      uniqueSlug = `${slug}-${Date.now().toString(36)}`;
      query.slug = uniqueSlug;
      if (await BlogPost.findOne(query)) {
        throw new Error('Failed to generate a unique slug after multiple attempts.');
      }
      break;
    }
  }
  return uniqueSlug;
};

export const createBlogPost = async (req, res) => {
  try {
    const { title, content, featuredImageUrl, metaTitle, metaDescription, tags, slug: customSlug, publishedDate } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required fields.' });
    }

    let slugToUse = customSlug ? generateSlug(customSlug) : generateSlug(title);
    if (!slugToUse) { 
        slugToUse = crypto.randomBytes(6).toString('hex');
    }
    
    const finalSlug = await ensureUniqueSlug(slugToUse);

    const newPost = new BlogPost({
      title,
      content,
      slug: finalSlug,
      featuredImageUrl,
      metaTitle,
      metaDescription,
      tags: tags ? (Array.isArray(tags) ? tags.map(tag => tag.trim()).filter(tag => tag) : tags.split(',').map(tag => tag.trim()).filter(tag => tag)) : [],
      publishedDate: publishedDate ? new Date(publishedDate) : Date.now()
    });

    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error creating blog post:", error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error creating blog post.', error: error.message });
  }
};

export const getAllBlogPosts = async (req, res) => {
  try {
    const { page = 1, limit = 10, sortBy = 'publishedDate', order = 'desc', tag, search } = req.query;
    const query = {};

    if (tag) {
      query.tags = { $in: [tag.toLowerCase()] };
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
        { tags: { $regex: search, $options: 'i' } }
      ];
    }
    
    const posts = await BlogPost.find(query)
      .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
      
    const totalPosts = await BlogPost.countDocuments(query);
    
    res.status(200).json({
      posts,
      totalPages: Math.ceil(totalPosts / limit),
      currentPage: parseInt(page),
      totalPosts
    });
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ message: 'Server error fetching blog posts.', error: error.message });
  }
};

export const getBlogPostBySlug = async (req, res) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug.toLowerCase() });
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found.' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.error("Error fetching blog post by slug:", error);
    res.status(500).json({ message: 'Server error fetching blog post.', error: error.message });
  }
};

export const updateBlogPostBySlug = async (req, res) => {
  try {
    const { title, content, featuredImageUrl, metaTitle, metaDescription, tags, slug: customSlug, publishedDate } = req.body;
    const currentPost = await BlogPost.findOne({ slug: req.params.slug.toLowerCase() });

    if (!currentPost) {
      return res.status(404).json({ message: 'Blog post not found for update.' });
    }

    let slugToUse = currentPost.slug;

    if (customSlug && generateSlug(customSlug) !== currentPost.slug) {
      slugToUse = await ensureUniqueSlug(generateSlug(customSlug), currentPost._id);
    } else if (title && generateSlug(title) !== currentPost.slug && !customSlug) {
      slugToUse = await ensureUniqueSlug(generateSlug(title), currentPost._id);
    }
    
    const updateData = {
      title,
      content,
      slug: slugToUse,
      featuredImageUrl,
      metaTitle,
      metaDescription,
      tags: tags ? (Array.isArray(tags) ? tags.map(tag => tag.trim()).filter(tag => tag) : tags.split(',').map(tag => tag.trim()).filter(tag => tag)) : undefined,
      publishedDate: publishedDate ? new Date(publishedDate) : undefined,
    };

    Object.keys(updateData).forEach(key => updateData[key] === undefined && delete updateData[key]);
    
    const updatedPost = await BlogPost.findByIdAndUpdate(
      currentPost._id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error("Error updating blog post:", error);
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: 'Validation Error', errors: error.errors });
    }
    res.status(500).json({ message: 'Server error updating blog post.', error: error.message });
  }
};

export const deleteBlogPostBySlug = async (req, res) => {
  try {
    const deletedPost = await BlogPost.findOneAndDelete({ slug: req.params.slug.toLowerCase() });
    if (!deletedPost) {
      return res.status(404).json({ message: 'Blog post not found for deletion.' });
    }
    res.status(200).json({ message: 'Blog post deleted successfully.' });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    res.status(500).json({ message: 'Server error deleting blog post.', error: error.message });
  }
};