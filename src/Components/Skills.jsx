import React, { useEffect } from 'react'
import SkillsData from '../Database/SkillsData'
import AOS from 'aos'
import "aos/dist/aos.css";
import EditingSkills from './EditingSkills';

const Skills = () => {
  useEffect(() => {
    AOS.init()
  }, []);
  return (
    <>
      <section className="pt-12 mt-2 md:mt-4 mx-auto m-4 px-10">
        <div className=" rounded-md p-3 md:p-5">
          <h2 data-aos="zoom-in" className=' p-3 cursor-none  text-center text-2xl md:text-3xl font-bold mb-4  text-[#59ffa0]' > Development Skills</h2>
          <hr className='m-4 text-white opacity-10 pt-0.7 text-1xl  md:mt-7 glowing-hr ' />
          <div className="grid grid-cols-3 md:grid-cols-4  md:pt-7 pt-4 md:mb-10 lg:grid-cols-6 gap-4 md:gap-5 px-3">
            {SkillsData.map((item) => (
              <div
                data-aos="fade-up"
                key={item.id} id="skillsbg"
                className="p-2 mb-2 hover:rotate-2 cursor-pointer shadow-slate-300   md:hover:shadow-2xl hover:shadow-xl  overflow-hidden rounded-lg flex items-center justify-center group transition-transform duration-300"
              >
                <a href={item.link} target="_blank" >
                  <img
                    src={item.imgSkills}
                    alt="Skill Icon"
                    className="h-16 md:h-22  w-auto object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              </div>
            ))}
          </div>
          <hr className='m-4 pt-0.7 md:mx-50 mx-25  text-green-500 opacity-10 text-1xl  md:mt-7 glowing-hr' />
        </div>
      </section>
      <EditingSkills />
    </>
  )
}
export default Skills