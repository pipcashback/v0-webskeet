"use client"

import { useState } from "react"
import Image from "next/image"
import WebskeetLogoSVG from "./webskeet-logo-svg"

interface LogoFallbackProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function LogoFallback({ src, alt, width, height, className }: LogoFallbackProps) {
  const [imageError, setImageError] = useState(false)

  // Simplified error handler
  const handleImageError = () => {
    setImageError(true)
  }

  // If there's an error, show the SVG fallback
  if (imageError) {
    return <WebskeetLogoSVG width={width} height={height} className={className} />
  }

  // Otherwise, show the image with error handling
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onError={handleImageError}
      unoptimized={true}
    />
  )
}
