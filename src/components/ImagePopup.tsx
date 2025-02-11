"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Link from "next/link"
import ExportedImage from "next-image-export-optimizer"

interface ImagePopupProps {
  imageUrl: string
  linkUrl: string
  altText: string
}

export default function ImagePopup({ imageUrl, linkUrl, altText }: ImagePopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false); // Track if the popup has ever been shown

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !hasBeenVisible) { // Only show if not already shown
        setIsVisible(true);
        setHasBeenVisible(true); // Prevent it from showing again on scroll
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasBeenVisible]); // Add hasBeenVisible to the dependency array

  const handleClose = () => {
    setIsVisible(false);
  };

  // ... rest of your component

  return (
    <div
      className={`fixed left-0 bottom-0 z-50 transition-transform duration-300 ease-in-out transform ${
        isVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="relative bg-white p-2 rounded-tr-lg shadow-lg ">
        <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
          <div className="relative">
            <ExportedImage
              src={imageUrl || "/placeholder.svg"}
              alt={altText}
              width={300}
              height={300}
              className="rounded-lg cursor-pointer"
              unoptimized
              
            />
              </div>
                  </Link>
            <button
              onClick={handleClose}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
              aria-label="Close popup"
              >
              <X size={20} />
            </button>
      </div>
    </div>
  )
}
