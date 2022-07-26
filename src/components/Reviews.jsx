import React from 'react'
import Slider from './Slider'





const Reviews = () => {
  return (
    <section className='mb-64 md:mb-48'>
        
<div className="container mx-auto">

    <div className='bg-purple-400/10 max-h-[400px] p-12 rounded-lg'>
        <div className='text-center'>
            <h2 className='text-3xl font-bold mb-6'>What our clients say</h2>
       <p className='max-w-2xl mx-auto mb:12 md:mb-24'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui similique asperiores dicta, iste cum at. Quae doloribus incidunt culpa quasi vitae necessitatibus corrupti minima? Omnis sed officiis rerum modi optio!

       </p>
        </div>
        <div data-aos='fade-up' data-aos-offset='300' data-aos-delay='2000'>
            <Slider/>
        </div>
    </div>
</div>

    </section>
  )
}

export default Reviews