"use client"

import { useState } from "react"
import { Shield, Building2, FileText, Globe, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const services = [
    {
      icon: <Shield className="h-10 w-10 text-red-600" />,
      title: "コンセッション事業",
      description: "コンセッション事業において、SPCの代表企業を担当。オペレーションと事業運営を実施します。",
      bgColor: "bg-red-600/20",
      hoverColor: "from-red-600/10",
    },
    {
      icon: <Building2 className="h-10 w-10 text-gray-900 dark:text-gray-300" />,
      title: "指定管理事業",
      description: "施設の指定管理者として、質の高いサービスを提供すると共に、施設を次代につなぐための施設管理を行う。",
      bgColor: "bg-gray-900/20 dark:bg-gray-300/20",
      hoverColor: "from-gray-900/10 dark:from-gray-300/10",
    },
    {
      icon: <FileText className="h-10 w-10 text-[#8D7B68]" />,
      title: "業務委託事業",
      description: "委託を受けた業務において、高いオペレーション水準と利用者視点のニーズを満たすサービスを提供。",
      bgColor: "bg-[#8D7B68]/20",
      hoverColor: "from-[#8D7B68]/10",
    },
    {
      icon: <Globe className="h-10 w-10 text-red-600" />,
      title: "パートナーシップ事業",
      description: "様々な企業とパートナーシップを組み、事業運営や新規立案を行う。オペレーション会社の管理も行います。",
      bgColor: "bg-red-600/20",
      hoverColor: "from-red-600/10",
    },
  ]

  return (
    <section id="services" className="w-full py-24 md:py-32 bg-gray-50 dark:bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#8D7B68]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full opacity-5 dark:opacity-10">
        <Image
          src="/images/workers-placing-new-coating-asphalt-road.png"
          alt="道路工事の背景"
          fill
          className="object-cover"
        />
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="text-sm font-medium text-red-600 uppercase tracking-wider">事業内容</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">事業内容</h2>
          <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed">
            イージスグループは様々なサービスを通じて公共サービスの質的向上と効率化を図ります。
            専門知識と経験を活かし、最適なソリューションを提供します。
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={cn(
                "group relative transition-all duration-300 bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden",
                hoveredCard === index
                  ? "shadow-lg shadow-red-600/10 border-gray-300 dark:border-gray-700"
                  : "hover:shadow-md",
              )}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient overlay on hover */}
              <div
                className={cn(
                  `absolute inset-0 bg-gradient-to-r ${service.hoverColor} to-transparent opacity-0 transition-opacity duration-300`,
                  hoveredCard === index ? "opacity-100" : "",
                )}
              ></div>

              <CardHeader className="relative z-10">
                <div
                  className={cn(
                    `mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100/50 dark:bg-gray-800/50 transition-all duration-300`,
                    hoveredCard === index ? service.bgColor : "",
                  )}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
              </CardHeader>

              <CardContent className="relative z-10">
                <CardDescription className="text-base text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </CardDescription>
                <Button
                  variant="ghost"
                  className={cn(
                    "p-0 h-auto text-sm font-medium text-red-600 hover:text-red-500 hover:bg-transparent group/btn",
                    hoveredCard === index ? "translate-x-1" : "",
                  )}
                  asChild
                >
                  <Link href="/services" className="flex items-center">
                    詳細を見る
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-gray-300 hover:bg-gray-100 text-gray-900 dark:border-gray-700 dark:hover:bg-gray-800 dark:text-white"
          >
            <Link href="/services">すべての事業内容を見る</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

