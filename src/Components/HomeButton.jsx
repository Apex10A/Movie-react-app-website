import React from 'react'
import Play from '../Assets/play.svg'

const HomeButton = () => {
  return (
    <div className='flex items-center pt-4'>
      <button className='bg-red-700 px-10 font-bold text-white py-3 md:py-4 rounded-lg'>Watch Trailer</button>
<div className='absolute '>
<img src={Play} width='30px' className='relative left-1' alt="" />
</div>
    </div>
  )
}

export default HomeButton
