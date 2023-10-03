import './globals.css'
import { Raleway } from 'next/font/google'

import { cn } from '@/libs/utils'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Logo from '@/components/logo'

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Trang Bui',
  description: 'Software Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(raleway.className, "relative")}>
        <Navbar />
        <Logo />
        {children}
        <Footer />
      </body>
    </html>
  )
}
