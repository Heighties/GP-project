import React from 'react'
import Card3D from '../../components/Card3D/Card3D'

const Homepage = () => {
  return (
    // perspective pour effet de la card
    <div className='flex min-h-screen items-center justify-center bg-slate-950 [perspective:1000px] hide-scrollbar overflow-hidden'>
        <Card3D />
    </div>
  )
}

export default Homepage