import React from 'react'
import Carrousel from '../../components/Carrousel/Carrousel'
import datas from '../../datas/datas'


const Portfolio = () => {
  return (
    <div className='relative flex flex-col min-h-screen xl:h-full items-center xl:justify-center md:mt-24 xl:mt-60'>
        <h1 className='font-bold text-white mt-8 xl:mt-0 text-2xl xl:text-4xl'>Portfolio</h1>
        <div className='w-full'>
            <Carrousel items={datas} />
        </div>
    </div>
  )
}

export default Portfolio