import img from "../Assets/aboutimg/portfolio.png";
import React from "react";

const HeroSection = () => {
    return (
        <>
            <div className="bg-[#171717] m-20 px-10 mb-10 pt-10 flex flex-col items-center text-white relative">
                {/* Heading */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        I'm <span className="text-[#EAF888] italic">Moheed Dar</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl mt-2 font-bold">
                        <span className="border-2 border-gray-400 px-4 py-1 rounded-lg inline-block">
                            Full Stack
                        </span>{" "}
                        Developer
                    </h2>
                </div>

                {/* Image + Gradient + Info Boxes */}
                <div className="relative flex items-center justify-center w-full">
                    {/* Left Box (Client Review) */}
                    <div className="absolute left-[-10%] top-5 md:block hidden rotate-15  md:left-0 bg-[#222] p-4 rounded-lg shadow-lg w-45  md:w-56 border border-gray-600">
                        <h3 className="text-md font-semibold">Client Review From Australia</h3>
                        <span className="bg-purple-500 text-white text-xs px-2 py-0.5 rounded-full ml-2">
                            5.0
                        </span>
                        <p className="text-sm opacity-80 mt-2">
                            Outstanding Web Developer, Exceeded All Expectations. Highly
                            Recommended Without Hesitation.
                        </p>
                    </div>

                    {/* Image with Gradient Background */}
                    <div className="relative flex justify-center">
                        {/* Blue Glow Effect */}
                        <div className="absolute bottom-1 w-72 h-72 md:w-116 md:h-116 bg-[#59ffa0] opacity-50 blur-3xl rounded-full z-0"></div>

                        {/* Image */}
                        <img
                            src={img} // Replace with actual image
                            alt="Moheed Dar"
                            className="relative w-45 md:w-55  rounded-lg object-cover z-10"
                        />
                    </div>

                    {/* Right Box (Expertise) */}
                    <div className="absolute right-[10%] me-10 top-0  hidden md:block md:right-0 -rotate-15 p-4 rounded-lg shadow-lg w-48 md:w-56 border border-gray-600">
                        <h3 className="text-md font-semibold">MY EXPERTISE</h3>
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

                {/* Button */}
                <button className="absolute bottom-[0px] border-1 border-gray-500 bg-[#EAF888] text-black px-6 py-2 rounded-full font-semibold z-20">
                    My Projects
                </button>
            </div>
        </>
    );
};

export default HeroSection;
