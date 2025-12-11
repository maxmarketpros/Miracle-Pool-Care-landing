import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Get Your First Month For $1 | MIRACLE POOL CARE - Premium Weekly Pool Service",
  description:
    "Transform your pool with professional tile cleaning and weekly maintenance for just $1 your first month. All chemicals included, clear weekly reports, no contracts. Serving pool owners with expert care.",
  keywords: [
    "pool cleaning service",
    "pool tile cleaning",
    "weekly pool maintenance",
    "pool care",
    "pool service",
    "swimming pool cleaning",
    "$1 pool service",
    "miracle pool care",
  ],
  authors: [{ name: "Miracle Pool Care" }],
  creator: "Miracle Pool Care",
  publisher: "Miracle Pool Care",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://miraclepoolcare.com"),
  openGraph: {
    title: "Get Your First Month For $1 | MIRACLE POOL CARE",
    description:
      "Professional weekly pool care and tile cleaning for just $1 your first month. All chemicals included, clear reports, no contracts.",
    url: "https://miraclepoolcare.com",
    siteName: "Miracle Pool Care",
    images: [
      {
        url: "/images/5.jpg",
        width: 1200,
        height: 630,
        alt: "Crystal clear pool with sparkling clean tiles - Miracle Pool Care",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Your First Month For $1 | MIRACLE POOL CARE",
    description:
      "Professional weekly pool care and tile cleaning for just $1 your first month. All chemicals included, clear reports.",
    images: ["/images/5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.jpg", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
