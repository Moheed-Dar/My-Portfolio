import img from "../Assets/heroimg/img12.png";
import img13 from "../Assets/heroimg/img15.png";
import img14 from "../Assets/heroimg/img14.png";

import { useEffect, useState, useRef } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    FiDownload, FiChevronDown, FiCode, FiCheckCircle,
    FiTrendingUp, FiCpu, FiServer, FiBookOpen, FiStar,
} from "react-icons/fi";
import { Element } from "react-scroll";

gsap.registerPlugin(ScrollTrigger);

const Aboutus = () => {
    const sectionRef = useRef(null);
    const imgWrapRef = useRef(null);
    const mainImgRef = useRef(null);

    /* Active image ka index — 0, 1, 2 */
    const [activeImg, setActiveImg] = useState(0);

    /* Sirf 5 MAJOR skills — experience ke neeche show hongi */
    const majorSkills = ["React.js", "Next.js", "Node.js", "MongoDB", "TypeScript"];

    /* ---------- 3 Images — hero jaisa smooth crossfade ---------- */
    const aboutImages = [
        { src: img14, alt: "Moheed Dar 3" },
        { src: img13, alt: "Moheed Dar 2" },
        { src: img, alt: "Moheed Dar" }


    ];

    const experience = [
        { role: "Full-Stack Developer", company: "Veclar Technologies", period: "Apr 2026 — Present", place: "Islamabad · Onsite", current: true },
        { role: "Full-Stack Developer", company: "NSAi · VC Technologies", period: "Jun 2025 — Apr 2026", place: "Islamabad · Onsite", current: false },
        { role: "Full-Stack Intern", company: "DevelopersHub Corporation", period: "May — Jun 2025", place: "Punjab · Pakistan", current: false },
        { role: "Frontend Developer", company: "Rhombix Technologies", period: "Jan 2024 — Mar 2025", place: "Pakistan", current: false },
    ];

    const highlights = [
        { icon: <FiCheckCircle />, text: "99.9% uptime — serving thousands of users in production" },
        { icon: <FiTrendingUp />, text: "MongoDB optimization — 30% faster response times" },
        { icon: <FiCpu />, text: "AI-powered products using embeddings & log analysis" },
        { icon: <FiServer />, text: "Full lifecycle: build → deploy (Vercel / Hostinger) → maintain" },
    ];

    const stats = [
        { value: "2+", label: "Years Experience" },
        { value: "4", label: "Companies Worked With" },
        { value: "99.9%", label: "Production Uptime" },
    ];

    useEffect(() => {
        AOS.init({ duration: 1000, once: false });

        const ctx = gsap.context(() => {
            // 1) Pura image section — entrance
            gsap.from(imgWrapRef.current, {
                opacity: 0, scale: 0.85, y: 50,
                duration: 1.2, ease: "power3.out",
                scrollTrigger: { trigger: imgWrapRef.current, start: "top 85%" },
            });

            // 2) Main image — hamesha float karta rahega
            gsap.to(mainImgRef.current, {
                y: -18, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1,
            });

            // 3) Red frame — "saans leta hua" effect
            gsap.set(".red-frame", { x: 8, y: 8 });
            gsap.to(".red-frame", {
                x: 18, y: 18, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1,
            });

            // 4) Polaroid images — float + rotate
            gsap.to(".polaroid-1", { y: 16, rotate: "-=6", duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1 });
            gsap.to(".polaroid-2", { y: -16, rotate: "+=6", duration: 3.5, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 0.6 });

            // 5) Badge — pop in hoke aayega
            gsap.from(".float-badge", {
                scale: 0, duration: 0.9, ease: "back.out(2.5)",
                scrollTrigger: { trigger: imgWrapRef.current, start: "top 70%" },
            });

            // 6) Scroll parallax — section scroll par image peeche khisakti hai
            gsap.to(".parallax-slow", {
                yPercent: 10, ease: "none",
                scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: 1.2 },
            });
        }, sectionRef);

        return () => ctx.revert(); // cleanup — StrictMode safe
    }, []);

    /* Auto slideshow — har 4 sec mein agli image
       activeImg dependency se manual click ke baad timer reset ho jata hai */
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveImg((prev) => (prev + 1) % aboutImages.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [activeImg]);

    return (
        <Element name="Aboutus">
            <section ref={sectionRef} id="Aboutus" className="relative bg-[#0D0B0B] text-[#F5F3EF] font-body py-24 px-6 overflow-hidden">

                {/* ===== Background (hero jaisa) ===== */}
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D62839]/15 rounded-full blur-[160px] pointer-events-none" />
                <div
                    className="absolute inset-0 opacity-[0.06] pointer-events-none"
                    style={{
                        backgroundImage: "linear-gradient(#D62839 1px, transparent 1px), linear-gradient(90deg, #D62839 1px, transparent 1px)",
                        backgroundSize: "80px 80px",
                        maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                        WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    }}
                />
                <h2
                    className="absolute top-4 left-1/2 -translate-x-1/2 font-display text-[18vw] md:text-[11rem] font-extrabold leading-none text-transparent select-none pointer-events-none"
                    style={{ WebkitTextStroke: "1px rgba(214,40,57,0.3)" }}
                >
                    ABOUT
                </h2>

                {/* ===== Heading ===== */}
                <div className="relative z-20 max-w-6xl mx-auto flex flex-col items-center">
                    <div data-aos="zoom-in" className="flex items-center gap-4">
                        <span className="h-px w-12 bg-[#D62839]" />
                        <span className="text-[#FF6B7A] tracking-[0.4em] text-xs md:text-sm font-bold uppercase">About Me</span>
                        <span className="h-px w-12 bg-[#D62839]" />
                    </div>
                    <h2 data-aos="zoom-in" className="mt-5 font-display text-4xl md:text-6xl font-extrabold text-center">
                        WHO <span className="text-blood-gradient">AM I</span> ?
                    </h2>

                    {/* ===== Two columns ===== */}
                    <div className="mt-20 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center w-full">

                        {/* LEFT — GSAP animated images + 3-image crossfade */}
                        <div ref={imgWrapRef} className="relative flex justify-center lg:justify-start">
                            <div className="parallax-slow relative w-full max-w-lg">

                                {/* Offset breathing red frame */}
                                <div className="red-frame absolute inset-0 border border-[#D62839]/50 rounded-3xl pointer-events-none z-0" />

                                {/* Main image — gradient border wrapper */}
                                <div
                                    ref={mainImgRef}
                                    className="relative z-10 rounded-3xl p-[2px] bg-gradient-to-br from-[#FF6B7A]/50 via-[#D62839]/25 to-transparent shadow-[0_25px_70px_rgba(214,40,57,0.25)]"
                                >
                                    {/* Inner container — fixed height, teeno images stacked crossfade */}
                                    <div className="relative w-full h-[460px] md:h-[580px] rounded-3xl overflow-hidden bg-[#151111]">

                                        {aboutImages.map((image, i) => (
                                            <img
                                                key={i}
                                                src={image.src}
                                                alt={image.alt}
                                                className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-in-out ${i === activeImg ? "opacity-100 scale-100" : "opacity-0 scale-105"
                                                    }`}
                                            />
                                        ))}

                                        {/* Bottom fade — premium look */}
                                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0D0B0B] to-transparent pointer-events-none" />

                                        {/* Slide dots — click karke manually image badlo */}
                                        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                                            {aboutImages.map((_, i) => (
                                                <button
                                                    key={i}
                                                    onClick={() => setActiveImg(i)}
                                                    aria-label={`Show image ${i + 1}`}
                                                    className={`h-1.5 rounded-full transition-all duration-500 ${i === activeImg
                                                        ? "w-7 bg-[#FF6B7A] shadow-[0_0_10px_rgba(255,107,122,0.8)]"
                                                        : "w-1.5 bg-white/40 hover:bg-white/70"
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>


                                {/* Floating badge — gradient */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap z-30">
                                    <div className="float-badge flex items-center gap-2 bg-gradient-to-r from-[#D62839] to-[#B01E2E] text-[#F5F3EF] px-5 py-2.5 rounded-full text-sm font-semibold shadow-[0_10px_35px_rgba(214,40,57,0.5)]">
                                        <FiCode className="text-lg" />
                                        <span><span className="font-logo">Moheed Dar</span> — Full-Stack Developer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — content */}
                        <div data-aos="fade-left" data-aos-duration="1200" className="text-center lg:text-left">
                            <p className="text-[#F5F3EF]/80 leading-relaxed text-base md:text-lg">
                                I'm <span className="font-logo font-bold text-[#F5F3EF]">Moheed Dar</span>, a Full-Stack Developer with{" "}
                                <span className="text-[#FF6B7A] font-semibold">2+ years of professional experience</span> building
                                scalable web applications with{" "}
                                <span className="text-[#F5F3EF] font-semibold">MERN Stack &amp; Next.js</span> — from real-time
                                features (Socket.io) and secure RESTful APIs to pixel-perfect animated UIs with{" "}
                                <span className="text-[#FF6B7A] font-semibold">Tailwind, GSAP &amp; Framer Motion</span>.
                            </p>

                            <p className="mt-4 text-[#F5F3EF]/60 leading-relaxed">
                                I've shipped production apps for real estate, e-commerce &amp; healthcare — including{" "}
                                <span className="text-[#F5F3EF] font-semibold">AI-powered products</span>. Recent work:{" "}
                                <span className="text-[#FF6B7A] font-semibold">Leatonic</span>,{" "}
                                <span className="text-[#FF6B7A] font-semibold">Badder Furniture</span> &amp; a full{" "}
                                <span className="text-[#FF6B7A] font-semibold">Hospital Management System</span>. Currently
                                expanding into the <span className="text-[#F5F3EF] font-semibold">.NET ecosystem (C#, ASP.NET Core)</span>.
                            </p>

                            {/* Highlights */}
                            <div className="mt-7 grid sm:grid-cols-2 gap-3">
                                {highlights.map((h) => (
                                    <div key={h.text} className="flex items-start gap-2.5 text-sm text-[#F5F3EF]/75 bg-[#D62839]/10 border border-[#D62839]/30 rounded-xl px-3.5 py-3">
                                        <span className="text-[#FF6B7A] mt-0.5 shrink-0">{h.icon}</span>
                                        <span>{h.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Experience timeline */}
                            <h4 className="mt-8 text-xs font-bold tracking-[0.3em] text-[#FF6B7A] uppercase">Experience</h4>
                            <div className="mt-4">
                                {experience.map((e) => (
                                    <div key={e.company} className="relative border-l-2 border-[#D62839]/40 pl-5 pb-4 last:pb-0">
                                        <span className={`absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-[#0D0B0B] ${e.current ? "bg-[#D62839] animate-pulse" : "bg-[#D62839]/50"}`} />
                                        <p className="text-sm font-semibold text-[#F5F3EF]">
                                            {e.role} <span className="text-[#D62839]">·</span> <span className="font-normal text-[#F5F3EF]/80">{e.company}</span>
                                        </p>
                                        <p className="text-xs text-[#F5F3EF]/45 mt-0.5">{e.period} — {e.place}</p>
                                    </div>
                                ))}
                            </div>

                            {/* ===== Major Skills — sirf 5, experience ke neeche ===== */}
                            <h4 className="mt-8 text-xs font-bold tracking-[0.3em] text-[#FF6B7A] uppercase">Major Skills</h4>
                            <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2.5">
                                {majorSkills.map((skill, i) => (
                                    <span
                                        key={skill}
                                        data-aos="zoom-in"
                                        data-aos-delay={i * 80}
                                        className="flex items-center gap-1.5 px-4 py-1.5 text-sm rounded-full border border-[#D62839]/50 bg-[#D62839]/10 text-[#F5F3EF]/90 hover:bg-[#D62839] hover:border-[#D62839] transition duration-300 cursor-default"
                                    >
                                        <FiStar className="text-[#FF6B7A] text-xs" />
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Education */}
                            <div className="mt-7 flex items-center justify-center lg:justify-start gap-2.5 text-sm text-[#F5F3EF]/60">
                                <FiBookOpen className="text-[#FF6B7A] text-base shrink-0" />
                                <span>BS Information Technology — University of Agriculture, Peshawar <span className="text-[#F5F3EF]/40">(2021 — 2025)</span></span>
                            </div>

                            {/* Download CV */}
                            <a
                                href="https://drive.google.com/file/d/1KaLZEL-gqJMMoJmkP3sVRTKxRaNXSGju/view?usp=drive_link"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-block mt-8"
                            >
                                <button className="group relative cursor-pointer overflow-hidden rounded-full bg-[#D62839] px-8 py-3.5 font-semibold shadow-[0_10px_35px_rgba(214,40,57,0.4)] transition-transform duration-300 hover:scale-105">
                                    <span className="absolute inset-0 bg-[#F5F3EF] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                                    <span className="relative z-10 flex items-center gap-2 text-[#F5F3EF] group-hover:text-[#0D0B0B] transition-colors duration-300">
                                        Download CV
                                        <FiDownload className="text-lg" />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Stats bar */}
                    <div data-aos="fade-up" className="mt-24 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 rounded-2xl border border-[#D62839]/40 bg-[#D62839]/5 divide-y sm:divide-y-0 sm:divide-x divide-[#D62839]/40">
                        {stats.map((s) => (
                            <div key={s.label} className="flex flex-col items-center gap-1 py-7 px-4">
                                <span className="font-display text-2xl md:text-3xl font-bold text-blood-gradient">{s.value}</span>
                                <span className="text-xs md:text-sm text-[#F5F3EF]/50 text-center">{s.label}</span>
                            </div>
                        ))}
                    </div>

                    <FiChevronDown className="mt-12 text-[#D62839] text-3xl animate-bounce" />
                </div>

                {/* ===== Styles — hero jaisi fonts ===== */}
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

export default Aboutus;