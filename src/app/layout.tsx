import type { Metadata } from 'next'
import { Inter, Press_Start_2P } from 'next/font/google'
import './styles/globals.css'
import { cn } from '@/lib/utils'

export const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '600', '800'],
  display: "swap", 
  variable: '--font-text' 
})

export const press_start = Press_Start_2P({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-pixelated'
})

export const metadata: Metadata = {
  title: 'Pokemart',
  description: 'Explore o universo Pokémon na loja definitiva para treinadores!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={cn(inter.variable, press_start.variable)}>{children}</body>
    </html>
  )
}
