import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import { BlogSidebar } from "@/components/blog/blog-sidebar"
import { CalendarIcon, UserIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import Script from "next/script"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "ブログ記事が見つかりません",
      description: "お探しのブログ記事は見つかりませんでした。",
    }
  }

  return {
    title: `${post.title} | イージスグループ`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://aegis-co.jp/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Structured data for blog post
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://aegis-co.jp${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
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
      "@id": `https://aegis-co.jp/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
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
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mb-4">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center gap-1">
                    <CalendarIcon className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserIcon className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h1 className="text-3xl font-bold mb-6 text-white">{post.title}</h1>

                <div className="prose prose-invert max-w-none">
                  {post.content.split("\n").map((line, index) => {
                    if (line.startsWith("# ")) {
                      return (
                        <h1 key={index} className="text-3xl font-bold mt-8 mb-4 text-white">
                          {line.substring(2)}
                        </h1>
                      )
                    } else if (line.startsWith("## ")) {
                      return (
                        <h2 key={index} className="text-2xl font-bold mt-6 mb-3 text-white">
                          {line.substring(3)}
                        </h2>
                      )
                    } else if (line.startsWith("### ")) {
                      return (
                        <h3 key={index} className="text-xl font-bold mt-4 mb-2 text-white">
                          {line.substring(4)}
                        </h3>
                      )
                    } else if (line.trim() === "") {
                      return <br key={index} />
                    } else {
                      return (
                        <p key={index} className="my-3 text-gray-300">
                          {line}
                        </p>
                      )
                    }
                  })}
                </div>

                <div className="flex flex-wrap gap-2 mt-8">
                  {post.tags.map((tag) => (
                    <Link key={tag} href="/blog/tag1">
                      <Badge variant="outline" className="hover:bg-gray-800 border-gray-700 text-gray-300">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
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

