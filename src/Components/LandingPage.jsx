import { motion } from 'framer-motion';
import logo from "../assets/logo.png";
import React from 'react';
import backgroundImage from "../assets/background.png"; // Make sure this path is correct

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      className="relative z-[10] w-full h-screen pt-1 flex flex-col justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire div
        backgroundPosition: 'center', // Center the image
        backgroundRepeat: 'no-repeat', // Do not repeat the image
        // Removed filter: 'brightness(0.9)' as it was not in the provided snippet
        // If you want it, please add it back after testing the text changes.
      }}
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

              <h1
                className={`uppercase
                  text-[15vw] sm:text-[13vw] md:text-[11vw] lg:text-[9vw]       /* Slightly bigger text */
                  h-full
                  -mb-[3vw] sm:-mb-[2vw] md:-mb-[1.5vw]                     /* Reduced gap: more negative margin */
                  py-[2vw] sm:py-[1.5vw] md:py-[1vw]                         /* Reduced gap: less padding */
                  leading-[15vw] sm:leading-[13vw] md:leading-[11vw] lg:leading-[9vw] /* Adjusted leading to match new text size */
                  font-['Founders_Grotesk_X-Condensed'] font-semibold text-center
                  ${
                    item === "Portfolio" ? "text-[#f6fa14]" : "text-white" // Conditional coloring
                  }
                `}
              >
                {item}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - UNCHANGED */}
      <div className="flex sm:hidden flex-col items-center justify-center text-center h-full px-4">
        <h1 className="uppercase text-5xl font-semibold leading-tight text-white">Welcome</h1>
        <div className="w-16 h-16 my-2 flex justify-center">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
        <h1 className="uppercase text-5xl font-semibold leading-tight text-white">To My</h1>
        <h1 className="uppercase text-5xl font-semibold leading-tight text-[#dcf582]">Portfolio</h1>
      </div>

      {/* Resume Section */}
      <div className="border-t-[1px] border-zinc-500 absolute bottom-5 w-full px-4 sm:px-8 md:px-16 lg:px-20 py-5 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:gap-10 text-base sm:text-lg md:text-xl text-center">
        <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-tight text-white"> {/* Increased text size */}
          Open For Full Stack Developer Role
        </p>
        <p className="text-xl sm:text-2xl md:text-3xl font-medium tracking-tight leading-tight text-white"> {/* Increased text size */}
          Open For Software Developer Role
        </p>
        <motion.a
          href="https://drive.google.com/uc?export=download&id=1-aoD7Sw7I6YJ9DXzcuYTaeeaPves6zea"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, backgroundColor: "#4A4A4A", color: "#FFF" }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 sm:px-8 sm:py-4 border-[3px] uppercase border-zinc-800 rounded-full text-base sm:text-lg md:text-xl font-semibold cursor-pointer transition-all"
        >
          Check Out Resume
        </motion.a>
      </div>
    </div>
  );
}

export default LandingPage;