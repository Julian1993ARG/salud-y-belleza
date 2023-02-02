import Image from 'next/image';
import headerImage from '../public/images/landingTop.jpg';
import { Card, WorkComponent } from './components';
import { cardText } from '@/app/model';

export default function Page () {
  return (
    <>
      <section
        className='select-none relative min-w-full overflow-y-hidden'
        style={{ maxHeight: 'calc(100vh - 26rem)' }}
      >
        <div className='pl-7 w-9/12 h-auto absolute z-10 top-1/3 text-white'>
          <h1 className='pb-4 font-bold text-3xl '>
            Centro de Salud y Belleza
          </h1>
          <p className='font-medium text-base'>
            Tratamientos para el cuidado, fortalecimiento y protección de la salud del cuerpo y la mente.
          </p>
        </div>
        <Image
          className='object-contain'
          alt='background'
          src={headerImage}
          priority
        />
      </section>
      <section className='relative bg-white w-full flex flex-col justify-center items-center gap-y-4 '>
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
      <section className='relative'>
        <WorkComponent />
      </section>
    </>
  );
}
