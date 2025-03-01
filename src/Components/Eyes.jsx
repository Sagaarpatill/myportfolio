import React, { useState, useEffect } from 'react';

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        const handleMove = (e) => {
            let clientX, clientY;

            if (e.touches) {
                clientX = e.touches[0].clientX; // Get first touch X position
                clientY = e.touches[0].clientY; // Get first touch Y position
            } else {
                clientX = e.clientX;
                clientY = e.clientY;
            }

            let deltaX = clientX - window.innerWidth / 2;
            let deltaY = clientY - window.innerHeight / 2;
            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        };

        window.addEventListener("mousemove", handleMove);
        window.addEventListener("touchmove", handleMove);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleMove);
        };
    }, []);

    return (
        <div className="eyes w-full h-screen overflow-hidden flex items-center justify-center">
            <div 
                data-scroll 
                data-scroll-speed="-0.7" 
                className="relative w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] flex items-center justify-center"
            >
                <div className="absolute flex gap-6 md:gap-10 bg-transparent">
                    {/* Left Eye */}
                    <div className="w-[25vw] h-[25vw] md:w-[15vw] md:h-[15vw] rounded-full flex items-center justify-center bg-white">
                        <div className="relative w-2/3 h-2/3 rounded-full flex items-center justify-center bg-black">
                            <div style={{ transform: `translate(0%, -0%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                    {/* Right Eye */}
                    <div className="w-[25vw] h-[25vw] md:w-[15vw] md:h-[15vw] rounded-full flex items-center justify-center bg-white">
                        <div className="relative w-2/3 h-2/3 rounded-full bg-black">
                            <div style={{ transform: `translate(-0%, -0%) rotate(${rotate}deg)` }} className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10">
                                <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Eyes;
