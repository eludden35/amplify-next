"use client"

import type { ReactNode } from "react"

interface FeatureBubbleProps {
  icon: ReactNode
  text: string
  delay: string
  className?: string
  x: number
  ySmall: number
  yLarge: number
}

export default function FeatureBubble({ icon, text, delay, x, ySmall, yLarge }: FeatureBubbleProps) {
  return (
    <div
      className="
        absolute bg-white/30 backdrop-blur-md rounded-lg p-2 shadow-lg 
        flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 text-center
        animate-float transition-all duration-300 ease-in-out pointer-events-none
        transform -translate-x-1/2 -translate-y-1/2
      "
      style={{
        animationDelay: delay,
        left: `${x}%`,
        top: `${ySmall}%`,
        [`@media (min-width: 1280px)`]: {
          top: `${yLarge}%`
        }
      }}
    >
      <div className="text-lg sm:text-xl mb-1 text-white drop-shadow-md">{icon}</div>
      <div className="text-[8px] sm:text-[10px] font-medium text-white drop-shadow-sm">{text}</div>
    </div>
  )
}

