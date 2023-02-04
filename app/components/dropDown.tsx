'use client';

import { useState, FunctionComponent } from 'react';
import { dropDownRoutes } from '../model';

export default function DropDown () {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const toClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const current = event.currentTarget.getAttribute('href');
    if (!current) return;
    const id = current.slice(1);

    const target = document.getElementById(id);
    if (!target) return;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const closeToggle = () => {
    setIsOpen(false);
  };

  if (typeof window !== 'undefined') {
    if (document.getElementById('landing-page')) {
      document.getElementById('landing-page')?.addEventListener('click', () => {
        if (isOpen) closeToggle();
      });
    }
  }
  return (
    <>
      <button onClick={handleClick} className='flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-pink-300 md:p-0 md:w-auto'>

        Tratamientos

        <svg className='w-5 h-5 ml-1' aria-hidden='true' fill='#1F9E48' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clipRule='evenodd' />
        </svg>
      </button>

      <div className={`z-10 ${isOpen ? '' : 'hidden'} md:absolute md:w-auto bg-white font-normal divide-y divide-gray-100 rounded-lg shadow w-full`}>
        <ul className='py-2 text-sm text-gray-700 '>
          {
            dropDownRoutes.map(route => (
              <li key={route.path}>
                <MenuItem
                  href={`#${route.path}`}
                  className=' transition-all block px-4 py-2 hover:bg-pink-300'
                  handleClick={toClick}
                >
                  {route.title}
                </MenuItem>
              </li>
            ))
          }

        </ul>
      </div>
    </>
  );
}

interface MenuItemProps {
  href: string;
  handleClick: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  children: string
  className?: string
}

const MenuItem: FunctionComponent<MenuItemProps> = ({ href, children, handleClick, className }) => (
  <a href={href} onClick={handleClick} className={className}>
    {children}
  </a>
);
