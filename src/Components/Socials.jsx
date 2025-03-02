import React from 'react';

function Socials() {
  return (
    <div className='w-full min-h-[50vh] bg-white flex flex-col items-center px-6 sm:px-20 gap-5 pt-40 mt-20'>
      {/* Title */}
      <h1 className='text-4xl sm:text-5xl font-bold text-gray-800 mb-6 sm:mb-10'>Let's Connect</h1>

      <div className='w-full flex flex-col sm:flex-row items-center gap-5'>
        {/* LinkedIn Section */}
        <div className='cardcontainer w-full sm:w-1/2 h-[30vh] sm:h-[40vh]'>
          <div className='card relative rounded-2xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <p className='text-amber-200 text-3xl sm:text-4xl font-semibold'>LinkedIn</p>
            <a 
              href="https://www.linkedin.com/in/sagar-patil-b2a0b0223/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='absolute px-4 sm:px-5 py-2 border-2 border-white text-white rounded-full left-4 sm:left-8 bottom-4 sm:bottom-8 hover:bg-white hover:text-[#004D43] transition'
            >
              Visit
            </a>
          </div>
        </div>

        {/* GitHub & LeetCode Section */}
        <div className='cardcontainer flex flex-col sm:flex-row gap-5 w-full sm:w-1/2 h-[30vh] sm:h-[40vh]'>
          {/* GitHub */}
          <div className='card relative rounded-2xl w-full sm:w-1/2 h-full bg-[#292e2e] flex items-center justify-center'>
            <p className='text-white text-2xl sm:text-3xl font-semibold'>GitHub</p>
            <a 
              href="https://github.com/Sagaarpatill" 
              target="_blank" 
              rel="noopener noreferrer"
              className='absolute px-4 sm:px-5 py-2 border-2 border-white text-white rounded-full left-4 bottom-4 hover:bg-white hover:text-[#292e2e] transition'
            >
              Visit
            </a>
          </div>

          {/* LeetCode */}
          <div className='card relative rounded-2xl w-full sm:w-1/2 h-full bg-[#292e2e] flex items-center justify-center'>
            <p className='text-white text-2xl sm:text-3xl font-semibold'>LeetCode</p>
            <a 
              href="https://leetcode.com/u/Sagar1904/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='absolute px-4 sm:px-5 py-2 border-2 border-white text-white rounded-full left-4 bottom-4 hover:bg-white hover:text-[#292e2e] transition'
            >
              Visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Socials;
