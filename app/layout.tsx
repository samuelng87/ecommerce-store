import { Urbanist } from 'next/font/google'


import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'
import { Container } from 'postcss'

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'QR - Store',
  description: 'Store - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}