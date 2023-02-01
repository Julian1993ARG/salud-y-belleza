import { FC, PropsWithChildren } from 'react';
import FlowbiteContext from './context/FlowbiteContext';
import '../styles/colors.css'; // TODO: Remove this import
import '../styles/globals.css';

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang='en'>
      <body className='layout'>
        <FlowbiteContext>{children}</FlowbiteContext>
      </body>
    </html>
  );
};

export default RootLayout;
