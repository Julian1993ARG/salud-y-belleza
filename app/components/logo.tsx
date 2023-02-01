'use client';
import * as React from 'react';

const Logo = (props:any) => (
  <svg
    width={360}
    height={111}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M146 23.23c-60.8-8.8-122.667.667-146 6.5v66c25.333-14.833 87.1-39.5 131.5-19.5 55.5 25.001 96 21 135.5 10.5 31.6-8.4 75.167 12.5 93 24.001v-95c-2.833-6-17.2-17.5-52-15.5-43.5 2.5-86 34-162 23Z'
      fill={props.fill || '#000'}
    />
  </svg>
);

export default Logo;
