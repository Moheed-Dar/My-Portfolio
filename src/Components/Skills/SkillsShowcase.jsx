import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SkillsData from '../../Database/SkillsData';

/* ---------- Single Card (memoized) ---------- */
const SkillCard = React.memo(({ item, index }) => (
  /* OUTER — sirf framer-motion transforms */
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.8, y: 25 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8, y: -15 }}
    transition={{ duration: 0.35, ease: 'easeOut', delay: Math.min(index * 0.035, 0.35) }}
    className="h-full"
  >
    {/* INNER — saare hover styles (transform conflict se bachne ke liye) */}
    <div className="group relative h-full rounded-2xl bg-[#151111] border border-[#D62839]/25 hover:border-[#D62839]/70 hover:bg-[#1C1414] p-5 pt-7 flex flex-col items-center gap-3 text-center cursor-pointer hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(214,40,57,0.3)] transition-[border-color,background-color,transform,box-shadow] duration-500">

      {/* Top accent line — hover pe upar se glow line aati hai */}
      <span className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-2/3 bg-gradient-to-r from-transparent via-[#D62839] to-transparent rounded-full transition-all duration-500" />

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-[#D62839]/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Shine sweep — hover pe card ke upar se light guzarti hai */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-[-70%] h-full w-1/2 bg-gradient-to-r from-transparent via-[#FF6B7A]/10 to-transparent rotate-[25deg] group-hover:left-[140%] transition-all duration-[900ms] ease-out" />
      </div>

      {/* Index number — 01, 02, 03... */}
      <span className="absolute top-3 right-4 font-display text-[11px] font-bold text-[#F5F3EF]/15 group-hover:text-[#FF6B7A]/50 transition-colors duration-500">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Icon */}
      <div className="relative w-16 h-16 rounded-xl bg-[#0D0B0B] border border-[#D62839]/30 flex items-center justify-center group-hover:scale-110 group-hover:border-[#D62839]/60 group-hover:shadow-[0_0_25px_rgba(214,40,57,0.35)] transition-all duration-500">
        <img
          src={item.imgSkills}
          alt={item.name}
          loading="lazy"
          className="w-9 h-9 object-contain group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500"
        />
      </div>

      {/* Name */}
      <span className="text-sm font-semibold text-[#F5F3EF]/85 group-hover:text-[#FF6B7A] transition-colors duration-300">
        {item.name}
      </span>

      {/* Category chip */}
      <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#D62839]/10 border border-[#D62839]/30 text-[#FF6B7A]/80">
        {item.category || 'Other'}
      </span>

      {/* Level bar (optional — sirf tab dikhega jab data mein level ho) */}
      {typeof item.level === 'number' && (
        <div className="w-full mt-1">
          <div className="flex justify-between text-[10px] text-[#F5F3EF]/40 mb-1">
            <span>Proficiency</span>
            <span className="text-[#FF6B7A]/70">{item.level}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-[#0D0B0B] overflow-hidden border border-[#D62839]/20">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${item.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
              className="h-full rounded-full bg-gradient-to-r from-[#D62839] to-[#FF6B7A]"
            />
          </div>
        </div>
      )}
    </div>
  </motion.div>
));

/* ---------- Main Showcase ---------- */
const SkillsShowcase = () => {
  const [active, setActive] = useState('All');

  /* Categories automatically data se ban jati hain */
  const categories = useMemo(() => {
    const set = new Set(SkillsData.map((s) => s.category || 'Other'));
    return ['All', ...Array.from(set)];
  }, []);

  const counts = useMemo(() => {
    const c = { All: SkillsData.length };
    SkillsData.forEach((s) => {
      const cat = s.category || 'Other';
      c[cat] = (c[cat] || 0) + 1;
    });
    return c;
  }, []);

  const filtered = useMemo(
    () =>
      active === 'All'
        ? SkillsData
        : SkillsData.filter((s) => (s.category || 'Other') === active),
    [active]
  );

  return (
    <section className="relative bg-[#0D0B0B] text-[#F5F3EF] font-body overflow-hidden py-20 sm:py-24 px-5 sm:px-6">
      {/* Top divider — hero se seamless connection */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#D62839]/50 to-transparent" />

      {/* Background — hero jaisa grid + glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#D62839 1px, transparent 1px), linear-gradient(90deg, #D62839 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          }}
        />
        <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-[#D62839]/12 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D62839]/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">

        {/* ===== Heading (giant outline STACK peeche) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <div className="flex items-center gap-3 sm:gap-4">
            <span className="h-px w-8 sm:w-12 bg-[#D62839]" />
            <span className="text-[#FF6B7A] text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase whitespace-nowrap">
              Explore My Stack
            </span>
            <span className="h-px w-8 sm:w-12 bg-[#D62839]" />
          </div>

          {/* Heading + giant outline text (hero jaisa) */}
          <div className="relative mt-5 flex justify-center">
            <h2
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold leading-none text-transparent select-none pointer-events-none whitespace-nowrap text-[30vw] sm:text-[22vw] md:text-[8rem] lg:text-[10rem]"
              style={{ WebkitTextStroke: '1px rgba(214,40,57,0.22)' }}
            >
              STACK
            </h2>
            <h2 className="relative font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight">
              Skills &amp; <span className="text-blood-gradient">Expertise</span>
            </h2>
          </div>

          <p className="mt-4 max-w-lg text-center text-xs sm:text-sm md:text-base text-[#F5F3EF]/55 leading-[1.9]">
            Filter by category and dive into the technologies and tools
            I use to bring ideas to life.
          </p>
        </motion.div>

        {/* ===== Filter Buttons ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mt-10"
        >
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-300 cursor-pointer border ${
                  isActive
                    ? 'text-[#F5F3EF] border-transparent'
                    : 'text-[#F5F3EF]/55 hover:text-[#FF6B7A] border-[#D62839]/30 bg-[#151111] hover:border-[#D62839]/60'
                }`}
              >
                {/* Sliding active pill — gradient + glow */}
                {isActive && (
                  <motion.span
                    layoutId="filter-pill"
                    transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D62839] to-[#C41E3A] shadow-[0_8px_25px_rgba(214,40,57,0.5)]"
                  />
                )}
                <span className="relative z-10">
                  {cat} <span className="opacity-60">({counts[cat] || 0})</span>
                </span>
              </button>
            );
          })}
        </motion.div>

        {/* Results counter */}
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-6 text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#F5F3EF]/35"
        >
          Showing <span className="text-[#FF6B7A] font-bold">{filtered.length}</span> of{' '}
          {SkillsData.length} skills
        </motion.p>

        {/* ===== Animated Grid ===== */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <SkillCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-10 text-[#F5F3EF]/40 text-sm">
            No skills found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default SkillsShowcase;