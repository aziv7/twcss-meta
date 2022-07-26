import React from 'react';
import headset1 from '../assets/img/headset-1.png';
import headset2 from '../assets/img/headset-2.png';
import headset3 from '../assets/img/headset-3.png';
import headset4 from '../assets/img/headset-4.png';
const Headsets = () => {
  return (
    <section className=' py-12 md:py-24'>
      <div className='container mx-auto'>
        <h2
          data-aos-offset='300'
          data-aos='fade-down'
          className=' text-3xl font-bold mb-6'>
          Mixed Reality Headsets
        </h2>
        <div className='grid gap-y-4 md:grid-cols-2 md:gap-9'>
          <div
            data-aos-offset='300'
            data-aos='fade-right'
            className='relative group cursor-pointer'>
            <img src={headset1} alt='' />
            <div
              className='transition-all ease-in-out duration-150 opacity-0 group-hover:opacity-100 absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] 
           p-6'>
              {' '}
              <h4 className='font-semibold text-xl mb-2'>Metaverse</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis, sequi. Vel delectus amet minus nihil, maxime iste
                assumenda dicta unde quam vero qui voluptates molestiae sunt
                laborum, beatae perferendis ut.
              </p>
            </div>
          </div>

          <div
            data-aos-offset='300'
            data-aos='fade-left'
            className='relative group cursor-pointer'>
            <img src={headset2} alt='' />
            <div
              className='transition-all ease-in-out duration-150 opacity-0 group-hover:opacity-100 absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] 
           p-6'>
              {' '}
              <h4 className='font-semibold text-xl mb-2'>AIoT</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis, sequi. Vel delectus amet minus nihil, maxime iste
                assumenda dicta unde quam vero qui voluptates molestiae sunt
                laborum, beatae perferendis ut.
              </p>
            </div>
          </div>

          <div
            data-aos-offset='300'
            data-aos='fade-right'
            className='relative group cursor-pointer'>
            <img src={headset3} alt='' />
            <div
              className='transition-all ease-in-out duration-150 opacity-0 group-hover:opacity-100 absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] 
           p-6'>
              {' '}
              <h4 className='font-semibold text-xl mb-2'>HoloLens</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis, sequi. Vel delectus amet minus nihil, maxime iste
                assumenda dicta unde quam vero qui voluptates molestiae sunt
                laborum, beatae perferendis ut.
              </p>
            </div>
          </div>

          <div
            data-aos-offset='300'
            data-aos='fade-left'
            className='relative group cursor-pointer'>
            <img src={headset4} alt='' />
            <div
              className='transition-all ease-in-out duration-150 opacity-0 group-hover:opacity-100 absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] 
           p-6'>
              {' '}
              <h4 className='font-semibold text-xl mb-2'>TPCASTT</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veritatis, sequi. Vel delectus amet minus nihil, maxime iste
                assumenda dicta unde quam vero qui voluptates molestiae sunt
                laborum, beatae perferendis ut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
