
interface Props {
  title: string;
  description: string;
}

export default function card ({ title, description }: Props) {
  return (
    <div className='min-h-[188px] bg-white -translate-y-1/3 w-64 flex justify-center text-center flex-row flex-wrap gap-2 rounded-xl shadow-lg select-none py-3 bit:-translate-y-[40.3%]'>
      <div className='w-full'>
        <h2 className=' h-[3.25rem] flex items-center justify-center '>{title}</h2>
        <div className='w-full h-2 bg-pink-500' />
      </div>

      <p className='px-2'>
        {description}
      </p>
    </div>
  );
}
