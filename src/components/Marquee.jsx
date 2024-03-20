import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".2"
      className="w-full py-20 rounded-3xl bg-[#004D43]"
    >
      <div className="textscroll border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 10,
          }}
          className="text-[25vw] px-12 font-['founders'] leading-none -mt-[4.5vw] uppercase -mb-[2vw]"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 10,
          }}
          className="text-[25vw] px-12 font-['founders'] leading-none -mt-[4.5vw] uppercase -mb-[2vw]"
        >
          we are ochi
        </motion.h1>
        <h1 className="text-[25vw] font-['founders'] leading-none -mt-[4.5vw] uppercase -mb-[2vw]">
          we are ochi
        </h1>
      </div>
    </div>
  );
};

export default Marquee;
