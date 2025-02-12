"use client"

import { Button } from "@heroui/button"
import Image from "next/image"
import FeatureBubble from "./FeatureBubble"
import { useMemo } from "react"
import { getFixedPosition } from "@/utils/randomPosition"
import { Icon } from "@iconify/react"

const features = [
  { icon: <Icon icon="mdi:pill" />, text: "Medication Management" },
  { icon: <Icon icon="mdi:clipboard-list" />, text: "Task Tracking" },
  { icon: <Icon icon="mdi:calendar" />, text: "Scheduling" },
  { icon: <Icon icon="mdi:account-box" />, text: "Resident Profiles" },
  { icon: <Icon icon="mdi:file-multiple" />, text: "Documentation" },
  { icon: <Icon icon="mdi:shield-check" />, text: "Compliance" },
]

export default function Hero() {
  const bubblePositions = useMemo(() => {
    return features.map((_, index) => {
      const side = index < 3 ? "left" : "right"
      return getFixedPosition(side, index % 3)
    })
  }, [])

  return (
    <div className="relative h-screen overflow-hidden flex flex-col items-center bg-hero-gradient">
      {/* Background gradients */}
      {/* <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div> */}

      {/* Top section with logo */}
      <div className="w-full flex justify-center items-center px-8 py-4 z-10 mb-8">
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

      {/* Main Content Area */}
      <div className="relative flex-1 w-full flex flex-col items-center z-10 gap-[5rem] max-w-7xl mx-auto px-4">
        {/* Heading and Feature Bubbles Container */}
        <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center mt-8">
          <div className="absolute inset-0">
            {features.map((feature, index) => {
              const position = bubblePositions[index]
              return (
                <FeatureBubble
                  key={index}
                  icon={feature.icon}
                  text={feature.text}
                  delay={`${index * 2}s`}
                  x={position.x}
                  ySmall={position.ySmall}
                  yLarge={position.yLarge}
                />
              )
            })}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg text-center mb-6 z-10">
            Streamline Your ARF/ARTF Management
          </h1>
          <Button
            href="/signup"
            as="a"
            color="primary"
            variant="shadow"
            size="lg"
            className="font-semibold rounded-full z-10"
          >
            Get Started
          </Button>
        </div>

        {/* Dashboard Preview */}
        <div className="w-full max-w-5xl mx-auto">
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

