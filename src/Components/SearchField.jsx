import React from 'react'
import Search from '../Assets/Search.svg'

const SearchField = () => {
  return (
    <div>
      <div className='flex relative items-center '>
       <input type="text" className='rounded-xl  py-2 md:py-3 outline-none border-2px md:w-[300px]  px-10 md:px-6' placeholder='What do you wanna watch?' />

       <svg className='absolute right-2 ' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        
        </div>
    </div>
  )
}

export default SearchField
