import React from 'react'

const Footer = () => {
  return (
    <div>
        <div>
            <div>
                <img src='' alt="" />

            </div>
        </div>


        <div className='flex items-center gap-20 justify-center '>
        <div>
            <p className='font-bold opacity-[0.8] md:text-lg'>Conditions of Use</p>
        </div>
        <div>
            <p className='font-bold opacity-[0.8] md:text-lg'>Privacy Policy</p>
        </div>
        <div>
            <p className='font-bold opacity-[0.8] md:text-lg'>Press Room</p>
        </div>
        </div>

        <div className='flex items-center justify-center mt-8 mb-2'>
            <p className='font-bold opacity-[0.6] md:text-lg'>© 2023 MovieBox by Apex</p>
        </div>
      
    </div>
  )
}

export default Footer
