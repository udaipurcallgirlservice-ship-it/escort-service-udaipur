import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  MessageSquare, 
  Settings, 
  LogOut,
  Menu,
  X,
  Shield,
  BarChart3,
  Calendar,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import AdminOverview from '@/legacy-pages/admin/AdminOverview';
import EscortManagement from '@/legacy-pages/admin/EscortManagement';
import BlogManagement from '@/legacy-pages/admin/BlogManagement';
import ContactManagement from '@/legacy-pages/admin/ContactManagement';
import AdminSettings from '@/legacy-pages/admin/AdminSettings';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Overview', href: '/admin', icon: LayoutDashboard, current: location.pathname === '/admin' },
    { name: 'Escorts', href: '/admin/escorts', icon: Users, current: location.pathname === '/admin/escorts' },
    { name: 'Blog Posts', href: '/admin/blog', icon: FileText, current: location.pathname === '/admin/blog' },
    { name: 'Messages', href: '/admin/messages', icon: MessageSquare, current: location.pathname === '/admin/messages' },
    { name: 'Settings', href: '/admin/settings', icon: Settings, current: location.pathname === '/admin/settings' },
  ];

  const stats = [
    { name: 'Total Escorts', value: '24', icon: Users, change: '+2', changeType: 'increase' },
    { name: 'Active Bookings', value: '12', icon: Calendar, change: '+3', changeType: 'increase' },
    { name: 'Blog Posts', value: '18', icon: FileText, change: '+1', changeType: 'increase' },
    { name: 'Avg Rating', value: '4.9', icon: Star, change: '+0.1', changeType: 'increase' },
  ];

  return (
    <div className="pt-16 lg:pt-20 min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        </div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 lg:h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/bc9934476a091e4e30b0a0219690642a.png" 
              alt="Admin Logo" 
              className="h-8 w-8 rounded-full"
            />
            <span className="text-lg font-semibold text-gray-900">Admin Panel</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    item.current
                      ? 'bg-gradient-to-r from-pink-500 to-red-500 text-white'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5 flex-shrink-0" />
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <button className="group flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200">
              <LogOut className="mr-3 h-5 w-5 flex-shrink-0" />
              Sign Out
            </button>
          </div>
        </nav>

        {/* Admin Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Admin User</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="ml-2 lg:ml-0 text-xl font-semibold text-gray-900">
                {navigation.find(item => item.current)?.name || 'Dashboard'}
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                size="sm"
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Stats Overview - Show on all pages */}
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                        <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="mt-4 flex items-center">
                      <span className={`text-sm font-medium ${
                        stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </span>
                      <span className="text-sm text-gray-500 ml-2">from last month</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Route Content */}
          <Routes>
            <Route path="/" element={<AdminOverview />} />
            <Route path="/escorts" element={<EscortManagement />} />
            <Route path="/blog" element={<BlogManagement />} />
            <Route path="/messages" element={<ContactManagement />} />
            <Route path="/settings" element={<AdminSettings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
