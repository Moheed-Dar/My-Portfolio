import React from "react";
import img2 from "../Assets/aboutimg/img2.jpg";
import img4 from "../Assets/aboutimg/img4.jpg";
import img5 from "../Assets/aboutimg/img5.jpg";
import { FiChevronDown } from "react-icons/fi";
const Aboutus = () => {
    return (
        <section className="relative bg-[#0A0A0A] md:m-8 mt-10 rounded-2xl text-white py-16 px-5 flex flex-col items-center">
            <div className="max-w-3xl  text-center md:text-lg   text-sm relative z-20 mix-blend-difference">
                <h2 data-aos="zoom-in" data-aos-duration="1000" className="text-3xl md:text-4xl md:pb-5 pb-3 font-bold text-[#f5ff9a]">
                    WHO AM I ?
                </h2>
                <div className="md:m-0 mx-10" >
                    <p className="text-gray-300 mt-4 leading-relaxed">
                        I am a Full-Stack Engineer 🖱️ specialized in <b className="text-white " >React.js, Tailwind CSS, TypeScript, Node.js, MongoDB, and <span className="text-green-400" >GSAP</span> </b>. I enjoy crafting engaging and scalable <span className="text-white font-semibold" >Web Applications</span>.
                    </p>
                    <p className="text-gray-400 mt-4">
                        Programming is my <span className="text-white font-semibold" >passion</span>, which is why I am constantly working on projects to enhance my <span className="text-white font-semibold" >Skills</span>.
                    </p>
                    <p className="text-gray-400 mt-4">
                        In my free time, I  playing games, and reading tech-related books.
                    </p>
                </div>

                {/* Button */}
                <div className="flex flex-col items-center">
                    {/* Button */}
                    <button
                        id="movingGradientButton"
                        className="mt-6 md:px-6 md:py-3 px-5 py-2 text-black font-semibold rounded-full shadow-lg overflow-hidden relative transition-transform duration-300 hover:scale-105"
                    >
                        <span className="relative z-10">VISIT MY PORTFOLIO</span>
                    </button>

                    {/* Animated Down Arrow */}
                    <FiChevronDown className="mt-2 text-white text-3xl animate-bounce" />
                </div>
            </div>



            {/* Floating Images with Shadows */}
            <div className="relative w-full mt-5 flex justify-center">
                {/* Top Image (Always Visible) */}
                <img
                    src={img2}
                    alt="Floating Image"
                    className="md:w-47 md:h-59  w-38 h-50 rounded-lg shadow-[0px_0px_30px_rgba(255,255,255,0.3)] md:shadow[0px_0px_40px_rgba(255,255,255,0.3)] transform rotate-6 hover:rotate-0 hover:scale-110 transition duration-300 ease-in-out hover:border-1 hover:border-[#59ffa0] " />
            </div>

            {/* Additional Images (Hidden on Small Screens) */}
            <div className="hidden lg:flex justify-between w-full absolute top-10  z-10 ">
                <img
                    src={img4}
                    alt="Floating Image"
                    data-aos="zoom-in-left"
                    data-aos-duration="2000"
                    className="w-27 h-27 ml-16 mt-8 rounded-lg shadow-[0px_0px_50px_rgba(255,255,255,0.3)] -rotate-8 filter saturate-70 brightness-90 vignette"
                />
                <img
                    src={img5}
                    data-aos="zoom-in-right"
                    data-aos-duration="2000"
                    alt="Floating Image"
                    className="w-26 h-25 mr-16 mt-40 rounded-lg  shadow-[0px_0px_50px_rgba(255,255,255,0.3)]  rotate-8  filter saturate-80 brightness-90 vignette"
                />
            </div>
        </section>
    );
};

export default Aboutus;
