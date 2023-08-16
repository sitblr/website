import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ModalProvider } from '@/providers/modal-provider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SAP Inside Track, Bengaluru',
  description: 'SAP Community driven events in Bengaluru',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="http://ia.media-imdb.com/rock.jpg" />
      </head>
      <body className={inter.className}>
        <ModalProvider />
        {children}
      </body>
    </html>
  )
}
