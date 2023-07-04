import Footer from './components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Elegant Builders Limited',
  description: 'this is a website for a construction website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <main className={inter.className}>
        {children}
      
      <Footer/></main>
    </html>
  )
}
