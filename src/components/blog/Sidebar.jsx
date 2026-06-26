import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Sidebar = () => {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="lg:col-span-1 space-y-8"
    >
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 rounded-2xl sticky top-24">
        <h3 className="text-lg font-semibold mb-4">Escort & Call Girl Service News</h3>
        <p className="text-gray-300 text-sm mb-4">
          Get the latest escort articles and insights for Udaipur.
        </p>
        <form onSubmit={(e) => {e.preventDefault(); console.log('subscribed');}} className="space-y-3">
          <input
            type="email"
            placeholder="Your email for escort updates"
            className="w-full px-4 py-2 rounded-lg text-gray-900 text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
            required
          />
          <Button type="submit" size="sm" className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600">
            Subscribe
          </Button>
        </form>
      </div>
    </motion.aside>
  );
};

export default Sidebar;