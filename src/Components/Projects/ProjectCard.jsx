import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Eye, Github, ArrowUpRight } from 'lucide-react';

const ProjectCard = React.memo(({ item, index, onOpen }) => {
  /* Blur veil refs — state nahi, direct DOM update (smooth 60fps) */
  const blurRef = useRef(null);
  const edgeRef = useRef(null);

  /* Mouse X position → blur boundary update
     Mouse ke LEFT side blur, RIGHT side sharp.
     Left→right = blur badhta hai | Right→left = unblur */
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const soft = 14; // soft transition zone (%)

    if (blurRef.current) {
      const mask = `linear-gradient(90deg, black ${p - soft}%, transparent ${p}%)`;
      blurRef.current.style.webkitMaskImage = mask;
      blurRef.current.style.maskImage = mask;
    }
    if (edgeRef.current) edgeRef.current.style.left = `${p}%`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: -20 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: Math.min(index * 0.05, 0.35) }}
      className="h-full"
    >
      <article
        onClick={() => onOpen(item)}
        className="group relative h-full flex flex-col rounded-xl overflow-hidden bg-[#151111] border border-white/[0.06] hover:border-[#D62839]/60 cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(214,40,57,0.22)] transition-[border-color,transform,box-shadow] duration-500"
      >
        {/* Top accent line */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-2/3 bg-gradient-to-r from-transparent via-[#D62839] to-transparent rounded-full transition-all duration-500 z-30" />

        {/* Shine sweep */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-[-70%] h-full w-1/2 bg-gradient-to-r from-transparent via-[#FF6B7A]/10 to-transparent rotate-[25deg] group-hover:left-[140%] transition-all duration-[900ms] ease-out" />
        </div>

        {/* ===== Image + Default Blur Veil ===== */}
        <div
          className="relative h-36 sm:h-40 overflow-hidden [transform:translateZ(0)] [backface-visibility:hidden]"
          onMouseMove={handleMove}
        >
          <img
            className="h-full w-full object-cover [backface-visibility:hidden] will-change-transform group-hover:scale-110 transition-transform duration-700"
            src={item.image}
            alt={item.name || 'Project'}
            loading="lazy"
            draggable="false"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151111] via-transparent to-transparent" />

          {/* --- Blur Veil: BY DEFAULT visible — aadhi image blurred rehti hai --- */}
          <div
            ref={blurRef}
            aria-hidden="true"
            className="absolute inset-0 z-[5] pointer-events-none"
            style={{
              backdropFilter: 'blur(7px)',
              WebkitBackdropFilter: 'blur(7px)',
              backgroundColor: 'rgba(13, 11, 11, 0.18)',
              /* Default: image ka LEFT half blur (50% boundary) */
              maskImage: 'linear-gradient(90deg, black 36%, transparent 50%)',
              WebkitMaskImage: 'linear-gradient(90deg, black 36%, transparent 50%)',
            }}
          />

          {/* --- Glowing edge line — blur boundary pe (by default center) --- */}
          <div
            ref={edgeRef}
            aria-hidden="true"
            className="absolute top-0 z-[6] h-full w-[2px] -translate-x-1/2 pointer-events-none"
            style={{
              left: '50%',
              background:
                'linear-gradient(180deg, transparent, #FF6B7A 30%, #D62839 70%, transparent)',
              boxShadow: '0 0 14px rgba(214,40,57,0.9)',
            }}
          />

          {/* Status badge */}
          {item.state && (
            <span className="absolute top-2.5 left-2.5 z-10 px-2.5 py-0.5 text-[9px] font-bold rounded-full bg-[#0D0B0B]/80 text-[#FF6B7A] border border-[#D62839]/60 backdrop-blur-md flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B7A] animate-pulse" />
              {item.state}
            </span>
          )}

          {/* Index number */}
          <span className="absolute top-2.5 right-3 z-10 font-display text-[10px] font-bold text-[#F5F3EF]/25 group-hover:text-[#FF6B7A]/70 transition-colors duration-500">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* ===== Content ===== */}
        <div className="relative flex flex-col flex-1 p-4">
          {/* Type + arrow row */}
          <div className="flex items-center justify-between gap-2">
            <span className="text-[8px] sm:text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full bg-[#D62839]/10 border border-[#D62839]/30 text-[#FF6B7A]/80">
              {item.type || 'Project'}
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#F5F3EF]/25 group-hover:text-[#FF6B7A] group-hover:rotate-45 transition-all duration-400 shrink-0" />
          </div>

          <h3 className="mt-2.5 font-display text-base font-bold text-[#F5F3EF] group-hover:text-[#FF6B7A] transition-colors duration-300 leading-snug">
            {item.name}
          </h3>

          <p className="mt-1.5 text-[11px] leading-[1.7] text-[#F5F3EF]/50 line-clamp-2">
            {item.details}
          </p>

          {/* Tech chips */}
          {item.technology && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {item.technology.split(',').slice(0, 2).map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 text-[9px] font-semibold rounded-full bg-white/[0.04] text-[#F5F3EF]/55 border border-white/[0.07]"
                >
                  {tech.trim()}
                </span>
              ))}
              {item.technology.split(',').length > 2 && (
                <span className="px-2 py-0.5 text-[9px] font-semibold rounded-full bg-[#D62839]/10 text-[#FF6B7A] border border-[#D62839]/30">
                  +{item.technology.split(',').length - 2}
                </span>
              )}
            </div>
          )}

          {/* ===== Footer — actions neeche show hote hain ===== */}
          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between gap-2">
            {/* Left — View Details */}
            <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#FF6B7A]">
              View Details
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>

            {/* Right — Live / Code (hover pe slide-up + stagger) */}
            <div className="flex gap-2">
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="View live"
                  className="w-8 h-8 rounded-full bg-[#D62839]/15 border border-[#D62839]/40 flex items-center justify-center text-[#FF6B7A] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:!bg-[#D62839] hover:!text-[#F5F3EF] hover:shadow-[0_0_18px_rgba(214,40,57,0.6)] transition-all duration-400"
                  style={{ transitionDelay: '80ms' }}
                >
                  <Eye className="w-3.5 h-3.5" />
                </a>
              )}
              {item.gitlink && (
                <a
                  href={item.gitlink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  aria-label="View code"
                  className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#F5F3EF]/70 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 hover:!border-[#D62839] hover:!text-[#FF6B7A] transition-all duration-400"
                  style={{ transitionDelay: '160ms' }}
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </motion.div>
  );
});

export default ProjectCard;