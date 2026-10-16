import React, { useMemo } from 'react';
import SkillsHero from '../Components/Skills/SkillsHero';
import MarqueeStrip from '../Components/Skills/MarqueeStrip';
import SkillsShowcase from '../Components/Skills/SkillsShowcase';
import AdditionalSkills from '../Components/Skills/AdditionalSkills';
import SkillsCTA from '../Components/Skills/SkillsCTA';
import SkillsData from '../Database/SkillsData';

const Skills = () => {
  const marqueeItems = useMemo(() => SkillsData.map((s) => s.name), []);

  return (
    <div className="bg-[#0D0B0B] min-h-screen">
      <SkillsHero techCount={SkillsData.length} />
      <MarqueeStrip items={marqueeItems} />
      <SkillsShowcase />
      <AdditionalSkills />
      <SkillsCTA />

      {/* ===== Shared Styles (pura page) ===== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@600;700;800&display=swap');

        .font-display { font-family: 'Syne', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
        .font-logo { font-family: 'Playfair Display', serif; }

        .text-blood-gradient {
          background: linear-gradient(115deg, #F5F3EF 0%, #FF6B7A 45%, #D62839 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: drop-shadow(0 0 18px rgba(214, 40, 57, 0.35));
        }

        /* Marquee animation — GPU accelerated, very fast */
        @keyframes marquee-x {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee-x 28s linear infinite;
          will-change: transform;
        }
        .marquee-reverse { animation-direction: reverse; }
        .marquee-track:hover { animation-play-state: paused; }

        ::selection { background: #D62839; color: #F5F3EF; }
      `}</style>
    </div>
  );
};

export default Skills;