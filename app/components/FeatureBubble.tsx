"use client"

import type { ReactNode } from "react"

interface FeatureBubbleProps {
  icon: ReactNode
  text: string
  delay: string
  x: number
  ySmall: number
  yLarge: number
}

export default function FeatureBubble({ icon, text, delay, x, ySmall, yLarge }: FeatureBubbleProps) {
  return (
    <div
      className={`
        absolute bg-white/30 backdrop-blur-md rounded-lg p-2 shadow-lg 
        flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 text-center
        animate-float transition-all duration-300 ease-in-out pointer-events-none
        left-[${x}%] top-[${ySmall}%] xl:top-[${yLarge}%]
      `}
      style={{ animationDelay: delay }}
    >
      <div className="text-2xl sm:text-3xl mb-1 text-white drop-shadow-md">{icon}</div>
      <div className="text-[8px] sm:text-[10px] font-medium text-white drop-shadow-sm">{text}</div>
    </div>
  )
}

