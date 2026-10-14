import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projectdata from '../Database/ProjectData';
import AOS from 'aos';
import "aos/dist/aos.css";
import Skillsbar from './Skillsbar';
import { Element } from 'react-scroll';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Star, Eye, X, ChevronDown, ChevronUp, FolderGit2, Activity, TrendingUp, Briefcase } from 'lucide-react';

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50, easing: 'ease-out-cubic' });
    return () => AOS.refresh();
  }, []);

  const toggleExpand = (index, e) => {
    e.stopPropagation();
    setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const openModal = (item) => {
    setSelectedProject(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  /* ---------- Slider Arrows ---------- */
  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      aria-label="Next slide"
      className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-16 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#151111]/90 backdrop-blur border border-[#D62839]/40 flex items-center justify-center text-[#FF6B7A] hover:bg-[#D62839] hover:text-[#F5F3EF] hover:border-[#D62839] hover:shadow-[0_0_30px_rgba(214,40,57,0.6)] transition-all duration-500 hover:scale-110 group"
    >
      <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      aria-label="Previous slide"
      className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-16 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#151111]/90 backdrop-blur border border-[#D62839]/40 flex items-center justify-center text-[#FF6B7A] hover:bg-[#D62839] hover:text-[#F5F3EF] hover:border-[#D62839] hover:shadow-[0_0_30px_rgba(214,40,57,0.6)] transition-all duration-500 hover:scale-110 group"
    >
      <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-1 transition-transform" />
    </button>
  );

  /* ---------- Slider Settings ---------- */
  const settings = {
    dots: true,
    infinite: Projectdata.length > 3,
    speed: 800,
    centerPadding: '0px',
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3, centerMode: true } },
      { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: true } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: true, centerPadding: '40px' } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: true, centerPadding: '20px' } },
      { breakpoint: 480, settings: { slidesToShow: 1, centerMode: false, arrows: false } },
    ],
    appendDots: dots => (
      <div className="mt-12">
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <button
        aria-label={`Go to slide ${i + 1}`}
        className={`relative rounded-full transition-all duration-500 ${
          i === activeSlide
            ? 'bg-[#D62839] w-8 md:w-12 h-3 md:h-4 shadow-[0_0_20px_rgba(214,40,57,0.8)]'
            : 'bg-white/20 hover:bg-white/40 w-3 md:w-4 h-3 md:h-4 hover:scale-125'
        }`}
      >
        {i === activeSlide && (
          <span className="absolute inset-0 rounded-full bg-[#D62839] animate-ping opacity-60" />
        )}
      </button>
    ),
  };

  if (!Projectdata || Projectdata.length === 0) {
    return (
      <Element name="Projects">
        <section className="py-20 bg-[#0D0B0B] text-center text-[#F5F3EF]">
          <p>No projects found.</p>
        </section>
      </Element>
    );
  }

  return (
    <Element name="Projects">
      <section id="Projects" className="relative py-24 md:py-32 bg-[#0D0B0B] font-body overflow-hidden">

        {/* ================= BACKGROUND (hero jaisa) ================= */}
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

        {/* Giant outline text */}
        <h2
          className="absolute top-8 left-1/2 -translate-x-1/2 font-display text-[16vw] md:text-[10rem] font-extrabold leading-none text-transparent select-none pointer-events-none"
          style={{ WebkitTextStroke: "1px rgba(214,40,57,0.25)" }}
        >
          WORK
        </h2>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-[1400px]">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center" data-aos="fade-up">
            {/* Badge */}
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#D62839]" />
              <span className="text-[#FF6B7A] text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                Selected Works
              </span>
              <span className="h-px w-12 bg-[#D62839]" />
            </div>

            {/* Heading */}
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold text-[#F5F3EF] tracking-tight">
              My <span className="text-blood-gradient">Creative</span> Projects
            </h2>

            {/* Sub-text */}
            <p className="mt-5 max-w-xl text-sm md:text-base text-[#F5F3EF]/55 leading-[1.9]">
              Real production apps — from real estate platforms and e-commerce
              to a complete Hospital Management System.
            </p>

            {/* Divider */}
            <div className="flex items-center gap-3 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D62839]/60" />
              <Star className="w-4 h-4 text-[#FF6B7A] animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D62839]/60" />
            </div>
          </div>

          {/* ================= SLIDER ================= */}
          <div className="relative px-4 md:px-12" data-aos="fade-up" data-aos-delay="200">
            <Slider ref={sliderRef} {...settings}>
              {Projectdata.map((item, index) => (
                <div key={index} className="px-2 md:px-4 pb-8 outline-none">
                  <div
                    className={`group relative h-full transition-all duration-500 ease-out ${
                      index === activeSlide ? 'scale-100 z-20' : 'scale-90 z-10 opacity-60 blur-[1px]'
                    }`}
                  >
                    {/* Card */}
                    <div
                      className={`relative h-full rounded-3xl overflow-hidden transition-all duration-500 bg-[#151111] ${
                        index === activeSlide
                          ? 'border border-[#D62839]/50 shadow-[0_25px_60px_rgba(214,40,57,0.25)]'
                          : 'border border-white/5'
                      } group-hover:border-[#D62839]/70`}
                    >
                      {/* Image */}
                      <div className="relative h-44 md:h-52 overflow-hidden">
                        <img
                          className={`h-full w-full object-cover transition-all duration-700 ${
                            index === activeSlide ? 'group-hover:scale-110' : 'grayscale-[40%] brightness-75'
                          }`}
                          src={item.image}
                          alt={item.name || 'Project'}
                          loading="lazy"
                        />
                        {/* Fade */}
                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#151111] to-transparent" />

                        {/* Status Badge */}
                        {item.state && index === activeSlide && (
                          <div className="absolute top-3 right-3 z-30">
                            <div className="relative">
                              <div className="absolute inset-0 bg-[#D62839] blur-lg opacity-50" />
                              <span className="relative px-3 py-1 text-xs font-bold rounded-full bg-[#0D0B0B]/80 text-[#FF6B7A] border border-[#D62839]/60 backdrop-blur-md flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B7A] animate-pulse" />
                                {item.state}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="relative p-5 md:p-6">
                        <h3
                          onClick={() => openModal(item)}
                          className={`font-display text-lg md:text-xl font-bold cursor-pointer transition-colors duration-300 ${
                            index === activeSlide ? 'text-[#F5F3EF] group-hover:text-[#FF6B7A]' : 'text-[#F5F3EF]/70'
                          }`}
                        >
                          {item.name}
                        </h3>

                        {/* Description + Read More */}
                        <p
                          className={`mt-2.5 text-xs md:text-sm leading-[1.8] transition-colors duration-300 ${
                            index === activeSlide ? 'text-[#F5F3EF]/55' : 'text-[#F5F3EF]/40'
                          } ${expandedCards[index] ? '' : 'line-clamp-2'}`}
                        >
                          {item.details}
                        </p>

                        {item.details && item.details.length > 80 && index === activeSlide && (
                          <button
                            onClick={(e) => toggleExpand(index, e)}
                            className="mt-2 flex cursor-pointer items-center gap-1 text-[11px] font-semibold text-[#FF6B7A] hover:text-[#F5F3EF] transition-colors duration-300"
                          >
                            <span>{expandedCards[index] ? 'Show Less' : 'Read More'}</span>
                            {expandedCards[index]
                              ? <ChevronUp className="w-3 h-3" />
                              : <ChevronDown className="w-3 h-3" />}
                          </button>
                        )}

                        {/* Tech Stack */}
                        {item.technology && (
                          <div className="flex flex-wrap gap-1.5 md:gap-2 mt-4">
                            {item.technology.split(',').slice(0, 4).map((tech, i) => (
                              <span
                                key={i}
                                className={`px-2.5 py-1 text-[10px] md:text-xs font-semibold rounded-full border transition-all duration-300 ${
                                  index === activeSlide
                                    ? 'bg-[#D62839]/10 text-[#FF6B7A] border-[#D62839]/40'
                                    : 'bg-white/5 text-[#F5F3EF]/50 border-white/10'
                                }`}
                              >
                                {tech.trim()}
                              </span>
                            ))}
                            {item.technology.split(',').length > 4 && (
                              <span
                                onClick={() => openModal(item)}
                                className="px-2.5 py-1 text-[10px] md:text-xs font-semibold rounded-full cursor-pointer bg-white/5 text-[#F5F3EF]/60 hover:text-[#FF6B7A] transition-colors"
                              >
                                +{item.technology.split(',').length - 4}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Action Buttons — mobile par bhi kaam karte hain (hover ki zaroorat nahi) */}
                        <div className="flex gap-3 mt-5">
                          {item.link && (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#D62839] text-[#F5F3EF] text-xs md:text-sm font-semibold hover:bg-[#FF6B7A] hover:text-[#0D0B0B] hover:shadow-[0_10px_30px_rgba(214,40,57,0.4)] transition-all duration-300"
                            >
                              <Eye className="w-4 h-4" /> Live
                            </a>
                          )}
                          {item.gitlink && (
                            <a
                              href={item.gitlink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-white/15 text-[#F5F3EF]/80 text-xs md:text-sm font-semibold hover:border-[#D62839]/60 hover:bg-[#D62839]/10 hover:text-[#F5F3EF] transition-all duration-300"
                            >
                              <Github className="w-4 h-4" /> Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <Skillsbar />
      </section>

      {/* ================= MODAL ================= */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm" onClick={closeModal}>
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#151111] rounded-3xl border border-[#D62839]/50 shadow-[0_0_60px_rgba(214,40,57,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-[#D62839] text-white hover:text-[#F5F3EF] transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8 font-body">
              {/* Image */}
              <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-6">
                <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#151111] to-transparent" />
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F5F3EF]">{selectedProject.name}</h3>

              {/* State */}
              {selectedProject.state && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 mt-3 text-xs font-bold rounded-full bg-[#D62839]/15 text-[#FF6B7A] border border-[#D62839]/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B7A] animate-pulse" />
                  {selectedProject.state}
                </span>
              )}

              {/* Description */}
              <div className="mt-6">
                <h4 className="text-xs font-bold text-[#FF6B7A] mb-2 uppercase tracking-[0.3em]">Description</h4>
                <p className="text-[#F5F3EF]/70 leading-[1.9] text-sm md:text-base">{selectedProject.details}</p>
              </div>

              {/* Tech Stack */}
              {selectedProject.technology && (
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-[#FF6B7A] mb-3 uppercase tracking-[0.3em]">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technology.split(',').map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 text-xs md:text-sm font-semibold rounded-full bg-[#D62839]/10 text-[#FF6B7A] border border-[#D62839]/30">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#D62839] text-[#F5F3EF] font-semibold rounded-full hover:bg-[#FF6B7A] hover:text-[#0D0B0B] hover:scale-105 transition-all duration-300"
                  >
                    <Eye className="w-5 h-5" /> View Live
                  </a>
                )}
                {selectedProject.gitlink && (
                  <a
                    href={selectedProject.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-white/15 text-[#F5F3EF] font-semibold rounded-full hover:border-[#D62839]/60 hover:bg-[#D62839]/10 hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" /> View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= STYLES ================= */}
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

        /* Slider fixes */
        .slick-list { overflow: visible !important; padding: 30px 0 !important; }
        .slick-track { display: flex !important; align-items: center !important; }
        .slick-slide > div { height: 100%; }
        .slick-slide { transition: all 0.5s ease; }
        @media (max-width: 768px) {
          .slick-slide { opacity: 1 !important; filter: none !important; transform: none !important; }
        }

        ::selection { background: #D62839; color: #F5F3EF; }
      `}</style>
    </Element>
  );
};

export default Projects;