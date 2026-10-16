import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectsGrid = ({ projects, onOpen }) => (
  <motion.div
    layout
    className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 w-full"
  >
    <AnimatePresence mode="popLayout">
      {projects.map((item, index) => (
        <ProjectCard key={item.id ?? index} item={item} index={index} onOpen={onOpen} />
      ))}
    </AnimatePresence>
  </motion.div>
);

export default ProjectsGrid;