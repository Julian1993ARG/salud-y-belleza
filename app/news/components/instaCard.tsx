import { InstagramSvg } from '@/app/components';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image: string;
  description: string;
  date: string;
  url: string;
}

export default function InstaCard ({ image, description, date, url }: Props) {
  const formatDate = new Date(date);
  const newDate = formatDate.toLocaleDateString('es-MX', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  return (
    <article className='max-w-[22rem] bg-white border border-gray-200 rounded-lg shadow flex flex-col'>
      <div className='relative'>
        <Image
          width={500}
          height={500}
          className='rounded-t-lg'
          src={image}
          alt='instagram post'
          priority
        />
      </div>
      <div className='p-5 flex flex-col h-full justify-between '>

        <p className='mb-3 font-normal text-gray-700 '>{description}</p>

        <div className=' flex justify-between items-center bottom-0'>
          <Link href={url} target='_blank' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-400 rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 ' rel='noreferrer'>
            Ver en Instagram
            <InstagramSvg className='w-4 h-4 ml-2 -mr-1' />
          </Link>
          <p className='text-gray-500 font-normal text-lg select-none'>{newDate}</p>
        </div>

      </div>
    </article>
  );
}
