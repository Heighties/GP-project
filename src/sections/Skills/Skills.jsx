import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiMongodb, SiFramer, SiStrapi, SiPowershell } from 'react-icons/si';
import { DiSass } from 'react-icons/di';
import { AiOutlineConsoleSql } from 'react-icons/ai';

const Skills = () => {
  return (
    <div className='flex flex-col items-center w-full h-full gap-8 xl:gap-10'>
      <h1 className='font-bold text-white text-2xl xl:text-4xl mt-8 xl:mt-24'>Mes compétences</h1>
      <div className='items-center xl:items-stretch flex flex-col xl:flex-row w-full xl:w-2/3 xl:h-2/3 gap-4 xl:gap-10'>
        
        <div className='bg-slate-800 border-4 border-white w-3/4 xl:w-1/3 rounded-32 flex flex-col items-center'>
          <h2 className='text-white xl:text-2xl mt-2'>Frontend</h2>
          <div className='grid grid-cols-3 xl:gap-10 xl:mt-10'>
            <div className='flex flex-col items-center'>
              <FaHtml5 className="text-white xl:text-4xl" />
              <span className='text-white text-sm'>HTML</span>
            </div>
            <div className='flex flex-col items-center'>
              <FaCss3Alt className="text-white xl:text-4xl" />
              <span className='text-white text-sm'>CSS</span>
            </div>
            <div className='flex flex-col items-center'>
              <FaJs className="text-white xl:text-4xl" />
              <span className='text-white text-sm'>JavaScript</span>
            </div>
            <div className='flex flex-col items-center'>
              <DiSass className="text-white xl:text-4xl" />
              <span className='text-white text-sm'>SCSS</span>
            </div>
            <div className='flex flex-col items-center'>
              <FaReact className="text-white xl:text-4xl" />
              <span className='text-white text-sm'>React</span>
            </div>
            <div className='flex flex-col items-center'>
              <SiTailwindcss className="text-white xl:text-4xl" />
              <span className='text-white text-sm'>Tailwind</span>
            </div>
          </div>
        </div>
        
        <div className='bg-slate-800 border-4 border-white w-3/4 xl:w-1/3 h-full rounded-32 flex flex-col items-center'>
          <h2 className='text-white xl:text-2xl mt-2'>Backend</h2>
          <div className='grid grid-cols-2 xl:gap-16 xl:mt-10'>
            <div className='flex flex-col items-center'>
              <FaNodeJs className="text-white xl:text-4xl" />
              <span className='text-white text-sm'>NodeJS</span>
            </div>
            <div className='flex flex-col items-center'>
              <SiStrapi className="text-white xl:text-4xl" />
              <span className='text-white text-sm'>Strapi</span>
            </div>
            <div className='flex flex-col items-center'>
              <AiOutlineConsoleSql className="text-white xl:text-4xl" />
              <span className='text-white text-sm'>SQL</span>
            </div>
            <div className='flex flex-col items-center'>
              <SiMongodb className="text-white xl:text-4xl" />
              <span className='text-white text-sm'>MongoDB</span>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col w-3/4 xl:w-1/3 gap-4 xl:gap-10'>
          <div className='bg-slate-800 border-4 border-white w-full xl:w-full xl:h-1/2 rounded-32 flex flex-col items-center'>
            <h2 className='text-white xl:text-2xl mt-2'>Web design</h2>
            <div className='flex flex-wrap justify-center items-center gap-10 mt-4'>
              <div className='flex flex-col items-center'>
                <SiFigma className="text-white xl:text-4xl" />
                <span className='text-white text-sm'>Figma</span>
              </div>
              <div className='flex flex-col items-center'>
                <SiFramer className="text-white xl:text-4xl" />
                <span className='text-white text-sm'>Framer Motion</span>
              </div>
            </div>
          </div>
          <div className='bg-slate-800 border-4 border-white w-full xl:h-1/2 rounded-32 flex flex-col items-center'>
            <h2 className='text-white xl:text-2xl mt-2'>Divers</h2>
            <div className='flex flex-wrap justify-center xl:gap-10 xl:mt-4'>
              <div className='flex flex-col items-center'>
                <FaGitAlt className="text-white xl:text-4xl" />
                <span className='text-white text-sm'>Git</span>
              </div>
              <div className='flex flex-col items-center'>
                <FaGithub className="text-white xl:text-4xl" />
                <span className='text-white text-sm'>GitHub</span>
              </div>
              <div className='flex flex-col items-center'>
                <SiPowershell className="text-white xl:text-4xl" />
                <span className='text-white text-sm'>PowerShell</span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='text-white rounded-lg w-full h-64 xl:h-1/3 flex justify-center items-center bg-fixed bg-cover bg-parallax mb-10'>
        <div className='bg-slate-900 bg-opacity-50 w-full h-full flex justify-center items-center'>
            <div className='bg-black bg-opacity-60'>
                <h2 className='font-bold text-center xl:text-xl'>Ainsi que beaucoup de curiosité et d'envie d'apprendre</h2>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Skills;
