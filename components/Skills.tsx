import React from 'react';
import { motion } from 'framer-motion';
import { Section } from './Section';
import { Skill } from '../types';
import { Code, Palette, Server, Cloud, Figma, Database } from 'lucide-react';

interface SkillsProps {
  skills: Skill[];
}

const getIcon = (name: string) => {
    // Simple mapper for demo purposes
    if (name.includes('React') || name.includes('Code')) return <Code className="w-6 h-6" />;
    if (name.includes('Design') || name.includes('CSS') || name.includes('Figma')) return <Palette className="w-6 h-6" />;
    if (name.includes('Node') || name.includes('Server')) return <Server className="w-6 h-6" />;
    if (name.includes('Cloud')) return <Cloud className="w-6 h-6" />;
    return <Database className="w-6 h-6" />;
};

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <Section id="skills" title="My Expertise" subtitle="A breakdown of my technical skills and proficiency levels.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                {getIcon(skill.name)}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">{skill.name}</h3>
                <span className="text-sm text-slate-500">Advanced Proficiency</span>
              </div>
            </div>

            <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
              <motion.div 
                className="bg-primary h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
            <div className="mt-2 text-right text-sm font-medium text-slate-600">
                {skill.level}%
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};