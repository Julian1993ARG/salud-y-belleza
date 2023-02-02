
export const CheckSvg = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 19.07 18'>
    <defs>
      <clipPath id='a'>
        <path
          style={{
            fill: 'none'
          }}
          d='M0 0h19v18H0z'
        />
      </clipPath>
    </defs>
    <g data-name='Capa 2'>
      <g data-name='Capa 1'>
        <path
          d='M15.69 4.27a1 1 0 0 0-1.42 0l-6.83 7.27-2.71-2.86a1 1 0 0 0-1.42 0 1 1 0 0 0 0 1.41l3.44 3.64a1 1 0 0 0 .73.31 1 1 0 0 0 .72-.31L7.44 13l.72.69 7.57-8a1 1 0 0 0-.04-1.42Z'
          style={{
            fill: '#e32285'
          }}
        />
        <g
          style={{
            clipPath: 'url(#a)'
          }}
        >
          <path
            d='M18 0H0v18h19.07V0Zm0 17H1V1h17Z'
            style={{
              fill: '#010101'
            }}
          />
        </g>
      </g>
    </g>
  </svg>
);

export const HeaderSvg = ({ title }: {title:string}) => {
  return (
    <div id='work1' className='relative bg-transparent z-10'>
      <p className='absolute transform z-10 max-w-[180px] text-center top-1/4 left-[37%] text-white font-semibold'>
        {title}
      </p>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 110'>
        <g data-name='Capa 2'>
          <path
            d='M360 15v95a192.83 192.83 0 0 0-46.21-20.8c-17.33-5.1-34.53-6.12-52.51-1.85a249.35 249.35 0 0 1-48.67 6.85c-26.93.94-52.76-5.73-77.2-17-21.28-9.78-43.26-10.73-65.83-7C44.91 74.31 21.85 83 0 95V30a476.28 476.28 0 0 1 70.08-9.13c22.67-1.18 45.36-1.37 67.77 2 31.16 4.66 62 4.55 92.52-3.35 19.13-4.95 38.07-10.6 57.19-15.59 7-1.82 14.29-2.64 21.44-3.91h13a10.52 10.52 0 0 0 2.74 1c13.32.73 25.42 4.5 35.26 13.98Z'
            style={{
              fill: '#1f9e48',
              width: '100%',
              height: 'auto'
            }}
            data-name='Capa 1'
          />
        </g>
      </svg>
    </div>
  );
};
