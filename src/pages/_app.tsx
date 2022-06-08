import { AppProps } from 'next/app'
import Header from '../components/header'
import { SessionProvider } from 'next-auth/react'

import '../styles/globals.scss'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
