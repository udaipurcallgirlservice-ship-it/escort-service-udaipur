import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import MetaUpdater from '@/components/seo/MetaUpdater';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import Sidebar from '@/components/blog/Sidebar';
import RelatedPostsSection from '@/components/blog/RelatedPostsSection';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';

const blogPostsData = blogPosts.map((post, idx) => ({
  ...post,
  id: idx + 1,
  date: post.datePublished,
  readTime: `${post.readingTime} min read`,
  author: typeof post.author === 'object' && post.author ? post.author.name : post.author,
}));


const BlogPostPage = ({ siteUrl }) => {
  const { slug } = useParams();
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;

  const blogPost = blogPostsData.find(post => post.slug === slug);

  if (!blogPost) {
    return (
      <div className="pt-16 lg:pt-20 text-center py-20">
        <MetaUpdater title="Post Not Found - Escort Service Udaipur" description="The blog post you are looking for could not be found." />
        <h1 className="text-3xl font-bold">Blog Post Not Found</h1>
        <p className="my-4">The escort or call girl related blog post you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog">
          <Button>Back to Escort Blog</Button>
        </Link>
      </div>
    );
  }

  const pageTitle = `${blogPost.title} | Escort Service Udaipur Blog`;
  const pageDescription = blogPost.excerpt;
  const keywords = `Udaipur escort, call girl, ${blogPost.category.replace('-', ' ')}, ${blogPost.tags.join(', ')}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${siteUrl}/blog` },
      { "@type": "ListItem", "position": 3, "name": blogPost.title, "item": pageUrl }
    ]
  };

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": pageUrl
    },
    "headline": blogPost.title,
    "description": blogPost.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": blogPost.image,
      "width": 1200,
      "height": 630
    },
    "author": {
      "@type": "Person",
      "name": blogPost.author,
      "url": siteUrl,
      "jobTitle": "Escort Service Expert"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Escort Service Udaipur",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.svg`
      }
    },
    "datePublished": blogPost.date,
    "dateModified": blogPost.date,
    "articleBody": blogPost.content.replace(/<[^>]*>?/gm, '')
  };

  const relatedPosts = blogPostsData.filter(post => post.id !== blogPost.id && post.category === blogPost.category).slice(0, 2);
  if (relatedPosts.length < 2) {
    relatedPosts.push(...blogPostsData.filter(post => post.id !== blogPost.id && post.category !== blogPost.category).slice(0, 2 - relatedPosts.length));
  }

  return (
    <div className="pt-16 lg:pt-20 bg-gray-50">
      <MetaUpdater 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        path={pageUrl}
        schema={[breadcrumbSchema, blogPostingSchema]}
        imageUrl={blogPost.image}
      />
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-6 bg-white border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/blog"
            className="inline-flex items-center text-pink-600 hover:text-pink-700 transition-colors duration-300 group text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            Back to Escort & Call Girl Blog
          </Link>
        </div>
      </motion.section>

      <BlogPostHeader 
        title={blogPost.title}
        category={blogPost.category}
        date={blogPost.date}
        readTime={blogPost.readTime}
        author={blogPost.author}
        image={blogPost.image}
      />

      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="lg:w-3/4 bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg">
              <BlogPostContent 
                content={blogPost.content}
                tags={blogPost.tags}
                author={blogPost.author}
              />
            </div>
            <div className="lg:w-1/4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && <RelatedPostsSection relatedPosts={relatedPosts} />}
    </div>
  );
};

export default BlogPostPage;