'use client';
import { Navbar, Dropdown } from 'flowbite-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo.png';

const Header = function () {
  return (
    <header className='sticky top-0 z-20 text-gray-400'>
      <Navbar fluid>
        <Navbar.Brand href='/'>
          <Image
            className='w-auto h-auto'
            alt='logo'
            height='23'
            src={logo}
            width='36'
            priority
          />
          {/* <span className='self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white'>
            Flowbite
          </span> */}
        </Navbar.Brand>
        <div className='flex md:order-2'>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className='font-bold uppercase text-gray-400 bk'>
          <Navbar.Link href='/' active>
            Inicio
          </Navbar.Link>
          <Navbar.Link href='#contact'>Contacto</Navbar.Link>
          <Navbar.Link href='/store'>Tienda</Navbar.Link>

          <div className='pl-3 pr-4 py-2 text-bold  text-gray-400'>
            <Dropdown
              label='TRATAMIENTOS'
              inline

            >
              <Dropdown.Item><a href='#work1'>Masajes</a></Dropdown.Item>
              <Dropdown.Item><Link href='#trat1'>Tratamiento 2</Link></Dropdown.Item>
              <Dropdown.Item><Link href='#trat1'>Tratamiento 3</Link></Dropdown.Item>
              <Dropdown.Item><Link href='#trat1'>Tratamiento 4</Link></Dropdown.Item>
              <Dropdown.Item><Link href='#trat1'>Tratamiento 5</Link></Dropdown.Item>
            </Dropdown>
          </div>
          <div className='my-2 min-w-full h-2 bg-green-500' />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
