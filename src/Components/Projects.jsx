import React, { useEffect, useState, useRef } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Projectdata from '../Database/ProjectData'
import AOS from 'aos'
import "aos/dist/aos.css";
import Skillsbar from './Skillsbar'
import { Element } from 'react-scroll';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Layers, Code2, Star, Zap, Eye, X, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});
  const sliderRef = useRef(null);
  
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });
    
    return () => {
      AOS.refresh();
    };
  }, []);

  const toggleExpand = (index, e) => {
    e.stopPropagation();
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const openModal = (item) => {
    setSelectedProject(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 -right-2 md:-right-16 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#59ffa0]/30 flex items-center justify-center text-[#59ffa0] hover:bg-[#59ffa0] hover:text-black hover:border-[#59ffa0] hover:shadow-[0_0_30px_rgba(89,255,160,0.6)] transition-all duration-500 hover:scale-110 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-1 transition-transform" />
      </button>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 -translate-y-1/2 -left-2 md:-left-16 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#59ffa0]/30 flex items-center justify-center text-[#59ffa0] hover:bg-[#59ffa0] hover:text-black hover:border-[#59ffa0] hover:shadow-[0_0_30px_rgba(89,255,160,0.6)] transition-all duration-500 hover:scale-110 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-1 transition-transform" />
      </button>
    );
  };

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
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        }
      }
    ],
    appendDots: dots => (
      <div className="mt-12">
        <ul className="flex justify-center gap-3"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <button 
        className={`relative w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-500 ${i === activeSlide ? 'bg-[#59ffa0] w-8 md:w-12 shadow-[0_0_20px_rgba(89,255,160,0.8)]' : 'bg-white/20 hover:bg-white/40 hover:scale-125'}`}
        aria-label={`Go to slide ${i + 1}`}
      >
        {i === activeSlide && (
          <span className="absolute inset-0 rounded-full bg-[#59ffa0] animate-ping opacity-75"></span>
        )}
      </button>
    )
  };

  if (!Projectdata || Projectdata.length === 0) {
    return (
      <Element name="Projects">
        <section className="py-20 bg-[#0A0A0A] text-center text-white">
          <p>No projects found.</p>
        </section>
      </Element>
    );
  }

  return (
    <Element name="Projects">
      <section id="Projects" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:40px_40px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[500px] w-[500px] rounded-full bg-[#59ffa0]/10 opacity-20 blur-[100px] animate-pulse"></div>
          <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 opacity-20 blur-[100px] animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-[1400px]">
          {/* Ultra Modern Header */}
          <div className="text-center mb-16 md:mb-24" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f0f0f] border border-[#59ffa0]/30 mb-6 md:mb-8 shadow-[0_0_20px_rgba(89,255,160,0.1)] hover:shadow-[0_0_30px_rgba(89,255,160,0.2)] transition-shadow duration-500">
              <Star className="w-4 h-4 text-[#59ffa0] animate-spin-slow" />
              <span className="text-[#59ffa0] text-sm font-bold tracking-widest uppercase">Selected Works</span>
              <Star className="w-4 h-4 text-[#59ffa0] animate-spin-slow" />
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
              <span className="inline-block hover:scale-105 transition-transform duration-300">My</span>{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59ffa0] via-[#00d4ff] to-[#59ffa0] animate-gradient bg-300%">
                  Creative
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#59ffa0]/50" viewBox="0 0 200 9" fill="none">
                  <path d="M2.00025 6.99997C25.7509 9.37499 85.6264 5.87449 198.501 2.12525" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>{' '}
              <span className="inline-block hover:scale-105 transition-transform duration-300">Projects</span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Transforming ideas into elegant, functional digital experiences that make an impact
            </p>
            
            <div className="flex justify-center items-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#59ffa0]/50"></div>
              <Zap className="w-5 h-5 text-[#59ffa0] animate-pulse" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#59ffa0]/50"></div>
            </div>
          </div>

          {/* Premium Slider */}
          <div className="relative px-4 md:px-12" data-aos="fade-up" data-aos-delay="200">
            <Slider ref={sliderRef} {...settings}>
              {Projectdata.map((item, index) => (
                <div key={index} className="px-2 md:px-4 pb-8 outline-none transition-all duration-500">
                  <div 
                    className={`
                      group relative h-full transition-all duration-500 ease-out
                      ${index === activeSlide ? 'scale-100 z-20' : 'scale-90 z-10 opacity-70'}
                    `}
                  >
                    {/* Card Container */}
                    <div 
                      className={`
                        relative h-full rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-500
                        ${index === activeSlide 
                          ? 'bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                          : 'bg-gradient-to-br from-blue-900/40 to-blue-950/40 border-2 border-blue-500/30 shadow-[0_10px_30px_rgba(0,0,255,0.2)] blur-[1px]'
                        }
                        hover:border-[#59ffa0]/50
                      `}
                    >
                      {/* Blue Overlay for Side Cards */}
                      {index !== activeSlide && (
                        <div className="absolute inset-0 bg-blue-600/20 z-10 pointer-events-none"></div>
                      )}

                      {/* Image Container */}
                      <div className="relative h-40 md:h-48 overflow-hidden">
                        <div className={`
                          absolute inset-0 z-10 opacity-80
                          ${index === activeSlide 
                            ? 'bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent' 
                            : 'bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent'
                          }
                        `}></div>
                        
                        <img
                          className={`
                            h-full w-full object-cover transition-all duration-700
                            ${index === activeSlide ? 'group-hover:scale-110' : 'grayscale-[30%] brightness-75'}
                          `}
                          src={item.image}
                          alt={item.name || 'Project'}
                          loading="lazy"
                        />
                        
                        {/* Hover Overlay */}
                        {index === activeSlide && (
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center gap-4 backdrop-blur-md">
                            <div className="flex gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                              {item.link && (
                                <a href={item.link} target='_blank' rel="noopener noreferrer" 
                                  className="flex items-center gap-2 px-5 py-2.5 bg-[#59ffa0] text-black font-bold rounded-full hover:scale-110 hover:shadow-[0_0_30px_rgba(89,255,160,0.6)] transition-all duration-300 text-sm">
                                  <Eye className="w-4 h-4" />
                                  <span>View Live</span>
                                </a>
                              )}
                              {item.gitlink && (
                                <a href={item.gitlink} target="_blank" rel="noopener noreferrer"
                                  className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/30 hover:bg-white/20 hover:scale-110 transition-all duration-300 text-sm">
                                  <Github className="w-4 h-4" />
                                  <span>Code</span>
                                </a>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Status Badge */}
                        {item.state && index === activeSlide && (
                          <div className="absolute top-3 right-3 z-30">
                            <div className="relative">
                              <div className="absolute inset-0 bg-[#59ffa0] blur-lg opacity-50"></div>
                              <span className="relative px-3 py-1 text-xs font-bold rounded-full bg-[#59ffa0]/20 text-[#59ffa0] border border-[#59ffa0]/50 backdrop-blur-md flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#59ffa0] animate-pulse"></span>
                                {item.state}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="relative p-4 md:p-6">
                        <div className="flex items-start justify-between mb-2 md:mb-3">
                          <h3 className={`
                            text-lg md:text-xl font-bold line-clamp-1 transition-all duration-300
                            ${index === activeSlide 
                              ? 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#59ffa0] group-hover:to-[#00d4ff]' 
                              : 'text-blue-200'
                            }
                          `}>
                            {item.name}
                          </h3>
                          <div className={`
                            p-1.5 rounded-lg transition-colors duration-300
                            ${index === activeSlide ? 'bg-white/5 group-hover:bg-[#59ffa0]/20' : 'bg-blue-500/20'}
                          `}>
                            <Code2 className={`
                              w-4 h-4 transition-colors duration-300
                              ${index === activeSlide ? 'text-gray-400 group-hover:text-[#59ffa0]' : 'text-blue-400'}
                            `} />
                          </div>
                        </div>
                        
                        {/* Description with Read More */}
                        <div className="mb-3 md:mb-4">
                          <p className={`
                            text-xs md:text-sm leading-relaxed transition-all duration-300
                            ${index === activeSlide ? 'text-gray-400 group-hover:text-gray-300' : 'text-blue-300/70'}
                            ${expandedCards[index] ? '' : 'line-clamp-2'}
                          `}>
                            {item.details}
                          </p>
                          
                          {/* Read More / Show Less Button */}
                          {item.details && item.details.length > 80 && index === activeSlide && (
                            <button
                              onClick={(e) => toggleExpand(index, e)}
                              className="mt-2 flex cursor-pointer items-center gap-1 text-[10px] md:text-xs font-semibold text-[#59ffa0] hover:text-[#00d4ff] transition-colors duration-300 group/btn"
                            >
                              <span>{expandedCards[index] ? 'Show Less' : 'Read More'}</span>
                              {expandedCards[index] ? (
                                <ChevronUp className="w-3 h-3 group-hover/btn:-translate-y-0.5 transition-transform" />
                              ) : (
                                <ChevronDown className="w-3 h-3 group-hover/btn:translate-y-0.5 transition-transform" />
                              )}
                            </button>
                          )}
                        </div>
                        
                        {/* Tech Stack */}
                        {item.technology && (
                          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                            {item.technology.split(',').slice(0, 4).map((tech, i) => (
                              <span 
                                key={i} 
                                className={`
                                  px-2 py-1 text-[10px] md:text-xs font-semibold rounded-md border transition-all duration-300
                                  ${index === activeSlide 
                                    ? 'bg-gradient-to-r from-[#59ffa0]/10 to-[#00d4ff]/10 text-[#59ffa0] border-[#59ffa0]/20 hover:border-[#59ffa0]/50' 
                                    : 'bg-blue-500/10 text-blue-300 border-blue-500/30'
                                  }
                                `}
                              >
                                {tech.trim()}
                              </span>
                            ))}
                            {item.technology.split(',').length > 4 && (
                              <span 
                                onClick={() => openModal(item)}
                                className={`
                                  px-2 py-1 text-[10px] md:text-xs font-semibold rounded-md cursor-pointer hover:scale-105 transition-transform
                                  ${index === activeSlide ? 'bg-white/5 text-gray-400 hover:text-[#59ffa0]' : 'bg-blue-500/10 text-blue-400'}
                                `}
                              >
                                +{item.technology.split(',').length - 4}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Progress Bar */}
                        {index === activeSlide && (
                          <div className="relative">
                            <div className="flex justify-between text-[10px] md:text-xs text-gray-500 mb-1 font-medium">
                              <span>Completion</span>
                              <span className="text-[#59ffa0]">100%</span>
                            </div>
                            <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                              <div className="relative h-full bg-gradient-to-r from-[#59ffa0] to-[#00d4ff] rounded-full w-full">
                                <div className="absolute inset-0 bg-white/40 animate-[shimmer_2s_infinite]"></div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8" data-aos="fade-up" data-aos-delay="400">
            {[
              { value: '23+', label: 'Projects Delivered', icon: Zap },
              { value: '99%', label: 'Client Satisfaction', icon: Star },
              { value: '24/7', label: 'Support', icon: Eye },
              { value: '100%', label: 'Quality Code', icon: Code2 }
            ].map((stat, index) => (
              <div key={index} className="group relative p-6 md:p-8 rounded-2xl bg-[#0f0f0f] border border-white/5 hover:border-[#59ffa0]/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#59ffa0]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <stat.icon className="w-8 h-8 text-[#59ffa0] mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                <div className="text-3xl md:text-4xl font-black text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#59ffa0] group-hover:to-[#00d4ff] transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Skillsbar/>
      </section>

      {/* Modal for Full Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" onClick={closeModal}>
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-3xl border border-[#59ffa0]/30 shadow-[0_0_50px_rgba(89,255,160,0.3)] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-[#59ffa0] text-white hover:text-black transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Image */}
              <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {selectedProject.name}
              </h3>

              {/* State Badge */}
              {selectedProject.state && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full bg-[#59ffa0]/20 text-[#59ffa0] border border-[#59ffa0]/50 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#59ffa0] animate-pulse"></span>
                  {selectedProject.state}
                </span>
              )}

              {/* Full Description */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-[#59ffa0] mb-2 uppercase tracking-wider">Description</h4>
                <p className="text-gray-300 leading-relaxed">
                  {selectedProject.details}
                </p>
              </div>

              {/* Tech Stack */}
              {selectedProject.technology && (
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-[#59ffa0] mb-2 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technology.split(',').map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#59ffa0]/10 to-[#00d4ff]/10 text-[#59ffa0] border border-[#59ffa0]/20"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                {selectedProject.link && (
                  <a 
                    href={selectedProject.link} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#59ffa0] text-black font-bold rounded-xl hover:scale-105 hover:shadow-[0_0_30px_rgba(89,255,160,0.4)] transition-all duration-300"
                  >
                    <Eye className="w-5 h-5" />
                    View Live Project
                  </a>
                )}
                {selectedProject.gitlink && (
                  <a 
                    href={selectedProject.gitlink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-300\% {
          background-size: 300% 100%;
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .slick-slide {
          transition: all 0.5s ease;
        }
        .slick-list {
          overflow: visible !important;
          padding: 40px 0 !important;
        }
        .slick-track {
          display: flex !important;
          align-items: center !important;
        }
        .slick-slide > div {
          height: 100%;
        }
        @media (min-width: 1024px) {
          .slick-slide {
            width: 450px !important;
          }
        }
        @media (max-width: 768px) {
          .slick-slide {
            opacity: 1 !important;
            filter: none !important;
            transform: scale(1) !important;
          }
        }
      `}</style>
    </Element>
  )
}

export default Projects