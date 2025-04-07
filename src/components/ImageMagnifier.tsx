"use client"

import { useState, useRef, type MouseEvent, type TouchEvent } from "react"
import Image from "next/image"

interface ImageMagnifierProps {
  src: string
  alt: string
  width: number
  height: number
  magnifierHeight: number
  magnifierWidth: number
  zoomLevel: number
}

export default function ImageMagnifier({
  src,
  alt,
  width,
  height,
  magnifierHeight = 300,
  magnifierWidth = 300,
  zoomLevel = 2.5,
}: ImageMagnifierProps) {
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const imageRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    // Get the position of the image element
    const { left, top } = imageRef.current.getBoundingClientRect()

    // Calculate cursor position relative to the image
    const x = e.clientX - left
    const y = e.clientY - top

    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setShowMagnifier(true)
  }

  const handleMouseLeave = () => {
    setShowMagnifier(false)
  }

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    setShowMagnifier(true)
    handleTouchMove(e)
  }

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!imageRef.current) return

    // Get the position of the image element
    const { left, top } = imageRef.current.getBoundingClientRect()

    // Get the first touch point
    const touch = e.touches[0]

    // Calculate touch position relative to the image
    const x = touch.clientX - left
    const y = touch.clientY - top

    setMousePosition({ x, y })
  }

  const handleTouchEnd = () => {
    setShowMagnifier(false)
  }

  const magnifierStyle = {
    display: showMagnifier ? "block" : "none",
    position: "absolute" as const,
    top: 0,
    left: "100%",
    marginLeft: "20px",
    pointerEvents: "none" as const,
    height: `${magnifierHeight}px`,
    width: `${magnifierWidth}px`,
    border: "1px solid #e2e8f0",
    backgroundColor: "white", // Add white background
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
    backgroundPosition: `
    ${-mousePosition.x * zoomLevel + magnifierWidth / 2}px 
    ${-mousePosition.y * zoomLevel + magnifierHeight / 2}px
  `,
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)", // Add shadow for better separation
  }

  // Calculate the position and size of the highlight box
  const highlightBoxSize = {
    width: magnifierWidth / zoomLevel,
    height: magnifierHeight / zoomLevel,
  }

  const highlightBoxPosition = {
    left: mousePosition.x - highlightBoxSize.width / 2,
    top: mousePosition.y - highlightBoxSize.height / 2,
  }

  const highlightBoxStyle = {
    display: showMagnifier ? "block" : "none",
    position: "absolute" as const,
    border: "1px solid rgba(255, 255, 255, 0.5)",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    pointerEvents: "none" as const,
    width: `${highlightBoxSize.width}px`,
    height: `${highlightBoxSize.height}px`,
    left: `${highlightBoxPosition.left}px`,
    top: `${highlightBoxPosition.top}px`,
  }

  return (
    <div className="relative flex">
      <div
        className="relative cursor-crosshair"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        ref={imageRef}
      >
        <Image src={src || "https://www.woodard-furniture.com/media/catalog/product/cache/59ad28a0470972c014f7fb8dad2a2397/c/a/casa_3y0404.jpg"} alt={alt} width={width} height={height} className="object-contain" />
        <div style={highlightBoxStyle} />
      </div>
      <div style={magnifierStyle} />
    </div>
  )
}