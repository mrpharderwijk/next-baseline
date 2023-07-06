import { PropsWithChildren } from 'react'
import './styles/globals.css'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

import { Footer, Header } from './components'

const inter = Inter({ subsets: ['latin'] })
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
})

type RootLayoutProps = PropsWithChildren

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans`}>
        <Header />
        <main className="pb-20 pt-28">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
