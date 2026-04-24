import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Blog GPT — Gestión de Proyectos Tecnológicos',
  description:
    'Hub de proyectos del ramo Gestión de Proyectos Tecnológicos, Universidad de Talca 2026.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg font-sans text-[#e2e6f0]">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
