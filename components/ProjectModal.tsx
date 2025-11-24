
import React from 'react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Calendar, User, Tag } from 'lucide-react';
import { Project } from '../types';
import { Button } from './Button';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Stop propagation to prevent closing when clicking inside the modal
  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={handleModalClick}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white text-slate-800 transition-colors shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Area */}
        <div className="overflow-y-auto flex-1">
          {/* Hero Image */}
          <div className="relative h-64 md:h-96 w-full">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-8">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h2>
                <p className="text-lg text-slate-200 max-w-2xl">{project.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">About the Project</h3>
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {project.longDescription || project.description}
                </p>
              </div>

              {project.features && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Project Gallery</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((img, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-48">
                        <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-6">
                 {project.role && (
                   <div className="flex items-start gap-3">
                     <User className="w-5 h-5 text-primary mt-0.5" />
                     <div>
                       <h4 className="font-semibold text-slate-900 text-sm">Role</h4>
                       <p className="text-slate-600 text-sm">{project.role}</p>
                     </div>
                   </div>
                 )}
                 
                 {project.timeline && (
                   <div className="flex items-start gap-3">
                     <Calendar className="w-5 h-5 text-primary mt-0.5" />
                     <div>
                       <h4 className="font-semibold text-slate-900 text-sm">Timeline</h4>
                       <p className="text-slate-600 text-sm">{project.timeline}</p>
                     </div>
                   </div>
                 )}

                 {project.client && (
                   <div className="flex items-start gap-3">
                     <User className="w-5 h-5 text-primary mt-0.5" />
                     <div>
                       <h4 className="font-semibold text-slate-900 text-sm">Client</h4>
                       <p className="text-slate-600 text-sm">{project.client}</p>
                     </div>
                   </div>
                 )}

                 <div>
                   <div className="flex items-center gap-2 mb-3">
                     <Tag className="w-5 h-5 text-primary" />
                     <h4 className="font-semibold text-slate-900 text-sm">Technologies</h4>
                   </div>
                   <div className="flex flex-wrap gap-2">
                     {project.tags.map(tag => (
                       <span key={tag} className="px-2.5 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-medium rounded-full">
                         {tag}
                       </span>
                     ))}
                   </div>
                 </div>
              </div>

              <Button className="w-full" icon={<ExternalLink className="w-4 h-4"/>} onClick={() => window.open(project.link || '#', '_blank')}>
                Visit Live Site
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
