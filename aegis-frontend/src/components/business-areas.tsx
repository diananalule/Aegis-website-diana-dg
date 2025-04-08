"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Building2,
  FileText,
  Droplet,
  RouteIcon as Road,
  Flame,
  HandshakeIcon,
  MonitorIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function BusinessAreas() {
  const [activeArea, setActiveArea] = useState<number | null>(null)

  const businessAreas = [
    {
      id: 1,
      title: "コンセッション事業",
      description: "コンセッション事業において、SPCの代表企業を担当。オペレーションと事業運営を実施します。",
      color: "bg-red-600",
      textColor: "text-red-600",
      icon: <Shield className="h-8 w-8" />,
      image: "/images/road-construction.png",
    },
    {
      id: 2,
      title: "指定管理事業",
      description: "施設の指定管理者として、質の高いサービスを提供すると共に、施設を次代につなぐための施設管理を行う。",
      color: "bg-gray-900 dark:bg-gray-800",
      textColor: "text-gray-900 dark:text-gray-300",
      icon: <Building2 className="h-8 w-8" />,
      image: "/images/control-center.png",
    },
    {
      id: 3,
      title: "業務委託事業",
      description: "委託を受けた業務において、高いオペレーション水準と利用者視点のニーズを満たすサービスを提供。",
      color: "bg-[#8D7B68]",
      textColor: "text-[#8D7B68]",
      icon: <FileText className="h-8 w-8" />,
      image: "/images/service-delivery.png",
    },
  ]

  const detailedAreas = [
    {
      id: 1,
      title: "料金徴収事業",
      description: "有料道路における料金徴収と対応を行う。",
      icon: <Road className="h-6 w-6 text-red-600" />,
      image: "/images/workers-placing-new-coating-asphalt-road.png",
    },
    {
      id: 2,
      title: "維持管理事業",
      description: "道路の維持・管理・清掃と巡回点検を実施。",
      icon: <MonitorIcon className="h-6 w-6 text-red-600" />,
      image: "/images/workers-construction-site.png",
    },
    {
      id: 3,
      title: "防災事業",
      description: "防災設備運営、消防設備の点検・保守等の防災業務の運営。",
      icon: <Shield className="h-6 w-6 text-[#8D7B68]" />,
      image: "/images/engineer-blueprint.png",
    },
    {
      id: 4,
      title: "水道事業",
      description: "自治体からの委託により水道の検針・徴収管理等のサービスを提供。",
      icon: <Droplet className="h-6 w-6 text-[#8D7B68]" />,
      image: "/images/service-delivery.png",
    },
    {
      id: 5,
      title: "火葬炉保守・点検事業",
      description: "火葬炉の運営と保守・管理を行い、正常運転と長寿命化に貢献する。",
      icon: <Flame className="h-6 w-6 text-gray-900 dark:text-gray-300" />,
      image: "/images/engineer-blueprint.png",
    },
    {
      id: 6,
      title: "パートナーシップ事業",
      description: "様々な企業とパートナーシップを組み、事業運営や新規立案を行う。",
      icon: <HandshakeIcon className="h-6 w-6 text-red-600" />,
      image: "/images/business-handshake.png",
    },
  ]

  return (
    <section className="w-full py-24 md:py-32 bg-gray-100 dark:bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <div className="absolute inset-0 bg-gray-900 dark:bg-black opacity-60"></div>
          <Image
            src="/images/engineers-tablet.png"
            alt="Engineers with tablet background"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="text-sm font-medium text-red-600 uppercase tracking-wider">事業領域</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900 dark:text-white">事業領域</h2>
          <p className="max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed">
            あるべき"官民連携"を形に。ワンストップサービスを提供。
          </p>
        </div>

        {/* Three main business areas with circles like in the flyer */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-12 md:mb-20">
          {businessAreas.map((area) => (
            <div
              key={area.id}
              className="relative group w-full md:w-auto"
              onMouseEnter={() => setActiveArea(area.id)}
              onMouseLeave={() => setActiveArea(null)}
            >
              <div
                className={cn(
                  "w-full h-48 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center p-6 transition-all duration-300 mx-auto",
                  area.color,
                  activeArea === area.id ? "scale-105" : "opacity-90",
                )}
              >
                <div className="text-white mb-2">{area.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                <p className="text-sm text-white/80 text-center">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed business areas with images like in the flyer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {detailedAreas.map((area) => (
            <Card
              key={area.id}
              className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 overflow-hidden group hover:border-gray-300 dark:hover:border-gray-700 transition-all"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={area.image || "/placeholder.svg"}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  {area.icon}
                  <h3 className="text-lg font-bold text-white">{area.title}</h3>
                </div>
              </div>
              <CardContent className="pt-4">
                <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Control room/operations center image */}
        <div className="mt-20 relative rounded-xl overflow-hidden">
          <div className="relative h-[400px] w-full">
            <Image
              src="/images/modern-tokyo-cityscape.jpeg"
              alt="Modern Tokyo cityscape aerial view"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent opacity-80"></div>
            <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 max-w-2xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                川上から川下まで、様々な課題にソリューションを提供
              </h3>
              <p className="text-gray-300">
                我々は「官の頼れるパートナー」として、川上から川下まで求められる全ての課題にソリューションを提供できるよう、調整の業務委託から施設自体の指定管理、更には事業自体の運営・収益責任を担うコンセッション方式まで、幅広く取り組んでいます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

