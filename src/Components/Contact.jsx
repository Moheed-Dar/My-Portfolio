import React from 'react';
import image from '../Assets/contactimg/img3.png'
{/* <img className='md:w-100 md:block hidden ' src={image} alt="Contact" /> */}
const Contact = () => {
  return (
    <section className="  pt-5 md:py-8 mt-5 container mx-auto  px-8  " >
      <h2 data-aos="zoom-in" className=' p-3  text-center text-2xl md:text-3xl font-bold mb-4 cursor-none  text-[#59ffa0]' >Stay in Touch</h2>
      <hr className='m-4 text-white md:pt-0.7 pt-0.5 opacity-10 text-1xl glowing-hr ' />
      <div  className='grid grid-cols-2  gap-5  p-8' >
          <div className='bg-gray-600 ' >
            
          </div>
          <div className='bg-red-400'>
            <h1>moheed</h1>
          </div>
      </div>
    </section>
  );
};

export default Contact;
