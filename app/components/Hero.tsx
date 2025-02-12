"use client"

import { Button } from "@nextui-org/react"
import Image from "next/image"
import FeatureBubble from "./FeatureBubble"
import { Icon } from "@iconify/react"
import { getFixedPosition } from "../utils/randomPosition"
import { useMemo } from "react"

const features = [
  { icon: "mdi:pill", text: "Medication Management" },
  { icon: "mdi:clipboard-list", text: "Task Tracking" },
  { icon: "mdi:calendar", text: "Scheduling" },
  { icon: "mdi:account-box", text: "Resident Profiles" },
  { icon: "mdi:file-document-multiple", text: "Documentation" },
  { icon: "mdi:shield-check", text: "Compliance" },
]

export default function Hero() {
  const bubblePositions = useMemo(() => {
    return features.map((_, index) => {
      const side = index < 3 ? "left" : "right"
      return getFixedPosition(side, index % 3)
    })
  }, [])

  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      {/* Top section with logo */}
      <div className="w-full flex justify-center items-center px-8 py-4 z-10 mb-20">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-2 relative overflow-hidden logo-shine">
          <Image
            src="/logo.png"
            alt="Heartly Logo"
            width={160}
            height={40}
            className="h-auto"
            priority
          />
        </div>
      </div>

      {/* Feature Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        {features.map((feature, index) => {
          const position = bubblePositions[index]
          return (
            <FeatureBubble
              key={index}
              icon={<Icon icon={feature.icon} />}
              text={feature.text}
              delay={`${index * 2}s`}
              x={position.x}
              ySmall={position.ySmall}
              yLarge={position.yLarge}
            />
          )
        })}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 w-full flex flex-col items-center justify-between z-10 gap-[5rem]">
        {/* Heading and CTA Button */}
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center mb-6">
            Streamline Your ARF/ARTF Management
          </h1>
          <Button
            href="/signup"
            as="a"
            color="primary"
            variant="shadow"
            size="lg"
            className="font-semibold rounded-full"
          >
            Get Started
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="relative w-full aspect-video overflow-hidden rounded-t-3xl shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10" />
            <Image
              src="/mock.png"
              alt="Heartly Dashboard Preview"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

