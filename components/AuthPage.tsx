import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { Mail, Lock, User, ArrowRight, CheckCircle } from 'lucide-react';

interface AuthPageProps {
  onLogin: () => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  const inputClasses = "w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-slate-800 placeholder-slate-400";

  return (
    <div className="min-h-screen w-full flex bg-white overflow-hidden">
      {/* Left Panel - Brand/Art */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center p-12">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-900 to-slate-900 opacity-90 z-10" />
        <img 
          src="https://picsum.photos/1000/1000?grayscale" 
          alt="Abstract Art" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        
        <div className="relative z-20 text-white max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-6">Create Your Future.</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Join thousands of creatives building their professional presence with FolioPro. Showcase your work with style and precision.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center lg:text-left">
             <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg"></div>
                <span className="text-2xl font-bold tracking-tight text-slate-900">FolioPro</span>
             </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'register'}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {isLogin ? 'Welcome back' : 'Create an account'}
              </h2>
              <p className="text-slate-500 mb-8">
                {isLogin ? 'Please enter your details to sign in.' : 'Enter your details to create your portfolio.'}
              </p>

              <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
                {!isLogin && (
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input type="text" placeholder="Full Name" className={inputClasses} />
                  </div>
                )}
                
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input type="email" placeholder="Email Address" className={inputClasses} />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input type="password" placeholder="Password" className={inputClasses} />
                </div>

                {!isLogin && (
                   <div className="relative">
                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                   <input type="password" placeholder="Confirm Password" className={inputClasses} />
                 </div>
                )}

                {isLogin ? (
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                      <span className="text-slate-600">Remember me</span>
                    </label>
                    <a href="#" className="text-primary hover:text-blue-700 font-medium">Forgot password?</a>
                  </div>
                ) : (
                  <div className="flex items-start gap-2 text-sm">
                    <input type="checkbox" className="mt-1 rounded border-gray-300 text-primary focus:ring-primary" />
                    <span className="text-slate-600">I agree to the <a href="#" className="text-primary font-medium">Terms of Service</a> and <a href="#" className="text-primary font-medium">Privacy Policy</a></span>
                  </div>
                )}

                <Button className="w-full" size="lg" icon={<ArrowRight className="w-4 h-4"/>}>
                  {isLogin ? 'Sign In' : 'Create Account'}
                </Button>
              </form>

              <div className="mt-8 text-center text-sm text-slate-600">
                {isLogin ? "Don't have an account? " : "Already have an account? "}
                <button 
                  onClick={toggleMode} 
                  className="text-primary font-semibold hover:underline"
                >
                  {isLogin ? 'Sign up for free' : 'Log in'}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};