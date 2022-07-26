import React from 'react';

const Explore = () => {
  return (
    <section className='min-h-[400px] mb-16 md:mb-10'>
      <div className='container mx-auto h-full'>
        <div
          className='h-full bg-explore bg-no-repeat bg-cover 
            p-14 flex flex-col items-start justify-center'>
          <h3
            data-aos-offset='1000'
            data-aos='fade-right'
            className='text-3xl font-semibold mb-8'>
            Explore product in new way
          </h3>
          <p
            data-aos-offset='1200'
            data-aos='fade-left'
            className='max-w-xs mb-12 '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            aliquid praesentium itaque eius? Reiciendis ratione modi consectetur
            impedit quis et recusandae omnis tempore soluta numquam?
          </p>

          <form
            className='flex flex-col w-full space-y-4
            gap-x-4 md:flex-row md:space-y-0
            '>
            <input
              data-aos-offset='300'
              data-aos='fade-up'
              className='
h-12 px-4 outline-none rounded-md focus:ring-2 focus:ring-purple-500
bg-gradient-to-t from-[#130613]  via-[#2A1428] to-[#331A35]'
              placeholder='Your email'
              type='text'
            />

            <button data-aos-offset='300' data-aos='fade-up' className='btn'>
              Start
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Explore;
