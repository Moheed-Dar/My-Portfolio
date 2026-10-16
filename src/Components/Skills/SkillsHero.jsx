import React from 'react';
import { motion } from 'framer-motion';

/* ---------- Animated Word (letters grouped — word kabhi nahi tootega) ---------- */
const AnimatedWord = ({ word, startIndex, gradientFrom }) => {
  return (
    <span className="inline-flex whitespace-nowrap">
      {word.split('').map((ch, i) => {
        const globalIndex = startIndex + i;
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50, scale: 0.6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.25 + globalIndex * 0.045,
              type: 'spring',
              stiffness: 200,
              damping: 16,
            }}
            className={`inline-block ${
              gradientFrom !== undefined && globalIndex >= gradientFrom
                ? 'text-blood-gradient'
                : ''
            }`}
          >
            {ch}
          </motion.span>
        );
      })}
    </span>
  );
};

/* ---------- Skills Marquee Row ---------- */
const rowOne = ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion'];
const rowTwo = ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git & GitHub', 'Redux Toolkit', 'Responsive Design', 'Figma'];

const MarqueeRow = ({ items, reverse = false, duration = '30s' }) => (
  <div className="marquee-mask overflow-hidden py-1.5 sm:py-2">
    <div
      className={`marquee-track flex w-max gap-2.5 sm:gap-4 ${reverse ? 'reverse' : ''}`}
      style={{ '--duration': duration }}
    >
      {[...items, ...items].map((item, i) => (
        <span
          key={i}
          className="flex items-center gap-2 sm:gap-2.5 rounded-full border border-[#D62839]/30 bg-[#151111]/80 px-4 sm:px-6 py-2 sm:py-2.5 text-[11px] sm:text-sm md:text-base font-semibold text-[#F5F3EF]/75 whitespace-nowrap cursor-default transition-all duration-300 hover:border-[#D62839] hover:text-[#FF6B7A] hover:shadow-[0_0_22px_rgba(214,40,57,0.35)]"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#D62839] shrink-0" />
          {item}
        </span>
      ))}
    </div>
  </div>
);

/* ---------- Hero Section ---------- */
const SkillsHero = React.memo(() => {
  const title = 'MY SKILLS';

  const words = title.split(' ');
  let letterCount = 0;
  const wordData = words.map((w) => {
    const data = {
      word: w,
      start: letterCount,
      gradientFrom: letterCount >= 2 ? letterCount : undefined,
    };
    letterCount += w.length;
    return data;
  });

  return (
    <section className="relative overflow-hidden bg-[#0D0B0B] text-[#F5F3EF] font-body pt-32 sm:pt-40 md:pt-44 lg:pt-48 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Marquee keyframes */}
      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .marquee-track { animation: marquee var(--duration, 30s) linear infinite; }
        .marquee-track.reverse { animation-name: marquee-rev; }
        .marquee-wrap:hover .marquee-track { animation-play-state: paused; }
        .marquee-mask {
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(#D62839 1px, transparent 1px), linear-gradient(90deg, #D62839 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
          }}
        />
        <div className="absolute -top-24 left-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] bg-[#D62839]/15 blur-[100px] sm:blur-[130px] md:blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] bg-[#D62839]/10 blur-[100px] sm:blur-[130px] md:blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <span className="h-px w-6 sm:w-10 bg-[#D62839]" />
          <span className="text-[#FF6B7A] text-[9px] sm:text-xs md:text-sm font-bold tracking-[0.25em] sm:tracking-[0.4em] uppercase whitespace-nowrap">
            What I Work With
          </span>
          <span className="h-px w-6 sm:w-10 bg-[#D62839]" />
        </motion.div>

        {/* Heading — Giant outline SKILLS ab heading ke peeche perfectly centered hai */}
        <div className="relative mt-5 sm:mt-7 md:mt-8 flex justify-center">
          <h2
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold leading-none text-transparent select-none pointer-events-none whitespace-nowrap text-[26vw] sm:text-[24vw] md:text-[10rem] lg:text-[12rem]"
            style={{ WebkitTextStroke: '1px rgba(214,40,57,0.28)' }}
          >
            SKILLS
          </h2>

          <h1 className="relative font-display font-extrabold leading-[1.05] flex flex-wrap justify-center gap-x-[0.25em] text-[clamp(2.4rem,11vw,6.5rem)]">
            {wordData.map((w, wi) => (
              <AnimatedWord
                key={wi}
                word={w.word}
                startIndex={w.start}
                gradientFrom={w.gradientFrom}
              />
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-5 sm:mt-6 max-w-[280px] sm:max-w-md md:max-w-xl text-xs sm:text-sm md:text-base text-[#F5F3EF]/55 leading-[1.8] sm:leading-[1.9]"
        >
          A complete toolkit of modern technologies — the right tool,
          the right skill, a perfect result for every project.
        </motion.p>

        {/* ===== Skills Marquee (stats ki jagah) ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="mt-10 sm:mt-12 md:mt-14 w-full max-w-3xl mx-auto marquee-wrap"
        >
          <p className="mb-4 sm:mb-6 text-[9px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[#F5F3EF]/40">
            Technologies I Use Daily
          </p>

          <MarqueeRow items={rowOne} duration="30s" />
          <MarqueeRow items={rowTwo} reverse duration="36s" />
        </motion.div>
      </div>
    </section>
  );
});

export default SkillsHero;