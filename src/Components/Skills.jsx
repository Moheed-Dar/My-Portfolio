import React, { useEffect, useRef } from 'react';
import SkillsData from '../Database/SkillsData';
import AOS from 'aos';
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Element } from 'react-scroll';

/* ================= Additional Skills Images ================= */
import cImg from "../Assets/additionalskills/c.png";
import dotnetImg from "../Assets/additionalskills/dotnet.png";
import socialImg from "../Assets/additionalskills/social.png";
import vsImg from "../Assets/additionalskills/vs.png";
import mysqlImg from "../Assets/additionalskills/MySQL.png";
import postgresImg from "../Assets/additionalskills/PostgresSQL.png";
import postmanImg from "../Assets/additionalskills/Postman.png";
import actionImg from "../Assets/additionalskills/action.png";
import dockerImg from "../Assets/additionalskills/Docker.png";
import figmaImg from "../Assets/additionalskills/Figma.png";

gsap.registerPlugin(ScrollTrigger);

/* ================= Additional Skills Data ================= */
const additionalSkills = [
  { id: 1,  name: "C#",             img: cImg },
  { id: 2,  name: ".NET",           img: socialImg },
  { id: 3,  name: ".NET Core",      img: dotnetImg },
  { id: 4,  name: "Visual Studio",  img: vsImg },
  { id: 5,  name: "MySQL",          img: mysqlImg },
  { id: 6,  name: "PostgresSQL",    img: postgresImg },
  { id: 7,  name: "Postman",        img: postmanImg },
  { id: 8,  name: "GitHub Actions", img: actionImg },
  { id: 9,  name: "Docker",         img: dockerImg },
  { id: 10, name: "Figma",          img: figmaImg },
];

const Skills = () => {
  const additionalRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    const ctx = gsap.context(() => {

      /* 1) Heading — rise */
      gsap.fromTo(".add-heading",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 1, ease: "power3.out",
          clearProps: "all",
          scrollTrigger: { trigger: additionalRef.current, start: "top 80%", once: true },
        }
      );

      /* 2) Cards — entrance (sirf OUTER wrapper pe, hover styles inner pe hain) */
      gsap.fromTo(".add-card",
        { y: 70, opacity: 0, scale: 0.85 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.8, ease: "back.out(1.4)",
          stagger: 0.06,
          clearProps: "all", // hover effects wapas enable
          scrollTrigger: { trigger: ".add-grid", start: "top 88%", once: true },
        }
      );

      /* 3) Float — sirf ICON wrapper pe (card se koi conflict nahi) */
      gsap.to(".float-a", { y: -8, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.2 });
      gsap.to(".float-b", { y: 8,  duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.6 });

    }, additionalRef);

    /* Images load hone ke baad ScrollTrigger ki positions refresh karo */
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 800);

    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
      ctx.revert(); // cleanup — StrictMode safe
    };
  }, []);

  return (
    <Element name="Skills">

      {/* ================================================== */}
      {/* ============ SECTION 1: DEVELOPMENT SKILLS ======== */}
      {/* ================================================== */}
      <section
        id="Skills"
        className="relative bg-[#0D0B0B] text-[#F5F3EF] font-body overflow-hidden pt-32 sm:pt-40 md:pt-28 pb-20 px-5 sm:px-6"
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "linear-gradient(#D62839 1px, transparent 1px), linear-gradient(90deg, #D62839 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }} />
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#D62839]/15 blur-[160px] rounded-full" />
          <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] bg-[#D62839]/10 blur-[160px] rounded-full" />
        </div>

        {/* Giant outline text — ✅ mobile pe upar shift, badge se overlap nahi hoga */}
        <h2
          className="absolute top-8 sm:top-10 md:top-16 left-1/2 -translate-x-1/2 font-display text-[16vw] md:text-[10rem] font-extrabold leading-none text-transparent select-none pointer-events-none"
          style={{ WebkitTextStroke: "1px rgba(214,40,57,0.25)" }}
        >
          SKILLS
        </h2>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">

          {/* Badge — ✅ mobile pe compact */}
          <div data-aos="zoom-in" className="flex items-center gap-3 sm:gap-4">
            <span className="h-px w-8 sm:w-12 bg-[#D62839]" />
            <span className="text-[#FF6B7A] text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase whitespace-nowrap">
              My Toolbox
            </span>
            <span className="h-px w-8 sm:w-12 bg-[#D62839]" />
          </div>

          {/* Heading */}
          <h2 data-aos="zoom-in" className="mt-5 font-display text-[2rem] sm:text-4xl md:text-6xl font-extrabold text-center">
            Development <span className="text-blood-gradient">Skills</span>
          </h2>

          {/* Sub-text */}
          <p data-aos="fade-up" className="mt-5 max-w-xl text-center text-sm md:text-base text-[#F5F3EF]/55 leading-[1.9]">
            Technologies I use daily to build fast, scalable and
            production-ready web applications.
          </p>

          {/* Dev Skills Grid */}
          <div className="mt-14 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 md:gap-5 w-full">
            {SkillsData.map((item, index) => (
              <div
                data-aos="zoom-in"
                data-aos-delay={index * 60}
                key={item.id}
                className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#151111] border border-[#D62839]/25 hover:border-[#D62839]/70 hover:bg-[#1C1414] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(214,40,57,0.3)] cursor-pointer"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[#D62839]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#0D0B0B] border border-[#D62839]/30 flex items-center justify-center group-hover:border-[#D62839]/60 group-hover:scale-110 transition-all duration-500">
                  <a href={item.link} target="_blank" rel="noreferrer" className="flex items-center justify-center">
                    <img
                      src={item.imgSkills}
                      alt="Skill Icon"
                      className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================== */}
      {/* ============ SECTION 2: ADDITIONAL SKILLS ========= */}
      {/* ================================================== */}
      <section
        ref={additionalRef}
        className="relative bg-[#0D0B0B] text-[#F5F3EF] font-body overflow-hidden pt-24 sm:pt-32 md:pt-20 pb-20 px-5 sm:px-6 border-t border-white/5"
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-[#D62839]/12 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D62839]/10 blur-[150px] rounded-full" />
        </div>

        {/* Giant outline text — ✅ mobile pe upar shift */}
        <h2
          className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 font-display text-[16vw] md:text-[9rem] font-extrabold leading-none text-transparent select-none pointer-events-none"
          style={{ WebkitTextStroke: "1px rgba(214,40,57,0.2)" }}
        >
          MORE
        </h2>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

          {/* Badge + Heading */}
          <div className="add-heading flex flex-col items-center">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="h-px w-8 sm:w-12 bg-[#D62839]" />
              <span className="text-[#FF6B7A] text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase whitespace-nowrap">
                More Than Code
              </span>
              <span className="h-px w-8 sm:w-12 bg-[#D62839]" />
            </div>

            <h2 className="mt-5 font-display text-3xl md:text-5xl font-extrabold text-center">
              Additional <span className="text-blood-gradient">Skills</span>
            </h2>

            <p className="mt-4 max-w-lg text-center text-sm md:text-base text-[#F5F3EF]/55 leading-[1.9]">
              Beyond development — .NET ecosystem experience and professional
              design &amp; video editing tools.
            </p>
          </div>

          {/* Additional Skills Grid */}
          <div className="add-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6 w-full max-w-4xl mt-14">
            {additionalSkills.map((item, index) => (
              /* OUTER wrapper — sirf GSAP entrance ke liye (NO transition classes) */
              <div key={item.id} className="add-card">
                {/* INNER card — saare hover styles yahan */}
                <div className="group relative h-full flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#151111] border border-[#D62839]/25 hover:border-[#D62839]/70 hover:bg-[#1C1414] transition-colors duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(214,40,57,0.3)] cursor-pointer">

                  {/* Icon — float wrapper (GSAP sirf yahan transform karta hai) */}
                  <div className={`${index % 2 === 0 ? "float-a" : "float-b"} relative will-change-transform`}>
                    {/* Glow */}
                    <div className="absolute inset-0 bg-[#D62839]/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Icon box */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#0D0B0B] border border-[#D62839]/30 flex items-center justify-center group-hover:border-[#D62839]/60 transition-colors duration-500 group-hover:scale-110">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <span className="text-xs sm:text-sm font-medium text-[#F5F3EF]/60 group-hover:text-[#FF6B7A] transition-colors duration-300 text-center leading-tight">
                    {item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom divider */}
          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-[#D62839]/50 to-transparent max-w-md mx-auto origin-center" />
        </div>
      </section>

      {/* ================= Shared Styles ================= */}
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
    </Element>
  );
};

export default Skills;