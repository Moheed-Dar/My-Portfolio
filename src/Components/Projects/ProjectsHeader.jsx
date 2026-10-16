import React from 'react';
import { motion } from 'framer-motion';
import { Star, Layers, Rocket, FolderGit2 } from 'lucide-react';
import ProjectData from '../../Database/ProjectData';

const ProjectsHeader = () => {
  const total = ProjectData.length;
  const cats = new Set(ProjectData.map((p) => p.type || 'Other')).size;
  const live = ProjectData.filter((p) => p.state).length;

  const stats = [
    { icon: FolderGit2, value: `${total}`, label: 'Projects' },
    { icon: Layers, value: `${cats}`, label: 'Categories' },
    { icon: Rocket, value: `${live}`, label: 'Live Now' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14 md:mb-20 flex flex-col items-center"
    >
      {/* Badge */}
      <div className="flex items-center gap-3 sm:gap-4">
        <span className="h-px w-8 sm:w-12 bg-[#D62839]" />
        <span className="text-[#FF6B7A] text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase whitespace-nowrap">
          Selected Works
        </span>
        <span className="h-px w-8 sm:w-12 bg-[#D62839]" />
      </div>

      {/* Heading + giant outline WORK peeche */}
      <div className="relative mt-5 flex justify-center">
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold leading-none text-transparent select-none pointer-events-none whitespace-nowrap text-[28vw] sm:text-[22vw] md:text-[9rem] lg:text-[11rem]"
          style={{ WebkitTextStroke: '1px rgba(214,40,57,0.22)' }}
        >
          WORK
        </span>
        <h2 className="relative font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#F5F3EF] tracking-tight leading-tight">
          My <span className="text-blood-gradient">Creative</span> Projects
        </h2>
      </div>

      {/* Sub-text */}
      <p className="mt-5 max-w-xl text-xs sm:text-sm md:text-base text-[#F5F3EF]/55 leading-[1.9] px-4">
        Real production apps — from e-commerce platforms and business
        tools to complete management systems.
      </p>

      {/* Divider */}
      <div className="flex items-center gap-3 mt-6">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D62839]/60" />
        <Star className="w-4 h-4 text-[#FF6B7A] animate-pulse" />
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D62839]/60" />
      </div>

      {/* Mini stats — top khali na lage */}
      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-5 w-full max-w-md">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-[#D62839]/25 bg-[#151111]/80 px-3 py-4 backdrop-blur-sm hover:border-[#D62839]/60 hover:-translate-y-1 transition-all duration-300"
          >
            <s.icon className="w-4 h-4 text-[#FF6B7A] mx-auto mb-2" />
            <p className="font-display font-extrabold text-lg sm:text-2xl text-[#FF6B7A]">
              {s.value}
            </p>
            <p className="mt-0.5 text-[9px] sm:text-[10px] uppercase tracking-widest text-[#F5F3EF]/45 whitespace-nowrap">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default React.memo(ProjectsHeader);