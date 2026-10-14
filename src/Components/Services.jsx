import React from 'react';
import ServicesData from '../Database/ServicesData';
import { Element } from 'react-scroll';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const Services = () => {
    return (
        <Element name="Services">
            <section
                id="Services"
                className="relative bg-[#0D0B0B] font-body overflow-hidden py-24 px-6"
            >
                {/* ================= BACKGROUND (hero jaisa) ================= */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Grid pattern */}
                    <div className="absolute inset-0 opacity-[0.06]" style={{
                        backgroundImage: "linear-gradient(#D62839 1px, transparent 1px), linear-gradient(90deg, #D62839 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    }} />
                    {/* Soft glows */}
                    <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#D62839]/15 blur-[160px] rounded-full" />
                    <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] bg-[#D62839]/10 blur-[160px] rounded-full" />
                </div>

                {/* Giant outline text background */}
                <h2
                    className="absolute top-6 left-1/2 -translate-x-1/2 font-display text-[16vw] md:text-[10rem] font-extrabold leading-none text-transparent select-none pointer-events-none"
                    style={{ WebkitTextStroke: "1px rgba(214,40,57,0.25)" }}
                >
                    SERVICES
                </h2>

                {/* ================= SECTION HEADER ================= */}
                <div className="relative z-10 px-4 flex flex-col items-center">
                    {/* Badge */}
                    <div className="flex items-center gap-4" data-aos="zoom-in">
                        <span className="h-px w-12 bg-[#D62839]" />
                        <span className="text-[#FF6B7A] text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                            What I Offer
                        </span>
                        <span className="h-px w-12 bg-[#D62839]" />
                    </div>

                    {/* Heading */}
                    <h2
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        className="mt-5 font-display text-center text-4xl md:text-6xl font-extrabold text-[#F5F3EF]"
                    >
                        My <span className="text-blood-gradient">Services</span>
                    </h2>

                    {/* Sub-text */}
                    <p data-aos="fade-up" className="mt-5 max-w-xl text-center text-sm md:text-base text-[#F5F3EF]/60 leading-[1.9]">
                        From idea to deployment — complete web solutions with clean
                        code, modern design and production-ready performance.
                    </p>
                </div>

                {/* ================= SERVICES GRID ================= */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-16 px-2 md:px-8">
                    {ServicesData.map((item, index) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            key={item.id}
                            className="group relative p-7 md:p-8 rounded-3xl bg-[#151111] border border-[#D62839]/20 hover:border-[#D62839]/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(214,40,57,0.25)]"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#D62839]/0 to-transparent group-hover:from-[#D62839]/10 transition-all duration-500 opacity-0 group-hover:opacity-100 blur-xl pointer-events-none" />

                            <div className="relative z-10">
                                {/* Icon container */}
                                <div className="relative mb-6 inline-block">
                                    <div className="absolute inset-0 bg-[#D62839]/25 rounded-2xl blur-lg group-hover:bg-[#D62839]/50 transition-all duration-500" />
                                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1F1515] to-[#141010] border border-[#D62839]/30 flex items-center justify-center group-hover:border-[#D62839]/70 group-hover:scale-110 transition-all duration-500">
                                        <img
                                            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-500"
                                            src={item.img}
                                            alt={item.name}
                                        />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-[#F5F3EF] font-bold text-xl md:text-2xl mb-3 group-hover:text-[#FF6B7A] transition-colors duration-300">
                                    {item.name}
                                </h3>

                                {/* Description */}
                                <p className="text-[#F5F3EF]/55 text-sm md:text-[15px] leading-[1.8] mb-6 group-hover:text-[#F5F3EF]/75 transition-colors duration-300">
                                    {item.details}
                                </p>

                                {/* Action button */}
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <button className="w-full cursor-pointer group/btn relative overflow-hidden rounded-full border border-[#D62839]/40 bg-[#D62839]/10 p-3.5 transition-all duration-300 hover:bg-[#D62839] hover:border-[#D62839] hover:shadow-[0_10px_30px_rgba(214,40,57,0.4)]">
                                        <span className="relative flex items-center justify-center gap-2 text-sm font-semibold text-[#F5F3EF]/80 group-hover/btn:text-[#F5F3EF] transition-colors duration-300">
                                            Read More
                                            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                                        </span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= BOTTOM LINE ================= */}
                <div className="relative z-10 mt-16 flex justify-center" data-aos="fade-up">
                    <div className="flex items-center gap-2.5 text-[#F5F3EF]/45 text-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B7A] opacity-60" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B7A]" />
                        </span>
                        Ready to start your project — let's build something great together.
                    </div>
                </div>

                {/* ================= STYLES (hero jaisi fonts) ================= */}
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

                    ::selection { background: #D62839; color: #F5F3EF; }
                `}</style>
            </section>
        </Element>
    );
};

export default Services;