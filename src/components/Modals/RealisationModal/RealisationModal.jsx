import React from 'react';
import { FaTimes, FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaAngular, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiMongodb, SiFramer, SiJquery } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import CarrouselModal from '../../Carrousel/CarrouselModal';

const stackIcons = {
  HTML: <FaHtml5 className="text-white text-4xl" />,
  CSS: <FaCss3Alt className="text-white text-4xl" />,
  JavaScript: <FaJs className="text-white text-4xl" />,
  React: <FaReact className="text-white text-4xl" />,
  'Vue.js': <FaVuejs className="text-white text-4xl" />,
  Angular: <FaAngular className="text-white text-4xl" />,
  jQuery: <SiJquery className="text-white text-4xl" />,
  SCSS: <DiSass className="text-white text-4xl" />,
  NodeJS: <FaNodeJs className="text-white text-4xl" />,
  Tailwind: <SiTailwindcss className="text-white text-4xl" />,
  Figma: <SiFigma className="text-white text-4xl" />,
  MongoDB: <SiMongodb className="text-white text-4xl" />,
  'Framer Motion': <SiFramer className="text-white text-4xl" />,
  Git: <FaGitAlt className="text-white text-4xl" />,
  GitHub: <FaGithub className="text-white text-4xl" />
};

const RealisationModal = ({ isOpen, closeModal, realisation }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-slate-900 bg-opacity-90 xl:p-8 xl:mt-16 rounded-32 w-full h-full xl:w-3/4 xl:h-[85%] border-4 border-white z-50 flex flex-col items-center justify-center xl:gap-40 relative">
        
        <button className="absolute top-4 right-6 text-white" onClick={closeModal}>
          <FaTimes />
        </button>
        
        <div className='flex flex-col items-center xl:flex-row w-full h-full overflow-x-auto mt-10 xl:mt-0'>
          
          
          
          <div className='h-full flex flex-col gap-10 items-center xl:w-1/2'>
            <h2 className="mt-4 text-white text-2xl font-bold">{realisation.title}</h2>
            <div className='flex flex-col items-center'>
              <h3 className='text-white text-lg font-bold'>Stacks : </h3>
              <div className='mt-2 flex space-x-2 gap-10'>
                {realisation.stacks.split(', ').map(stack => (
                  <div key={stack} className='flex flex-col items-center'>
                    {stackIcons[stack.trim()]}
                    <span className="text-white text-sm">{stack.trim()}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col items-center '>
              <h3 className='text-white text-lg font-bold'>Description :</h3>
              <p className="mt-2 p-4 xl:p-0 xl:w-3/4 text-white">{realisation.description}</p>
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
