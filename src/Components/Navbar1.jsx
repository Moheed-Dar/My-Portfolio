import React, { useState } from 'react'
import img from '../Assets/navbarimg/moheed1.png'
import styled from 'styled-components';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

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

const Navbar1 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const openMenu = () => {
        setIsMenuOpen(true);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className='w-full  overflow-x-hidden rounded-full md:shadow-2xl shadow-xl flex items-center  justify-between lg:justify-around  md:px-8 sm:px-4 fixed md:top-0 top-1 z-50 max-w-full'>
                {/* Logo */}
                <div className='flex'>
                    <img className='md:py-3 sm:py-3 ps-2 mt-2 md:mt-4 w-32 rounded-full' src={img} alt="Logo" />
                </div>
                {/* Desktop Menu */}
                <nav className="hidden lg:block mt-4 md:py-3  bg-white-600/50 backdrop-blur-sm md:px-3 m-3  items-center justify-center rounded-3xl custom-black  gap-6">
                    <ul id="urlink" className='hidden lg:flex gap-6 font-medium text-cyan-50'>
                        <li><a href='#Home'>Home</a></li>
                        <li><a href='#Aboutus'>About</a></li>
                        <li><a href='#Services'>Services</a></li>
                        <li><a href='#Skills'>Skills</a></li>
                        <li><a href='#Projects'>Projects</a></li>
                        <li><a href='#Contact'>Contact</a></li>
                    </ul>
                </nav>
                {/* navbar button */}
                <StyledWrapper>
                    <a href="#Contact">
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
                    </a>
                </StyledWrapper>
                <button className='inline-block lg:hidden pe-3 pt-2' onClick={openMenu}>
                    <TiThMenu className=' text-white' size={28} />
                </button>
                {/* mobile screen side navbar */}
                <ul id='sideMenu' className={`flex lg:hidden flex-col gap-4 py-20 px-10 rounded-lg  text-white  bg-white-600/50 backdrop-blur-md font-semibold fixed top-0 bottom-0 right-0 w-55   z-50 transition-transform duration-500 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='absolute right-6 top-6 text-white ' onClick={closeMenu}>
                        <RxCross2 className='font-semibold text-3xl' size={26} />
                    </div>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#Aboutus'>About</a></li>
                    <li><a href='#Services'>Services</a></li>
                    <li><a href='#Skills'>My Skills</a></li>
                    <li><a href='#Projects'>Projects</a></li>
                    <li><a href='#Contact'>Contact</a></li>

                </ul>
            </div>
        </>
    )
}

export default Navbar1