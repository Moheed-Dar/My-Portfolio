import React, { useMemo, useState, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Element } from 'react-scroll';
import { FolderOpen } from 'lucide-react';

import ProjectData from '../Database/ProjectData';
import ProjectsHeader from '../Components/Projects/ProjectsHeader';
import ProjectsMarquee from '../Components/Projects/ProjectsMarquee';
import ProjectsFilter from '../Components/Projects/ProjectsFilter';
import ProjectsGrid from '../Components/Projects/ProjectsGrid';
import Skillsbar from '../Components/Skillsbar';

/* Modal LAZY load hoga — sirf jab user project open karega tab load hoga */
const ProjectModal = lazy(() => import('../Components/Projects/ProjectModal'));

const Projects = () => {
  const [active, setActive] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = useMemo(() => {
    const set = new Set(ProjectData.map((p) => p.type || 'Other'));
    return ['All', ...Array.from(set)];
  }, []);

  const counts = useMemo(() => {
    const c = { All: ProjectData.length };
    ProjectData.forEach((p) => {
      const type = p.type || 'Other';
      c[type] = (c[type] || 0) + 1;
    });
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      active === 'All'
        ? ProjectData
        : ProjectData.filter((p) => (p.type || 'Other') === active),
    [active]
  );

  return (
    <Element name="Projects">
      <section
        id="Projects"
        className="relative py-20 md:py-28 bg-[#0D0B0B] font-body overflow-hidden"
      >
        {/* ===== Background ===== */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(#D62839 1px, transparent 1px), linear-gradient(90deg, #D62839 1px, transparent 1px)',
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            }}
          />
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#D62839]/15 blur-[160px] rounded-full" />
          <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] bg-[#D62839]/10 blur-[160px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          {/* ===== Header (hero) ===== */}
          <ProjectsHeader />

          {/* ===== Marquee — project types animated strip ===== */}
          <ProjectsMarquee />

          {/* ===== Sidebar + Projects layout ===== */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
            {/* LEFT — Category table */}
            <ProjectsFilter
              categories={categories}
              counts={counts}
              active={active}
              onChange={setActive}
              total={ProjectData.length}
            />

            {/* RIGHT — Projects area */}
            <div className="flex-1 w-full min-w-0">
              {/* Results bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#D62839]/15">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F5F3EF]/35">
                  Showing{' '}
                  <span className="text-[#FF6B7A] font-bold">{filtered.length}</span> of{' '}
                  {ProjectData.length} projects
                </p>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F5F3EF]/35">
                  Category:{' '}
                  <span className="text-[#FF6B7A] font-bold normal-case tracking-normal">
                    {active}
                  </span>
                </p>
              </div>

              {/* Grid */}
              <ProjectsGrid projects={filtered} onOpen={setSelectedProject} />

              {/* Empty state */}
              {filtered.length === 0 && (
                <div className="py-20 flex flex-col items-center gap-3 text-[#F5F3EF]/40">
                  <FolderOpen className="w-10 h-10" />
                  <p className="text-sm">No projects found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <Skillsbar />
      </section>

      {/* ===== Modal (lazy + animated) ===== */}
      <Suspense fallback={null}>
        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </Suspense>
    </Element>
  );
};

export default Projects;