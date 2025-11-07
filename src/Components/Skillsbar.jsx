import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Skillsbar = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  const skills = [
    { name: 'Front-End Development', percent: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'Back-End Development', percent: 75, color: 'from-purple-400 to-pink-500' },
    { name: 'Editing & Other Skills', percent: 70, color: 'from-[#59ffa0] to-[#00ff88]' },
  ];

  return (
    <div className="py-8 px-4 sm:px-6 md:px-8 lg:px-12">
      <div ref={ref} className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
        
        {/* Section Title */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-10 md:mb-12 lg:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="text-white">My</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59ffa0] to-[#00ff88]">
              Experience
            </span>
          </h2>
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1 },
            }}
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-3 md:mt-4 h-1 w-20 sm:w-24 md:w-28 lg:w-32 mx-auto bg-gradient-to-r from-transparent via-[#59ffa0] to-transparent opacity-60 origin-left"
          />
        </motion.div>

        {/* Skills List */}
        <div className="space-y-7 sm:space-y-8 md:space-y-9 lg:space-y-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="group relative"
            >
              {/* Skill Label + % */}
              <div className="flex justify-between items-center mb-3 px-1">
                <motion.h3
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{ delay: 0.5 + index * 0.2 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white/90 group-hover:text-[#59ffa0] transition-colors duration-300"
                >
                  {skill.name}
                </motion.h3>

                <motion.span
                  variants={{
                    hidden: { scale: 0, rotate: -180 },
                    visible: { scale: 1, rotate: 0 },
                  }}
                  initial="hidden"
                  animate={mainControls}
                  transition={{
                    delay: 0.8 + index * 0.2,
                    type: 'spring',
                    stiffness: 200
                  }}
                  className="text-xs sm:text-sm md:text-base font-bold text-[#59ffa0] bg-black/60 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full backdrop-blur-md border border-[#59ffa0]/40 shadow-md"
                >
                  {skill.percent}%
                </motion.span>
              </div>

              {/* Progress Bar Container */}
              <div className="relative w-full h-2.5 sm:h-3 md:h-3.5 lg:h-4 bg-white/5 rounded-full overflow-hidden border border-white/10 backdrop-blur-md shadow-inner">
                
                {/* Animated Progress Fill */}
                <motion.div
                  className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg shadow-[#59ffa0]/40`}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.percent}%` } : { width: 0 }}
                  transition={{
                    duration: 2.5,
                    delay: 0.7 + index * 0.3,
                    ease: [0.25, 0.1, 0.0, 1.0],
                  }}
                />

                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#59ffa0]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>

              {/* Tooltip - SAME AS AOS VERSION */}
              <div className="absolute -top-11 sm:-top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
                <div className="bg-black/95 text-[#59ffa0] text-xs sm:text-sm md:text-base px-3 py-1.5 sm:px-4 sm:py-2 rounded-full whitespace-nowrap border border-[#59ffa0]/40 backdrop-blur-md shadow-2xl flex items-center gap-1">
                  {skill.percent}% Mastery
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Line */}
        <motion.div
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 md:mt-14 lg:mt-16 h-px bg-gradient-to-r from-transparent via-[#59ffa0]/50 to-transparent w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto origin-left"
        />
      </div>
    </div>
  );
};

export default Skillsbar;