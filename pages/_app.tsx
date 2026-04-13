import '@/styles/globals.css'
import '@/styles/Menu.module.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import React from 'react'
import Cursor from '../components/Cursor'
import Head from 'next/head'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '500', '600', '800', '900'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Head>
        <title>Isak Gerre — Frontend Developer</title>
        <meta name="author" content="Isak Gerre" />
      </Head>
      <Cursor />
      <Component {...pageProps} />
    </main>
  )
}
