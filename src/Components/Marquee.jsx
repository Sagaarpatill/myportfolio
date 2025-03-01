import React from 'react';
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      className="relative z-[15] w-full py-10 md:py-14 mt-6 md:mt-12 bg-[#004D43] text-white"
    >
      {/* Desktop Marquee */}
      <div className='hidden md:flex border-t-2 border-b-2 whitespace-nowrap overflow-hidden gap-5 md:gap-10 py-10 md:py-14'>
        <motion.div 
          initial={{ x: "100%" }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 12 }} 
          className='flex min-w-full gap-5 md:gap-10'
        >
          {[...Array(2)].map((_, index) => (
            <h1 
              key={index} 
              className='text-[8vw] md:text-[12vw] leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-semibold pt-6 md:pt-10 mb-0 text-center'>
              From concept to code, I make it happen.
            </h1>
          ))}
        </motion.div>
      </div>
      
      {/* Mobile Marquee */}
      <div className='md:hidden border-t-2 border-b-2 whitespace-nowrap overflow-hidden'>
        <motion.div 
          initial={{ x: "100%" }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }} 
          className='flex min-w-full gap-3'
        >
          {[...Array(2)].map((_, index) => (
            <h1 
              key={index} 
              className='text-[8vw] leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-semibold pt-3 mb-[2vw] text-left'>
              From concept to code, I make it happen.
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
