"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import LoadingAnimation from "./LoadingAnimation"

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>{isLoading && <LoadingAnimation />}</AnimatePresence>
      <div style={{ opacity: isLoading ? 0 : 1 }} className="transition-opacity duration-500">
        {children}
      </div>
    </>
  )
}
