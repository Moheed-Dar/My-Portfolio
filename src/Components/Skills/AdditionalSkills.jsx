import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* ✅ SAHI — ek extra ../ add kiya */
import cImg from '../../Assets/additionalskills/c.png';
import dotnetImg from '../../Assets/additionalskills/dotnet.png';
import socialImg from '../../Assets/additionalskills/social.png';
import vsImg from '../../Assets/additionalskills/vs.png';
import mysqlImg from '../../Assets/additionalskills/MySQL.png';
import postgresImg from '../../Assets/additionalskills/PostgresSQL.png';
import postmanImg from '../../Assets/additionalskills/Postman.png';
import actionImg from '../../Assets/additionalskills/action.png';
import dockerImg from '../../Assets/additionalskills/Docker.png';
import figmaImg from '../../Assets/additionalskills/Figma.png';

gsap.registerPlugin(ScrollTrigger);

/* ================= Additional Skills Data ================= */
const additionalSkills = [
  { id: 1,  name: 'C#',             img: cImg },
  { id: 2,  name: '.NET',           img: socialImg },
  { id: 3,  name: '.NET Core',      img: dotnetImg },
  { id: 4,  name: 'Visual Studio',  img: vsImg },
  { id: 5,  name: 'MySQL',          img: mysqlImg },
  { id: 6,  name: 'PostgresSQL',    img: postgresImg },
  { id: 7,  name: 'Postman',        img: postmanImg },
  { id: 8,  name: 'GitHub Actions', img: actionImg },
  { id: 9,  name: 'Docker',         img: dockerImg },
  { id: 10, name: 'Figma',          img: figmaImg },
];

const AdditionalSkills = React.memo(() => {
  const additionalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading — rise */
      gsap.fromTo(
        '.add-heading',
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out', clearProps: 'all',
          scrollTrigger: { trigger: additionalRef.current, start: 'top 80%', once: true },
        }
      );

      /* Cards — entrance (sirf OUTER wrapper pe) */
      gsap.fromTo(
        '.add-card',
        { y: 70, opacity: 0, scale: 0.85 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.4)',
          stagger: 0.06, clearProps: 'all',
          scrollTrigger: { trigger: '.add-grid', start: 'top 88%', once: true },
        }
      );

      /* Float — sirf ICON wrapper pe */
      gsap.to('.float-a', { y: -8, duration: 2.4, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.2 });
      gsap.to('.float-b', { y: 8, duration: 2.8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.6 });
    }, additionalRef);

    const refresh = () => ScrollTrigger.refresh();
    const t = setTimeout(refresh, 800);

    return () => {
      clearTimeout(t);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={additionalRef}
      className="relative bg-[#0D0B0B] text-[#F5F3EF] font-body overflow-hidden pt-24 sm:pt-32 md:pt-20 pb-20 px-5 sm:px-6 border-t border-white/5"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[450px] h-[450px] bg-[#D62839]/12 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#D62839]/10 blur-[150px] rounded-full" />
      </div>

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

        {/* Grid */}
        <div className="add-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-5 md:gap-6 w-full max-w-4xl mt-14">
          {additionalSkills.map((item, index) => (
            <div key={item.id} className="add-card">
              <div className="group relative h-full flex flex-col items-center gap-3 p-5 rounded-2xl bg-[#151111] border border-[#D62839]/25 hover:border-[#D62839]/70 hover:bg-[#1C1414] transition-colors duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(214,40,57,0.3)] cursor-pointer">

                <div className={`${index % 2 === 0 ? 'float-a' : 'float-b'} relative will-change-transform`}>
                  <div className="absolute inset-0 bg-[#D62839]/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-[#0D0B0B] border border-[#D62839]/30 flex items-center justify-center group-hover:border-[#D62839]/60 transition-colors duration-500 group-hover:scale-110">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                <span className="text-xs sm:text-sm font-medium text-[#F5F3EF]/60 group-hover:text-[#FF6B7A] transition-colors duration-300 text-center leading-tight">
                  {item.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 h-px bg-gradient-to-r from-transparent via-[#D62839]/50 to-transparent max-w-md mx-auto origin-center" />
      </div>
    </section>
  );
});

export default AdditionalSkills;