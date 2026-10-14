import { useEffect, useState } from "react";
import img from "../Assets/heroimg/img12.png";
import img13 from "../Assets/heroimg/img15.png";
import img14 from "../Assets/heroimg/img14.png";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGithub, FaLinkedin, FaTwitter,
  FaArrowRight, FaDownload, FaMapMarkerAlt, FaEnvelopeOpenText,
  FaBriefcase, FaProjectDiagram,
  FaReact, FaNodeJs, FaJs, FaDatabase, FaGitAlt,
  FaHtml5, FaCss3Alt, FaSass, FaDocker, FaMicrosoft,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { Element } from "react-scroll";

/* ---------- Data ---------- */
const socials = [
  { icon: FaGithub, href: "https://github.com/Moheed-Dar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/moheeddar", label: "LinkedIn" },
  { icon: FaTwitter, href: "https://twitter.com/moheeddar", label: "Twitter" },
];

const techStack = [
  { icon: FaReact, name: "React.js" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: FaMicrosoft, name: ".NET" },
  { icon: FaJs, name: "JavaScript" },
  { icon: FaDatabase, name: "MongoDB" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaSass, name: "Sass" },
  { icon: FaDocker, name: "Docker" },
];

const stats = [
  { icon: FaProjectDiagram, value: "10+", label: "Projects Done" },
  { icon: FaLinkedin, value: "11K+", label: "LinkedIn Followers" },
  { icon: FaBriefcase, value: "2+", label: "Years Exp." },
];

/* ---------- 3 Images — smooth crossfade ke liye ---------- */
const heroImages = [
  { src: img, alt: "Moheed Dar" },
  { src: img13, alt: "Moheed Dar 2" },
  { src: img14, alt: "Moheed Dar 3" },
];

const HeroSection = () => {
  /* Active image ka index — 0, 1, 2 */
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  /* Auto slideshow — har 4 sec mein agli image
     activeImg dependency se manual click ke baad timer reset ho jata hai */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [activeImg]);

  return (
    <Element name="Home">
      <section
        id="Home"
        className="relative min-h-screen bg-[#0D0B0B] text-[#F5F3EF] font-body overflow-hidden flex flex-col"
      >
        {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#D6283912_1px,transparent_1px),linear-gradient(to_bottom,#D6283912_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_25%,transparent_70%)]" />
          <div className="absolute -left-44 top-1/4 w-[520px] h-[520px] bg-[#D62839]/15 blur-[160px] rounded-full" />
          <div className="absolute -right-44 bottom-0 w-[460px] h-[460px] bg-[#D62839]/10 blur-[160px] rounded-full" />
        </div>

        {/* ================= VERTICAL SOCIAL RAIL (Desktop) ================= */}
        <div
          data-aos="fade-right"
          className="hidden lg:flex absolute left-8 bottom-28 z-20 flex-col items-center gap-5"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
              <Icon className="text-xl opacity-50 hover:opacity-100 hover:text-[#FF6B7A] hover:drop-shadow-[0_0_8px_rgba(214,40,57,0.8)] hover:scale-125 transition-all duration-300" />
            </a>
          ))}
          <div className="w-px h-20 bg-gradient-to-b from-[#D62839]/70 to-transparent" />
        </div>

        {/* ================= SCROLL INDICATOR (Desktop) ================= */}
        <div className="hidden lg:flex absolute right-10 bottom-28 z-20 flex-col items-center gap-3">
          <span
            className="text-[10px] tracking-[0.45em] uppercase opacity-40"
            style={{ writingMode: "vertical-rl" }}
          >
            Scroll Down
          </span>
          <div className="w-px h-16 bg-gradient-to-b from-[#D62839]/70 to-transparent" />
        </div>

        {/* ================= MAIN — SPLIT LAYOUT ================= */}
        <main className="relative z-10 flex-1 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-10 px-6 md:px-16 lg:px-20 pt-32 pb-16 lg:pt-36 lg:pb-20">

          {/* ---------- LEFT: Intro ---------- */}
          <div className="w-full lg:w-[56%] flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Availability badge */}
            <div
              data-aos="fade-up"
              className="inline-flex items-center gap-2.5 border border-[#D62839]/40 bg-[#D62839]/10 px-4 py-2 rounded-full text-xs tracking-wide"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B7A] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B7A]" />
              </span>
              Available for Work
            </div>

            {/* Eyebrow */}
            <p
              data-aos="fade-up"
              className="mt-7 flex items-center gap-3 text-[13px] tracking-[0.35em] uppercase opacity-50"
            >
              <span className="w-8 h-px bg-[#D62839]" />
              Hello, I am
            </p>

            {/* Name */}
            <h1
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-3 font-logo font-bold text-5xl md:text-6xl xl:text-7xl leading-[1.15] tracking-tight"
            >
              Moheed <span className="text-blood-gradient">Dar</span>
            </h1>

            {/* Typewriter — .NET roles bhi included */}
            <div data-aos="fade-up" data-aos-delay="200" className="mt-4">
              <TypeAnimation
                className="text-lg md:text-xl font-medium text-[#FF6B7A]"
                sequence={[
                  "Full Stack Developer", 2000,
                  "MERN Stack Developer", 2000,
                  "Next.js Developer", 2000,
                  ".NET Developer", 2000,
                  "ASP.NET Core & C#", 2000
                ]}
                wrapper="span"
                speed={80}
                repeat={Infinity}
                cursor={true}
              />
            </div>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-6 max-w-xl text-[15px] md:text-base leading-[1.9] opacity-65"
            >
              I build fast, scalable and pixel-perfect web applications — from
              clean frontend interfaces to robust backend systems. Turning
              complex problems into simple, beautiful solutions.
            </p>

            {/* Meta Row */}
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-7 gap-y-2.5 mt-7 text-sm opacity-70"
            >
              <span className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#D62839]" /> Islamabad, PK
              </span>
              <span className="flex items-center gap-2">
                <FaEnvelopeOpenText className="text-[#D62839]" /> moheeddar324@gmail.com
              </span>
            </div>

            {/* CTA Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-9"
            >
              <a
                href="#Projects"
                className="group inline-flex items-center gap-2 bg-[#D62839] text-[#F5F3EF] font-semibold px-7 py-3 rounded-full shadow-[0_10px_30px_rgba(214,40,57,0.35)] hover:bg-[#F5F3EF] hover:text-[#0D0B0B] transition-all duration-300"
              >
                Explore My Work
                <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </a>
              <a
                href="https://drive.google.com/file/d/1KaLZEL-gqJMMoJmkP3sVRTKxRaNXSGju/view?usp=drive_link"
                download
                className="inline-flex items-center gap-2 border border-white/15 text-[#F5F3EF] font-semibold px-7 py-3 rounded-full hover:border-[#D62839]/60 hover:bg-[#D62839]/10 transition-all duration-300"
              >
                <FaDownload /> Download CV
              </a>
            </div>

            {/* Socials — mobile/tablet only */}
            <div className="flex lg:hidden gap-3 mt-9" data-aos="fade-up" data-aos-delay="600">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-full border border-[#D62839]/40 bg-[#D62839]/10 hover:bg-[#D62839] transition-all duration-300"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>

            {/* Stats */}
            <div
              data-aos="fade-up"
              data-aos-delay="700"
              className="flex items-center gap-8 md:gap-12 mt-12 pt-8 border-t border-white/10 w-full max-w-xl justify-center lg:justify-start"
            >
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-[#D62839]/10 border border-[#D62839]/30 flex items-center justify-center">
                    <Icon className="text-[#FF6B7A]" />
                  </div>
                  <div>
                    <p className="font-display font-bold text-2xl text-blood-gradient">{value}</p>
                    <p className="text-[11px] uppercase tracking-wider opacity-50 mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------- RIGHT: Visual (3-image crossfade) ---------- */}
          <div data-aos="fade-left" className="relative w-full lg:w-[44%] flex justify-center">
            <div className="relative w-72 sm:w-80 md:w-96">

              {/* Soft red glow behind image */}
              <div className="absolute inset-10 bg-[#D62839] blur-[110px] opacity-30 rounded-full z-0" />

              {/* Offset frame */}
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-full rounded-b-3xl border border-[#D62839]/40 z-0" />

              {/* Arch-shaped container — teeno images stacked, crossfade hongi */}
              <div className="relative rounded-t-full rounded-b-3xl overflow-hidden border border-[#D62839]/50 shadow-[0_25px_70px_rgba(214,40,57,0.25)] z-10 h-[24rem] md:h-[30rem]">

                {heroImages.map((image, i) => (
                  <img
                    key={i}
                    src={image.src}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${
                      i === activeImg ? "opacity-100 scale-100" : "opacity-0 scale-105"
                    }`}
                  />
                ))}

                {/* Bottom fade */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0D0B0B] to-transparent pointer-events-none" />

                {/* Slide dots — click karke manually image badlo */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      aria-label={`Show image ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        i === activeImg
                          ? "w-7 bg-[#FF6B7A]"
                          : "w-1.5 bg-white/40 hover:bg-white/70"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating chip — React (top-left) */}
              <div className="absolute -left-3 sm:-left-7 top-16 z-20 flex items-center gap-2 bg-[#151111]/90 backdrop-blur border border-[#D62839]/40 rounded-full px-4 py-2 text-sm shadow-lg animate-float">
                <FaReact className="text-[#FF6B7A]" /> React.js
              </div>

              {/* Floating chip — .NET (bottom-left) ✨ NEW */}
              <div
                className="absolute -left-3 sm:-left-7 bottom-16 z-20 flex items-center gap-2 bg-[#151111]/90 backdrop-blur border border-[#D62839]/40 rounded-full px-4 py-2 text-sm shadow-lg animate-float"
                style={{ animationDelay: "3s" }}
              >
                <FaMicrosoft className="text-[#FF6B7A]" /> .NET
              </div>

              {/* Floating chip — Node (bottom-right) */}
              <div
                className="absolute -right-3 sm:-right-7 bottom-16 z-20 flex items-center gap-2 bg-[#151111]/90 backdrop-blur border border-[#D62839]/40 rounded-full px-4 py-2 text-sm shadow-lg animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <FaNodeJs className="text-[#FF6B7A]" /> Node.js
              </div>
            </div>
          </div>
        </main>

        {/* ================= TECH MARQUEE STRIP ================= */}
        <div className="relative z-10 border-t border-white/5 bg-white/[0.02] py-5 overflow-hidden">
          <div className="flex w-max gap-14 animate-marquee">
            {[...techStack, ...techStack].map(({ icon: Icon, name }, i) => (
              <span
                key={i}
                className="flex items-center gap-2.5 text-sm whitespace-nowrap opacity-60 hover:opacity-100 transition-opacity"
              >
                <Icon className="text-[#D62839] text-lg" />
                {name}
                <span className="w-1 h-1 rounded-full bg-[#D62839]/60 ml-8" />
              </span>
            ))}
          </div>
        </div>

        {/* ================= STYLES ================= */}
        <style>{`
          /* ---------- Fonts: Syne + Inter + Playfair Display ---------- */
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@600;700;800&display=swap');

          .font-display { font-family: 'Syne', sans-serif; }
          .font-body { font-family: 'Inter', sans-serif; }
          .font-logo { font-family: 'Playfair Display', serif; }

          /* ---------- Name gradient ---------- */
          .text-blood-gradient {
            background: linear-gradient(115deg, #F5F3EF 0%, #FF6B7A 45%, #D62839 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 0 18px rgba(214, 40, 57, 0.35));
          }

          /* ---------- Infinite tech marquee ---------- */
          @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .animate-marquee { animation: marquee 30s linear infinite; }
          .animate-marquee:hover { animation-play-state: paused; }

          /* ---------- Soft floating badges ---------- */
          @keyframes float-soft { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .animate-float { animation: float-soft 4.5s ease-in-out infinite; }

          ::selection { background: #D62839; color: #F5F3EF; }
        `}</style>
      </section>
    </Element>
  );
};

export default HeroSection;