import React from 'react'
import img from '../Assets/aboutimg/img1.jpg'
import img1 from '../Assets/aboutimg/img2.jpg'

const About = () => {
    return (
        <section className=" bg-[#ffffff05]  rounded-2xl  py-12 mt-12  m-4  px-4 md:px-8 max-w-full overflow-hidden"   >
            <h2  data-aos="zoom-in" data-aos-duration="1000" className=' p-3 cursor-none  text-center text-2xl md:text-3xl font-bold mb-4  text-[#59ffa0]' > About<span className='text-white' > Me</span> </h2>
            <hr className='m-4 md:mx-20 text-white opacity-10 pt-0.7 text-1xl  md:mt-3 glowing-hr ' />

            <div  className='container mx-auto flex flex-col md:flex-row items-center justify-around ' >
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
                    className="flex justify-start cursor-pointer rotate-4 md:mb-0 md:mt-4 overflow-hidden md:justify-center transition-transform duration-300 ease-in-out hover:rotate-0" >
                    <img  className="w-[300px] rounded-2xl object-cover border-[#59ffa0] border-2" src={img1}/>
                </div>

                <div className='md:w-1/2 items-center mx-auto md:mx-0 py-4 px-4 md:px-0 max-w-full w-full' >
                    <p className=' max-w-full text-sm md:text-xl mb-6  text-gray-400 leading-relaxed'>
                        <h1 className='md:text-start  text-center  ' >Hey there! 👋</h1>
                        I'm <span className='text-white' >Moheed Dar</span>, a passionate <span className='text-white' >Full-Stack Engineer 🖱️ </span>skilled in  <span className='text-white' >React JS</span>, Bootstrap, <span className='text-white' >TailwindCSS</span>, JavaScript, TypeScript, Node.js,  MongoDB, and Animation with  <span className='text-green-300' >GSAP</span> and Framer-Motion.
                        I build fast,  <span className='text-white' >responsive</span>, and high-performance  <span className='text-white' >Web Applications</span>, from sleek UI/UX.🚀
                        <h1>Let’s team up and create something innovative and impactful !✨</h1>
                    </p>
                    {/* <h1 data-aos="zoom-in-down" data-aos-duration="4000" className='mt-6 font-bold text-lg text-red-400' >Tool & Technology</h1> */}
                </div>
            </div>

        </section >
    )
}

export default About