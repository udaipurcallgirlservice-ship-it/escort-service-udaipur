import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required.'],
    trim: true,
    minlength: [3, 'Title must be at least 3 characters long.'],
    maxlength: [150, 'Title cannot exceed 150 characters.']
  },
  content: {
    type: String,
    required: [true, 'Content is required.']
  },
  slug: {
    type: String,
    required: [true, 'Slug is required.'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be alphanumeric with hyphens and no leading/trailing hyphens.']
  },
  featuredImageUrl: {
    type: String,
    trim: true,
    match: [/^https?:\/\/.+\..+/, 'Invalid featured image URL. Must be a valid URL.'] 
  },
  metaTitle: {
    type: String,
    trim: true,
    maxlength: [70, 'Meta title cannot exceed 70 characters.']
  },
  metaDescription: {
    type: String,
    trim: true,
    maxlength: [160, 'Meta description cannot exceed 160 characters.']
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true,
    maxlength: [30, 'Each tag cannot exceed 30 characters.']
  }],
  publishedDate: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true 
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

blogPostSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  if (this.isModified('tags')) {
    this.tags = this.tags.filter(tag => tag.length > 0);
  }
  next();
});

blogPostSchema.pre('findOneAndUpdate', function(next) {
  this.set({ updatedAt: new Date() });
  const update = this.getUpdate();
  if (update.$set && update.$set.tags) {
    update.$set.tags = update.$set.tags.filter(tag => tag.length > 0);
  } else if (update.tags) { 
     update.tags = update.tags.filter(tag => tag.length > 0);
  }
  next();
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

export default BlogPost;