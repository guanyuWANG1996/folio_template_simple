import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Download } from 'lucide-react';
import { Profile } from '../types';

interface HeroProps {
  profile: Profile;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent hidden lg:block" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Text Content */}
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 bg-blue-100 text-primary rounded-full text-sm font-semibold mb-6">
              Available for Hire
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
              Hello, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                {profile.name}
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {profile.title}. {profile.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" icon={<ArrowRight className="w-5 h-5" />} onClick={() => document.getElementById('projects')?.scrollIntoView()}>
                View My Projects
              </Button>
              <Button variant="outline" size="lg" icon={<Download className="w-5 h-5" />}>
                Download CV
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-500">
               <div>
                 <span className="block text-3xl font-bold text-slate-900">{profile.stats.yearsExperience}+</span>
                 <span className="text-sm">Years Exp.</span>
               </div>
               <div className="w-px h-10 bg-slate-200"></div>
               <div>
                 <span className="block text-3xl font-bold text-slate-900">{profile.stats.projectsCompleted}+</span>
                 <span className="text-sm">Projects</span>
               </div>
               <div className="w-px h-10 bg-slate-200"></div>
               <div>
                 <span className="block text-3xl font-bold text-slate-900">{profile.stats.happyClients}+</span>
                 <span className="text-sm">Clients</span>
               </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <div className="relative w-80 h-80 md:w-[500px] md:h-[500px] mx-auto">
                <div className="absolute inset-4 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] rotate-3 opacity-20"></div>
                <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white">
                  <img 
                    src={profile.avatar} 
                    alt={profile.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Badge */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Status</p>
                    <p className="font-bold text-slate-900">Open to Work</p>
                  </div>
                </motion.div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};