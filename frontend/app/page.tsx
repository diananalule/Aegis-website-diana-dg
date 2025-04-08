import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { BusinessAreas } from "@/components/business-areas"
import { About } from "@/components/about"
import { GroupCompanies } from "@/components/group-companies"
import { Contact } from "@/components/contact"
import Script from "next/script"

export default function Home() {
  // Structured data for the homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "イージスグループ",
    alternateName: "AEGIS GROUP",
    url: "https://aegis-co.jp",
    logo: "https://aegis-co.jp/logo.svg",
    description:
      "公共事業で、社会を守る。公共サービスを、変える。イージスグループは公共サービスの質的向上と効率化を図るスペシャリスト集団です。",
    foundingDate: "2006",
    address: {
      "@type": "PostalAddress",
      streetAddress: "朝日町1番4号 サン・インターナショナルビル4F",
      addressLocality: "四日市市",
      addressRegion: "三重県",
      postalCode: "510-0061",
      addressCountry: "JP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "0593-24-1234",
      contactType: "customer service",
    },
    sameAs: [
      "https://twitter.com/aegisgroup",
      "https://www.facebook.com/aegisgroup",
      "https://www.linkedin.com/company/aegisgroup",
    ],
  }

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="flex flex-col w-full">
        <Hero />
        <BusinessAreas />
        <Services />
        <About />
        <GroupCompanies />
        <Contact />
      </div>
    </>
  )
}

