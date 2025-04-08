import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:gap-10 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Logo size="lg" />
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              公共サービスの代行者としてのあるべき姿を正しく理解して業務を提供するスペシャリスト集団です。
            </p>
            <div className="flex space-x-4 mt-2">
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-3">
            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-white">
                サイトマップ
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                  >
                    ホーム
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                  >
                    事業内容
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                  >
                    会社案内
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/latest"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                  >
                    ニュース
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-white">
                グループ企業
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                  >
                    株式会社イージス
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                  >
                    NDK株式会社
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                  >
                    NDK九州株式会社
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                  >
                    セントラルハイウェイ株式会社
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600 transition-colors"
                  >
                    その他グループ企業
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium uppercase tracking-wider text-gray-900 dark:text-white">
                お問い合わせ
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">
                    〒510-0061
                    <br />
                    三重県四日市市朝日町1番4号
                    <br />
                    サン・インターナショナルビル4F
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">0593-24-1234</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-2 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">info@aegis-group.jp</span>
                </li>
              </ul>
              <Button asChild size="sm" className="mt-2 bg-red-600 hover:bg-red-700">
                <Link href="/contact">お問い合わせ</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} イージスグループ All Rights Reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4">
              <Link
                href="/privacy"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600"
              >
                プライバシーポリシー
              </Link>
              <span className="text-gray-400 dark:text-gray-600 hidden md:inline">|</span>
              <Link
                href="/terms"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600"
              >
                利用規約
              </Link>
              <span className="text-gray-400 dark:text-gray-600 hidden md:inline">|</span>
              <Link
                href="#"
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600"
              >
                特定商取引法
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

