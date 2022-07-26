import { useState } from 'react';
import {
  Banner,
  Experience,
  Header,
  Headsets,
  NavMobile,
  Reviews,
  Video,
} from './components';
import logo from './logo.svg';

function App() {
  const [navMenu, setNavMenu] = useState(false);

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
    </div>
  );
}

export default App;
