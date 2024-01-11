import { Inter } from 'next/font/google'
import './globals.css'
import '@/sass/style.scss'
import assext from '@/imgs/Assext-2.png'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coder',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="icon" type="image/png" href={assext} />
    </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
