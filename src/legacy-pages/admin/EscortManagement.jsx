import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Filter, Edit, Trash2, Star, Eye, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EscortManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const escorts = [
    {
      id: 1,
      name: 'Priya Sharma',
      age: 24,
      location: 'Udaipur',
      category: 'Premium',
      status: 'active',
      rating: 4.9,
      bookings: 15,
      revenue: '₹2,25,000',
      image: 'Professional headshot of elegant Indian woman',
      joinDate: '2023-06-15'
    },
    {
      id: 2,
      name: 'Ananya Patel',
      age: 26,
      location: 'Udaipur',
      category: 'VIP',
      status: 'active',
      rating: 4.8,
      bookings: 12,
      revenue: '₹1,80,000',
      image: 'Professional headshot of sophisticated Indian woman',
      joinDate: '2023-05-20'
    },
    {
      id: 3,
      name: 'Kavya Singh',
      age: 23,
      location: 'Udaipur',
      category: 'Elite',
      status: 'active',
      rating: 4.9,
      bookings: 10,
      revenue: '₹1,50,000',
      image: 'Professional headshot of beautiful Indian woman',
      joinDate: '2023-07-10'
    },
    {
      id: 4,
      name: 'Riya Gupta',
      age: 25,
      location: 'Udaipur',
      category: 'Premium',
      status: 'inactive',
      rating: 4.7,
      bookings: 8,
      revenue: '₹1,20,000',
      image: 'Professional headshot of charming Indian woman',
      joinDate: '2023-04-05'
    }
  ];

  const statusOptions = [
    { value: 'all', label: 'All Status' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' }
  ];

  const filteredEscorts = escorts.filter(escort => {
    const matchesSearch = escort.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || escort.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Escort Management</h2>
          <p className="text-gray-600">Manage your escort profiles and performance</p>
        </div>
        <Button className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600">
          <Plus className="w-4 h-4 mr-2" />
          Add New Escort
        </Button>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search escorts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            >
              {statusOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>

      {/* Escorts Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredEscorts.map((escort, index) => (
          <motion.div
            key={escort.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            <div className="relative">
              <img  
                className="w-full h-48 object-cover" 
                alt={`${escort.name} - Professional escort profile`}
               src="https://images.unsplash.com/photo-1635591779144-33a8f43bf82f" />
              <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                escort.status === 'active' ? 'bg-green-100 text-green-800' :
                escort.status === 'inactive' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {escort.status.charAt(0).toUpperCase() + escort.status.slice(1)}
              </div>
              <div className="absolute top-3 right-3">
                <button className="p-1 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                  <MoreVertical className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{escort.name}</h3>
                  <p className="text-sm text-gray-500">{escort.age} years • {escort.location}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  escort.category === 'Elite' ? 'bg-purple-100 text-purple-800' :
                  escort.category === 'VIP' ? 'bg-blue-100 text-blue-800' :
                  'bg-pink-100 text-pink-800'
                }`}>
                  {escort.category}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500">Rating</p>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{escort.rating}</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Bookings</p>
                  <p className="text-sm font-medium">{escort.bookings}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500">Revenue (This Month)</p>
                <p className="text-lg font-bold text-gray-900">{escort.revenue}</p>
              </div>

              <div className="flex space-x-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <Eye className="w-4 h-4 mr-1" />
                  View
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Empty State */}
      {filteredEscorts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No escorts found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </motion.div>
      )}

      {/* Pagination */}
      {filteredEscorts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button size="sm" className="bg-gradient-to-r from-pink-500 to-red-500">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EscortManagement;