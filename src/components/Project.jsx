import React, { useEffect, useState } from "react";

const Project = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = e.clientX - window.innerWidth / 2;
      let deltaY = e.clientY - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle + 180);
    });
  });

  return (
    <div data-scroll data-scroll-speed='' className="w-full min-h-[150vh] bg-[#CDEA68] py-[50px] rounded-3xl">
      <div className="text-[17vw] font-[founders] uppercase font-bold text-center text-black">
        <h1 className="h-44">Ready </h1>
        <h1 className="h-44">to start </h1>
        <h1 className="h-44">the project ? </h1>
      </div>
      <div className="relative">
        <div className="absolute flex gap-8 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[200%]">
          <div className="w-[13vw] h-[13vw] flex items-center justify-center bg-white rounded-full">
            <div className="relative w-28 h-28 overflow-hidden bg-black rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6"
              >
                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="w-[13vw] h-[13vw] flex items-center justify-center bg-white rounded-full">
            <div className="relative w-28 h-28 overflow-hidden bg-black rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-6"
              >
                <div className="w-6 h-6 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-32 mb-20">
        <button className="flex items-center justify-center uppercase px-7 py-4 text-sm gap-6 text-white bg-zinc-900 rounded-full">
          start the project <div className="w-2 h-2 rounded-full bg-white"></div>
        </button>
        <h6 className="p-3 font-semibold text-black">OR</h6>
        <button className="flex items-center justify-center uppercase px-7 py-4 text-sm gap-6 border-[1px] text-black border-zinc-900 rounded-full">
          Hello@ochiiiiiiiii <div className="w-2 h-2 rounded-full bg-black"></div>
        </button>
      </div>
    </div>
  );
};

export default Project;
