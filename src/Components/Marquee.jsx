import React from 'react';
import { motion } from "framer-motion";

function Marquee() {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed=".1"
      className="relative z-[15] w-full py-5 md:py-10 bg-[#004D43] text-white"
    >
      {/* Desktop Marquee */}
      <div className='hidden md:flex border-t-2 border-b-2 whitespace-nowrap overflow-hidden gap-3 md:gap-6'>
        <motion.div 
          initial={{ x: "100%" }} 
          animate={{ x: "-100%" }} 
          transition={{ ease: "linear", repeat: Infinity, duration: 12 }} 
          className='flex min-w-full gap-3 md:gap-6'
        >
          {[...Array(2)].map((_, index) => (
            <h1 
              key={index} 
              className='text-[8vw] md:text-[12vw] leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-semibold pt-2 md:pt-6'>
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
          className='flex min-w-full gap-2'
        >
          {[...Array(2)].map((_, index) => (
            <h1 
              key={index} 
              className='text-[8vw] leading-none uppercase font-["Founders_Grotesk_X-Condensed"] font-semibold pt-1 text-left'>
              From concept to code, I make it happen.
            </h1>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
