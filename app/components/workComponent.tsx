
import workImage1 from '../../public/images/works1.png';
import Image from 'next/image';
import { CheckSvg, HeaderSvg } from './';

export default function WorkComponent () {
  return (
    <>
      <HeaderSvg title='MASAJES DESCONTRACTURANTES' />

      <article className='flex relative max-w-full flex-1'>
        <Image
          className='w-auto h-auto overflow-x-hidden relative bottom-14'
          alt='background'
          src={workImage1}
          priority
        />
        <p className='flex-1 w-auto h-auto font-normal text-xs text-[#4B4B4B] text-center p-1 mt-5 bit:mt-10'>
          Con el objetivo de liberar los músculos y las articulaciones. Un masaje descontracturante permite aflojar y relajar los músculos rígidos y tensos.
        </p>
      </article>
      <div className='flex flex-col gap-2 absolute bottom-10 right-2 font-bold text-xs'>
        <p className='inline-flex items-center pl-16'><i className='inline-block w-4 mr-2'><CheckSvg /></i>Alivio</p>
        <p className='inline-flex items-center pl-8'><i className='inline-block w-4 mr-2'><CheckSvg /></i>Relajación</p>
        <p className='inline-flex items-center '><i className='inline-block w-4 mr-2'><CheckSvg /></i>Eliminación de contracturas</p>

      </div>
    </>
  );
}
