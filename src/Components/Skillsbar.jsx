import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---------- 6 Skills — 3 left, 3 right ---------- */
const skillsLeft = [
  { name: "Frontend Development", detail: "React.js · Next.js · Tailwind CSS", percent: 90 },
  { name: "Backend Development", detail: "Node.js · Express.js · REST APIs", percent: 85 },
  { name: "Databases", detail: "MongoDB · PostgreSQL", percent: 80 },
];

const skillsRight = [
  { name: "Languages", detail: "JavaScript (ES6+) · TypeScript", percent: 88 },
  { name: "UI Motion & Animation", detail: "GSAP · Framer Motion", percent: 75 },
  { name: ".NET / C#", detail: "ASP.NET Core — currently learning", percent: 60 },
];

const SkillBar = () => {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* 1) Heading — neeche se rise */
      gsap.from(".sb-heading", {
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 82%" },
      });

      /* 2) Divider — center se khulti hai */
      gsap.from(".sb-divider", {
        scaleX: 0, duration: 1.2, ease: "power3.inOut",
        scrollTrigger: { trigger: ref.current, start: "top 78%" },
      });

      /* 3) Har row — entrance + bar fill + counter count-up */
      gsap.utils.toArray(".sb-row").forEach((row, i) => {
        const percent = Number(row.dataset.percent);
        const bar = row.querySelector(".sb-bar");
        const counter = row.querySelector(".sb-count");

        /* Row entrance */
        gsap.from(row, {
          y: 40, opacity: 0, duration: 0.8, ease: "power3.out", delay: (i % 3) * 0.12,
          scrollTrigger: { trigger: row, start: "top 88%" },
        });

        /* Bar fill — 0% se percent tak */
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: `${percent}%`,
            duration: 1.8, ease: "power3.out", delay: 0.25,
            scrollTrigger: { trigger: row, start: "top 88%" },
          }
        );

        /* Percentage counter — 0 se percent tak count hota hai */
        const obj = { val: 0 };
        gsap.to(obj, {
          val: percent,
          duration: 1.8, ease: "power3.out", delay: 0.25,
          scrollTrigger: { trigger: row, start: "top 88%" },
          onUpdate: () => {
            counter.textContent = `${Math.round(obj.val)}%`;
          },
        });
      });

      /* 4) Bars ke andar chalti hui shine — infinite */
      gsap.fromTo(
        ".sb-shine",
        { xPercent: -100 },
        {
          xPercent: 300, duration: 2.2, ease: "none",
          repeat: -1, repeatDelay: 2.5, delay: 2, stagger: 0.4,
        }
      );
    }, ref);

    return () => ctx.revert(); // cleanup — StrictMode safe
  }, []);

  /* Ek skill row ka markup */
  const renderRow = (skill) => (
    <div key={skill.name} className="sb-row group relative" data-percent={skill.percent}>
      {/* Label + Counter */}
      <div className="flex justify-between items-end mb-2.5 gap-3">
        <div>
          <h3 className="font-display text-sm sm:text-base font-bold text-[#F5F3EF] group-hover:text-[#FF6B7A] transition-colors duration-300">
            {skill.name}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#F5F3EF]/40 mt-0.5">{skill.detail}</p>
        </div>
        <span className="sb-count shrink-0 font-display text-sm sm:text-base font-bold text-[#FF6B7A] bg-[#D62839]/10 border border-[#D62839]/40 px-2.5 py-0.5 rounded-full">
          0%
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative w-full h-2.5 rounded-full bg-white/5 border border-white/10 overflow-hidden">
        <div className="sb-bar relative h-full rounded-full bg-gradient-to-r from-[#D62839] via-[#E04A58] to-[#FF6B7A] shadow-[0_0_15px_rgba(214,40,57,0.5)] overflow-hidden">
          {/* Shine sweep */}
          <span className="sb-shine absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </div>
    </div>
  );

  return (
    <div ref={ref} className="relative py-10 px-4 sm:px-8 md:px-12 font-body">

      {/* Top subtle divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#D62839]/40 to-transparent max-w-3xl mx-auto mb-14" />

      <div className="mx-auto w-full max-w-5xl">

        {/* ===== Heading ===== */}
        <div className="sb-heading flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-4">
            <span className="h-px w-12 bg-[#D62839]" />
            <span className="text-[#FF6B7A] text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
              Proficiency
            </span>
            <span className="h-px w-12 bg-[#D62839]" />
          </div>

          <h2 className="mt-5 font-display text-3xl md:text-5xl font-extrabold text-[#F5F3EF]">
            My <span className="text-blood-gradient">Expertise</span>
          </h2>

          <p className="mt-4 max-w-md text-sm md:text-base text-[#F5F3EF]/55 leading-[1.9]">
            A quick snapshot of my core strengths across the stack.
          </p>
        </div>

        {/* ===== Two columns — 3 left, 3 right ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-10 lg:gap-y-12">
          <div className="space-y-10">{skillsLeft.map(renderRow)}</div>
          <div className="space-y-10">{skillsRight.map(renderRow)}</div>
        </div>

        {/* ===== Bottom divider ===== */}
        <div className="sb-divider mt-14 h-px bg-gradient-to-r from-transparent via-[#D62839]/50 to-transparent max-w-md mx-auto origin-center" />
      </div>

      {/* ===== Styles ===== */}
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

        ::selection { background: #D62839; color: #F5F3EF; }
      `}</style>
    </div>
  );
};

export default SkillBar;