import { FC, PropsWithChildren } from 'react';
import { Header, Footer } from './components';
import '../styles/globals.css';

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang='en'>
      <head
        title='My app'
      />
      <body className='layout bg-white'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
