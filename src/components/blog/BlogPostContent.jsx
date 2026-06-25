import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

const BlogPostContent = ({ content, tags, author }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="lg:col-span-3"
    >
      <div 
        className="prose prose-lg max-w-none prose-headings:font-display prose-headings:gradient-text prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-blockquote:border-l-pink-500 prose-blockquote:bg-pink-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-strong:text-gray-900"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center space-x-2 mb-4">
          <Tag className="w-5 h-5 text-gray-400" />
          <span className="text-sm font-medium text-gray-600">Tags:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-pink-100 hover:text-pink-700 transition-colors duration-300 cursor-pointer"
            >
              #{tag.replace(/\s+/g, '-').toLowerCase()}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 p-6 bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl">
        <div className="flex items-start space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
            {author.split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{author}</h3>
            <p className="text-gray-600 leading-relaxed">
              Our team is dedicated to providing insightful articles about <strong>escort and call girl services in Udaipur</strong>, helping you make informed choices for luxury companionship.
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogPostContent;