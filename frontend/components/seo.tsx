"use client"

import Head from "next/head"
import { useRouter } from "next/router"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: "website" | "article"
  twitterCard?: "summary" | "summary_large_image"
  canonicalUrl?: string
  noindex?: boolean
}

export function SEO({
  title = "イージスグループ | 公共サービスの代行者",
  description = "公共事業で、社会を守る。公共サービスを、変える。イージスグループは公共サービスの質的向上と効率化を図るスペシャリスト集団です。",
  keywords = "公共サービス,官民連携,コンセッション事業,指定管理事業,業務委託事業,パートナーシップ事業,イージスグループ",
  ogImage = "/images/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonicalUrl,
  noindex = false,
}: SEOProps) {
  const router = useRouter()
  const siteUrl = "https://aegis-co.jp"
  const fullUrl = canonicalUrl || `${siteUrl}${router.asPath}`

  // Structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "イージスグループ",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    sameAs: [
      "https://twitter.com/aegisgroup",
      "https://www.facebook.com/aegisgroup",
      "https://www.linkedin.com/company/aegisgroup",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "0593-24-1234",
      contactType: "customer service",
      areaServed: "JP",
      availableLanguage: "Japanese",
    },
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:site_name" content="イージスグループ" />
      <meta property="og:locale" content="ja_JP" />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* Robots */}
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    </Head>
  )
}

