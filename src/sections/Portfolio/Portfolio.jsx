import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import datas from "../../datas/datas";

const Portfolio = () => {
  return (
    <div className="relative flex flex-col min-h-screen xl:h-full items-center xl:justify-center md:mt-24 xl:mt-60 ">
      <div className="text-center">
        <h1 className="font-bold text-white text-2xl xl:text-4xl mb-3">
          Portfolio
        </h1>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      <div className="w-full">
        <Carrousel items={datas} />
      </div>
    </div>
  );
};

export default Portfolio;
