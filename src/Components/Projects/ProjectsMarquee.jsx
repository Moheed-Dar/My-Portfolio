import React from 'react';
import ProjectData from '../../Database/ProjectData';

/* Array ko repeat karke lambi strip banata hai (seamless loop ke liye) */
const repeat = (arr, n) => Array.from({ length: n }).flatMap(() => arr);

/* ---------- Single Marquee Row ---------- */
const MarqueeRow = ({ items, reverse = false, duration = '35s' }) => (
  <div className="p-marquee-mask overflow-hidden py-1 sm:py-1.5">
    <div
      className={`p-marquee-track flex w-max items-center gap-6 sm:gap-10 ${reverse ? 'reverse' : ''}`}
      style={{ '--duration': duration }}
    >
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span
            className={`p-word font-display font-extrabold whitespace-nowrap leading-none text-3xl sm:text-5xl md:text-6xl lg:text-7xl cursor-default ${
              i % 2 === 0 ? 'filled text-[#F5F3EF]/[0.09]' : 'outline'
            }`}
          >
            {item}
          </span>
          {/* Red diamond separator */}
          <span className="text-[#D62839] text-base sm:text-2xl shrink-0 drop-shadow-[0_0_8px_rgba(214,40,57,0.7)]">
            ✦
          </span>
        </React.Fragment>
      ))}
    </div>
  </div>
);

/* ---------- Projects Marquee (types se auto-generated) ---------- */
const ProjectsMarquee = () => {
  const types = [...new Set(ProjectData.map((p) => p.type || 'Other'))];

  /* Row 1 — types + catchy words | Row 2 — reversed mix */
  const rowOne = repeat(['Selected Works', ...types, 'Real Projects'], 3);
  const rowTwo = repeat([...types.slice().reverse(), 'Live Now', 'Creative Builds'], 3);

  return (
    /* ===== FULL SCREEN (full-bleed) =====
       w-screen + left-1/2 + -translate-x-1/2 → container se bahar nikal ke
       poori viewport width pe stretch ho jata hai */
    <div className="relative z-10 mb-12 md:mb-16 p-marquee-wrap w-screen left-1/2 -translate-x-1/2">
      <style>{`
        @keyframes p-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes p-marquee-rev { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .p-marquee-track { animation: p-marquee var(--duration, 35s) linear infinite; }
        .p-marquee-track.reverse { animation-name: p-marquee-rev; }
        .p-marquee-wrap:hover .p-marquee-track { animation-play-state: paused; }
        .p-marquee-mask {
          mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 5%, black 95%, transparent);
        }
        .p-word { transition: all 0.4s ease; }
        .p-word.outline {
          color: transparent;
          -webkit-text-stroke: 1px rgba(245, 243, 239, 0.18);
        }
        .p-word.filled:hover { color: rgba(255, 107, 122, 0.35); }
        .p-word.outline:hover { -webkit-text-stroke-color: rgba(255, 107, 122, 0.55); }
        .p-word:hover { transform: translateY(-2px); }
      `}</style>

      <MarqueeRow items={rowOne} duration="38s" />
      <MarqueeRow items={rowTwo} reverse duration="45s" />

      {/* Bottom red gradient line */}
      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-[#D62839]/60 to-transparent" />
    </div>
  );
};

export default React.memo(ProjectsMarquee);