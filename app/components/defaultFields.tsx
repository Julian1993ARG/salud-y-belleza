import { FunctionComponent } from 'react';

type typeInput = 'text' | 'email' | 'tel' | 'number'| 'password' | 'textarea';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: typeInput;
  name: string;
  id: string;
  placeholder: string;
  required?: boolean;
}

export const DefaultField: FunctionComponent<Props> = (props) => (

  <input {...props} className='bg-white border-2 border-pink-400 text-gray-900 text-sm rounded-lg focus:ring-pink-700 focus:border-pink-700 block w-full p-2.5' />
);

type PropsTextArea = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export const DefaultTextArea: FunctionComponent<PropsTextArea> = (props) => (
  <textarea {...props} className='bg-white border-2 border-pink-400 text-gray-900 text-sm rounded-lg focus:ring-pink-700 focus:border-pink-700 block w-full p-2.5' />
);
