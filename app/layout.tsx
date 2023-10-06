import './globals.css'
import { Raleway } from 'next/font/google'

import { cn } from '@/libs/utils'
import ActiveSectionContextProvider from '@/context/active-section-context'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Logo from '@/components/logo'
import { Toaster } from 'react-hot-toast'

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
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />
        <link rel="icon" href="/self-logo.png" sizes="any" />
      </head>
      <body className={cn(raleway.className, "relative")}>
        <ActiveSectionContextProvider>
          <Navbar />
          <Logo />
          {children}
          <Footer />
          <Toaster />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
