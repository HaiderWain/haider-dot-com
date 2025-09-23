import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Haider - Portfolio',
  description: 'Full Stack Developer & Tech Enthusiast',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
