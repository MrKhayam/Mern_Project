import React from 'react'
import { HiOutlineSparkles } from "react-icons/hi2";


const Header = () => {
  return (
    <>
          <div className="flex items-center border-b-2 w-full px-4 h-20 shadow bg-white justify-between">
            <h1 className='text-xl cursor-pointer font-bold'>Home</h1>
            <HiOutlineSparkles size={25} cursor='pointer' className='text-blue-500'/>
          </div> 
    </>
  )
}

export default Header
