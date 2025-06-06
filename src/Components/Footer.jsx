import React from 'react'
import footer from '../Database/Footer'
import AOS from 'aos'
import "aos/dist/aos.css";
const Footer = () => {
    return (
        <div className='bg-gradient-to-b from-[#171717] to-black px-2 py-2'>
            <div className='flex md:pt-10 pt-6 justify-center gap-3 md:gap-5'>
                {footer.map((item, index) => (
                    <div key={index}>
                        <a href={item.link} target='_blank' >
                            <img
                                className='w-7 md:w-10 cursor-pointer pb-1 transform transition-transform duration-300 hover:scale-115 hover:rotate-6'
                                src={item.img}
                                alt={`Image ${index}`}
                            />
                        </a><br />
                    </div>
                ))}
            </div>
            <h1 className='text-[#949494] text-center cursor-none md:py-2 font-semibold text-sm md:text-md'>
                © 2024 <span className="text-[#5AE4A8]">Moheed-Dar</span>. All rights reserved.
            </h1>

        </div>

    )
}

export default Footer