import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';

const SkillsCTA = () => {
  const navigate = useNavigate();

  return (
    /* Section — hamesha side padding, kabhi bhi screen se merge nahi hoga */
    <section className="relative bg-[#0D0B0B] text-[#F5F3EF] font-body px-4 sm:px-6 md:px-8 lg:px-10 pb-20 sm:pb-24 md:pb-28 pt-6 sm:pt-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl border border-[#D62839]/30 bg-gradient-to-br from-[#1C1414] to-[#151111] px-5 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 md:py-16 text-center overflow-hidden"
      >
        {/* Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] sm:w-[400px] h-[200px] sm:h-[250px] bg-[#D62839]/15 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-5">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase text-[#FF6B7A]">
            <span className="h-px w-6 sm:w-8 bg-[#D62839]" />
            Let's Collaborate
            <span className="h-px w-6 sm:w-8 bg-[#D62839]" />
          </span>

          {/* Heading — har screen par proportionate */}
          <h2 className="font-display font-extrabold leading-[1.15] text-[clamp(1.6rem,5.5vw,3.2rem)]">
            Liked My{' '}
            <span className="text-blood-gradient">Skills?</span>
          </h2>

          {/* Paragraph — mobile par thora chhota, desktop par bara */}
          <p className="max-w-md sm:max-w-lg text-[13px] sm:text-sm md:text-base text-[#F5F3EF]/55 leading-[1.8] sm:leading-[1.9]">
            The perfect skill set for your project is ready —
            let's team up and build something amazing together!
          </p>

          {/* Button */}
          <button
            onClick={() => navigate('/contacts')}
            className="mt-1 sm:mt-2 inline-flex items-center gap-2.5 sm:gap-3 bg-[#D62839] text-[#F5F3EF] text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full hover:bg-[#FF6B7A] hover:text-[#0D0B0B] hover:shadow-[0_10px_35px_rgba(214,40,57,0.5)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            <FaPaperPlane className="text-xs sm:text-sm" />
            Let's Work Together
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsCTA;