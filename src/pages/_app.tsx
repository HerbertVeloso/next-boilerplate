/* eslint-disable react/no-unknown-property */
import { Ubuntu } from '@next/font/google';
import type { AppProps } from 'next/app';

import CreateGlobalStyle from '../styles/global';

const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '400', '500'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-primary: ${ubuntu.style.fontFamily};
          }
        `}
      </style>
      <CreateGlobalStyle />
      <Component {...pageProps} />

    </>
  );
}
