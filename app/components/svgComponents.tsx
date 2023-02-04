
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

export const HeaderSvg = ({ title }: { title: string }) => {
  return (
    <div className='relative bg-transparent z-10'>
      <h5 className='w-36 h-20 flex justify-center items-center absolute transform z-10 max-w-[180px] text-center top-[9%] left-[47%] text-white font-semibold bit:top-[17%] bit:left-[59%]'>
        {title}
      </h5>
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

export const FooterSvg = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 360 43'>
    <g data-name='Capa 2'>
      <path
        d='M146 9C85.2 5.6 23.33 9.28 0 11.55v25.63c25.33-5.77 87.1-15.34 131.5-7.58 55.5 9.71 96 8.16 135.5 4.08 31.6-3.26 75.17 4.85 93 9.32V6.11c-2.83-2.33-17.2-6.8-52-6-43.5.95-86 13.18-162 8.89Z'
        style={{
          fill: '#e32285'
        }}
        data-name='Capa 1'
      />
    </g>
  </svg>
);

export const PhoneSvg = ({ className }:{className:string}) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21.89 21.93' className={className}>
    <g data-name='Capa 2'>
      <path
        d='M21.89 15.92a3 3 0 0 0-2.58-3v.22-.22l-.13 1 .13-1a11.43 11.43 0 0 1-2.59-.65 3 3 0 0 0-1.72-.14 3.06 3.06 0 0 0-1.49.8l-.71.72a15.11 15.11 0 0 1-4.56-4.59L9 8.35l-.71-.71.71.71a3 3 0 0 0 .8-1.48 2.93 2.93 0 0 0-.13-1.68A11.71 11.71 0 0 1 9 2.59 2.94 2.94 0 0 0 8 .73 3 3 0 0 0 6 0H3a3 3 0 0 0-1.21.26A2.94 2.94 0 0 0 .16 2 2.88 2.88 0 0 0 0 3.27a20.91 20.91 0 0 0 3.22 9.1 20.44 20.44 0 0 0 6.29 6.3 20.75 20.75 0 0 0 9.06 3.22l.09-1-.09 1a3.23 3.23 0 0 0 1.23-.15 3.06 3.06 0 0 0 1.07-.63 3.16 3.16 0 0 0 .72-1 3.12 3.12 0 0 0 .25-1.21v-3Zm-2 3a1 1 0 0 1-.09.41.78.78 0 0 1-.24.33 1 1 0 0 1-.35.22.94.94 0 0 1-.41 0A18.73 18.73 0 0 1 10.62 17l-.53.84.53-.84a18.53 18.53 0 0 1-5.69-5.7l-.84.54.84-.54A19 19 0 0 1 2 3.09a1.13 1.13 0 0 1 0-.41 1.13 1.13 0 0 1 .21-.35.88.88 0 0 1 .34-.24A.9.9 0 0 1 3 2h3a1 1 0 0 1 .66.24 1.06 1.06 0 0 1 .34.62 14.35 14.35 0 0 0 .75 3 1 1 0 0 1 0 .56 1 1 0 0 1-.26.5L6.27 8.2a1 1 0 0 0-.16 1.2 17 17 0 0 0 6.37 6.38l.5-.87-.5.87a1 1 0 0 0 1.21-.16L15 14.35a1.06 1.06 0 0 1 .5-.27 1 1 0 0 1 .56.05l.34-.93-.35.94a14.2 14.2 0 0 0 3 .75 1 1 0 0 1 .62.34 1 1 0 0 1 .24.68v3Z'
        style={{
          fill: '#1d9e49'
        }}
        data-name='Capa 1'
      />
    </g>
  </svg>
);

export const MapSvg = ({ className }:{className:string}) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 24' className={className}>
    <defs>
      <style>{'.cls-1{fill:#1d9e49}'}</style>
    </defs>
    <g id='Capa_2' data-name='Capa 2'>
      <g id='Capa_1-2' data-name='Capa 1'>
        <path
          className='cls-1'
          d='M17.07 2.93A10 10 0 0 0 0 10c0 3.9 2.48 7.4 4.77 9.81A33 33 0 0 0 8 22.74l1.06.8.3.21.08.06A9.08 9.08 0 0 0 10 23a9.08 9.08 0 0 0 .56.83l.08-.06.3-.21 1.06-.8a33 33 0 0 0 3.2-2.93C17.52 17.4 20 13.9 20 10a10 10 0 0 0-2.93-7.07Zm-3.3 15.51a29.05 29.05 0 0 1-3 2.73c-.31.25-.56.44-.78.6-.22-.16-.47-.35-.78-.6a29.05 29.05 0 0 1-3-2.73C4 16.1 2 13.1 2 10a8 8 0 1 1 16 0c0 3.1-2 6.1-4.23 8.44Z'
        />
        <path
          className='cls-1'
          d='M10.55 23.83 10 23l-.55.83a1 1 0 0 0 1.1 0ZM10 6a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z'
        />
      </g>
    </g>
  </svg>
);

export const InstagramSvg = ({ className }:{className:string}) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 22 22' className={className}>
    <defs>
      <style>{'.cls-1{fill:#1d9e49}'}</style>
    </defs>
    <g id='Capa_2' data-name='Capa 2'>
      <g id='Capa_1-2' data-name='Capa 1'>
        <path
          className='cls-1'
          d='M16 0H6a6 6 0 0 0-6 6v10a6 6 0 0 0 6 6h10a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6Zm0 20H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4Z'
        />
        <path
          className='cls-1'
          d='M14.58 7.42a5 5 0 0 0-8 1.29 5 5 0 0 0 .93 5.78 5 5 0 0 0 5.78.93 5 5 0 0 0 1.29-8Zm-2.19 6.22a3 3 0 0 1-1.82.28 3 3 0 0 1-2.49-2.49A3 3 0 0 1 11.48 8 3 3 0 0 1 14 10.52a3 3 0 0 1-1.62 3.12ZM16.51 4.5a1 1 0 0 0 0 2 1 1 0 0 0 0-2Z'
        />
      </g>
    </g>
  </svg>
);
