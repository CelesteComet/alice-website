import type { AppProps } from 'next/app'
import { Quattrocento } from '@next/font/google'
import '../styles/globals.css'
import Navigation from '../components/navigation'
// If loading a variable font, you don't need to specify the font weight
const quatro =
  Quattrocento({
    weight: '400',
  })
export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <main
      className={
        quatro.className
      }
    >
      <Navigation />
      <Component
        {...pageProps}
      />
    </main>
  )
}
