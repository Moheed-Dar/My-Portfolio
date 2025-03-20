import React from 'react'
import ServicesData from '../Database/ServicesData'
const Services = () => {
    return (
        <>
            <section className="py-12 mt-5 container mx-auto rounded-2xl  px-4 bg-black" >
                <h2 data-aos="zoom-in" className=' p-3  text-center text-2xl md:text-3xl font-bold mb-4 cursor-none  text-[#59ffa0]' >Services</h2>
                <hr className='m-4 text-white md:pt-0.7 pt-0.5 opacity-10 text-1xl glowing-hr ' />
                <div className=' grid md:grid-cols-3 grid-cols-1 p-8 text-center ' >
                    {ServicesData.map((item) => (
                        <div data-aos="zoom-in" key={item.id} className=' justify-center  p-5 mt-3 rounded-2xl border-3 border-black bg-[#171717] md:mx-2 md:py-4 '  >
                            <div>
                                <img className='w-10 mx-auto mb-2 cursor-none ' src={item.img} />
                            </div>
                            <div>
                                <h1 className=' text-white cursor-pointer  font-semibold lg:text-lg md:text-md text-sm' >{item.name} </h1>
                            </div>
                            <hr className='mt-2  mx-10 text-white md:pt-0.7 pt-0.5 opacity-10 text-1xl glowing-hr ' />
                            <div>
                                <p className='text-[#ADB1B5]  font-medium mb-2 md:text-md text-sm  text-center pt-3 md:px-10 pb-2' >{item.details}</p>
                            </div>

                            <a href={item.link} target="_blank" >
                                <button className="bg-gray-950 cursor-pointer text-gray-400 border border-gray-400 border-b-4 font-medium overflow-hidden relative px-3 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                                    <span className="bg-gray-400 shadow-gray-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                                    Read More
                                </button>
                            </a>

                        </div>
                    ))}
                </div>
            </section >
        </>
    )
}
export default Services