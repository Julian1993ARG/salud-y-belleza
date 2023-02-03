'use client';

import { useState, lazy } from 'react';
import { usePathname } from 'next/navigation';
import Navigation from './navigation';
import { navRoutes } from '../model';

const DropDown = lazy(() => import('./dropDown'));

export default function NavBar () {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const isHome = pathname === '/';

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='px-2 h-16 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 '>
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <a href='#' className='flex items-center'>
          <img src='https://flowbite.com/docs/images/logo.svg' className='h-6 mr-3 sm:h-10' alt='Flowbite Logo' />
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>Flowbite</span>
        </a>

        <button onClick={handleClick} type='button' className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600' aria-controls='navbar-dropdown' aria-expanded='false'>
          <span className='sr-only'>Open main menu</span>
          <svg className='w-6 h-6' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clipRule='evenodd' /></svg>
        </button>

        <div className={`${isOpen ? '' : 'hidden'} w-full md:block md:w-auto`} id='navbar-dropdown'>
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>

            {
              navRoutes.map(route => (
                <li key={route.id}>
                  <Navigation slug={route.path} className='block py-2 pl-3 pr-4 text-gray-600 rounded  md:p-0 '>{route.title}</Navigation>
                </li>
              ))
            }

            {
              isHome && (
                <li>
                  <DropDown />
                </li>)
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}
