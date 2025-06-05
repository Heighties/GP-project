import React from "react";
import { FaTimes } from "react-icons/fa";
import { stackIconMap } from "../../../utils/stackIcons";
import CarrouselModal from "../../Carrousel/CarrouselModal";

const RealisationModal = ({ isOpen, closeModal, realisation }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-slate-900 bg-opacity-90 xl:p-8 xl:mt-16 rounded-2xl w-full h-full xl:w-3/4 xl:h-[85%] border-2 border-slate-600 hover:border-slate-400 z-50 flex flex-col items-center justify-center xl:gap-40 relative">
        <button
          className="absolute top-4 right-6 text-white"
          onClick={closeModal}
        >
          <FaTimes />
        </button>

        <div className="flex flex-col items-center xl:flex-row w-full h-full overflow-x-auto mt-10 xl:mt-0">
          <div className="h-full flex flex-col gap-10 items-center xl:w-1/2">
            <h2 className="mt-4 text-white text-2xl font-bold">
              {realisation.title}
            </h2>
            <div className="flex flex-col items-center">
              <h3 className="text-white text-lg font-bold">Stacks :</h3>
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                {realisation.stacks.split(", ").map((stack) => {
                  const tech = stackIconMap[stack.trim()];
                  const Icon = tech?.icon;
                  return Icon ? (
                    <div key={stack} className="flex flex-col items-center">
                      <Icon className={`text-4xl ${tech.color}`} />
                      <span className="text-white text-sm mt-1">
                        {stack.trim()}
                      </span>
                    </div>
                  ) : null;
                })}
              </div>
            </div>
            <div className="flex flex-col items-center ">
              <h3 className="text-white text-lg font-bold">Description :</h3>
              <p className="mt-2 p-4 xl:p-0 xl:w-3/4 text-white">
                {realisation.description}
              </p>
            </div>
          </div>
          <div className="realisation-card cursor-pointer mb-10 xl:mb-0 xl:w-1/2 h-full">
            <CarrouselModal images={realisation.images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealisationModal;
