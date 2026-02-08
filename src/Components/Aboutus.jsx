import { useEffect } from "react";
import img4 from "../Assets/aboutimg/img4.jpg";
import img5 from "../Assets/aboutimg/img5.jpg";
import img3 from '../Assets/aboutimg/img11.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FiDownload } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Element } from 'react-scroll';
const Aboutus = () => {
    useEffect(() => {
        AOS.init()
    })
    return (
        <Element name="Aboutus" >
            <section id="Aboutus" className="relative bg-[#0A0A0A] md:m-8 mt-10 rounded-2xl text-white  py-16 px-5 flex flex-col items-center">
                <div className="max-w-3xl  text-center md:text-lg   text-sm relative z-20 mix-blend-difference">
                    <h2 data-aos="zoom-in" data-aos-duration="1000" className="text-3xl md:text-4xl md:pb-5 pb-3 font-bold text-[#f5ff9a]">
                        WHO AM I ?
                    </h2>
                    <div data-aos="zoom-in" data-aos-duration="1000" className="md:m-0 mx-7" >
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            I am a Full-Stack Engineer 🖱️ specialized in <b className="text-white " >Next.js, React.js, Tailwind CSS, TypeScript, Node.js, MongoDB, and <span className="text-green-400" >GSAP & Fmotion</span> </b>. I enjoy crafting engaging and scalable, Fast and Dynamic <span className="text-white font-semibold" >Web Applications</span>.
                        </p>
                        <p className="text-gray-400 mt-4">
                            Programming is my <span className="text-white font-semibold" >passion</span>, These days, my focus is on expanding my portfolio by building more <span className="text-green-400 font-semibold" >projects</span>, which is why I am constantly working to enhance my <span className="text-white font-semibold" >Skills</span>.
                        </p>
                        <p className="text-gray-400 mt-4 px-10">
                            I studied at Agriculture University Of Peshawar, where I doing my bachelor's in <span className="text-white font-semibold" >Information Technology</span>.
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        {/* Button */}
                        <a href="https://drive.google.com/file/d/1P8oAeXif1xnBHouw5YtGVGMKI5jaILmq/view?usp=drivesdk " target='_blank' >
                            <button
                                id="movingGradientButton"
                                className="mt-6 md:px-4 md:py-2  cursor-pointer px-5 py-2 text-black font-semibold rounded-full shadow-lg overflow-hidden relative transition-transform duration-300 hover:scale-105 flex items-center gap-2"
                            >
                                <span className="relative z-10">Download CV</span>
                                <FiDownload className="text-lg animate-bounce" />
                            </button>
                        </a>

                        <FiChevronDown className="mt-2 text-white text-3xl animate-bounce" />
                    </div>
                </div>



                {/* Main images with shadows */}
                <div className="relative w-full mt-5 flex justify-center">

                    <img
                        src={img3}
                        alt="Floating Image"
                        className=" md:h-80  h-60  transform  hover:rotate-0 hover:scale-110 transition duration-300 ease-in-out  " />
                </div>

                {/* side images */}
                <div className="hidden lg:flex justify-between w-full absolute top-10  z-10 ">
                    <img
                        src={img4}
                        alt="Floating Image"
                        data-aos="fade-up-right"
                        data-aos-duration="2000"
                        className="w-27 h-27 ml-16 mt-8 overflow-hidden rounded-lg shadow-[40px_20px_50px_rgba(255,255,255,0.3)] -rotate-8 filter saturate-80 brightness-100 vignette"
                    />
                    <img
                        src={img5}
                        data-aos="fade-up-left"
                        data-aos-duration="2000"
                        alt="Floating Image"
                        className="w-26 h-25 mr-16 mt-40 rounded-lg  overflow-hidden shadow-[-20px_20px_50px_rgba(255,255,255,0.3)]  rotate-8  filter saturate-80 brightness-100 vignette"
                    />
                </div>
            </section>
        </ Element >
    );
};

export default Aboutus;
