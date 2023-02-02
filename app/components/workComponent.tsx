
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
      <article className='flex relative max-w-full items-center'>
        <div className='flex flex-col gap-2 bottom-10 right-2 font-bold text-xs relative'>
          <Image
            className='w-auto h-auto  relative -translate-y-9 bit:translate-x-2 '
            alt='background'
            src={image}
            priority
          />
          <div className='flex pl-5 flex-col gap-2 relative -top-4 '>
            <p className='inline-flex items-center '><i className='inline-block w-4 mr-2'><CheckSvg /></i>{check1}</p>
            <p className='inline-flex items-center '><i className='inline-block w-4 mr-2'><CheckSvg /></i>{check2}</p>
            <p className='inline-flex items-center '><i className='inline-block w-4 mr-2'><CheckSvg /></i>{check3}</p>
          </div>
        </div>
        <p className=' flex-1 w-auto h-auto font-normal bit:text-base text-sm text-[#4B4B4B] text-center p-1  -translate-y-7'>
          {description}
        </p>
      </article>
    </>
  );
}
