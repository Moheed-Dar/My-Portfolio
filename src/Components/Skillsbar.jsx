import React,{useEffect} from 'react'
import { motion } from 'framer-motion';
import AOS from 'aos'
import "aos/dist/aos.css";
const Skillsbar = () => {
   useEffect(() => {
      AOS.init()
    })
  return (
    <div data-aos="zoom-in" className='md:py-4  md:pb-5 pb-5 mt-2 md:mt-3 rounded-2xl bg-[#0A0A0A] container mx-auto  px-8 ' >
      <div className='py-12 mt-4 container mx-auto px-8'>
        <h2 data-aos="zoom-in" className='md:p-1 p-1 text-center text-2xl md:text-3xl font-bold mb-4 cursor-none text-[#59ffa0]'>
          Experience
        </h2>
        <hr className='m-4 text-white md:pt-0.7 pt-0.5 opacity-10 text-1xl glowing-hr' />
        <div className='grid grid-flow-row grid-rows-3'>

          <div className="md:mb-5 mb-3 mt-2 md:mt-3 mx-10">
            <div className="flex justify-between items-center mb-3">
              <h2 data-aos="zoom-in-right" className="text-yellow-100  cursor-none font-semibold text-sm md:text-2xl">Front-End Development</h2>
              <span className="text-white font-medium text-sm md:text-md">80%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2.5 dark:bg-gray-700">
            <motion.div  data-aos="fade-right"  className="bg-red-400 h-1.5 md:h-2.5 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '80%' }}
              transition={{ duration: 3, ease: 'easeInOut' }}
               />
            </div>
          </div>


          <div className="md:mb-5 mb-3 mt-2 md:mt-3 mx-10">
            <div className="flex justify-between items-center mb-3">
              <h2 data-aos="zoom-in-right" className="text-yellow-100 cursor-none font-semibold text-sm md:text-2xl">Back-End Development</h2>
              <span className="text-white font-medium text-sm md:text-md">75%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2.5 dark:bg-gray-700">
            <motion.div data-aos="fade-right"  className="bg-yellow-400 h-1.5 md:h-2.5 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '75%' }}
              transition={{ duration: 4, ease: 'easeInOut' }}
               />
            </div>
          </div>


          <div className="md:mb-5 mb-3 mt-2 md:mt-3 mx-10">
            <div className="flex justify-between items-center mb-3">
              <h2 data-aos="zoom-in-right" className="text-yellow-100 cursor-none font-semibold text-sm md:text-2xl">Editing & Other Skills</h2>
              <span className="text-white font-medium text-sm md:text-md">70%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2.5 dark:bg-gray-700">
              <motion.div  data-aos="fade-right" className="bg-green-400 h-1.5 md:h-2.5 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '70%' }}
              transition={{ duration: 5, ease: 'easeInOut' }}
               />
            </div>
          </div>





        </div>
      </div>
    </div>
  )
}

export default Skillsbar