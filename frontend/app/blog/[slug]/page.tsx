import { notFound } from "next/navigation"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { CalendarIcon, UserIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import Script from "next/script"

// Commenting out imports related to Strapi
// import { getBlogPostBySlug } from "@/lib/strapi"
// import { getStrapiURL } from "@/lib/strapi"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  // Commenting out the Strapi API call
  // const post = await getBlogPostBySlug(params.slug)

  // If post doesn't exist, return default metadata
  // if (!post) {
  return {
    title: "ブログ記事が見つかりません",
    description: "お探しのブログ記事は見つかりませんでした。",
  }
  // }

  // Commenting out post-related code
  // const { attributes } = post

  return {
    title: `記事タイトル | イージスグループ`,
    description: "記事の抜粋",
    keywords: ["example", "tags"],
    authors: [{ name: "著者名" }],
    alternates: {
      canonical: `/blog/example-slug`,
    },
    openGraph: {
      title: "記事タイトル",
      description: "記事の抜粋",
      url: `https://aegis-co.jp/blog/example-slug`,
      type: "article",
      publishedTime: "2025-04-08",
      authors: ["著者名"],
      tags: ["example", "tags"],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Commenting out the Strapi API call
  // const post = await getBlogPostBySlug(params.slug)

  // If no post, display not found
  // if (!post) {
  notFound()
  // }

  // Commenting out post-related code
  // const { attributes } = post
  // const tags = attributes.tags?.split(",").map((tag: string) => tag.trim()) || []
  // const imageUrl = attributes.image?.data?.attributes?.url
  //   ? getStrapiURL(attributes.image.data.attributes.url)
  //   : "/placeholder.svg"

  // Example structured data
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "記事タイトル",
    description: "記事の抜粋",
    image: "/placeholder.svg", // Modify with default placeholder
    datePublished: "2025-04-08",
    author: {
      "@type": "Person",
      name: "著者名",
    },
    publisher: {
      "@type": "Organization",
      name: "イージスグループ",
      logo: {
        "@type": "ImageObject",
        url: "https://aegis-co.jp/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aegis-co.jp/blog/example-slug`,
    },
    keywords: ["example", "tags"],
  }

  return (
    <>
      <Script
        id="blog-post-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <div className="container px-4 py-12 md:px-6 bg-gray-950">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-900 rounded-lg shadow-sm overflow-hidden border border-gray-800">
              <div className="relative h-64 w-full">
                <Image src="/placeholder.svg" alt="記事タイトル" fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
                  <Badge variant="secondary">カテゴリー</Badge>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" />
                    <span>2025-04-08</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserIcon className="h-3 w-3" />
                    <span>著者名</span>
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-6 text-white">記事タイトル</h1>

                <div className="prose prose-invert max-w-none">
                  <p className="my-3 text-gray-300">この記事の内容</p>
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  <Link href="/blog/tag/example-tag">
                    <Badge variant="outline" className="hover:bg-gray-800 border-gray-700 text-gray-300">
                      Example Tag
                    </Badge>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </>
  )
}
