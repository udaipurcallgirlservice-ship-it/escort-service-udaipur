import React, { useState } from 'react';
    import { Link, useNavigate, useLocation } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';
    import { Mail, Lock, LogIn } from 'lucide-react';
    import OptimizedImage from '@/components/ui/OptimizedImage';
    import MetaUpdater from '@/components/seo/MetaUpdater';

    const LoginPage = ({ siteUrl }) => {
      const location = useLocation();
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const { toast } = useToast();
      const navigate = useNavigate();

      const pageUrl = `${siteUrl}${location.pathname}`;
      const pageTitle = "Admin Login - Escort Service Udaipur";
      const pageDescription = "Securely log in to the admin dashboard for Escort Service Udaipur to manage content, bookings, and site settings for our call girls and escort services.";
      const keywords = "admin login, escort service admin, udaipur escorts dashboard, manage escorts, call girl management";

      const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        toast({
          title: 'Login Attempt',
          description: 'Login functionality requires backend integration. Please complete Supabase setup.',
        });
        
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
      };

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-red-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
          <MetaUpdater
            title={pageTitle}
            description={pageDescription}
            keywords={keywords}
            path={pageUrl}
            noIndex={true}
          />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-md w-full space-y-8 p-10 bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl"
          >
            <div>
              <OptimizedImage
                className="mx-auto h-16 w-auto"
                src="/logo.svg"
                alt="Site Logo"
              />
              <h1 className="mt-6 text-center text-3xl font-extrabold font-display text-gray-900">
                Sign in to your <span className="gradient-text">Admin Account</span>
              </h1>
              <p className="mt-2 text-center text-sm text-gray-600">
                Or{' '}
                <Link to="/signup" className="font-medium text-pink-600 hover:text-pink-500">
                  create a new account
                </Link>
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">Email address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none rounded-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none rounded-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-pink-600 hover:text-pink-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-pink-600 to-red-500 hover:from-pink-700 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LogIn className="h-5 w-5 text-pink-500 group-hover:text-pink-400" />
                  </span>
                  {isLoading ? 'Signing in...' : 'Sign in'}
                </Button>
              </div>
            </form>
             <p className="mt-4 text-center text-sm text-gray-600">
              Not an admin?{' '}
              <Link to="/" className="font-medium text-pink-600 hover:text-pink-500">
                Go back to homepage
              </Link>
            </p>
          </motion.div>
        </div>
      );
    };

    export default LoginPage;