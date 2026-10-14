import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  /* Year automatically update hota rahega */
  const year = new Date().getFullYear();

  /* Back to Top — scroll 400px se zyada ho to dikhe */
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  /* Sirf 4 links */
  const socials = [
    { icon: FaGithub, href: 'https://github.com/Moheed-Dar', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/moheeddar', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:moheeddar324@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/923139837663', label: 'WhatsApp' },
  ];

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="relative bg-[#0D0B0B] text-[#F5F3EF] font-body border-t border-[#D62839]/25 overflow-hidden">

        {/* Halka glow */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D62839]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-7">

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="w-11 h-11 rounded-full border border-[#D62839]/40 bg-[#D62839]/10 flex items-center justify-center text-[#F5F3EF]/70 hover:text-[#F5F3EF] hover:bg-[#D62839] hover:border-[#D62839] hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(214,40,57,0.45)] transition-all duration-300"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#D62839]/50 to-transparent" />

          {/* Copyright */}
          <p className="text-xs md:text-sm text-[#F5F3EF]/40 text-center">
            © {year} <span className="font-logo font-bold text-[#FF6B7A]">Moheed Dar</span>. All rights reserved.
          </p>
        </div>

        {/* Styles */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap');

          .font-body { font-family: 'Inter', sans-serif; }
          .font-logo { font-family: 'Playfair Display', serif; }
        `}</style>
      </footer>

      {/* ============ BACK TO TOP — screen ke corner par fixed ============ */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to Top"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#D62839] text-[#F5F3EF] flex items-center justify-center shadow-[0_10px_30px_rgba(214,40,57,0.5)] hover:bg-[#FF6B7A] hover:text-[#0D0B0B] hover:scale-110 transition-all duration-300 cursor-pointer animate-fade-up"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </>
  );
};

export default Footer;