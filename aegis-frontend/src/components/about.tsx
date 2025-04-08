"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Users, Scale } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => {
      if (element) observer.disconnect()
    }
  }, [])

  return (
    <section id="about-section" className="w-full py-24 md:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#8D7B68]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/2 w-64 h-64 bg-red-600/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div
            className={cn(
              "flex flex-col justify-center space-y-8 transition-all duration-1000 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <div className="text-sm font-medium text-red-600 uppercase tracking-wider">企業理念</div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 dark:text-white">
                公共事業で、社会を守る
                <br />
                公共サービスを、変える。
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                官から民へ。公共サービスの質的向上や効率化を図るため、民間のノウハウ活用に期待し、様々な事業において民間企業の参入が図られてきました。
                私たちは「公共サービスの代行者」としてのあるべき姿を正しく理解して業務を提供するスペシャリスト集団です。
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="space-y-2 bg-gray-100/70 dark:bg-gray-800/30 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-600" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">高度化・専門化</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  専門知識・スキルを有するマネージャーによる質の高い業務運営
                </p>
              </div>
              <div className="space-y-2 bg-gray-100/70 dark:bg-gray-800/30 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-gray-900 dark:text-gray-300" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">公平性</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  「公的役割の代行者」として、施設やサービスの公平性と永続性を担保
                </p>
              </div>
              <div className="space-y-2 bg-gray-100/70 dark:bg-gray-800/30 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#8D7B68]" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">適正化・効率化</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  求められる水準を踏まえた業務の「あるべき姿」を再構築し、効率的に運営
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">イージスグループについて</h3>
              <p className="text-gray-600 dark:text-gray-400">
                2006年の設立以来、公共サービスの質的向上と効率化を図るため、様々な事業に取り組んでいます。
                「公共性」と「専門性」「効率性」の全てを満たす業務の提供を通じて、官・民双方に高い満足をご提供します。
              </p>
              <Button
                asChild
                variant="ghost"
                className="p-0 h-auto text-red-600 hover:text-red-500 hover:bg-transparent group mt-2"
              >
                <Link href="/about" className="flex items-center">
                  詳細を見る
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>

          <div
            className={cn(
              "flex items-center justify-center transition-all duration-1000 delay-300 transform",
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
            )}
          >
            <div className="relative h-[400px] w-full md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 shadow-xl">
              <Image src="/images/engineers-tablet.png" alt="AEGIS Group engineers" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[300px] h-[300px] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-red-600/20"></div>
                  <div className="relative z-10 bg-red-600 rounded-full w-[150px] h-[150px] flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">AEGIS</span>
                    <span className="text-white text-xs absolute bottom-10">GROUP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

