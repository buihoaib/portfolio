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

        <link rel="shortcut icon" href="/app-icon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/app-icon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/app-icon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/app-icon/favicon-16x16.png" />
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
