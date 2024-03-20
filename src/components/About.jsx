import React from "react";

const About = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full py-20 bg-[#CDEA68] rounded-3xl text-zinc-900"
    >
      <h1 className="font-['neu'] px-10 font-normal text-5xl ">
        Ochi is a strategic partner for fast-grow­ing tech <br /> businesses
        that need to raise funds, sell prod­ucts, <br /> ex­plain com­plex
        ideas, and hire great peo­ple.
      </h1>
      <div className="w-full flex justify-between border-t-[1px] border-[#a2b663] mt-16 py-3">
        <div className="w-1/2 px-10">
          <h1 className="text-5xl mb-7  ">Our approach:</h1>
          <button className="bg-zinc-900 flex items-center gap-8 rounded-full uppercase text-sm py-4 px-6 text-white font-semibold">
            read more
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-red-600 mr-10 rounded-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
