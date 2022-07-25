import React from 'react'


import {IoClose} from 'react-icons/io5'

const NavMobile = ({setNavMenu,navMenu}) => {
  return (
    <div className='md:hidden bg-inherit bg-[#251f3f]  h-full right-0 fixed top-0 bottom-0 w-48 transition-all'>
        
        <IoClose onClick={()=>setNavMenu(!navMenu)}  className='text-3xl absolute top-6 left-4 cursor-pointer'/>
        <ul className='flex flex-col space-y-12 mt-7 items-center font-secondary'>
            <li className='nav-link'><a href="">Home</a> </li>
            <li className='nav-link'><a href="">Company</a> </li>
            <li className='nav-link'><a href="">Features</a> </li>
            <li className='btn'><a href=""> Sign up</a></li>
        </ul>   </div>
  )
}

export default NavMobile