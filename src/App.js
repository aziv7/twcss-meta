import { useEffect, useState } from 'react';
import {
  Banner,
  Experience,
  Explore,
  Header,
  Headsets,
  NavMobile,
  Reviews,
  Video,
} from './components';
import logo from './logo.svg';

import 'aos/dist/aos.css';
import aos from 'aos';
function App() {
  const [navMenu, setNavMenu] = useState(false);

  useEffect(() => {
    aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);

  return (
    <div
      className='relative overflow-hidden before:w-[600px] 
    before:h-[200px] before:bg-circle 
    before:bg-no-repeat before:absolute before:-top-12
    before:left-[600px] before:hidden before:lg:flex'>
      <Header navMenu={navMenu} setNavMenu={setNavMenu} />
      <Banner />
      {navMenu == true && (
        <div className=' md:hidden '>
          <NavMobile navMenu={navMenu} setNavMenu={setNavMenu} />
        </div>
      )}
      <Experience />
      <Video />
      <Headsets />
      <Reviews />
      <Explore />
    </div>
  );
}

export default App;
