import type React from "react"
import { Building2, Users, BarChart, Globe, Briefcase, Lightbulb, Target, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import Script from "next/script"
import { Breadcrumb } from "@/components/breadcrumb"

// Commenting out the import related to Strapi
// import { getServices } from "@/lib/strapi"

export const metadata: Metadata = {
  title: "事業内容 | イージスグループ",
  description:
    "イージスグループの事業内容をご紹介します。コンセッション事業、指定管理事業、業務委託事業、パートナーシップ事業など、様々なサービスを通じて公共サービスの質的向上と効率化を図ります。",
  keywords: [
    "事業内容",
    "コンセッション事業",
    "指定管理事業",
    "業務委託事業",
    "パートナーシップ事業",
    "イージスグループ",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "事業内容 | イージスグループ",
    description:
      "イージスグループの事業内容をご紹介します。コンセッション事業、指定管理事業、業務委託事業、パートナーシップ事業など、様々なサービスを通じて公共サービスの質的向上と効率化を図ります。",
    url: "https://aegis-co.jp/services",
    type: "website",
  },
}

// Map icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  building: <Building2 className="h-10 w-10 text-primary" />,
  users: <Users className="h-10 w-10 text-primary" />,
  chart: <BarChart className="h-10 w-10 text-primary" />,
  globe: <Globe className="h-10 w-10 text-primary" />,
  briefcase: <Briefcase className="h-10 w-10 text-primary" />,
  lightbulb: <Lightbulb className="h-10 w-10 text-primary" />,
  target: <Target className="h-10 w-10 text-primary" />,
  rocket: <Rocket className="h-10 w-10 text-primary" />,
}

export default async function ServicesPage() {
  // Commenting out the Strapi API call
  // const strapiServices = await getServices()

  // Example placeholder data for services
  const services = [
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: "ビジネスコンサルティング",
      description:
        "企業の成長戦略から組織改革まで、幅広いビジネス課題の解決をサポートします。経験豊富なコンサルタントが、お客様のビジネスに合わせた最適なソリューションを提案します。",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "人材育成",
      description:
        "次世代リーダーの育成から社員のスキルアップまで、人材の成長をサポートします。研修プログラムの開発から実施まで、お客様のニーズに合わせたサービスを提供します。",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "業務効率化",
      description:
        "業務の効率化を支援し、コスト削減と生産性向上を実現します。最新のテクノロジーを活用して、業務の最適化を図ります。",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "国際事業",
      description:
        "海外進出や国際業務のサポートを行い、グローバル市場でのビジネス展開を支援します。",
    },
    // ... other fallback services
  ]

  // Structured data for services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.title,
        description: service.description,
        provider: {
          "@type": "Organization",
          name: "イージスグループ",
        },
      },
    })),
  }

  return (
    <>
      <Script
        id="services-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Breadcrumb items={[{ label: "事業内容", href: "/services", isCurrent: true }]} className="mb-8" />
      <div className="container px-4 py-12 md:px-6 md:py-24 bg-gray-950">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">事業内容</h1>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aegis Co., Ltd. は様々なサービスを通じてお客様のビジネスをサポートします。
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="transition-all hover:shadow-lg bg-gray-900 border-gray-800">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-400">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}
