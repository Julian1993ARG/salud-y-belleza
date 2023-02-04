import Image from 'next/image';
import headerImage1920 from '../public/images/landingTop1920.jpg';

import { Card, WorkComponent } from './components';
import { cardText, dropDownRoutes, landingWorks } from './model';

export default function Page () {
  return (
    <section id='landing-page'>
      <HeaderPage />
      <section id='landing-page' className='relative bg-white w-full flex flex-wrap justify-center items-center gap-4 '>
        {
          cardText.map(card => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
            />
          ))
        }
      </section>
      <section className='flex justify-center flex-wrap gap-4'>
        {
        landingWorks.map((work, index) => (
          <article id={dropDownRoutes[index]?.path} className='max-w-md relative -mb-11  lg:max-w-md ' key={work.id}>
            <WorkComponent
              {...work}
            />
          </article>
        ))
        }
      </section>
    </section>
  );
}

const HeaderPage = () => {
  return (
    <section
      className='select-none relative min-w-full h-[441px]'
    >
      <div className='pl-7 w-9/12 h-auto absolute z-10 top-1/3 text-white md:w-3/5'>
        <h1 className='pb-4 font-bold text-3xl md:text-4xl'>
          Centro de Salud y Belleza
        </h1>
        <p className='font-medium text-base md:text-xl'>
          Tratamientos para el cuidado, fortalecimiento y protección de la salud del cuerpo y la mente.
        </p>
      </div>
      <Image
        className='w-full object-cover '
        alt='background'
        src={headerImage1920}
        priority
        fill
        placeholder='blur'
      />
    </section>
  );
};
