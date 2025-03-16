import React, { useEffect } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Projectdata from '../Database/ProjectData'
import AOS from 'aos'
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    AOS.init()
  })
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: '1px',
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <section className="  py-12 mt-5 container mx-auto  px-8  " >
      {/* this is header */}
      <h1 data-aos="zoom-in-up" data-aos-duration="500" className='text-2xl md:text-3xl text-[#59ffa0]  text-start md:text-center ps-8 font-serif cursor-pointer ' >Projects</h1>
      <hr className='m-4 text-white opacity-10 text-1xl glowing-hr ' />
      <Slider  {...settings} >
        {Projectdata.map((item, index) => (
          <div key={index} id="imgid" className="shadow-4xl p-2   rounded-xl" >
            
              <div id="projimg" className="relative group h-60 flex justify-center items-center m-3 overflow-hidden rounded-lg">
                <div className="relative h-full w-full overflow-hidden group">
                  {/* Overlay Div */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 ease-in-out z-10"></div>
                  {/* Image */}
                  <img
                    className="h-full w-full object-cover  p-1 md:p-0 rounded-lg border-2 tansition-transform duration-1000 group-hover:scale-125 animate-border"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                {/* this is demo project link */}
                <a href={item.link} target='_blank' >
                <button
                  id="projbutton"
                  className="absolute left-1/2 -translate-x-1/2 top-0 bg-[#d3f733a2] text-gray-800 px-6 py-0.5 text-lg rounded-bl-lg rounded-br-lg shadow-md opacity-0 group-hover:opacity-100 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
                  Watch
                </button>
                </a>
                {/* <img src={item.git}  className='absolute left-1 bottom-1 bg-[#d3f73300] text-gray-700 px-6 py-0.5 text-lg rounded-bl-lg rounded-br-lg shadow-md opacity-0  group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out z-10' ></img> */}
                {/* this is git code img */}
                <a href={item.gitlink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={item.git}
                    alt="Git Icon"
                    className="absolute left-1 bottom-1 w-8 h-8 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-in-out z-10 
               filter group-hover:brightness-125  hover:brightness-160 group-hover:contrast-150"
                  />
                </a>
              </div>
              <p className="font-semibold text-gray-50   py-2 px-4  text-start md:text-center">{item.name}</p>
              <p className="text-[#59ffa0] text-sm text-start px-4  ">{item.technology}</p>
              <div className="text-gray-300 text-start  px-4  py-2"> <p >{item.details}</p></div>
              <p className='ps-4 text-[#c7a925] ' >{item.state}</p>
            
          </div>
        ))}
      </Slider>
    </section>
  )
}
export default Projects