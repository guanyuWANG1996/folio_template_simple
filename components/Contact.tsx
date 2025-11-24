import React from 'react';
import { Section } from './Section';
import { Button } from './Button';
import { Profile } from '../types';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

interface ContactProps {
    profile: Profile;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Let's discuss your next project." dark>
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* Contact Info */}
        <div className="flex-1">
            <h3 className="text-2xl font-bold text-white mb-6">Let's build something amazing together.</h3>
            <p className="text-slate-400 mb-10 leading-relaxed">
                I'm currently available for freelance work and full-time positions. 
                If you have a project that needs some creative touch, feel free to contact me.
            </p>

            <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-primary shrink-0">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-1">Email</h4>
                        <p className="text-slate-400">{profile.socials.email}</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-primary shrink-0">
                        <Phone className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-1">Phone</h4>
                        <p className="text-slate-400">+1 (555) 000-0000</p>
                    </div>
                </div>

                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center text-primary shrink-0">
                        <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-1">Location</h4>
                        <p className="text-slate-400">San Francisco, CA</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1 bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                        <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                        <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Project Inquiry" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Tell me about your project..."></textarea>
                </div>
                <Button variant="secondary" className="w-full" size="lg" icon={<Send className="w-4 h-4"/>}>
                    Send Message
                </Button>
            </form>
        </div>
      </div>
    </Section>
  );
};