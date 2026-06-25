import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Calendar, MessageSquare, Star, Eye } from 'lucide-react';

const AdminOverview = () => {
  const recentActivity = [
    { id: 1, type: 'booking', message: 'New booking request from Rajesh K.', time: '2 hours ago' },
    { id: 2, type: 'review', message: 'New 5-star review received', time: '4 hours ago' },
    { id: 3, type: 'message', message: 'Contact form submission from Amit S.', time: '6 hours ago' },
    { id: 4, type: 'blog', message: 'New blog post published', time: '1 day ago' },
    { id: 5, type: 'escort', message: 'Escort profile updated - Priya', time: '2 days ago' },
  ];

  const topEscorts = [
    { name: 'Priya', bookings: 15, rating: 4.9, revenue: '₹2,25,000' },
    { name: 'Ananya', bookings: 12, rating: 4.8, revenue: '₹1,80,000' },
    { name: 'Kavya', bookings: 10, rating: 4.9, revenue: '₹1,50,000' },
    { name: 'Riya', bookings: 8, rating: 4.7, revenue: '₹1,20,000' },
  ];

  const monthlyData = [
    { month: 'Jan', bookings: 45, revenue: 675000 },
    { month: 'Feb', bookings: 52, revenue: 780000 },
    { month: 'Mar', bookings: 48, revenue: 720000 },
    { month: 'Apr', bookings: 61, revenue: 915000 },
    { month: 'May', bookings: 55, revenue: 825000 },
    { month: 'Jun', bookings: 67, revenue: 1005000 },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-pink-500 to-red-500 rounded-xl p-8 text-white"
      >
        <h2 className="text-2xl font-bold mb-2">Welcome back, Admin!</h2>
        <p className="text-pink-100">Here's what's happening with your business today.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
            <MessageSquare className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'booking' ? 'bg-green-500' :
                  activity.type === 'review' ? 'bg-yellow-500' :
                  activity.type === 'message' ? 'bg-blue-500' :
                  activity.type === 'blog' ? 'bg-purple-500' :
                  'bg-pink-500'
                }`} />
                <div className="flex-1">
                  <p className="text-sm text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Performers */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Top Performers</h3>
            <Star className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {topEscorts.map((escort, index) => (
              <div key={escort.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{escort.name}</p>
                    <p className="text-xs text-gray-500">{escort.bookings} bookings</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{escort.revenue}</p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-current" />
                    <span className="text-xs text-gray-500">{escort.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Monthly Performance Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Monthly Performance</h3>
          <TrendingUp className="w-5 h-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-6 gap-4">
          {monthlyData.map((data, index) => (
            <div key={data.month} className="text-center">
              <div className="mb-2">
                <div 
                  className="w-full bg-gradient-to-t from-pink-500 to-red-500 rounded-t-lg mx-auto"
                  style={{ height: `${(data.bookings / 70) * 100}px` }}
                />
              </div>
              <p className="text-xs font-medium text-gray-900">{data.month}</p>
              <p className="text-xs text-gray-500">{data.bookings}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Total Bookings</p>
              <p className="text-2xl font-bold text-gray-900">328</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">₹49.2L</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">Add New Escort</h4>
              <p className="text-xs text-gray-500">Expand your team</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">View Bookings</h4>
              <p className="text-xs text-gray-500">Manage schedules</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300 cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-900">Analytics</h4>
              <p className="text-xs text-gray-500">View detailed reports</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminOverview;