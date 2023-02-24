import type { AppProps } from 'next/app'
import { PokeProvider } from '../context/PokeProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PokeProvider>
      <Component {...pageProps} />
    </PokeProvider>
  )
}
