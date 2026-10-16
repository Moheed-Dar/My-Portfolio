import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';

const ProjectsFilter = ({ categories, counts, active, onChange, total }) => (
  <aside className="lg:sticky lg:top-28 h-max w-full lg:w-64 shrink-0">
    <div className="rounded-2xl border border-[#D62839]/25 bg-[#151111]/80 backdrop-blur-sm p-4 sm:p-5">
      {/* Sidebar header */}
      <div className="flex items-center gap-2.5 mb-4 pb-4 border-b border-[#D62839]/15">
        <div className="w-9 h-9 rounded-lg bg-[#D62839]/15 border border-[#D62839]/30 flex items-center justify-center shrink-0">
          <FolderOpen className="w-4 h-4 text-[#FF6B7A]" />
        </div>
        <div>
          <h3 className="font-display text-sm font-bold text-[#F5F3EF]">Categories</h3>
          <p className="text-[10px] text-[#F5F3EF]/40 uppercase tracking-wider">
            Filter by type
          </p>
        </div>
      </div>

      {/* Category rows — desktop vertical table, mobile horizontal scroll */}
      <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 -mx-1 px-1">
        {categories.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              onClick={() => onChange(cat)}
              className={`relative shrink-0 lg:shrink flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-left transition-colors duration-300 border ${
                isActive
                  ? 'border-transparent text-[#F5F3EF]'
                  : 'border-transparent text-[#F5F3EF]/55 hover:text-[#F5F3EF] hover:bg-white/5'
              }`}
            >
              {/* Sliding active background */}
              {isActive && (
                <motion.span
                  layoutId="filter-active-bg"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  className="absolute inset-0 rounded-xl bg-[#D62839]/15 border border-[#D62839]/50"
                />
              )}

              {/* Left accent bar */}
              <span
                className={`absolute left-0 top-1/2 -translate-y-1/2 w-[3px] rounded-full bg-[#D62839] shadow-[0_0_10px_rgba(214,40,57,0.9)] transition-all duration-300 ${
                  isActive ? 'h-2/3' : 'h-0'
                }`}
              />

              {/* Name */}
              <span
                className={`relative z-10 text-xs sm:text-sm font-semibold whitespace-nowrap flex-1 transition-colors duration-300 ${
                  isActive ? 'text-[#FF6B7A]' : ''
                }`}
              >
                {cat}
              </span>

              {/* Count badge */}
              <span
                className={`relative z-10 text-[10px] font-bold px-2 py-0.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-[#D62839] text-[#F5F3EF] shadow-[0_0_12px_rgba(214,40,57,0.6)]'
                    : 'bg-white/5 text-[#F5F3EF]/40'
                }`}
              >
                {counts[cat] || 0}
              </span>
            </button>
          );
        })}
      </div>

      {/* Footer total */}
      <div className="hidden lg:flex mt-4 pt-4 border-t border-[#D62839]/15 items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest text-[#F5F3EF]/35">
          Total Projects
        </span>
        <span className="font-display font-extrabold text-[#FF6B7A]">{total}</span>
      </div>
    </div>
  </aside>
);

export default React.memo(ProjectsFilter);