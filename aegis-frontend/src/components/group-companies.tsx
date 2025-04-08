"use client"

import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

// Company logo component to create consistent, professional-looking logos
function CompanyLogo({ name, color, abbreviation }: { name: string; color: string; abbreviation: string }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border-2 h-32 w-64 mx-4 transition-all hover:shadow-md text-center",
        color,
      )}
    >
      <div className={cn("text-2xl font-bold mb-1 w-full text-center text-[#8D7B68]")}>{abbreviation}</div>
      <div className="text-sm text-gray-700 dark:text-gray-300 text-center font-medium w-full">{name}</div>
    </div>
  )
}

export function GroupCompanies() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const companies = [
    {
      name: "株式会社イージス",
      abbreviation: "AEGIS",
      color: "border-[#8D7B68]",
    },
    {
      name: "NDK株式会社",
      abbreviation: "NDK",
      color: "border-[#8D7B68]",
    },
    {
      name: "NDK九州株式会社",
      abbreviation: "NDK KYUSHU",
      color: "border-[#8D7B68]",
    },
    {
      name: "セントラルハイウェイ株式会社",
      abbreviation: "CENTRAL HIGHWAY",
      color: "border-[#8D7B68]",
    },
    {
      name: "NSK株式会社",
      abbreviation: "NSK",
      color: "border-[#8D7B68]",
    },
    {
      name: "日本ロテックス株式会社",
      abbreviation: "ROTEX",
      color: "border-[#8D7B68]",
    },
    {
      name: "サン・インターナショナル株式会社",
      abbreviation: "SUN INTERNATIONAL",
      color: "border-[#8D7B68]",
    },
    {
      name: "マイタウンサービス株式会社",
      abbreviation: "MY TOWN",
      color: "border-[#8D7B68]",
    },
  ]

  // Number of logos to show at once
  const visibleCount = 4

  // Calculate total number of slides
  const totalSlides = Math.ceil(companies.length / visibleCount)

  // Get current visible companies
  const getVisibleCompanies = () => {
    const startIdx = currentIndex * visibleCount
    return companies.slice(startIdx, startIdx + visibleCount)
  }

  // Handle automatic rotation
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setIsAnimating(true)
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
          setIsAnimating(false)
        }, 500) // Half of the transition duration
      }, 5000) // Change slides every 5 seconds
    }

    startInterval()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [totalSlides])

  // Navigation dots
  const renderDots = () => {
    return (
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index)
              // Reset the interval when manually changing slides
              if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = setInterval(() => {
                  setIsAnimating(true)
                  setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
                    setIsAnimating(false)
                  }, 500)
                }, 5000)
              }
            }}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              currentIndex === index
                ? "bg-red-600"
                : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="w-full py-24 md:py-32 bg-gray-100 dark:bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-[#8D7B68]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="text-sm font-medium text-red-600 uppercase tracking-wider">グループ企業</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">
            グループ企業
          </h2>
          <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed">
            イージスグループは、様々な専門分野を持つ企業で構成されています。
            各社の強みを活かし、幅広い公共サービスを提供しています。
          </p>
        </div>

        {/* Logo carousel container */}
        <div className="relative w-full overflow-hidden py-10 bg-white/50 dark:bg-gray-900/50 rounded-xl">
          <div className="max-w-6xl mx-auto">
            <div
              className={cn(
                "flex justify-center transition-opacity duration-1000",
                isAnimating ? "opacity-0" : "opacity-100",
              )}
            >
              {getVisibleCompanies().map((company, index) => (
                <CompanyLogo
                  key={`${currentIndex}-${index}`}
                  name={company.name}
                  abbreviation={company.abbreviation}
                  color={company.color}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        {renderDots()}
      </div>
    </section>
  )
}

