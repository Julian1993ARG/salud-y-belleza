import { FooterSvg, ContactForm, InstagramSvg, MapSvg, PhoneSvg } from './';
import Image from 'next/image';
import bigLogo from '../../public/bigLogo.png';
import Link from 'next/link';

export default function footer () {
  return (
    <footer id='footer' className='w-full'>
      <FooterSvg />
      <p className='mb-3 font-bold text-xl p-3 text-center'>¿En qué tratamiento estás interesado?</p>
      <section className='w-full flex flex-wrap p-3 gap-2'>
        <SocialMedia />
        <ContactForm />
      </section>
      <section className='bg-[#FFF8DE] w-full'>
        <div className='flex justify-around pt-6 flex-wrap'>
          <div className='relative w-48 h-20 mb-4'>
            <Image
              src={bigLogo}
              alt='Ferreyra Mara Logo'
              fill
              priority
              sizes='33vw'
            />
          </div>

          <ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 '>
            <li>
              <a href='#' className='mr-4 hover:underline  '>About</a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline  '>Licensing</a>
            </li>
            <li>
              <Link href='/privacityPoliti' className='hover:underline'>Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <hr className='my-3 border-gray-200 sm:mx-auto  lg:my-8' />
        <span className='block text-sm text-gray-500 text-center pb-2 pl-2 '>© Ferreyra Mara Silvina™. All Rights Reserved.
        </span>

      </section>
    </footer>
  );
}

const SocialMedia = () => {
  return (
    <section>
      <div className='flex flex-col gap-2 flex-auto'>
        <p className='pb-5 block font-medium max-w-xs'>
          Envianos tu consulta por WhatsApp o Redes Sociales.
        </p>
        <a
          href='https://www.google.com/maps/place/Pueyrred%C3%B3n+545,+Oliva,+C%C3%B3rdoba/@-32.0366922,-63.5676043,20z/data=!4m5!3m4!1s0x95cce1f76ab711e7:0xccc76b7dd910e2a3!8m2!3d-32.03665!4d-63.5674795?hl=es'
          target='_blank'
          rel='noreferrer'
          className='w-full cursor-pointer'
        >
          <div className='flex h-10 gap-3 pl-3'>
            <MapSvg className='w-7' /><p className='font-bold'>Ubicación: <span className='block font-normal'>Pueyrredón 545, Oliva, Córdoba</span> </p>
          </div>
        </a>

        <a
          href='https://instagram.com/mara.ferreyra.estetica?igshid=YmMyMTA2M2Y='
          target='_blank'
          rel='noreferrer'
          className='w-full cursor-pointer '
        >
          <div className='flex h-10 gap-3 pl-3'>
            <InstagramSvg className='w-7' /><p className='font-bold'>Instagram: <span className='block font-normal'>mara.ferreyra.estetica</span> </p>
          </div>
        </a>

        <a
          href='https://wa.me/543513851406'
          target='_blank'
          rel='noreferrer'
          className='w-full cursor-pointer'
        >
          <div className='flex h-10 gap-3 pl-3'>
            <PhoneSvg className='w-7' /><p className='font-bold'>WhatsApp: <span className='block font-normal'>+543513851406</span> </p>
          </div>
        </a>

      </div>
    </section>
  );
};
