import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BlogSidebar() {
  const categories = [
    { name: "ビジネス", count: 5 },
    { name: "テクノロジー", count: 3 },
    { name: "マーケティング", count: 2 },
    { name: "お知らせ", count: 4 },
  ]

  const tags = [
    "ビジネス",
    "コンサルティング",
    "人材育成",
    "マーケティング",
    "グローバル",
    "テクノロジー",
    "イノベーション",
    "お知らせ",
  ]

  const recentPosts = [
    { title: "ビジネスコンサルティングの最新トレンド", slug: "dummy03" },
    { title: "人材育成の重要性と効果的な方法", slug: "dummy02" },
    { title: "マーケティング戦略の立て方", slug: "dummy01" },
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">カテゴリー</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href="/blog/category"
                  className="flex justify-between items-center text-gray-300 hover:text-primary"
                >
                  <span>{category.name}</span>
                  <Badge variant="secondary">{category.count}</Badge>
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">最近の投稿</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {recentPosts.map((post) => (
              <li key={post.title}>
                <Link href={`/blog/${post.slug}`} className="text-gray-300 hover:text-primary hover:underline">
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">タグ</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag} href="/blog/tag1">
                <Badge variant="outline" className="hover:bg-gray-800 border-gray-700 text-gray-300">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

