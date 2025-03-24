import img1 from "../Assets/aboutimg/portfolio1.png";
import img from "../Assets/aboutimg/portfolio.png";
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa"
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {

    return (
        <>
            <div className="bg-gradient-to-b from-black via-gray-600 to-green-000   px-10 mb-5 pt-10 flex flex-col items-center text-white relative">
                {/* Heading */}
                <div data-aos="fade-down"
                    data-aos-duration="2000" className="text-center  mt-15  mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        I'm <span className="text-[#59ffa0] italic">Moheed Dar</span>
                    </h1>
                   
                        <TypeAnimation
                            className=" text-3xl  md:text-4xl mt-2 font-bold border-[#373C46] text-red-300 px-4 py-1 rounded-lg inline-block"
                            sequence={[
                                "Full Stack",
                                2000,
                                "MERN Stack",
                                2000,
                                "Javascript+Typescript",
                                3000,
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                            cursor={true}
                        /><br/>
                         <h2 className="text-3xl md:text-4xl mt-2 font-bold">
                        Developer
                    </h2>
                </div>

                {/* Image + Gradient + Info Boxes */}
                <div data-aos="fade-right" data-aos-duration="1000" className="relative flex items-center justify-center w-full">
                    {/* Left Box (Client Review) */}
                    <div className="absolute left-[-30%] top-5  mt-30 md:block hidden rotate-15  md:left-15 bg-[#222222c4] p-4 rounded-lg shadow-lg w-45  md:w-56 border border-gray-600">
                        <h3 className="text-md font-semibold">Turning Ideas into Reality</h3>
                        <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                            5.0
                        </span>
                        <p className="text-sm opacity-80 mt-2">
                            From a blank screen to a fully functional product—let the transformation begin.
                        </p>
                    </div>

                    {/* Right Box (Expertise) */}
                    <div data-aos="fade-up-left" data-aos-duration="1000" className="absolute right-[10%] me-10 top-0  hidden md:block md:right-0 -rotate-15 p-4 rounded-lg shadow-lg w-48 md:w-56 border bg-[#2222229c] border-gray-600">
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
                <div className="relative flex justify-center">
                    {/* Blue Glow Effect */}
                    <div className="absolute bottom-0 w-80 h-80 md:w-96 md:h-96 bg-[#59ffa0] opacity-40 blur-3xl rounded-full z-0"></div>

                    {/* Image */}
                    <img
                        data-aos="zoom-in-up"
                        data-aos-duration="1000"
                        src={img}
                        alt="Moheed Dar"
                        className="relative w-48 md:w-56 rounded-bl-full rounded-br-full object-cover z-10"
                    />
                </div>

                {/* Button & Social Icons */}
                <div className="relative flex flex-col items-center">
                    {/* Button */}
                    <button
                        id="movingGradientButton"
                        className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 
               bg-[#EAF888] text-black font-semibold px-5 py-2 
               rounded-full shadow-lg z-20 
               hover:scale-110 transition-transform duration-300 
               border-2 border-transparent hover:border-white"
                    >
                        <span className="relative z-10">Visit My Portfolio</span>
                    </button>

                    {/* Social Icons */}
                    <div className="flex md:gap-5 gap-3 ">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-white text-3xl hover:text-gray-400 transition-colors" />
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-white text-3xl hover:text-blue-400 transition-colors" />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-white text-3xl hover:text-blue-600 transition-colors" />
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-white text-3xl hover:text-blue-600 transition-colors" />
                        </a>
                    </div>
                </div>

            </div>
        </>
    );
};

export default HeroSection;
