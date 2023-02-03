import { Suspense } from 'react';
import { NavBar } from './';

const Header = function () {
  return (
    <Suspense fallback={<>Loading...</>}>
      <header className='sticky top-0 z-20 text-gray-400 bg-opacity-80 bg-white'>
        <NavBar />
      </header>
    </Suspense>
  );
};

export default Header;
