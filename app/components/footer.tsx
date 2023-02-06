import { FooterSvg, ContactForm, InstagramSvg, MapSvg, PhoneSvg } from './';

export default function footer () {
  return (
    <footer id='footer' className='w-full'>
      <FooterSvg />
      <section className='w-full flex-col p-3'>
        <SocialMedia />
        <ContactForm />
      </section>
    </footer>
  );
}

const SocialMedia = () => {
  return (
    <section>
      <p className='mb-3 font-bold text-lg'>Envianos tu consulta por WhatsApp o Redes Sociales.</p>
      <div className='flex flex-col gap-2'>
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
