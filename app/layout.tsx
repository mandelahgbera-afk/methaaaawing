import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // <CHANGE> Updated title and description for Meta Win
  title: "Meta Win | Access $MWC before launch",
  description: "Meta Win exclusive early access to $MWC token",
  generator: "v0.app",
  // <CHANGE> Updated favicon to Meta Win favicon
  icons: {
    icon: "https://metawin.com/meta/favicon.ico",
    apple: "https://metawin.com/meta/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased bg-black text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
