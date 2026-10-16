import React from 'react';

const ContactHeader = () => (
  <div
    className="text-center mb-14 md:mb-20 flex flex-col items-center"
    data-aos="fade-up"
  >
    {/* Badge */}
    <div className="flex items-center gap-3 sm:gap-4">
      <span className="h-px w-8 sm:w-12 bg-[#D62839]" />
      <span className="text-[#FF6B7A] text-[10px] sm:text-xs md:text-sm font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase whitespace-nowrap">
        Get In Touch
      </span>
      <span className="h-px w-8 sm:w-12 bg-[#D62839]" />
    </div>

    {/* Heading + giant outline CONTACT peeche */}
    <div className="relative mt-5 flex justify-center">
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-extrabold leading-none text-transparent select-none pointer-events-none whitespace-nowrap text-[24vw] sm:text-[20vw] md:text-[8rem] lg:text-[10rem]"
        style={{ WebkitTextStroke: '1px rgba(214,40,57,0.22)' }}
      >
        CONTACT
      </span>
      <h2 className="relative font-display text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
        Let's <span className="text-blood-gradient">Connect</span>
      </h2>
    </div>

    {/* Sub-text */}
    <p className="mt-5 max-w-xl text-xs sm:text-sm md:text-base text-[#F5F3EF]/55 leading-[1.9] px-4">
      Have a project in mind? Let's create something
      <span className="text-[#FF6B7A] font-semibold"> amazing </span>
      together.
    </p>
  </div>
);

export default React.memo(ContactHeader);