import { motion } from 'framer-motion';
import React, { useState } from 'react';

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <div className='w-full py-20'>
            <div className='w-full px-5 md:px-20 border-b-[1px] pb-10 bg-white'>
                <h1 className='text-5xl md:text-7xl font-["Neue_Montreal"] tracking-tight'>Projects</h1>
            </div>

            {/* First Row */}
            <div className='px-5 md:px-20'>
                <div className="cards w-full flex flex-col md:flex-row gap-10 mt-10 md:mt-20">
                    
                    {/* Portfolio Card */}
                    <div 
                        onMouseEnter={() => setHoveredProject("Portfolio")} 
                        onMouseLeave={() => setHoveredProject(null)} 
                        className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[65vh] flex flex-col items-center"
                    >
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Portfolio</h2>
                        <div className='relative w-full h-full'>
                            <h1 className='absolute hidden md:flex text-[#d0f159] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                                {"Portfolio".split('').map((item, index) =>
                                    <motion.span 
                                        key={index}
                                        initial={{ y: "100%" }} 
                                        animate={hoveredProject === "Portfolio" ? { y: "0%" } : { y: "100%" }} 
                                        transition={{ ease: "easeInOut", duration: 0.2, delay: index * 0.03 }}
                                        className="inline-block">
                                        {item}
                                    </motion.span>
                                )}
                            </h1>
                            <div className='card w-full h-full rounded-2xl overflow-hidden'>
                                <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png" alt="Portfolio"/>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-black border-2 border-black">
                                Code
                            </a>
                            <a href="https://your-live-website-link" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-400">
                                Live
                            </a>
                        </div>
                    </div>

                    {/* Docker Card */}
                    <div 
                        onMouseEnter={() => setHoveredProject("Docker")} 
                        onMouseLeave={() => setHoveredProject(null)} 
                        className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[65vh] flex flex-col items-center mt-5"
                    >
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Docker</h2>
                        <div className='relative w-full h-full'>
                            <h1 className='absolute hidden md:flex text-[#d0f159] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                                {"Docker".split('').map((item, index) => 
                                    <motion.span 
                                        key={index}
                                        initial={{ y: "100%" }} 
                                        animate={hoveredProject === "Docker" ? { y: "0%" } : { y: "100%" }} 
                                        transition={{ ease: "easeInOut", duration: 0.2, delay: index * 0.03 }}
                                        className="inline-block">
                                        {item}
                                    </motion.span>
                                )}
                            </h1>
                            <div className='card w-full h-full rounded-2xl overflow-hidden'>
                                <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="Docker"/>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-black border-2 border-black">
                                Code
                            </a>
                            <a href="https://your-live-website-link" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-400">
                                Live
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className='px-5 md:px-20'>
                <div className="cards w-full flex flex-col md:flex-row gap-10 mt-20 md:mt-40">
                    
                    {/* Bank App Card */}
                    <div 
                        onMouseEnter={() => setHoveredProject("Bank App")} 
                        onMouseLeave={() => setHoveredProject(null)} 
                        className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[65vh] flex flex-col items-center"
                    >
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Bank App</h2>
                        <div className='relative w-full h-full'>
                            <h1 className='absolute hidden md:flex text-[#d0f159] overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                                {"Bank App".split('').map((item, index) => 
                                    <motion.span 
                                        key={index}
                                        initial={{ y: "100%" }} 
                                        animate={hoveredProject === "Bank App" ? { y: "0%" } : { y: "100%" }} 
                                        transition={{ ease: "easeInOut", duration: 0.2, delay: index * 0.03 }}
                                        className="inline-block">
                                        {item}
                                    </motion.span>
                                )}
                            </h1>
                            <div className='card w-full h-full rounded-2xl overflow-hidden'>
                                <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2022/05/Officevibe-Short-1-1326x1101.jpg" alt="Bank App"/>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-black border-2 border-black">
                                Code
                            </a>
                            <a href="https://your-live-website-link" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-400">
                                Live
                            </a>
                        </div>
                    </div>
                                        {/* Docker Card */}
                                        <div 
                        onMouseEnter={() => setHoveredProject("Docker")} 
                        onMouseLeave={() => setHoveredProject(null)} 
                        className="cardcontainer relative w-full md:w-1/2 h-[50vh] md:h-[65vh] flex flex-col items-center mt-5"
                    >
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>Docker</h2>
                        <div className='relative w-full h-full'>
                            <h1 className='absolute hidden md:flex text-[#d0f159] overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-8xl'>
                                {"Docker".split('').map((item, index) => 
                                    <motion.span 
                                        key={index}
                                        initial={{ y: "100%" }} 
                                        animate={hoveredProject === "Docker" ? { y: "0%" } : { y: "100%" }} 
                                        transition={{ ease: "easeInOut", duration: 0.2, delay: index * 0.03 }}
                                        className="inline-block">
                                        {item}
                                    </motion.span>
                                )}
                            </h1>
                            <div className='card w-full h-full rounded-2xl overflow-hidden'>
                                <img className="w-full h-full object-cover" src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="Docker"/>
                            </div>
                        </div>
                        <div className="mt-4 flex gap-4">
                            <a href="https://github.com/your-repo-link" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-lg font-semibold bg-black text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-black border-2 border-black">
                                Code
                            </a>
                            <a href="https://your-live-website-link" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg transition-all duration-300 hover:bg-blue-400">
                                Live
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Projects;
