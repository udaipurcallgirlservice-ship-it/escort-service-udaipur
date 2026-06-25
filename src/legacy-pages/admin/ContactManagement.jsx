import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Eye, Trash2, Calendar, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Load messages from localStorage
    const savedMessages = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    setMessages(savedMessages);
  }, []);

  const statusOptions = [
    { value: 'all', label: 'All Messages' },
    { value: 'new', label: 'New' },
    { value: 'read', label: 'Read' },
    { value: 'replied', label: 'Replied' }
  ];

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         message.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || (message.status || 'new') === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (messageId, newStatus) => {
    const updatedMessages = messages.map(msg => 
      msg.id === messageId ? { ...msg, status: newStatus } : msg
    );
    setMessages(updatedMessages);
    localStorage.setItem('contactSubmissions', JSON.stringify(updatedMessages));
  };

  const handleDelete = (messageId) => {
    const updatedMessages = messages.filter(msg => msg.id !== messageId);
    setMessages(updatedMessages);
    localStorage.setItem('contactSubmissions', JSON.stringify(updatedMessages));
  };

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
          <h2 className="text-2xl font-bold text-gray-900">Contact Messages</h2>
          <p className="text-gray-600">Manage customer inquiries and booking requests</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <MessageSquare className="w-4 h-4" />
          <span>{messages.length} total messages</span>
        </div>
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
              placeholder="Search messages..."
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

      {/* Messages List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        {filteredMessages.length > 0 ? (
          filteredMessages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {message.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{message.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        (message.status || 'new') === 'new' ? 'bg-blue-100 text-blue-800' :
                        (message.status || 'new') === 'read' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {(message.status || 'new').charAt(0).toUpperCase() + (message.status || 'new').slice(1)}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4" />
                        <span>{message.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4" />
                        <span>{message.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(message.submittedAt).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={message.status || 'new'}
                    onChange={(e) => handleStatusChange(message.id, e.target.value)}
                    className="px-3 py-1 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  >
                    <option value="new">New</option>
                    <option value="read">Read</option>
                    <option value="replied">Replied</option>
                  </select>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(message.id)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Service Requested</p>
                  <p className="text-sm text-gray-600">{message.service || 'Not specified'}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">Preferred Date & Time</p>
                  <p className="text-sm text-gray-600">
                    {message.date ? new Date(message.date).toLocaleDateString() : 'Not specified'}
                    {message.time && ` at ${message.time}`}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Message</p>
                <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg">
                  {message.message || 'No additional message provided.'}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <User className="w-4 h-4" />
                  <span>Submitted {new Date(message.submittedAt).toLocaleString()}</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-1" />
                    View Details
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600">
                    Reply
                  </Button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {messages.length === 0 ? 'No messages yet' : 'No messages found'}
            </h3>
            <p className="text-gray-600">
              {messages.length === 0 
                ? 'Customer inquiries will appear here when they contact you.'
                : 'Try adjusting your search or filter criteria.'
              }
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Pagination */}
      {filteredMessages.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button size="sm" className="bg-gradient-to-r from-pink-500 to-red-500">1</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactManagement;