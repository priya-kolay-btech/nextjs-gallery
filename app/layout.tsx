//import './globals.css'
import '../styles/globals.css'
import React from 'react'

export const metadata = { title: 'Figma Gallery Assignment' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body><div className="min-h-screen p-8 max-w-[1300px] mx-auto">{children}</div></body>
    </html>
  )
}