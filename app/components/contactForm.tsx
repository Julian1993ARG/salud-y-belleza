import { DefaultField, DefaultTextArea } from './';

export default function contactForm () {
  return (
    <form
      action='https://formsubmit.co/julianmartinez_93@hotmail.com'
      method='POST'
      className='flex flex-col gap-3 flex-auto max-w-xl md:justify-center'
    >
      <DefaultField
        type='text'
        id='name'
        name='name'
        placeholder='Nombre'
        required
        minLength={4}
        maxLength={30}
      />
      <DefaultField type='email' id='email' name='email' placeholder='Email' required />
      <DefaultField type='tel' id='phone' name='phone' placeholder='Teléfono' />
      <DefaultTextArea
        id='message'
        name='message'
        placeholder='Mensaje'
        required
        minLength={10}
        maxLength={500}
        rows={5}
      />
      <button
        type='submit'
        className='bg-pink-400 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-3xl'
      >
        Enviar
      </button>
    </form>
  );
}
