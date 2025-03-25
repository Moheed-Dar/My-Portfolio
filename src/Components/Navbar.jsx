import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import img from '../Assets/navbarimg/moheed1.png'
import { FiArrowUpRight } from 'react-icons/fi';
import styled from 'styled-components';



const StyledWrapper = styled.div`
  button {
    position: relative;
    width: 10em;
    height: 3.5em;
    outline: none;
    transition: 0.1s;
    background-color: transparent;
    border: none;
    font-size: 13px;
    font-weight: bold;
    color: #ddebf0;
  }

  #clip {
    --color: ;
    position: absolute;
    top: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    border: 5px double var(--color);
    box-shadow: inset 0px 0px 15px ;
    -webkit-clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  }

  .arrow {
    position: absolute;
    transition: 0.2s;
    background-color: #2761c3;
    top: 35%;
    width: 11%;
    height: 30%;
  }

  #leftArrow {
    left: -13.5%;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 50%);
  }

  #rightArrow {
    -webkit-clip-path: polygon(100% 49%, 0 0, 0 100%);
    left: 102%;
  }

  button:hover #rightArrow {
    background-color: #27c39f;
    left: -15%;
    animation: 0.6s ease-in-out both infinite alternate rightArrow8;
  }

  button:hover #leftArrow {
    background-color: #27c39f;
    left: 103%;
    animation: 0.6s ease-in-out both infinite alternate leftArrow8;
  }

  .corner {
    position: absolute;
    width: 4em;
    height: 4em;
    background-color: ;
    box-shadow: inset 1px 1px 8px #;
    transform: scale(1) rotate(45deg);
    transition: 0.2s;
  }

  #rightTop {
    top: -1.98em;
    left: 91%;
  }

  #leftTop {
    top: -1.96em;
    left: -3.0em;
  }

  #leftBottom {
    top: 2.10em;
    left: -2.15em;
  }

  #rightBottom {
    top: 45%;
    left: 88%;
  }

  button:hover #leftTop {
    animation: 0.1s ease-in-out 0.05s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  button:hover #rightTop {
    animation: 0.1s ease-in-out 0.15s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  button:hover #rightBottom {
    animation: 0.1s ease-in-out 0.25s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  button:hover #leftBottom {
    animation: 0.1s ease-in-out 0.35s both changeColor8,
    0.2s linear 0.4s both lightEffect8;
  }

  button:hover .corner {
    transform: scale(1.25) rotate(45deg);
  }

  button:hover #clip {
    animation: 0.2s ease-in-out 0.55s both greenLight8;
    --color: #27c39f;
  }

  @keyframes changeColor8 {
    from {
      background-color: #2781c3;
    }

    to {
      background-color: #27c39f;
    }
  }

  @keyframes lightEffect8 {
    from {
      box-shadow: 1px 1px 5px #27c39f;
    }

    to {
      box-shadow: 0 0 2px #27c39f;
    }
  }

  @keyframes greenLight8 {
    from {
    }

    to {
      box-shadow: inset 0px 0px 32px #27c39f;
    }
  }

  @keyframes leftArrow8 {
    from {
      transform: translate(0px);
    }

    to {
      transform: translateX(10px);
    }
  }

  @keyframes rightArrow8 {
    from {
      transform: translate(0px);
    }

    to {
      transform: translateX(-10px);
    }
  }`;





export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed md:top-4 top-1 px-20  mx-auto container   text-white p-1 z-50 ">
            <div className="container bg-white-600/50 backdrop-blur-sm h-14 rounded-2xl md:rounded-lg px-5 md:px-10  flex justify-around items-center">

                {/* Logo */}

                <img src={img} className="  md:w-30 lg:w-35" ></img>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-6 mx-20 font-medium">
                    {["home", "about", "projects", "skills", "contact"].map((section) => (
                        <li key={section} className="cursor-pointer">
                            <Link
                                to={section}
                                smooth={true}
                                duration={700}
                                className="hover:text-[#59ffa0] transition-all"
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>


                {/* <button className="px-4 py-1 lg:block hidden lg:text-sm border-gray-300 font-bold text-gray-300 border-2 rounded-full " >
                    HIRE ME
                </button> */}
                <StyledWrapper>
                    <button className="lg:block cursor-pointer font-medium hidden"  >
                        HIRE ME
                        <div id="clip">
                            <div id="leftTop" className="corner" />
                            <div id="rightBottom" className="corner" />
                            <div id="rightTop" className="corner" />
                            <div id="leftBottom" className="corner" />
                        </div>
                        <span id="rightArrow" className="arrow" />
                        <span id="leftArrow" className="arrow" />
                    </button>
                </StyledWrapper>


                {/* Mobile Menu Button (Hamburger Icon) */}
                <button className="md:hidden  ms-20 text-white  hover:text-green-700" onClick={() => setIsOpen(true)}>
                    <FaBarsStaggered size={24} />
                </button>
            </div>

            {/* Mobile Menu (With Close Button & AnimatePresence) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }} // Slide in from right
                        animate={{ opacity: 1, x: 0 }} // Bring into view
                        exit={{ opacity: 0, x: "100%" }} // Slide out to right
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed top-0 right-0 w-[210px] rounded-bl-3xl rounded-tl-3xl rounded-br-xl   h-[500px] bg-green-800 p-6 flex flex-col items-start pt-10 z-50"
                    >
                        {/* Close Button (Cross Icon) */}
                        <button
                            className="absolute top-4 right-4 text-white"
                            onClick={() => setIsOpen(false)}
                        >
                            <FaTimes size={24} />
                        </button>

                        {/* Menu Items */}
                        <ul className="flex flex-col gap-6 mt-10">
                            {["home", "about", "projects", "skills", "contact"].map((section, index) => (
                                <motion.li
                                    key={section}
                                    initial={{ opacity: 0, x: 20 }} // Stagger animation from right
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2, duration: 0.4, ease: "easeOut" }}
                                >
                                    <Link
                                        to={section}
                                        smooth={true}
                                        duration={700}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold text-gray-300 hover:text-yellow-400 transition-all"
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
