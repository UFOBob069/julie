import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Julie Bosshart Coaching - Life Coaching for Transitions',
  description: 'Guiding you through life\'s transitions with clarity, compassion, and direction. Professional life coaching services.',
  keywords: 'life coach, transition coaching, personal development, clarity, transformation',
  authors: [{ name: 'Julie Bosshart' }],
  openGraph: {
    title: 'Julie Bosshart Coaching',
    description: 'Guiding you through life\'s transitions with clarity, compassion, and direction.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
