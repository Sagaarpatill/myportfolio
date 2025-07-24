import React from 'react';

function About() {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      className="relative z-[20] w-full px-10 md:px-20 py-20 md:py-32 mt-16 md:mt-28 bg-[#a8cdff] rounded-2xl min-h-[60vh]"
    >
      {/* Desktop View */}
      <div className="hidden md:block">
        <h1 className='font-["Neue_Montreal"] text-[2.5vw] tracking-tight'>
          Hi, I'm Sagar Patil! 
        </h1>
        <h1 className='font-["Neue_Montreal"] text-[2.1vw] tracking-tight'>
        Software Development Engineer (SDE 1) with a focus on full stack development and applied AI. I work across the web stack using technologies to build scalable applications. My academic background in Computer Science with a specialization in AI & Robotics from VIT Chennai supports my work on projects involving deep learning, computer vision, and intelligent automation. I’m currently involved in building end-to-end systems that combine clean backend architecture with AI-driven functionality, aiming for performance, maintainability, and real-world impact.
        </h1>
      </div>
      
      {/* Mobile View */}
      <div className="md:hidden text-left">
        <h1 className='font-["Neue_Montreal"] text-[5vw] tracking-tight font-semibold'>
          Hi, I'm Sagar Patil! 
        </h1>
        <p className='font-["Neue_Montreal"] text-[4vw] leading-snug tracking-tight mt-3'>
          I'm a final-year Computer Science student at VIT Chennai, specializing in AI and Robotics. I have experience in DevOps, Full-Stack Development, and cloud automation.
        </p>
        <p className='font-["Neue_Montreal"] text-[4vw] leading-snug tracking-tight mt-3'>
          Passionate about problem-solving, scalable applications, and continuous learning to stay ahead in technology.
        </p>
      </div>

      <div className='border-t-[1px] border-zinc-500 mt-12'></div>

      <div className="flex flex-col md:flex-row justify-between items-start px-5 py-10">
        <div className="w-full md:w-1/3">
          <h2 className="text-lg font-['Neue_Montreal'] text-[5vw] md:text-[1.6vw] mb-6 font-semibold">What you can expect:</h2>
        </div>
        <div className="w-full md:w-2/3 font-['Neue_Montreal'] text-[4vw] md:text-[1.5vw] leading-snug">
          <p><strong>Problem-Solving Mindset</strong> – I approach challenges with innovative solutions.</p>
          <p className="mt-3"><strong>DevOps & Full-Stack Knowledge</strong> – Proficient in automation, cloud, and scalable applications.</p>
          <p className="mt-3"><strong>Continuous Learner</strong> – Always exploring emerging technologies.</p>
          <p className="mt-3"><strong>Detail-Oriented</strong> – Focused on writing clean, efficient, and maintainable code.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
