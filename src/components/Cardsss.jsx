import React from "react";

const Cardsss = () => {
  return (
    <div className="w-full h-screen flex items-center px-12 bg-black rounded-3xl gap-5">
      <div className="w-1/2 h-[65vh]">
        <div className="relative w-full h-full flex items-center justify-center bg-[#004D43] rounded-xl">
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <h5 className="absolute left-5 bottom-5 border-[1px] rounded-full px-4 py-1 border-zinc-100">©️2019-2022</h5>
        </div>
      </div>
      <div className="w-1/2 h-[65vh] flex gap-5">
        <div className="relative flex items-center justify-center w-1/2 h-full bg-zinc-900 rounded-xl overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className=" absolute left-5 bottom-5 uppercase px-4 py-1 border-[1px] border-zinc-100 rounded-full">rating 5.0 on clutch</button>
        </div>
        <div className="relative flex items-center justify-center w-1/2 h-full bg-zinc-900 rounded-xl overflow-hidden">
          <img className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className=" absolute left-5 bottom-5 uppercase px-4 py-1 border-[1px] border-zinc-100 rounded-full">business bootcamp alumni</button>
        </div>
      </div>
    </div>
  );
};

export default Cardsss;
