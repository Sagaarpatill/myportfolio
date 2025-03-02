import { motion } from 'framer-motion';
import logo from "../assets/logo.png";
import React from 'react';

function LandingPage() {
  return (
    <div 
      data-scroll 
      data-scroll-section
       
      className="relative z-[10] w-full h-screen bg-[#CDEA68] pt-1 flex flex-col justify-center"
    >
      {/* Desktop View */}
      <div className="hidden sm:flex textstructure px-4 sm:px-8 md:px-16 lg:px-20 flex-col items-center justify-center text-center h-full">
        {["Welcome", "To My", "Portfolio"].map((item, index) => (
          <div key={index} className="masker">
            <div className="w-fit flex overflow-hidden items-center justify-center">
              
              {index === 1 && (
                <motion.div 
                  initial={{ width: 0 }} 
                  animate={{ width: "15vw" }} 
                  transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.5 }} 
                  className="w-[18vw] h-[18vw] sm:w-[12vw] sm:h-[12vw] md:w-[10vw] md:h-[10vw] lg:w-[8vw] lg:h-[8vw] rounded-md relative top-[0.3vw] mr-1 sm:mr-2"
                >
                  <a><img src={logo} alt="Logo" className="w-full h-full object-contain" /></a>
                </motion.div>
              )}

              <h1 className="uppercase text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[7vw] h-full -mb-[2vw] sm:-mb-[1.5vw] md:-mb-[1vw] py-[3vw] sm:py-[2vw] md:py-[1.5vw] leading-[12vw] sm:leading-[10vw] md:leading-[8vw] lg:leading-[7vw] font-['Founders_Grotesk_X-Condensed'] font-semibold text-zinc-900 text-center">
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="flex sm:hidden flex-col items-center justify-center text-center h-full px-4">
        <h1 className="uppercase text-5xl font-semibold leading-tight">Welcome</h1>
        <div className="w-16 h-16 my-2 flex justify-center">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
        <h1 className="uppercase text-5xl font-semibold leading-tight">To My</h1>
        <h1 className="uppercase text-5xl font-semibold leading-tight">Portfolio</h1>
      </div>

      {/* Resume Section */}
      <div className="border-t-[1px] border-zinc-500 absolute bottom-5 w-full px-4 sm:px-8 md:px-16 lg:px-20 py-5 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:gap-10 text-base sm:text-lg md:text-xl text-center">
        <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight leading-tight">
          Open For Full Stack Developer Role
        </p>
        <p className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight leading-tight">
          Open For Software Developer Role
        </p>
        
        <motion.a 
          href="/resume.pdf"
          download="Sagar_Patil_Resume.pdf"
          whileHover={{ scale: 1.1, backgroundColor: "#4A4A4A", color: "#FFF" }} 
          whileTap={{ scale: 0.95 }} 
          className="px-6 py-3 sm:px-8 sm:py-4 border-[3px] uppercase border-zinc-400 rounded-full text-base sm:text-lg md:text-xl font-semibold cursor-pointer transition-all"
        >
          Check Out Resume
        </motion.a>
      </div>
    </div>
  );
}

export default LandingPage;
