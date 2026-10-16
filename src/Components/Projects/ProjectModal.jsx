import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Eye, Github, X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  /* Escape key se band + body scroll lock */
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 40, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#151111] rounded-3xl border border-[#D62839]/50 shadow-[0_0_60px_rgba(214,40,57,0.3)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-[#D62839] text-white hover:text-[#F5F3EF] transition-all duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 md:p-8 font-body">
          {/* Image */}
          <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-6">
            <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#151111] to-transparent" />
          </div>

          {/* Title */}
          <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F5F3EF]">
            {project.name}
          </h3>

          {/* State */}
          {project.state && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 mt-3 text-xs font-bold rounded-full bg-[#D62839]/15 text-[#FF6B7A] border border-[#D62839]/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B7A] animate-pulse" />
              {project.state}
            </span>
          )}

          {/* Description */}
          <div className="mt-6">
            <h4 className="text-xs font-bold text-[#FF6B7A] mb-2 uppercase tracking-[0.3em]">
              Description
            </h4>
            <p className="text-[#F5F3EF]/70 leading-[1.9] text-sm md:text-base">
              {project.details}
            </p>
          </div>

          {/* Tech Stack */}
          {project.technology && (
            <div className="mt-6">
              <h4 className="text-xs font-bold text-[#FF6B7A] mb-3 uppercase tracking-[0.3em]">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technology.split(',').map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs md:text-sm font-semibold rounded-full bg-[#D62839]/10 text-[#FF6B7A] border border-[#D62839]/30"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#D62839] text-[#F5F3EF] font-semibold rounded-full hover:bg-[#FF6B7A] hover:text-[#0D0B0B] hover:scale-105 transition-all duration-300"
              >
                <Eye className="w-5 h-5" /> View Live
              </a>
            )}
            {project.gitlink && (
              <a
                href={project.gitlink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-white/15 text-[#F5F3EF] font-semibold rounded-full hover:border-[#D62839]/60 hover:bg-[#D62839]/10 hover:scale-105 transition-all duration-300"
              >
                <Github className="w-5 h-5" /> View Code
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;