import { motion } from "framer-motion";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Landingpage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-black pt-1 rounded-3xl"
    >
      <div className="text mt-36 px-16">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{
                      ease: [0.45, 0, 0.55, 1],
                      duration: 0.6,
                      delay: 0.4,
                    }}
                    className="w-[8vw] h-[5.7vw] mr-[1vw] mt-3.5 bg-green-600 relative rounded-md overflow-hidden "
                  >
                    <img
                      className="w-full h-full object-cover"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="uppercase text-[9vw] leading-[6.7vw] font-semibold font-['founders']">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-600 mt-24 py-5 px-16 flex items-center justify-between">
        {[
          "for public and private companies",
          "from the first pitch to IPO",
        ].map((item, index) => (
          <p className="font-light text-sm capitalize tracking-normal leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-1">
          <div className="px-4 py-1 border-[1px] text-sm uppercase font-light border-zinc-300 rounded-full">
            start the project
          </div>
          <div className="h-7 w-7 rounded-full border-[1px] flex items-center justify-center border-zinc-300">
            <BsArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
