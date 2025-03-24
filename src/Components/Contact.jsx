import React from 'react';
import image from '../Assets/contactimg/img3.png'
import Swal from 'sweetalert2'

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();
  
    // Validation check
    if (!name || !email || !message) {
      Swal.fire({
        title: "Error!",
        text: "Please fill in all fields before submitting.",
        icon: "warning"
      });
      return;
    }
  
    // ✅ Ensure the API key is correct
    formData.append("access_key", "acadce1d-c04f-4c18-8817-858cd3515b66");
  
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await res.json();
  
      if (data.success) {
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully!",
          icon: "success"
        });
        event.target.reset(); // ✅ Form reset after success
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message || "Failed to send message.",
          icon: "error"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Network error, please try again later.",
        icon: "error"
      });
    }
  };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "acadce1d-c04f-4c18-8817-858cd3515b66");

  //   const object = Object.fromEntries(formData);
  //   const json = JSON.stringify(object);

  //   const res = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: json
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     Swal.fire({
  //       title: "Success!",
  //       text: "Message send successfully!",
  //       icon: "success"
  //     });
  //   }
  // };
  return (
    <section className="  pt-5 md:py-8 mt-6 container mx-auto  px-15  " >
      <h2 data-aos="zoom-in" className=' p-3  text-center text-2xl md:text-3xl font-bold mb-4 cursor-none  text-[#59ffa0]' > <span className="text-white" >Stay</span> In Touch </h2>
      <hr className='m-4 text-white md:pt-0.7 pt-0.5 opacity-10 text-1xl glowing-hr ' />
      <div className='grid lg:grid-cols-2    gap-5  p-2 md:p-6' >
        <div data-aos="fade-right" className='bg-[#333B37] md:mt-5 md:mb-5  p-2 md:p-3 rounded-2xl   ' >
          <h1 className='md:text-2xl text-md cursor-none text-blue-200 font-semibold text-center py-3' >Talk to Us!
          </h1>
          <form onSubmit={onSubmit} >
            {/* username input */}
            <div className='md:ms-6 ms-1 mt-2 md:p-2 p-1 md:me-5 me-1' >
              <label className="md:text-xl text-sm md:pb-3  pb-1 cursor-pointer font-semibold text-white" htmlFor="name">
                Name :
              </label>
              <br />
              <input
                className="appearance-none border-none text-[#FFFDD0] text-sm md:text-lg placeholder-gray-600 font-medium rounded-md bg-[#171717] outline-none w-full md:w-full md:mt-2 mt-1 md:p-3 p-2 caret-red-500"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your Good Name"
              />
            </div>
            {/* Email input */}
            <div className='md:ms-6 ms-1 mt-2 md:p-2 p-1 md:me-5 me-1' >
              <label className="md:text-xl text-sm pb-3  cursor-pointer font-semibold text-white" htmlFor="email">
                Email Address :
              </label>
              <br />
              <input
                className="appearance-none border-none text-[#FFFDD0] text-sm md:text-lg placeholder-gray-600 font-medium rounded-md bg-[#171717] outline-none w-full md:w-full md:mt-2 mt-1 md:p-3  p-2 caret-red-500"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email Address "
              />
            </div>
            {/* Email input
            <div className='md:ms-6 ms-1 mt-2 md:p-2 p-1 md:me-5 me-1' >
              <label className="md:text-xl text-sm pb-3  cursor-pointer font-semibold text-white" htmlFor="number">
                Phone Number :
              </label>
              <br />
              <input
                className="appearance-none border-none text-[#FFFDD0] text-sm md:text-lg placeholder-gray-600 font-medium rounded-md bg-[#171717] outline-none w-full md:w-full md:mt-2 mt-1 md:p-3  p-2 caret-red-500"
                type="number"
                id="number"
                name="number"
                placeholder="Enter your Email Address "
              />
            </div> */}
            {/* message input */}
            <div className='md:ms-6 ms-1 mt-2 md:p-2 p-1 md:me-5 me-1' >
              <label className="md:text-xl text-sm pb-3  cursor-pointer font-semibold text-white" htmlFor="textarea">
                Message :
              </label>
              <br />
              <textarea
                className="appearance-none md:h-40  border-none text-[#FFFDD0] text-sm md:text-lg placeholder-gray-600 font-medium rounded-md bg-[#171717] outline-none w-full md:w-full md:mt-2 mt-1 md:p-3 p-2 caret-red-500"
                type="text"
                id="textarea"
                name="message"
                placeholder="Enter your Message "
              />
            </div>
            <div className='text-center m-2 p-1' >
              <button type="submit" className="bg-gray-950 cursor-pointer text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-8 md:py-2 py-1.5 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span className="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Submit
              </button>

              {/* <button class="bg-green-950 text-green-400 border border-green-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                <span class="bg-green-400 shadow-green-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                Hover Me
              </button> */}

            </div>
          </form>
        </div>

        <div data-aos="zoom-in" className='  lg:block hidden'>
          <img className='lg:w-110 md:mt-12 md:ms-20 md:pt-15  md:block hidden ' src={image} alt="Contact" />
        </div>
      </div>
      <hr className='m-4 text-white md:pt-0.7 pt-0.5 opacity-10 text-1xl glowing-hr ' />
    </section>
  );
};

export default Contact;
