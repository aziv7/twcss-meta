import React from 'react';

import baner from '../assets/img/banner-img.png';
import Users from './Users';

const Banner = () => {
  return (
    <section className='min-h-[600px] pt-24 pb-12 lg:pt-48 lg:pb-0 lg:text-left text-center relative'>
      <div className='mx-auto container'>
        <div className='flex flex-col lg:flex-row'>
          <div>
            <h1
              data-aos='fade-down'
              data-aos-delay='500'
              className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug'>
              {' '}
              <p>Let's Explore</p>
              <p>3 Dimensions Visually.</p>
            </h1>
            <p
              data-aos='fade-down'
              data-aos-delay='600'
              className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              ex suscipit sapiente repellat sunt eum, tenetur, velit, possimus
              dolore voluptatibus sit iure? Tempore explicabo non quibusdam
              labore voluptate sequi ab?
            </p>
            <div
              data-aos='fade-down'
              data-aos-delay='700'
              className='flex items-center
justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8
lg:mx-0 lg:max-w-none lg:justify-start
'>
              <button className='font-medium transform-gpu hover:ring-1 hover:ring-white  h-12 px-8 bg-gradient-to-r from-[#b936f5] to-[#f1006c] rounded text-[15px] transition-all ease-in-out duration-500  hover:bg-gradient-to-l hover:from-[#b936f5] hover:to-[#f1006c] outline-none flex items-center justify-center cursor-pointer'>
                Get Started
              </button>
              <a
                className='border-b-2 border-transparent hover:border-b-2 hover:border-white transition-all ease-in-out'
                href=''>
                Explore Device
              </a>
            </div>
            <Users />
          </div>
          <div data-aos='fade-up' data-aos-delay='800'>
            <img src={baner} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
