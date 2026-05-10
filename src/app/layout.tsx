import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Núcleo IA | Intelligence System',
  description: 'AI Commercial Core - Professional Interface',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#020617] antialiased`}>
        {children}
      </body>
    </html>
  )
}