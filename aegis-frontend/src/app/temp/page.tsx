import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TempPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 bg-gray-950">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-6 text-white">準備中のページ</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg mb-8 text-gray-300">
            このページは現在準備中です。近日公開予定ですので、しばらくお待ちください。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="outline" className="border-gray-700 hover:bg-gray-800 text-white">
              <Link href="/">ホームに戻る</Link>
            </Button>
            <Button asChild variant="default">
              <Link href="/contact">お問い合わせ</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

