"use client"

import { useEffect } from "react"

interface ImagePreloaderProps {
  images: string[]
}

export default function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    // Create an array to store the image objects
    const imageObjects: HTMLImageElement[] = []

    // Function to preload images
    const preloadImages = () => {
      images.forEach((src) => {
        if (!src) return

        const img = new Image()
        img.src = src
        img.onload = () => {
          console.log(`Image preloaded successfully: ${src}`)
        }
        img.onerror = () => {
          console.error(`Failed to preload image: ${src}`)
        }
        imageObjects.push(img)
      })
    }

    // Preload images
    preloadImages()

    // Cleanup function
    return () => {
      // Clear references to image objects
      imageObjects.length = 0
    }
  }, [images])

  return null
}
