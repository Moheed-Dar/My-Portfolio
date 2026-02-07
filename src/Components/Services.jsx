import React from 'react'
import ServicesData from '../Database/ServicesData'
import { Element } from 'react-scroll';
import { ArrowUpRight, Sparkles } from 'lucide-react'; // Install lucide-react for icons

const Services = () => {
    return (
        <Element name="Services">
            <section id="Services" className="relative md:m-8 mt-10 md:py-20 py-12 rounded-3xl bg-[#0A0A0A] overflow-hidden">
                {/* Animated Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#59ffa0]/5 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#59ffa0]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#59ffa0]/[0.02] via-transparent to-transparent"></div>
                </div>

                {/* Section Header */}
                <div className="relative z-10 px-4">
                    <div className="flex items-center justify-center gap-2 mb-4" data-aos="fade-down">
                        <Sparkles className="w-5 h-5 text-[#59ffa0] animate-pulse" />
                        <span className="text-[#59ffa0] text-sm font-medium tracking-widest uppercase">What I Offer</span>
                        <Sparkles className="w-5 h-5 text-[#59ffa0] animate-pulse" />
                    </div>
                    
                    <h2 
                        data-aos="zoom-in" 
                        className="text-center text-3xl md:text-5xl font-bold mb-6 cursor-none text-white relative inline-block w-full"
                    >
                        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59ffa0] to-[#00d4ff]">Services</span>
                    </h2>
                    
                    <div className="flex justify-center mb-12" data-aos="fade-up">
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#59ffa0] to-transparent rounded-full shadow-[0_0_20px_rgba(89,255,160,0.5)]"></div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className='relative z-10 grid md:grid-cols-3 grid-cols-1 gap-6 px-4 md:px-12 max-w-7xl mx-auto'>
                    {ServicesData.map((item, index) => (
                        <div 
                            data-aos="fade-up" 
                            data-aos-delay={index * 100}
                            key={item.id} 
                            className='group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-[#171717] to-[#0f0f0f] border border-white/5 hover:border-[#59ffa0]/30 transition-all duration-500 hover:-translate-y-2'
                        >
                            {/* Glow Effect on Hover */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#59ffa0]/0 to-[#00d4ff]/0 group-hover:from-[#59ffa0]/10 group-hover:to-[#00d4ff]/5 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-xl"></div>
                            
                            {/* Card Content */}
                            <div className="relative z-10">
                                {/* Icon Container */}
                                <div className="relative mb-6 inline-block">
                                    <div className="absolute inset-0 bg-[#59ffa0]/20 rounded-xl blur-lg group-hover:bg-[#59ffa0]/40 transition-all duration-500"></div>
                                    <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 flex items-center justify-center group-hover:border-[#59ffa0]/50 transition-all duration-500 group-hover:scale-110">
                                        <img 
                                            className='w-8 h-8 object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-500' 
                                            src={item.img} 
                                            alt={item.name}
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className='text-white font-bold text-xl md:text-2xl mb-3 group-hover:text-[#59ffa0] transition-colors duration-300'>
                                    {item.name}
                                </h3>

                                {/* Description */}
                                <p className='text-gray-400 font-medium text-sm md:text-base leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300'>
                                    {item.details}
                                </p>

                                {/* Action Button */}
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                                    <button className="w-full cursor-pointer group/btn relative overflow-hidden rounded-lg bg-[#1a1a1a] border border-white/10 hover:border-[#59ffa0]/50 p-4 transition-all duration-300 hover:shadow-[0_0_30px_rgba(89,255,160,0.2)]">
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#59ffa0]/0 via-[#59ffa0]/10 to-[#59ffa0]/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700"></div>
                                        <span className="relative flex items-center justify-center gap-2 text-gray-300 font-semibold group-hover/btn:text-[#59ffa0] transition-colors duration-300">
                                            Read More
                                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                        </span>
                                    </button>
                                </a>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#59ffa0]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Decoration */}
                <div className="relative z-10 mt-16 flex justify-center">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <div className="w-2 h-2 rounded-full bg-[#59ffa0] animate-pulse"></div>
                        <span>Ready to start your project</span>
                    </div>
                </div>
            </section>

            {/* Custom Styles for additional animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </Element>
    )
}

export default Services