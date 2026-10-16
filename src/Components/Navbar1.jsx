import React, { useState } from 'react';
import img from '../Assets/navbarimg/moheed1.png';
import styled from 'styled-components';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { useNavigate, useLocation } from 'react-router-dom';

/* ---------- Nav links data ---------- */
const navLinks = [
  { name: 'Home', to: '/', section: 'Home' },
  { name: 'About', to: '/', section: 'Aboutus' },
  { name: 'Services', to: '/', section: 'Services' },
  { name: 'Skills', to: '/skills' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contacts' },
];

/* ---------- Custom navigation hook ---------- */
const useNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (link) => {
    if (link.section) {
      // Section home page par hai
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          document
            .getElementById(link.section)
            ?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
      } else {
        document
          .getElementById(link.section)
          ?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Alag page hai
      navigate(link.to);
    }
  };

  return goTo;
};

/* ---------- HIRE ME button (red theme) ---------- */
const StyledWrapper = styled.div`
  button {
    position: relative;
    width: 9em;
    height: 3.2em;
    outline: none;
    transition: 0.1s;
    background-color: transparent;
    border: none;
    font-size: 13px;
    font-weight: bold;
    color: #F5F3EF;
  }

  #clip {
    --color: #D62839;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 5px double var(--color);
    box-shadow: inset 0px 0px 15px rgba(214, 40, 57, 0.4);
    -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  }

  .arrow {
    position: absolute;
    transition: 0.2s;
    background-color: #D62839;
    top: 35%;
    width: 11%;
    height: 30%;
  }

  #leftArrow {
    left: -13.5%;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
  }

  #rightArrow {
    -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
    left: 102%;
  }

  button:hover #rightArrow {
    background-color: #FF6B7A;
    left: -15%;
    animation: 0.6s ease-in-out both infinite alternate rightArrow8;
  }

  button:hover #leftArrow {
    background-color: #FF6B7A;
    left: 103%;
    animation: 0.6s ease-in-out both infinite alternate leftArrow8;
  }

  .corner {
    position: absolute;
    width: 4em;
    height: 4em;
    transform: scale(1) rotate(45deg);
    transition: 0.2s;
  }

  #rightTop { top: -1.98em; left: 91%; }
  #leftTop { top: -1.96em; left: -3.0em; }
  #leftBottom { top: 2.10em; left: -2.15em; }
  #rightBottom { top: 45%; left: 88%; }

  button:hover #leftTop {
    animation: 0.1s ease-in-out 0.05s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }
  button:hover #rightTop {
    animation: 0.1s ease-in-out 0.15s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }
  button:hover #rightBottom {
    animation: 0.1s ease-in-out 0.25s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }
  button:hover #leftBottom {
    animation: 0.1s ease-in-out 0.35s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  button:hover .corner {
    transform: scale(1.25) rotate(45deg);
  }

  button:hover #clip {
    animation: 0.2s ease-in-out 0.55s both redLight8;
    --color: #FF6B7A;
  }

  @keyframes changeColor8 {
    from { background-color: #D62839; }
    to { background-color: #FF6B7A; }
  }

  @keyframes lightEffect8 {
    from { box-shadow: 1px 1px 5px #FF6B7A; }
    to { box-shadow: 0 0 2px #FF6B7A; }
  }

  @keyframes redLight8 {
    to { box-shadow: inset 0px 0px 32px #FF6B7A; }
  }

  @keyframes leftArrow8 {
    from { transform: translate(0px); }
    to { transform: translateX(10px); }
  }

  @keyframes rightArrow8 {
    from { transform: translate(0px); }
    to { transform: translateX(-10px); }
  }
`;

const Navbar1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);
  const goTo = useNav();
  const location = useLocation();

  /* Active link check */
  const isActive = (link) => {
    if (link.section === 'Home') return location.pathname === '/';
    if (link.section) return false;
    return location.pathname === link.to;
  };

  return (
    <>
      <div className="w-full fixed top-0 z-50 bg-[#0D0B0B]/85 backdrop-blur-lg border-b border-[#D62839]/25">
        <div className="max-w-7xl mx-auto flex items-center justify-between lg:justify-around px-4 sm:px-6 md:px-8 h-16 md:h-20">

          {/* Logo */}
          <div className="flex items-center cursor-pointer shrink-0">
            <img
              onClick={() => goTo({ to: '/' })}
              className="w-28 md:w-32 object-contain"
              src={img}
              alt="Moheed Dar Logo"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-7 font-display text-sm tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.to}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(link);
                }}
                className={`cursor-pointer relative group transition-colors duration-300 ${
                  isActive(link)
                    ? 'text-[#FF6B7A]'
                    : 'text-[#F5F3EF]/70 hover:text-[#FF6B7A]'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-[#D62839] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* HIRE ME button (desktop) */}
          <div className="hidden lg:block shrink-0">
            <StyledWrapper>
              <button
                onClick={() => goTo({ to: '/contacts' })}
                className="cursor-pointer font-medium"
              >
                HIRE ME
                <div id="clip">
                  <div id="leftTop" className="corner" />
                  <div id="rightBottom" className="corner" />
                  <div id="rightTop" className="corner" />
                  <div id="leftBottom" className="corner" />
                </div>
                <span id="rightArrow" className="arrow" />
                <span id="leftArrow" className="arrow" />
              </button>
            </StyledWrapper>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[#F5F3EF] hover:text-[#FF6B7A] transition-colors"
            onClick={openMenu}
            aria-label="Open menu"
          >
            <TiThMenu size={26} />
          </button>
        </div>
      </div>

      {/* ===== Mobile side menu ===== */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-500 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      <ul
        className={`lg:hidden flex flex-col gap-1 py-16 px-8 text-[#F5F3EF] font-body font-medium text-lg fixed top-0 bottom-0 right-0 w-64 z-[70] bg-[#151111] border-l border-[#D62839]/30 transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          className="absolute right-5 top-5 text-[#F5F3EF]/70 hover:text-[#FF6B7A] transition-colors"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <RxCross2 size={26} />
        </button>

        {navLinks.map((link) => (
          <li key={link.name} className="border-b border-white/5 last:border-0">
            <a
              href={link.to}
              onClick={(e) => {
                e.preventDefault();
                closeMenu();
                goTo(link);
              }}
              className={`block py-3.5 hover:text-[#FF6B7A] hover:pl-2 transition-all duration-300 cursor-pointer ${
                isActive(link) ? 'text-[#FF6B7A]' : ''
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}

        {/* Mobile HIRE ME */}
        <li className="mt-6">
          <button
            onClick={() => {
              closeMenu();
              goTo({ to: '/contacts' });
            }}
            className="w-full text-center bg-[#D62839] text-[#F5F3EF] font-semibold py-3 rounded-full hover:bg-[#FF6B7A] hover:text-[#0D0B0B] transition-all duration-300 cursor-pointer"
          >
            HIRE ME
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navbar1;