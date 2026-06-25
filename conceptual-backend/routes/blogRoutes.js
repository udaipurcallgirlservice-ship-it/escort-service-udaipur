import express from 'express';
import {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostBySlug,
  updateBlogPostBySlug,
  deleteBlogPostBySlug
} from '../controllers/blogController.js';

const router = express.Router();

// POST /api/blogs - Create new blog post
router.post('/', createBlogPost);

// GET /api/blogs - Get all blog posts
router.get('/', getAllBlogPosts);

// GET /api/blogs/:slug - Get single blog post by slug
router.get('/:slug', getBlogPostBySlug);

// PUT /api/blogs/:slug - Update blog post by slug
router.put('/:slug', updateBlogPostBySlug);

// DELETE /api/blogs/:slug - Delete blog post by slug
router.delete('/:slug', deleteBlogPostBySlug);

export default router;