import { BlogCard } from "@/components/blog/blog-card"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

// Commenting out the import related to Strapi
// import { getBlogPosts } from "@/lib/strapi"

export default async function LatestBlogPage() {
  // Commenting out the Strapi API call
  // const blogPosts = await getBlogPosts()

  // Example placeholder data to avoid errors
  const blogPosts = [
    {
      id: "1",
      attributes: {
        title: "最新の記事タイトル 1",
        excerpt: "記事の抜粋 1",
        date: "2025-04-08",
        author: "著者名 1",
        category: "カテゴリー 1",
        tags: "タグ1,タグ2",
        image: { data: { attributes: { url: "/placeholder.svg" } } },
        slug: "latest-post-1",
      },
    },
    {
      id: "2",
      attributes: {
        title: "最新の記事タイトル 2",
        excerpt: "記事の抜粋 2",
        date: "2025-04-08",
        author: "著者名 2",
        category: "カテゴリー 2",
        tags: "タグ3,タグ4",
        image: { data: { attributes: { url: "/placeholder.svg" } } },
        slug: "latest-post-2",
      },
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 bg-gray-950">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-white">最新の記事</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post: any) => (
              <BlogCard
                key={post.id}
                post={{
                  id: post.id,
                  title: post.attributes.title,
                  excerpt: post.attributes.excerpt,
                  date: post.attributes.date,
                  author: post.attributes.author,
                  category: post.attributes.category,
                  tags: post.attributes.tags?.split(",").map((tag: string) => tag.trim()) || [],
                  image: post.attributes.image?.data?.attributes?.url || "/placeholder.svg",
                  slug: post.attributes.slug,
                }}
              />
            ))}
          </div>
        </div>
        <div>
          <BlogSidebar />
        </div>
      </div>
    </div>
  )
}
