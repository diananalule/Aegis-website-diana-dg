"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Phone, MapPin } from "lucide-react"
import Script from "next/script"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    inquiry_type: "general",
    message: "",
    privacy_policy: false,
  })

  const [structuredData, setStructuredData] = useState<string>("")

  useEffect(() => {
    // Create structured data for contact page
    const contactStructuredData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "お問い合わせ | イージスグループ",
      description:
        "イージスグループへのお問い合わせページです。ご質問やお問い合わせは、フォームからお気軽にご連絡ください。",
      mainEntity: {
        "@type": "Organization",
        name: "イージスグループ",
        telephone: "03-1234-5678",
        email: "info@aegis-co.jp",
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

    setStructuredData(JSON.stringify(contactStructuredData))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiry_type: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, privacy_policy: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("お問い合わせありがとうございます。担当者より連絡いたします。")
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      inquiry_type: "general",
      message: "",
      privacy_policy: false,
    })
  }

  return (
    <>
      {structuredData && (
        <Script
          id="contact-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: structuredData }}
        />
      )}
      <div className="container px-4 py-12 md:px-6 md:py-24 bg-gray-950">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">お問い合わせ</h1>
            <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              ご質問やお問い合わせは、以下のフォームからお気軽にご連絡ください。
            </p>
          </div>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2 mt-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">メール</h3>
                  <p className="text-gray-400">info@aegis-co.jp</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">電話</h3>
                  <p className="text-gray-400">03-1234-5678</p>
                  <p className="text-sm text-gray-400">受付時間: 平日 9:00〜18:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">所在地</h3>
                  <p className="text-gray-400">
                    〒150-0002
                    <br />
                    東京都渋谷区渋谷1-1-1
                    <br />
                    渋谷ビル10F
                  </p>
                  <p className="mt-2 text-sm text-gray-400">JR渋谷駅から徒歩5分</p>
                </div>
              </div>
            </div>
            <div className="h-[300px] bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">ここに地図が表示されます</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-6 rounded-lg border border-gray-800">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-white">
                お名前 <span className="text-red-500">*</span>
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="山田 太郎"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-white">
                会社名
              </Label>
              <Input
                id="company"
                name="company"
                placeholder="株式会社〇〇"
                value={formData.company}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                メールアドレス <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="example@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">
                電話番号
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="03-1234-5678"
                value={formData.phone}
                onChange={handleChange}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white">
                お問い合わせ種類 <span className="text-red-500">*</span>
              </Label>
              <RadioGroup
                defaultValue="general"
                value={formData.inquiry_type}
                onValueChange={handleRadioChange}
                className="text-white"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="general" id="general" />
                  <Label htmlFor="general" className="text-white">
                    一般的なお問い合わせ
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="service" id="service" />
                  <Label htmlFor="service" className="text-white">
                    サービスについて
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="partnership" id="partnership" />
                  <Label htmlFor="partnership" className="text-white">
                    業務提携について
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="text-white">
                    その他
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-white">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="お問い合わせ内容をご記入ください"
                required
                className="min-h-[120px] bg-gray-800 border-gray-700 text-white"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="privacy_policy"
                checked={formData.privacy_policy}
                onCheckedChange={handleCheckboxChange}
                required
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="privacy_policy" className="text-sm text-white">
                  <a href="/privacy" className="text-primary hover:underline">
                    プライバシーポリシー
                  </a>
                  に同意します <span className="text-red-500">*</span>
                </Label>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={!formData.privacy_policy}>
              送信する
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

