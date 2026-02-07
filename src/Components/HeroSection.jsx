import { useEffect } from "react";
import img from "../Assets/aboutimg/img12.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation";
import { Element } from 'react-scroll';

const HeroSection = () => {
    useEffect(() => {
        AOS.init()
    })
    return (
        <Element name="Home" >
            <div id="Home" className="relative bg-[#050505] pb-10 px-15 rounded-b-2xl pt-10 md:pt-15 flex flex-col items-center text-white overflow-hidden">
                {/* New Background - Same as Projects/Contact */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                    
                    {/* Animated Orbs */}
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#59ffa0]/10 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                    
                    {/* Floating Particles */}
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-[#59ffa0]/40 rounded-full animate-float-particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${8 + Math.random() * 10}s`
                            }}
                        />
                    ))}
                </div>

                {/* Heading */}
                <div data-aos="fade-down"
                    data-aos-duration="2000" className="text-center mt-15 mb-10 relative z-10">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        I'm <span className="text-[#59ffa0] italic">Moheed Dar</span>
                    </h1>
                    <TypeAnimation
                        className="text-3xl md:text-4xl mt-2 font-bold border-[#373C46] text-red-300 px-4 py-1 rounded-lg inline-block"
                        sequence={[
                            "Full Stack",
                            2000,
                            "MERN Stack",
                            2000,
                            "Next.js",
                            2000,
                            "Javascript+Typescript",
                            3000,
                        ]}
                        wrapper="span"
                        speed={20}
                        repeat={Infinity}
                        cursor={true}
                    /><br />
                    <h2 className="text-3xl md:text-4xl mt-2 font-bold">
                        Developer
                    </h2>
                </div>
                {/* Image + Gradient + Info Boxes */}
                <div data-aos="fade-right" data-aos-duration="1000" className="relative flex items-center justify-center w-full z-10">
                    {/* Left Box (Client Review) */}
                    <div className="absolute left-[-30%] top-15 mt-10 md:block hidden -rotate-15 md:left-10 bg-[#222222c4] p-4 rounded-lg shadow-lg w-45 md:w-56 border border-gray-600">
                        <h3 className="text-md font-semibold">Turning Ideas into Reality</h3>
                        <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                            5.0
                        </span>
                        <p className="text-sm opacity-80 mt-2">
                            From a blank screen to a fully functional product—let the transformation begin.
                        </p>
                    </div>
                    {/* hire me svg*/}
                    <div className="absolute w-15 left-58 top-44 h-15 bg-[#a4e4c09c] rounded-full border-2 border-yellow-400 hidden md:flex items-center justify-center animate-pump cursor-pointer">
                        {/* Rotating Text */}
                        <svg viewBox="0 0 100 100" className="w-full h-full absolute pointer-events-auto">
                            <defs>
                                <path id="circlePath" d="M 50,50 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" />
                            </defs>
                            <text className="font-bold text-gray-600" fontSize="13">
                                <textPath xlinkHref="#circlePath" startOffset="0%"> HIRE ME • HIRE ME • HIRE ME • HIRE ME </textPath>
                            </text>
                        </svg>
                        {/* Center Icon */}
                        <span className="text-yellow-400 text-lg">✈️</span>
                    </div>
                    {/* md > screen div1 */}
                    <div className="absolute left-[-16%] top-50 border sm:ms-15 md:hidden block -rotate-15 bg-[#222222c4] p-4 sm:p-5 rounded-full shadow-lg border-gray-600 overflow-hidden">
                        <h1 className="text-md text-center font-semibold">Product Designer</h1>
                    </div>
                    {/* md> screen div 2 */}
                    <div data-aos="fade-up-left" data-aos-duration="1000" className="absolute right-[-19%] sm:me-15 me-2 top-10 block md:hidden -rotate-15 sm:p-5 p-4 rounded-full shadow-lg w-42 border bg-[#2222229c] border-gray-600">
                        <h3 className="text-md text-center font-semibold">UI/UX Designer</h3>
                    </div>
                    {/* Right Box */}
                    <div data-aos="fade-up-left" data-aos-duration="1000" className="absolute right-[10%] me-1 lg:me-10 mt-10 top-15 hidden md:block md:right-0 rotate-15 p-4 rounded-lg shadow-lg w-48 md:w-56 border bg-[#2222229c] border-gray-600">
                        <h3 className="text-md text-center font-semibold">MY EXPERTISE</h3>
                        <div className="mt-2">
                            <p className="flex justify-between text-sm mt-2">
                                <span>FRONTEND</span> <span>80%</span>
                            </p>
                            <div className="w-full h-1 bg-gray-600 rounded-full mt-1">
                                <div className="h-full bg-green-500 w-[85%] rounded-full"></div>
                            </div>
                            <p className="flex justify-between text-sm">
                                <span>BACKEND</span> <span>70%</span>
                            </p>
                            <div className="w-full h-1 bg-gray-600 rounded-full mt-1">
                                <div className="h-full bg-blue-500 w-[70%] rounded-full"></div>
                            </div>

                            <p className="flex justify-between text-sm mt-2">
                                <span>CMS</span> <span>55%</span>
                            </p>
                            <div className="w-full h-1 bg-gray-600 rounded-full mt-1">
                                <div className="h-full bg-purple-500 w-[55%] rounded-full"></div>
                            </div>

                        </div>
                    </div>

                </div>
                {/* Image with Gradient Background */}
                <div className="relative flex justify-center w-full h-96 md:h-110 overflow-visible z-10">
                    {/* Blue Glow Effect */}
                    <div className="absolute bottom-0 w-80 h-80 md:w-96 md:h-96 bg-[#59ffa0] opacity-40 blur-3xl rounded-full z-0"></div>

                    {/* Image */}
                    <img
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        src={img}
                        alt="Moheed Dar"
                        className="relative w-70 md:w-80 rounded-bl-full rounded-br-full object-cover z-10"
                    />
                </div>
                {/* Button & Social Icons */}
                <div className="relative flex flex-col items-center z-10">
                    {/* Button */}
                    <a href="#Aboutus">
                        <button
                            id="movingGradientButton"
                            className="absolute top-[20%] cursor-pointer left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               bg-[#EAF888] text-black font-semibold px-5 py-2 
               rounded-full shadow-lg z-20 
               hover:scale-110 transition-transform duration-300 
               border-2 border-transparent hover:border-white"
                        >
                            <span className="relative z-10">Visit My Portfolio</span>
                        </button>
                    </a>
                    {/* Social Icons */}
                    <div className="flex md:gap-5 gap-3">
                        <a href="https://github.com/Moheed-Dar" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-white text-3xl hover:text-gray-400 transition-colors" />
                        </a>
                        <a href="https://twitter.com/moheeddar" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-white text-3xl hover:text-blue-400 transition-colors" />
                        </a>
                        <a href="https://linkedin.com/in/moheeddar" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-white text-3xl hover:text-blue-600 transition-colors" />
                        </a>
                    </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#59ffa0]/50 to-transparent z-10"></div>

                {/* Custom Styles */}
                <style jsx>{`
                    @keyframes float-particle {
                        0%, 100% { 
                            transform: translateY(0) translateX(0); 
                            opacity: 0;
                        }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { 
                            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); 
                            opacity: 0;
                        }
                    }
                    .animate-float-particle {
                        animation: float-particle linear infinite;
                    }
                `}</style>
            </div>
        </Element>
    );
};

export default HeroSection;