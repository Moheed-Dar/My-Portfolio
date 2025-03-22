import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";
import EditingSkill from '../Database/EditingSkills';
const EditingSkills = () => {
    useEffect(() => {
        AOS.init()
    }, []);
    return (
        <section data-aos="zoom-in" className="py-5 mt-2 md:mt-4 mx-auto  container rounded-2xl m-4 bg-[#0A0A0A] px-10">
            <div className=" rounded-md p-3 md:p-5">
                <h2 data-aos="zoom-in" className=' p-3 cursor-none  text-center text-2xl md:text-3xl font-bold mb-4  text-[#59ffa0]' > 
                  <span className='text-white' >Editing</span>  Skills </h2>
                <hr className=' mt-1 ms-20 me-20 text-white opacity-10 pt-0.7 text-1xl md:mt-4 glowing-hr ' />
                <div className="grid grid-cols-2 md:grid-cols-4   md:pt-7 pt-4 md:mb-10  md:gap-1  md:px-15">
                    {EditingSkill.map((item) => (
                        <div data-aos="zoom-in-up" key={item.id} className="p-1 mb-2 cursor-pointer  overflow-hidden rounded-lg flex items-center justify-center group transition-transform duration-300" >
                            <img
                                src={item.imgedt}
                                alt="Skill Icon"
                                className="h-14 md:h-22 w-auto object-cover transform transition-transform duration-200 hover:scale-140 hover:rotate-3"
                            />
                        </div>
                    ))}
                </div>
                <hr className=' mt-1 pt-0.7 md:mx-50 mx-25  text-green-500 opacity-10 text-1xl  md:mt-4 glowing-hr' />
            </div>
        </section>
    )
}
export default EditingSkills