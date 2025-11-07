import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Hardcoded 6 Skills - ALL WORKING & RESPONSIVE
const skillsData = [
  {
    id: 1,
    name: 'Photoshop',
    imgedt: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-photoshop-icon.png'
  },
  {
    id: 2,
    name: 'Premiere Pro',
    imgedt: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-premiere-pro-icon.png'
  },
  {
    id: 3,
    name: 'CapCut',
    imgedt: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/capcut-icon.png'
  },
  {
    id: 4,
    name: 'Lightroom',
    imgedt: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-lightroom-icon.png'
  },
  {
    id: 5,
    name: 'Figma',
    imgedt: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/figma-icon.png'
  },
  {
    id: 6,
    name: 'After Effects', // NEW SKILL ADDED
    imgedt: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/adobe-after-effects-icon.png'
  }
];

const EditingSkills = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
    });
  }, []);

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-10 sm:mb-12 md:mb-14" data-aos="fade-down">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-white">Additional</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59ffa0] to-[#00ff88]">
              Skills
            </span>
          </h2>
          <div className="mt-3 sm:mt-4 h-1 w-20 sm:w-24 md:w-28 lg:w-32 mx-auto bg-gradient-to-r from-transparent via-[#59ffa0] to-transparent opacity-50"></div>
        </div>

        {/* Responsive Grid for 6 Items - Always Centered */}
        <div
          className="grid 
                     grid-cols-2 
                     xs:grid-cols-3 
                     sm:grid-cols-3 
                     md:grid-cols-4 
                     lg:grid-cols-6 
                     gap-3 
                     xs:gap-4 
                     sm:gap-5 
                     md:gap-6 
                     lg:gap-7 
                     place-content-center 
                     w-full 
                     max-w-full 
                     justify-items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {skillsData.map((item, index) => (
            <div
              key={item.id}
              data-aos="zoom-in"
              data-aos-delay={80 * (index % 6)}
              className="group relative 
                         w-14 h-14 
                         xs:w-15 xs:h-15 
                         sm:w-16 sm:h-16 
                         md:w-18 md:h-18 
                         lg:w-22 lg:h-22 
                         flex items-center justify-center 
                         p-2 xs:p-2.5 sm:p-2.5 md:p-3 
                         bg-white/5 backdrop-blur-md rounded-2xl 
                         border border-white/10 
                         hover:border-[#59ffa0]/50 
                         transition-all duration-500 
                         hover:shadow-2xl hover:shadow-[#59ffa0]/20 
                         hover:-translate-y-1.5 sm:hover:-translate-y-2 
                         cursor-pointer overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#59ffa0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              {/* Icon */}
              <div className="relative z-10 flex items-center justify-center w-full h-full">
                <img
                  src={item.imgedt}
                  alt={item.name}
                  className="w-auto 
                             h-7 
                             xs:h-7.5 
                             sm:h-8 
                             md:h-9 
                             lg:h-10 
                             object-contain 
                             filter brightness-90 group-hover:brightness-110 
                             transition-all duration-300 
                             group-hover:scale-125 group-hover:rotate-6"
                  loading="lazy"
                />
              </div>

              {/* Tooltip */}
              <div className="absolute -top-7 xs:-top-7.5 sm:-top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                              bg-black/95 text-[#59ffa0] text-xs xs:text-xs sm:text-sm font-medium 
                              px-2 py-1 xs:px-2.5 xs:py-1.2 sm:px-2.5 sm:py-1.5 rounded-full 
                              whitespace-nowrap transition-all duration-300 pointer-events-none 
                              shadow-lg border border-[#59ffa0]/20">
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <div className="mt-12 sm:mt-14 md:mt-16 h-px bg-gradient-to-r from-transparent via-[#59ffa0]/30 to-transparent max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto"></div>
      </div>
    </section>
  );
};

export default EditingSkills;