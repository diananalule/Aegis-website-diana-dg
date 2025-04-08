"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-gray-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
          <div className="text-sm font-medium text-red-600 uppercase tracking-wider">お問い合わせ</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">お問い合わせ</h2>
          <p className="max-w-[700px] text-gray-400 md:text-xl/relaxed">
            ご質問やお問い合わせは、以下のフォームからお気軽にご連絡ください。 担当者が迅速に対応いたします。
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6 bg-gray-900/50 p-4 md:p-8 rounded-2xl border border-gray-800">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">メール</h3>
                <p className="text-gray-400 mt-1">info@aegis-co.jp</p>
                <p className="text-sm text-gray-500 mt-1">24時間受付中、営業時間内に返信いたします</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">電話</h3>
                <p className="text-gray-400 mt-1">03-1234-5678</p>
                <p className="text-sm text-gray-500 mt-1">受付時間: 平日 9:00〜18:00</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">所在地</h3>
                <p className="text-gray-400 mt-1">
                  〒510-0061
                  <br />
                  三重県四日市市朝日町1番4号
                  <br />
                  サン・インターナショナルビル4F
                </p>
                <p className="text-sm text-gray-500 mt-1">JR渋谷駅から徒歩5分</p>
              </div>
            </div>

            <div className="h-[300px] bg-gray-800 rounded-xl overflow-hidden border border-gray-700 mt-8">
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                ここに地図が表示されます
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-white">
                  お名前 <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="山田 太郎"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white focus:border-primary h-12 md:h-10"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white">
                  メールアドレス <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-800 border-gray-700 text-white focus:border-primary"
                  disabled={isSubmitting || isSubmitted}
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
                  className="bg-gray-800 border-gray-700 text-white focus:border-primary"
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  お問い合わせ内容 <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="お問い合わせ内容をご記入ください"
                  required
                  className="min-h-[150px] bg-gray-800 border-gray-700 text-white focus:border-primary"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting || isSubmitted}
                />
              </div>

              <Button
                type="submit"
                className="w-full h-14 md:h-12 bg-primary hover:bg-primary/90 text-white text-base"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    送信中...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    送信完了
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    送信する
                  </span>
                )}
              </Button>

              {isSubmitted && (
                <div className="text-center text-green-400 text-sm mt-2">
                  お問い合わせありがとうございます。担当者より連絡いたします。
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

