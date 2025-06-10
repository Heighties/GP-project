import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import datas from "../../datas/datas";

const Portfolio = () => {
  return (
    <div className="relative flex flex-col items-center md:mt-8 xl:mt-32 ">
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
