import type { ReactNode } from 'react'


import '@fortawesome/fontawesome-svg-core/styles.css'
import './global.css'
import Footer from './_footer/footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}

export const metadata = {
  title: 'next-tailwind-music-player',
  description:
    'A music player built with Next.js, Tailwind CSS, and React that uses the Web Audio API to play audio files.',
}
