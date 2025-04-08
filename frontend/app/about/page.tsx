import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Award, Clock, MapPin, Building, Shield, Droplet, RouteIcon as Road, Flame } from "lucide-react"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "会社案内 | イージスグループ",
  description:
    "イージスグループは2006年の設立以来、公共サービスの質的向上と効率化を図るため、様々な事業に取り組んでいます。企業理念、会社概要、沿革、グループ企業についてご紹介します。",
  keywords: ["会社案内", "企業理念", "会社概要", "沿革", "グループ企業", "イージスグループ"],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "会社案内 | イージスグループ",
    description:
      "イージスグループは2006年の設立以来、公共サービスの質的向上と効率化を図るため、様々な事業に取り組んでいます。企業理念、会社概要、沿革、グループ企業についてご紹介します。",
    url: "https://aegis-co.jp/about",
    type: "website",
  },
}

export default function AboutPage() {
  // Structured data for about page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "イージスグループ",
      foundingDate: "2006",
      description:
        "イージスグループは2006年の設立以来、公共サービスの質的向上と効率化を図るため、様々な事業に取り組んでいます。",
      address: {
        "@type": "PostalAddress",
        streetAddress: "朝日町1番4号 サン・インターナショナルビル4F",
        addressLocality: "四日市市",
        addressRegion: "三重県",
        postalCode: "510-0061",
        addressCountry: "JP",
      },
    },
  }

  const companyInfo = [
    { label: "会社名", value: "イージスグループ" },
    { label: "設立", value: "2006年" },
    { label: "本社所在地", value: "〒510-0061 三重県四日市市朝日町1番4号 サン・インターナショナルビル4F" },
    { label: "技術本部", value: "〒510-0084 三重県四日市市栄町2番2号 Aegis Bld." },
    {
      label: "主要取引銀行",
      value: "三重UFJ銀行 四日市支店、株式会社商工組合中央金庫 四日市支店、株式会社百五銀行 四日市支店",
    },
  ]

  const groupCompanies = [
    {
      name: "株式会社イージス",
      description: "グループ内で横断的にオペレーションを連携する事業における事業統括。",
      icon: <Building className="h-6 w-6 text-red-600" />,
      area: "パートナーシップ事業",
    },
    {
      name: "NDK株式会社",
      description: "料金収受から道路維持管理まで、幅広なワンストップサービスを提供。",
      icon: <Road className="h-6 w-6 text-red-600" />,
      area: "有料道路分野",
    },
    {
      name: "NDK九州株式会社",
      description: "九州エリアにおいて有料道路に関する各種サービスを提供。",
      icon: <Road className="h-6 w-6 text-red-600" />,
      area: "料金収受事業",
    },
    {
      name: "セントラルハイウェイ株式会社",
      description: "有料道路コンセッション事業におけるオペレーション事業を担当。",
      icon: <Road className="h-6 w-6 text-red-600" />,
      area: "料金管理事業",
    },
    {
      name: "NSK株式会社",
      description: "各種施設の管理者として、運営・施設の維持管理を行う。",
      icon: <Building className="h-6 w-6 text-gray-900" />,
      area: "高速道路管理事業",
    },
    {
      name: "日本ロテックス株式会社",
      description: "火器専門の技術者による、火器設備の保守点検を技術面でサポート。",
      icon: <Flame className="h-6 w-6 text-gray-900" />,
      area: "火器保守・点検事業",
    },
    {
      name: "サン・インターナショナル株式会社",
      description: "有資格者により、防災設備の運営や消防設備の点検・保守等を実施。",
      icon: <Shield className="h-6 w-6 text-[#8D7B68]" />,
      area: "防災事業",
    },
    {
      name: "マイタウンサービス株式会社",
      description: "自治体より検針・徴収管理の業務を包括受託し、水道サービスを提供。",
      icon: <Droplet className="h-6 w-6 text-[#8D7B68]" />,
      area: "水道包括受託事業",
    },
  ]

  const history = [
    {
      year: "2006年",
      events: [
        "イージスグループ設立",
        "イージス・グループ有限責任事業組合設立",
        "（サン・インターナショナル株式会社（防災事業）他1社により）",
      ],
    },
    { year: "2008年", events: ["株式会社イージス加入（パートナーシップ事業）"] },
    {
      year: "2010年",
      events: ["NSK株式会社加入（高速指定管理事業）", "NDK株式会社加入（有料道路の料金徴収・維持管理事業）"],
    },
    {
      year: "2011年",
      events: [
        "NDK九州株式会社加入（NDK株式会社の会社分割により）",
        "マイタウンサービス株式会社（水道包括受託事業）を関連会社に",
      ],
    },
    { year: "2012年", events: ["日本ロテックス株式会社加入（火器保守・点検事業）"] },
    {
      year: "2013年",
      events: ["セントラルハイウェイ株式会社加入", "（愛知県の有料道路（2016年よりコンセッション路線）料金徴収事業）"],
    },
    { year: "2016年", events: ["愛知道路コンセッション株式会社に出資（日本初の有料道路コンセッションに参画）"] },
    {
      year: "2018年",
      events: [
        "NDK株式会社が代表企業となりARK（愛知道路管理JV）を設立。",
        "愛知県の有料道路コンセッション路線の交通管理・管制および維持・清掃業務を開始（料金徴収を含む包括的な業務提供を開始）",
      ],
    },
    { year: "2020年", events: ["マイタウンサービス株式会社加入"] },
  ]

  const values = [
    {
      icon: <Users className="h-10 w-10 text-red-600" />,
      title: "利用者・クルーに寄り添い",
      description:
        "私たちは「公共サービスはその地域に住む人により心を込めて提供されるべき」と考えています。組織はクルーの幸せを願い、クルーは利用者の満足を追求する。",
    },
    {
      icon: <Award className="h-10 w-10 text-gray-900" />,
      title: "地域の雇用を創出",
      description:
        "「地域公共のサービスとは地域住民によって行われるべき」と考え、地元採用に力を入れる。クルーが「安定した収入」と「幸せの追求」を得るための会社組織であり続ける。",
    },
    {
      icon: <Clock className="h-10 w-10 text-[#8D7B68]" />,
      title: "チームの中で働く意義",
      description:
        "日々の業務を通じて「成長」や「喜び」を感じられるようなチームとなる。年齢や性別・経歴に関わらず「意欲」により登用する気持ちの若い組織であり続ける。",
    },
  ]

  return (
    <>
      <Script
        id="about-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="container px-4 py-12 md:px-6 md:py-24 bg-gray-950">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">会社案内</h1>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              イージスグループは2006年の設立以来、公共サービスの質的向上と効率化を図るため、様々な事業に取り組んでいます。
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl mt-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                <div className="relative w-[200px] h-[200px] flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-red-600/20"></div>
                  <div className="relative z-10 bg-red-600 rounded-full w-[120px] h-[120px] flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AEGIS</span>
                    <span className="text-white text-xs absolute bottom-8">GROUP</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">企業理念</h2>
              <p className="text-lg mb-6 text-gray-300">
                「公共事業で、社会を守る。公共サービスを、変える。」という理念のもと、私たちは「公共サービスの代行者」としてのあるべき姿を正しく理解して業務を提供するスペシャリスト集団です。
              </p>
              <h2 className="text-2xl font-bold mb-4 text-white">会社概要</h2>
              <div className="grid grid-cols-1 gap-2">
                {companyInfo.map((info, index) => (
                  <div key={index} className="flex border-b border-gray-800 pb-2">
                    <div className="font-bold w-32 text-white">{info.label}</div>
                    <div className="text-gray-300">{info.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">企業価値</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value, index) => (
                <Card key={index} className="transition-all hover:shadow-lg bg-gray-900 border-gray-800">
                  <CardHeader>
                    <div className="mb-2">{value.icon}</div>
                    <CardTitle className="text-white">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-gray-400">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">沿革</h2>
            <div className="space-y-6">
              {history.map((item, index) => (
                <div key={index} className="flex border-l-2 border-red-600 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-red-600"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{item.year}</h3>
                    <ul className="space-y-2">
                      {item.events.map((event, eventIndex) => (
                        <li key={eventIndex} className="text-gray-400">
                          {event}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">グループ企業</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groupCompanies.map((company, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 h-full">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2 mb-2">
                      {company.icon}
                      <span className="text-sm font-medium text-gray-400">{company.area}</span>
                    </div>
                    <CardTitle className="text-lg text-white">{company.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm text-gray-400">{company.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-white">アクセス</h2>
            <div className="flex items-start space-x-4 justify-center">
              <MapPin className="h-6 w-6 text-red-600 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white">本社所在地</h3>
                <p className="text-gray-400">
                  〒510-0061
                  <br />
                  三重県四日市市朝日町1番4号
                  <br />
                  サン・インターナショナルビル4F
                </p>
              </div>
            </div>
            <div className="mt-6 h-[400px] bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">ここに地図が表示されます</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

