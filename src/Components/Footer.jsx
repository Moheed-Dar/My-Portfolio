import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaArrowUp,
  FaHeart, FaMapMarkerAlt, FaPhone, FaPaperPlane
} from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  /* Back to Top — scroll 400px se zyada ho to dikhe */
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  /* Navigation (navbar jaisa hi logic) */
  const goTo = (link) => {
    if (link.section) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else {
        document.getElementById(link.section)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(link.to);
      window.scrollTo(0, 0);
    }
  };

  /* Quick links */
  const quickLinks = [
    { name: 'Home', section: 'Home' },
    { name: 'About', section: 'Aboutus' },
    { name: 'Services', section: 'Services' },
    { name: 'Skills', to: '/skills' },
    { name: 'Projects', to: '/projects' },
    { name: 'Contact', to: '/contacts' },
  ];

  /* Social links */
  const socials = [
    { icon: FaGithub, href: 'https://github.com/Moheed-Dar', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/moheeddar', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:moheeddar324@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/923139837663', label: 'WhatsApp' },
  ];

  return (
    <>
      {/* ================= FOOTER ================= */}
      <footer className="relative w-full bg-[#0D0B0B] text-[#F5F3EF] font-body border-t border-[#D62839]/25 overflow-hidden mt-auto">

        {/* Halka glow */}
        <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#D62839]/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-[#8cb346]/5 blur-[100px] rounded-full pointer-events-none" />

        {/* Container — responsive padding */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 md:pt-16 pb-8 sm:pb-10">

          {/* ===== Main Footer Grid =====
              Mobile  : 1 column (sab stacked, centered)
              sm 640+ : 2 columns (Brand | Quick Links, Contact neeche full-width)
              lg 1024+: 3 columns proper
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 sm:gap-x-10 lg:gap-8">

            {/* --- Column 1: Brand --- */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
              <h3 className="font-logo text-2xl sm:text-3xl font-bold tracking-wide">
                Moheed <span className="text-[#FF6B7A]">Dar</span>
              </h3>
              <p className="text-[13px] sm:text-sm text-[#F5F3EF]/50 leading-relaxed max-w-xs sm:max-w-full">
                Video Editor &amp; Creative Professional — stories ko visually stunning
                experiences mein badalta hoon. Har frame mein precision, har project mein passion.
              </p>

              {/* Social icons */}
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-1 flex-wrap">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="w-10 h-10 rounded-full border border-[#D62839]/40 bg-[#D62839]/10 flex items-center justify-center text-[#F5F3EF]/70 hover:text-[#F5F3EF] hover:bg-[#D62839] hover:border-[#D62839] hover:-translate-y-1.5 hover:shadow-[0_10px_25px_rgba(214,40,57,0.45)] active:scale-95 transition-all duration-300"
                  >
                    <Icon className="text-base" />
                  </a>
                ))}
              </div>
            </div>

            {/* --- Column 2: Quick Links --- */}
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left gap-4">
              <h4 className="text-base sm:text-lg font-semibold tracking-wide flex items-center gap-2">
                <span className="w-6 h-px bg-[#D62839] inline-block" />
                Quick Links
              </h4>

              {/* w-fit + parent flex se mobile par auto-center, sm+ par left */}
              <ul className="grid grid-cols-2 gap-x-5 sm:gap-x-8 gap-y-2.5 text-sm w-fit text-left">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.to || '#'}
                      onClick={(e) => {
                        e.preventDefault();
                        goTo(link);
                      }}
                      className="group flex items-center gap-2 text-[#F5F3EF]/50 hover:text-[#FF6B7A] transition-colors duration-300 cursor-pointer py-0.5"
                    >
                      <span className="w-1.5 h-1.5 shrink-0 rounded-full bg-[#D62839]/50 group-hover:bg-[#FF6B7A] group-hover:scale-125 transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* --- Column 3: Contact Info --- */}
            {/* sm–md par full-width centered, lg par 3rd column left */}
            <div className="flex flex-col items-center text-center gap-4 sm:col-span-2 lg:col-span-1 lg:items-start lg:text-left">
              <h4 className="text-base sm:text-lg font-semibold tracking-wide flex items-center gap-2">
                <span className="w-6 h-px bg-[#D62839] inline-block" />
                Get in Touch
              </h4>

              <ul className="flex flex-col gap-3 text-sm text-[#F5F3EF]/50 w-fit">
                <li className="flex items-center gap-3 min-w-0">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-[#D62839]/10 border border-[#D62839]/30 flex items-center justify-center text-[#FF6B7A]">
                    <FaEnvelope className="text-sm" />
                  </span>
                  <a
                    href="mailto:moheeddar324@gmail.com"
                    className="hover:text-[#FF6B7A] transition-colors duration-300 break-all min-w-0"
                  >
                    moheeddar324@gmail.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-[#D62839]/10 border border-[#D62839]/30 flex items-center justify-center text-[#FF6B7A]">
                    <FaPhone className="text-sm" />
                  </span>
                  <a
                    href="https://wa.me/923139837663"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#FF6B7A] transition-colors duration-300 whitespace-nowrap"
                  >
                    +92 313 9837663
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <span className="w-9 h-9 shrink-0 rounded-lg bg-[#D62839]/10 border border-[#D62839]/30 flex items-center justify-center text-[#FF6B7A]">
                    <FaMapMarkerAlt className="text-sm" />
                  </span>
                  <span className="text-left leading-snug">Pakistan — Available Worldwide</span>
                </li>
              </ul>

              {/* CTA button */}
              <a
                href="mailto:moheeddar324@gmail.com"
                className="mt-1 inline-flex items-center justify-center gap-2 bg-[#D62839] text-[#F5F3EF] text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#FF6B7A] hover:text-[#0D0B0B] hover:shadow-[0_8px_25px_rgba(214,40,57,0.4)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                <FaPaperPlane className="text-xs" />
                Let's Work Together
              </a>
            </div>
          </div>

          {/* ===== Divider ===== */}
          <div className="my-8 sm:my-10 h-px w-full bg-gradient-to-r from-transparent via-[#D62839]/40 to-transparent" />

          {/* ===== Bottom Bar ===== */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-center text-[11px] sm:text-xs md:text-sm text-[#F5F3EF]/40">
            <p>
              © {year} <span className="font-logo font-bold text-[#FF6B7A]">Moheed Dar</span>. All rights reserved.
            </p>

            <p className="flex items-center justify-center gap-1.5 flex-wrap">
              Designed &amp; Developed with
              <FaHeart className="text-[#D62839] animate-pulse" />
              by <span className="text-[#F5F3EF]/70 font-medium">Moheed Dar</span>
            </p>
          </div>
        </div>

        {/* Styles */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap');

          .font-body { font-family: 'Inter', sans-serif; }
          .font-logo { font-family: 'Playfair Display', serif; }

          /* fade-up animation (Back to Top button ke liye) */
          @keyframes fade-up {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-up { animation: fade-up 0.4s ease-out both; }

          /* Motion kam pasand karne walon ke liye */
          @media (prefers-reduced-motion: reduce) {
            .animate-fade-up, .animate-pulse { animation: none; }
          }
        `}</style>
      </footer>

      {/* ============ BACK TO TOP ============ */}
      {showTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to Top"
          style={{
            bottom: 'max(1.25rem, env(safe-area-inset-bottom))',
            right: 'max(1.25rem, env(safe-area-inset-right))',
          }}
          className="fixed z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#D62839] text-[#F5F3EF] flex items-center justify-center shadow-[0_10px_30px_rgba(214,40,57,0.5)] hover:bg-[#FF6B7A] hover:text-[#0D0B0B] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer animate-fade-up"
        >
          <FaArrowUp className="text-base sm:text-lg" />
        </button>
      )}
    </>
  );
};

export default Footer;