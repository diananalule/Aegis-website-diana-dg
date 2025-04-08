import { Building2, Users, BarChart, Globe, Briefcase, Lightbulb, Target, Rocket } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { Metadata } from "next"
import Script from "next/script"
import { Breadcrumb } from "@/components/breadcrumb"

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

export default function ServicesPage() {
  // Structured data for services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "ビジネスコンサルティング",
          description: "企業の成長戦略から組織改革まで、幅広いビジネス課題の解決をサポートします。",
          provider: {
            "@type": "Organization",
            name: "イージスグループ",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "人材育成",
          description: "次世代リーダーの育成から社員のスキルアップまで、人材の成長をサポートします。",
          provider: {
            "@type": "Organization",
            name: "イージスグループ",
          },
        },
      },
      // Additional services would be listed here
    ],
  }

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
      title: "マーケティング戦略",
      description:
        "市場分析からブランディング戦略まで、効果的なマーケティング施策を提案します。デジタルマーケティングからトラディショナルマーケティングまで、幅広い手法を活用します。",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "グローバル展開",
      description:
        "海外進出のサポートから国際的なビジネスネットワークの構築まで、グローバル展開を支援します。各国の文化や法律に精通したスタッフが、お客様のグローバル戦略をサポートします。",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "事業戦略立案",
      description:
        "中長期的な事業計画の策定から新規事業の立ち上げまで、事業戦略の立案をサポートします。市場調査や競合分析を通じて、実現可能な戦略を提案します。",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "イノベーション支援",
      description:
        "新しいアイデアの創出から実現まで、イノベーションを促進するためのサポートを提供します。デザイン思考やアジャイル手法を活用したワークショップを実施します。",
    },
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "業務改善",
      description:
        "業務プロセスの分析から改善策の実施まで、効率化とコスト削減を実現します。無駄を省き、生産性を向上させるための具体的な施策を提案します。",
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "スタートアップ支援",
      description:
        "ビジネスモデルの構築から資金調達まで、スタートアップの成長をサポートします。経験豊富なメンターが、起業家の夢の実現をサポートします。",
    },
  ]

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

