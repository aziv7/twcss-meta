import React from 'react'

import 'swiper/css';
import 'swiper/css/pagination';

import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination} from 'swiper'
import {slider} from '../data'
const Slider = () => {
  return (
    <Swiper breakpoints={{320:{
slidesPerView:1
,spaceBetween:18
    },
    
    768:{
        slidesPerView:2
        ,spaceBetween:28
            },

            1024:{
                slidesPerView:3
                ,spaceBetween:30
                    }
    
    }}>
        {slider.map((s,i)=>{return(<SwiperSlide key={i} className='rounded-lg p-4 md:p-6 
        min-h-[240px] bg-gradient-to-t from-[#130613] cursor-pointer via-[#2A1428] to-[#331A35]'>
            <p className='mb-8 min-h-[100px] text-[15px]'>{s?.message}</p>
       <div className='flex flex-col gap-x-4 md:flex-row md:items-center'>
<div className='w-14'>
    <img className='mb-3 md:mb-0' src={s?.image} alt="" />
</div>
<div>
<div className='font-medium text-base'>{s?.name}</div>
<div className='font-medium text-rose-600'>{s?.email}</div>
  
</div>

       </div>
       
        </SwiperSlide>)})}
    </Swiper>
  )
}

export default Slider