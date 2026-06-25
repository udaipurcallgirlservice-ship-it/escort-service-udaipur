import React, { useState } from 'react';
    import { Link, useNavigate, useLocation } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { useToast } from '@/components/ui/use-toast';
    import { User, Mail, Lock, UserPlus } from 'lucide-react';
    import OptimizedImage from '@/components/ui/OptimizedImage';
    import MetaUpdater from '@/components/seo/MetaUpdater';

    const SignupPage = ({ siteUrl }) => {
      const location = useLocation();
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const [isLoading, setIsLoading] = useState(false);
      const { toast } = useToast();
      const navigate = useNavigate();

      const pageUrl = `${siteUrl}${location.pathname}`;
      const pageTitle = "Admin Signup - Escort Service Udaipur";
      const pageDescription = "Create a new admin account for Escort Service Udaipur to manage website content, call girls, and escort services.";
      const keywords = "admin signup, new admin account, escort service registration, call girl signup";

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
          toast({
            title: 'Password Mismatch',
            description: 'Passwords do not match.',
            variant: 'destructive',
          });
          return;
        }
        setIsLoading(true);
        
        toast({
          title: 'Signup Attempt',
          description: 'Signup functionality requires backend integration. Please complete Supabase setup.',
        });

        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      };

      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-50 to-red-100 py-12 px-4 sm:px-6 lg:px-8 pt-24 lg:pt-32">
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
                src="/assets/df35c36717dc1b1000ac06911bfe1a65.webp"
                alt="Site Logo"
              />
              <h1 className="mt-6 text-center text-3xl font-extrabold font-display text-gray-900">
                Create your <span className="gradient-text">Admin Account</span>
              </h1>
              <p className="mt-2 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-pink-600 hover:text-pink-500">
                  Sign in
                </Link>
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">Username</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="username"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="appearance-none rounded-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                      placeholder="Username"
                    />
                  </div>
                </div>
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
                      className="appearance-none rounded-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
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
                      autoComplete="new-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none rounded-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>
                 <div>
                  <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="confirm-password"
                      name="confirm-password"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="appearance-none rounded-none relative block w-full pl-10 pr-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                      placeholder="Confirm Password"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 hover:from-purple-700 hover:via-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <UserPlus className="h-5 w-5 text-pink-300 group-hover:text-pink-200" />
                  </span>
                  {isLoading ? 'Creating account...' : 'Create Account'}
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

    export default SignupPage;