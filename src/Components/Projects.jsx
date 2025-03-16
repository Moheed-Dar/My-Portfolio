import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Projectdata from '../Database/ProjectData'
function Projects() {
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
      <h1 className='md:text-3xl text-2xl text-green-400  text-center font-serif cursor-none ' >Projects</h1>
      <hr className='m-4 text-white opacity-10 text-1xl glowing-hr ' />
      <Slider  {...settings} >
        {Projectdata.map((item, index) => (
          <div key={index} id="imgid" className="shadow-4xl p-2   rounded-xl" >
            <a href={item.link} target='_blank' >
              <div id="projimg" className="relative group h-60 flex justify-center items-center m-3 overflow-hidden rounded-lg">
                <div className="relative h-full w-full overflow-hidden group">
                  {/* Overlay Div */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-all duration-500 ease-in-out z-10"></div>
                  {/* Image */}
                  <img
                    className="h-full w-full object-cover rounded-lg border-2 transition-transform duration-1000 group-hover:scale-125 animate-border"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <button
                  id="projbutton"
                  className="absolute left-1/2 -translate-x-1/2 top-0 bg-[#d3f733] text-black px-6 py-1.5 text-lg rounded-bl-lg rounded-br-lg shadow-md  hover:bg-[#9333ea] hover:text-gray-100 opacity-0 group-hover:opacity-100 transform -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out z-10">
                  Visit
                </button>
              </div>
              <p className="font-semibold text-gray-50  py-2  text-center">{item.name}</p>
              <p className="text-[#59ffa0] text-sm text-start ps-5 ">{item.technology}</p>
              <div className="text-gray-200 text-center  px-3  py-2"> <p >{item.details}</p></div>
              <p className='ps-5 text-green-500 ' >{item.state}</p>
            </a>
          </div>
        ))}
      </Slider>
    </section>
  )
}
export default Projects