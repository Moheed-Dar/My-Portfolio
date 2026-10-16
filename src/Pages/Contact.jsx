import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

import ContactHeader from '../Components/Contact/ContactHeader';
import ContactForm from '../Components/Contact/ContactForm';
import ContactInfo from '../Components/Contact/ContactInfo';

const Contact = () => {
  useEffect(() => {
    /* Route change ke baad AOS naye elements ko dobara scan kare */
    AOS.refreshHard();
  }, []);

  return (
    <Element name="Contact">
      <section
        id="Contact"
        className="relative py-20 sm:py-24 md:py-32 bg-[#0D0B0B] text-[#F5F3EF] font-body overflow-hidden"
      >
        {/* ===== Background ===== */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(#D62839 1px, transparent 1px), linear-gradient(90deg, #D62839 1px, transparent 1px)',
              backgroundSize: '80px 80px',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            }}
          />
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#D62839]/15 blur-[160px] rounded-full" />
          <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] bg-[#D62839]/10 blur-[160px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          {/* Header */}
          <ContactHeader />

          {/* Form + Info */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D62839]/60 to-transparent" />

        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-18px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }

          ::selection { background: #D62839; color: #F5F3EF; }
        `}</style>
      </section>
    </Element>
  );
};

export default Contact;