import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { Profile } from '../types';

interface FooterProps {
    profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">{profile.name}</h3>
            <p className="text-slate-400">Building digital experiences that matter.</p>
          </div>
          
          <div className="flex gap-6">
            <a href={profile.socials.github} className="hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
            <a href={profile.socials.linkedin} className="hover:text-blue-400 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href={profile.socials.twitter} className="hover:text-blue-400 transition-colors"><Twitter className="w-6 h-6" /></a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            Designed with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};