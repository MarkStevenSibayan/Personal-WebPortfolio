import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import LoadingWrapper from "./components/LoadingWrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mark Steven B. Sibayan | Portfolio",
  description: "Information Technology student passionate about web development and problem-solving.",
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/favicon-128x128.png" },
  ],
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Mark Steven B. Sibayan | Portfolio",
    description: "Information Technology student passionate about web development and problem-solving.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mark Steven B. Sibayan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mark Steven B. Sibayan | Portfolio",
    description: "Information Technology student passionate about web development and problem-solving.",
    images: ["/images/og-image.jpg"],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-128x128.png" />
      </head>
      <body className={`${inter.className} bg-gray-900 text-gray-100 flex flex-col min-h-screen`}>
        <LoadingWrapper>
          <Navigation />
          <div className="flex-grow pt-16">
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
          <Footer />
        </LoadingWrapper>
      </body>
    </html>
  )
}
