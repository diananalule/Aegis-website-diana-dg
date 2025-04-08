import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ブログ | Aegis Co., Ltd.",
  description: "Aegis Co., Ltd.の公式ブログです。最新情報やお知らせを掲載しています。",
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-gray-900 py-8 border-b border-gray-800">
        <div className="container">
          <h1 className="text-3xl font-bold text-white">ブログ</h1>
          <p className="text-gray-400 mt-2">Aegis Co., Ltd.の最新情報やお知らせ</p>
        </div>
      </div>
      {children}
    </div>
  )
}

