import React from "react";

const Featured = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      className="w-full py-20 bg-black rounded-3xl"
    >
      <div className="w-full px-10 border-b-[1px] border-zinc-500 pb-10">
        <h1 className="text-[4vw]">Featured projects</h1>
      </div>
      <div className="w-full flex pt-20 pl-12 gap-[44vw]">
        <h5 className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>FYDE
        </h5>
        <h5 className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>VISE
        </h5>
      </div>
      <div className="cards relative w-full flex gap-10 px-10 mt-4">
        <div className="card w-1/2 h-[80vh] rounded-lg overflow-hidden ">
          {/* <h1 className="absolute flex font-bold text-9xl text-[#CDEA68] overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {'FYDE'.split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1> */}
          <img
            className="img w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            alt=""
          />
        </div>
        <div className="card w-1/2 h-[80vh] rounded-lg overflow-hidden ">
          {/* <h1 className="absolute flex font-bold text-9xl text-[#CDEA68] overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {'VISE'.split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1> */}
          <img
            className="img w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex">
        <div className="uppercase flex gap-2 px-10 py-3">
          <h5 className="border-[1px] rounded-full px-4 py-1 border-zinc-400">
            audit
          </h5>
          <h5 className="border-[1px] rounded-full px-4 py-1 border-zinc-400">
            copywriting
          </h5>
          <h5 className="border-[1px] rounded-full px-4 py-1 border-zinc-400">
            sales deck
          </h5>
          <h5 className="border-[1px] rounded-full px-4 py-1 border-zinc-400">
            slides design
          </h5>
        </div>
        <div className="uppercase flex gap-2 px-32 py-3">
          <h5 className="border-[1px] rounded-full px-4 py-1 border-zinc-400">
            agency
          </h5>
          <h5 className="border-[1px] rounded-full px-4 py-1 border-zinc-400">
            company presentation
          </h5>
        </div>
      </div>
      <div className="w-full flex pt-20 pl-12 gap-[44vw]">
        <h5 className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>TRAWA
        </h5>
        <h5 className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>PREMIUM BLEND
        </h5>
      </div>
      <div className="cards relative w-full flex gap-10 px-10 mt-4">
        <div className="card w-1/2 h-[80vh] rounded-lg overflow-hidden ">
          {/* <h1 className="absolute flex font-bold text-9xl text-[#CDEA68] overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {'TRAWA'.split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1> */}
          <img
            className="img w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
            alt=""
          />
        </div>
        <div className="card w-1/2 h-[80vh] rounded-lg overflow-hidden ">
          {/* <h1 className="absolute flex font-bold text-9xl text-[#CDEA68] overflow-hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {'PREMIUM BLEND'.split("").map((item, index) => (
              <span>{item}</span>
            ))}
          </h1> */}
          <img
            className="img w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex">
        <div className="uppercase flex gap-2 px-10 py-3">
          <h5 className="border-[1px] rounded-full px-4 py-1 border-zinc-400">
            brand identity
          </h5>
          <h5 className="border-[1px] rounded-full px-4 py-1 border-zinc-400">
            design research
          </h5>
          <h5 className="border-[1px] rounded-full px-4 py-1 border-zinc-400">
            investor deck
          </h5>
        </div>
        <div className="uppercase flex gap-2 px-36 py-3">
          <h5 className="border-[1px] rounded-full px-4 py-1 border-zinc-400">
            brand template
          </h5>
        </div>
      </div>
      <button className="bg-zinc-400 text-sm mt-20 ml-[41vw] uppercase font-semibold flex items-center justify-center gap-6 rounded-full px-6 py-4 text-black">
        view all case studies{" "}
        <div className="w-2 h-2 rounded-full bg-black"></div>
      </button>
    </div>
  );
};

export default Featured;
