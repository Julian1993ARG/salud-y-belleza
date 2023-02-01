
interface Props {
  title: string;
  description: string;
}

export default function card ({ title, description }: Props) {
  return (
    <div className='bg-white -translate-y-1/3 w-64 flex justify-center items-center text-center flex-row flex-wrap gap-2 rounded-xl shadow-lg select-none py-3'>
      <h2 className='p-1'>{title}</h2>
      <div className='w-full h-2 bg-pink-500' />
      <p className='px-2'>
        {description}
      </p>
    </div>
  );
}
