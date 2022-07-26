import React from 'react'

import img1 from '../assets/img/exp-img1.png'
import img2 from '../assets/img/exp-img2.png'

const Experience = () => {
  return (
    <section className='md:mt-10 mb-12 md:mb-24'>

        <div className='container mx-auto'>
            <div className='flex flex-col min-h-[480px]
            lg:space-x-20 lg:flex-row'>
             <div className='flex flex-1 space-x-6 items-center  md:space-x-12'>   
             <div className='self-start'>
                    <img src={img1}  alt="" />
                </div>
                <div className='self-end'>
                    <img src={img2} alt="" />
                </div></div>
                <div className='mt-6 flex-1 flex flex-col items-start justify-center md:mt-0'>
                    <h2 className='text-3xl font-bold mb-6'>New Experience In Playing Games</h2>
                <p className='font-secondary mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nobis eaque blanditiis dolorem ducimus. Quas illum, rem suscipit error libero id tempora earum fugiat neque maiores fugit quod, hic facere.</p>
               <button className='btn'>Get it now</button> </div>
            </div>

        </div>
    </section>
  )
}

export default Experience