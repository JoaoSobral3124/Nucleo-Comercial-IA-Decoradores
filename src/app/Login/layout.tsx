import { Inter } from 'next/font/google'
import './globals.css' // Importação dos estilos globais do Tailwind

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Núcleo Comercial IA',
  description: 'Plataforma Inteligente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-black antialiased`}>
        {children}
      </body>
    </html>
  )
}