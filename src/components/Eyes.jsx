import React, { useEffect, useState, useRef } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle + 180);
    });
  });

  return (
    <div className="eyes w-full h-screen bg-black overflow-hidden rounded-3xl">
      <div data-scroll data-scroll-speed="-.5" className='relative w-full h-screen bg-center bg-cover bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className="absolute flex gap-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-white rounded-full">
            <div className="relative w-32 h-32 overflow-hidden bg-black rounded-full">
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6"
              >
                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] flex items-center justify-center bg-white rounded-full">
            <div className="relative w-32 h-32 overflow-hidden bg-black rounded-full">
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6"
              >
                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
