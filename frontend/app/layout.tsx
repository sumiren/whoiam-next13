import './globals.css'
import React from "react";
import { Noto_Sans_Javanese } from '@next/font/google'

const font = Noto_Sans_Javanese({ subsets: ['javanese'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={font.className}>
      <head />
      <body>{children}</body>
    </html>
  )
}
