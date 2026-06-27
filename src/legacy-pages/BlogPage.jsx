import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import OptimizedImage from '@/components/ui/OptimizedImage.jsx';
import PageHero from '@/components/layout/PageHero';
import MetaUpdater from '@/components/seo/MetaUpdater';
import { createBreadcrumbSchema } from '@/lib/schemas';
import { blogPosts } from '../data/blogPosts';

const BlogPage = ({ siteUrl }) => {
  const location = useLocation();
  const pageUrl = `${siteUrl}${location.pathname}`;
  const pageTitle = "Udaipur Escort & Call Girl Blog | Service Tips & News";
  const pageDescription = "Our Udaipur escort blog offers expert advice, news, and tips. Elevate your adult entertainment experience with insights on our premium call girl services.";
  const keywords = "escort service blog, Udaipur escorts tips, call girl news, adult entertainment news, escort insights, premium escort advice, Escort Service Udaipur, call girl, escort";
  const heroImage = "/assets/russian-escort-in-udaipur.jpg";

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const todayStr = new Date().toISOString().split('T')[0];
  const legacyBlogPosts = blogPosts.map((post, idx) => ({
    ...post,
    id: idx + 1,
    date: post.datePublished,
    readTime: `${post.readingTime} min read`,
    author: typeof post.author === 'object' && post.author ? post.author.name : post.author,
    featured: post.slug === 'choosing-ideal-call-girl-udaipur-guide',
  }));

  const initialBlogPosts = legacyBlogPosts.filter(post => post.datePublished <= todayStr);


  const categories = [
    { id: 'all', name: 'All Escort Posts', count: initialBlogPosts.length },
    { id: 'companionship-tips', name: 'Companionship Tips', count: initialBlogPosts.filter(p=>p.category === 'companionship-tips').length },
    { id: 'service-explained', name: 'Service Explained', count: initialBlogPosts.filter(p=>p.category === 'service-explained').length },
    { id: 'luxury-lifestyle', name: 'Luxury Lifestyle', count: initialBlogPosts.filter(p=>p.category === 'luxury-lifestyle').length }
  ];

  const filteredPosts = initialBlogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) || post.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== 'all' || searchTerm);

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: "Home", item: siteUrl },
    { name: "Blog", item: pageUrl }
  ]);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "url": pageUrl,
    "name": pageTitle,
    "description": pageDescription,
    "publisher": {
      "@type": "Organization",
      "name": "Escort Service Udaipur",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.svg`
      }
    },
    "blogPost": initialBlogPosts.map(post => ({
      "@type": "BlogPosting",
      "mainEntityOfPage": `${siteUrl}/blog/${post.slug}`,
      "headline": post.title,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "image": post.image,
      "publisher": {
         "@type": "Organization",
         "name": "Escort Service Udaipur",
         "logo": {
           "@type": "ImageObject",
           "url": `${siteUrl}/logo.svg`
         }
      }
    }))
  };

  return (
    <div className="pt-16 lg:pt-20">
      <MetaUpdater 
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        path={pageUrl}
        schema={[breadcrumbSchema, blogSchema]}
        imageUrl={heroImage}
      />
      <PageHero 
        title={<>Escort & Call Girl <span className="gradient-text">Service Udaipur Blog</span></>}
        subtitle="Insights, tips, and stories about luxury escort services, elite call girls, companionship, and the finest experiences Udaipur has to offer."
        imageSrc={heroImage}
      />

      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search escort & call girl articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="flex items-center space-x-2 w-full lg:w-auto">
              <Tag className="w-5 h-5 text-gray-500 hidden sm:block" />
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2 lg:pb-0">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {featuredPost && selectedCategory === 'all' && !searchTerm && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6 text-center">
                Featured <span className="gradient-text">Escort & Call Girl Article</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 card-hover"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-80 lg:h-auto">
                   <OptimizedImage  
                    className="w-full h-full object-cover" 
                    alt={featuredPost.title + " - Udaipur Escort Service"} src={featuredPost.image} />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full capitalize">
                      {categories.find(c => c.id === featuredPost.category)?.name.replace(' Posts','').replace(' Escort','')}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-display font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{featuredPost.author}</span>
                    </div>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white group">
                        Read Escort Article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover group"
                >
                  <div className="relative overflow-hidden h-48">
                     <OptimizedImage  
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      alt={post.title + " - Udaipur Call Girl Service"} src={post.image} />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium capitalize">
                      {categories.find(c => c.id === post.category)?.name.replace(' Posts','').replace(' Escort','')}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600">{post.author}</span>
                      </div>
                      <Link to={`/blog/${post.slug}`}>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 group text-sm"
                        >
                          Read Article
                          <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No escort or call girl articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria for our Udaipur escort services.</p>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Subscribe for Exclusive <span className="gradient-text">Escort & Call Girl Insights</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Subscribe to our newsletter for the latest escort tips, call girl news, and exclusive content on Udaipur companionship.
            </p>
            <form onSubmit={(e) => {e.preventDefault(); console.log('subscribed');}} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter email for escort news"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              />
              <Button 
                type="submit"
                size="lg" 
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;