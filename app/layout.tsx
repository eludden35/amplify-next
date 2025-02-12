import { Providers } from "./providers"
import { Inter } from "next/font/google"
import "./globals.css"
import type React from "react"
import MouseMoveEffect from "./components/MouseMoveEffect"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Heartly - ARF/ARTF Management System",
  description:
    "Streamline your Adult Residential Facility and Adult Residential Treatment Facility management with Heartly.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className}`}>
        <Providers>
          <MouseMoveEffect />
          {children}
        </Providers>
      </body>
    </html>
  )
}

