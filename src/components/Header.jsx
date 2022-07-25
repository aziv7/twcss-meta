import React from 'react'


import Logo from '../assets/img/logo.svg'
import Nav from './Nav'
import { HiMenu,} from 'react-icons/hi'

const Header = ({navMenu,setNavMenu}) => {
  return (
    <header className='py-6'>
        
<div className='container mx-auto '>
    <div className='flex items-center justify-between md:justify-around'>
<a href="">
    <img className='h-[30px]' src={Logo} alt="" />
</a>
<Nav/>
<HiMenu onClick={()=>setNavMenu(!navMenu)} className='md:hidden text-3xl 
text-white cursor-pointer
' />
    </div>

</div>

    </header>
  )
}

export default Header