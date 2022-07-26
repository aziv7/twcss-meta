import React, { useState } from 'react'
import { BsPlayCircleFill } from 'react-icons/bs'

const Video = () => {
    const [open,setOpen]=useState(false)
  return (
    <div className='bg-[#534686]/30 py-6'>
        
        <div className="container mx-auto">

<div className='flex flex-col md:flex-row md:justify-between justify-center items-center text-center'>
    <h3 className='text-2xl md:mb-4 mb-8 font-semibold'>Awesome experience with VR</h3>

{/* <ModalVideo channel='youtube' autoplay onClose={()=>setOpen(false)}  isOpen={open}/> */}
     
    <div onClick={()=>setOpen(true)} className='bg-videoBg bg-no-repeat bg-cover w-[270px] h-[180px] flex items-center justify-center group cursor-pointer'>
        <div >
            <BsPlayCircleFill className='text-4xl text-white/90 transition-all duration-200 group-hover:text-white group-hover:scale-125 opacity-60 group-hover:opacity-70'/>
        </div>
     </div>
     </div>
        </div>
    </div>
  )
}

export default Video