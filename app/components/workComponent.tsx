
import Image, { StaticImageData } from 'next/image';
import { CheckSvg, HeaderSvg } from './';

interface Props {
  title: string;
  id: string | undefined;
  description: string;
  image: StaticImageData;
  check1: string;
  check2: string;
  check3: string;
}

export default function WorkComponent ({ title, id, description, image, check1, check2, check3 }: Props) {
  return (
    <>
      <HeaderSvg title={title} id={id} />

      <article className='flex relative max-w-full flex-1'>
        <Image
          className='w-auto h-auto overflow-x-hidden relative bottom-14'
          alt='background'
          src={image}
          priority
        />
        <p className='flex-1 w-auto h-auto font-normal text-xs text-[#4B4B4B] text-center p-1 mt-5 bit:mt-10'>
          {description}
        </p>
      </article>
      <div className='flex flex-col gap-2 absolute bottom-10 right-2 font-bold text-xs'>
        <p className='inline-flex items-center pl-16'><i className='inline-block w-4 mr-2'><CheckSvg /></i>{check1}</p>
        <p className='inline-flex items-center pl-8'><i className='inline-block w-4 mr-2'><CheckSvg /></i>{check2}</p>
        <p className='inline-flex items-center '><i className='inline-block w-4 mr-2'><CheckSvg /></i>{check3}</p>

      </div>
    </>
  );
}
