"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative w-full py-8 md:py-24 lg:py-32 xl:py-48 bg-white dark:bg-gray-950 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/workers-construction-site.png"
          alt="公共サービスの背景"
          fill
          className="object-cover opacity-40 dark:opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-white/40 dark:from-gray-950/80 dark:via-gray-950/60 dark:to-gray-950/40"></div>
      </div>

      {/* Red accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#8D7B68]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-4 lg:gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-8">
            <div
              className={cn(
                "space-y-6 transition-all duration-1000 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <div className="text-sm font-medium text-red-600 uppercase tracking-wider">
                官民連携のスペシャリスト集団
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-white">
                あるべき<span className="text-red-600">"官民連携"</span>を<br className="hidden sm:inline" />
                形に
              </h1>
              <p className="max-w-[600px] text-gray-700 dark:text-gray-300 text-base md:text-xl leading-relaxed">
                ワンストップサービスを提供。 川上から川下まで、様々な課題にソリューションを提供します。
              </p>
            </div>

            <div
              className={cn(
                "flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white group">
                <Link href="/services" className="flex items-center">
                  事業内容を見る
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-300 hover:bg-gray-100 text-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:text-white"
              >
                <Link href="/contact" className="flex items-center">
                  お問い合わせ
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div
              className={cn(
                "flex items-center gap-8 transition-all duration-1000 delay-500 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
              )}
            >
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center border border-red-600/30">
                  <span className="text-xs font-medium text-red-600">15+</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center border border-gray-300 dark:border-gray-700">
                  <span className="text-xs font-medium text-gray-900 dark:text-white">8+</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#8D7B68]/20 flex items-center justify-center border border-[#8D7B68]/30">
                  <span className="text-xs font-medium text-[#8D7B68]">多数</span>
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="text-gray-900 dark:text-white font-medium">15年以上</span>の実績 |{" "}
                <span className="text-gray-900 dark:text-white font-medium">8社以上</span>のグループ企業 |{" "}
                <span className="text-gray-900 dark:text-white font-medium">多数</span>の公共事業
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            {/* This div is intentionally left empty to maintain the grid layout */}
          </div>
        </div>
      </div>
    </section>
  )
}

