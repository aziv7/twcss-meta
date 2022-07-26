import React from 'react';
import AVTR1 from '../assets/img/avt1.png';
import AVTR2 from '../assets/img/avt2.png';
import AVTR3 from '../assets/img/avt3.png';
import AVTR4 from '../assets/img/avt4.png';

import { BsFillCircleFill } from 'react-icons/bs';
const Users = () => {
  return (
    <div
      data-aos='fade-down'
      data-aos-delay='900'
      className='flex flex-col justify-center items-center space-x-5 space-y-2 lg:flex-row lg:space-y-0 lg:justify-start'>
      <div className='flex -space-x-2'>
        <div className='w-12 h-12 rounded-full transition-all duration-200 hover:-translate-y-2 group hover:border-3 hover:border-white'>
          <img
            className='group-hover:border-3 group-hover:border-white'
            src={AVTR1}
            alt=''
          />
        </div>
        <div className='w-12 h-12 rounded-full transition-all duration-200 hover:-translate-y-2 group hover:border-3 hover:border-white'>
          <img src={AVTR2} alt='' />
        </div>
        <div className='w-12 h-12 rounded-full transition-all duration-200 hover:-translate-y-2 group hover:border-3 hover:border-white'>
          <img src={AVTR3} alt='' />
        </div>
        <div className='w-12 h-12 rounded-full transition-all duration-200 hover:-translate-y-2 group hover:border-3 hover:border-white'>
          <img src={AVTR4} alt='' />
        </div>
      </div>
      <div className=' flex items-center space-x-2'>
        <BsFillCircleFill className='text-xs text-green-500 animate-pulse' />
        <div>400k user online</div>{' '}
      </div>
    </div>
  );
};

export default Users;
