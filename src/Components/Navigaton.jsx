import React from 'react'
import Imbd from '../Assets/Logo.svg'
import Menu from '../Assets/Menu.svg'
import SearchField from './SearchField.jsx'
import DropdownOne from './DropdownOne'
import DropdownTwo from './DropdownTwo'

const Navigaton = () => {
  return (
    <div className='flex px-7  pt-7 items-center justify-between'>
      <div>
        <img src={Imbd} className='w-[135px] md:w-auto' alt="" />
      </div>
      <div className='flex space-between gap-20'>
        <div>
          <DropdownOne/>
        </div>
        <div>
          <DropdownTwo/>
        </div>
      </div>

      {/* <div className='flex items-center'>
        <SearchField/>   
      </div> */}

      <div>
        <img src={Menu} alt="" />
      </div>

    </div>
  )
}

export default Navigaton
