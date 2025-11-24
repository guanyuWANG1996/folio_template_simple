import React from 'react';
import { Section } from './Section';
import { Profile } from '../types';
import { Button } from './Button';

interface AboutProps {
    profile: Profile;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <Section id="about" title="About Me" className="bg-white">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
         <div className="w-full md:w-1/3">
             <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                 <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
             </div>
         </div>
         <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Passionate about creating intuitive digital experiences.</h3>
            <p className="text-slate-600 mb-6 leading-7">
                I am a {profile.title} based in San Francisco. With a background in both design and engineering, I specialize in building high-quality web applications that look great and work perfectly.
            </p>
            <p className="text-slate-600 mb-8 leading-7">
                My journey started when I customized my first MySpace profile (classic story, right?). Since then, I've worked with startups, agencies, and large corporations to help them achieve their digital goals. I believe in clean code, accessibility, and user-centric design.
            </p>
            <div className="flex gap-4">
                <Button variant="outline">Learn More</Button>
            </div>
         </div>
      </div>
    </Section>
  );
};