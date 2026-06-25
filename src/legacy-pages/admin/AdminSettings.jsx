import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, Upload, Globe, Shield, Key, Palette, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const AdminSettings = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    id: 1,
    site_name: 'Escort Service Udaipur',
    logo_url: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/bc9934476a091e4e30b0a0219690642a.png',
    favicon_url: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/7523fedc-18a7-4fbc-8997-24999273a431/bc9934476a091e4e30b0a0219690642a.png',
    default_seo_title: 'Top Escort Services in Udaipur – VIP Call Girls Available 24/7',
    default_seo_description: 'Experience unmatched escort services in Udaipur with our elite VIP call girls. Available 24/7 for your pleasure. Privacy guaranteed.',
    default_seo_keywords: 'Udaipur escorts, call girls Udaipur, VIP escorts, escort service Udaipur',
    contact_email: 'escortserviceudaipur141@gmail.com',
    contact_phone: '+919549032117',
    address: 'City Palace Road, Udaipur, Rajasthan 313001',
    social_facebook_url: '',
    social_instagram_url: '',
    maintenance_mode: false,
  });
  const [isLoading, setIsLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast({
      title: "Feature In Development",
      description: "Saving settings is currently under development. Please complete Supabase integration for full functionality.",
      variant: "default",
    });
    setTimeout(() => setIsLoading(false), 1000);
  };
  
  const settingSections = [
    {
      title: 'General Site Information',
      icon: Globe,
      fields: [
        { name: 'site_name', label: 'Site Name', type: 'text' },
        { name: 'contact_email', label: 'Contact Email', type: 'email' },
        { name: 'contact_phone', label: 'Contact Phone', type: 'tel' },
        { name: 'address', label: 'Business Address', type: 'textarea' }
      ]
    },
    {
      title: 'Branding',
      icon: Palette,
      fields: [
        { name: 'logo_url', label: 'Logo URL', type: 'url' },
        { name: 'favicon_url', label: 'Favicon URL', type: 'url' },
      ]
    },
    {
      title: 'Default SEO',
      icon: Globe,
      fields: [
        { name: 'default_seo_title', label: 'Default SEO Title', type: 'text' },
        { name: 'default_seo_description', label: 'Default SEO Description', type: 'textarea' },
        { name: 'default_seo_keywords', label: 'Default SEO Keywords (comma-separated)', type: 'text' }
      ]
    },
    {
      title: 'Social Media Links',
      icon: Globe,
      fields: [
        { name: 'social_facebook_url', label: 'Facebook URL', type: 'url' },
        { name: 'social_instagram_url', label: 'Instagram URL', type: 'url' },
      ]
    },
    {
      title: 'Site Status',
      icon: Shield,
      fields: [
        { name: 'maintenance_mode', label: 'Enable Maintenance Mode', type: 'checkbox' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
      >
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Site Settings</h2>
          <p className="text-gray-600">Manage global configurations for your escort service website.</p>
        </div>
        <Button 
          onClick={handleSave}
          disabled={isLoading}
          className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600"
        >
          <Save className="w-4 h-4 mr-2" />
          {isLoading ? 'Saving...' : 'Save Changes'}
        </Button>
      </motion.div>

      <form onSubmit={handleSave} className="space-y-8">
        {settingSections.map((section, sectionIndex) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.fields.map((field) => (
                  <div key={field.name} className={field.type === 'textarea' || field.type === 'checkbox' ? 'md:col-span-2' : ''}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                      {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        value={settings[field.name] || ''}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    ) : field.type === 'checkbox' ? (
                      <div className="flex items-center">
                        <input
                          id={field.name}
                          type="checkbox"
                          name={field.name}
                          checked={settings[field.name] || false}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500"
                        />
                         {field.name === 'maintenance_mode' && <span className="ml-2 text-sm text-gray-600">Enable Maintenance Mode</span>}
                      </div>
                    ) : (
                      <input
                        id={field.name}
                        type={field.type}
                        name={field.name}
                        value={settings[field.name] || ''}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </form>
    </div>
  );
};

export default AdminSettings;