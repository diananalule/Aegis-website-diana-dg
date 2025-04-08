import { blogPosts } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog/blog-card"
import { BlogSidebar } from "@/components/blog/blog-sidebar"

export default function BlogTagPage() {
  // For demo purposes, we'll just show all posts
  // In a real app, you would filter by tag
  return (
    <div className="container px-4 py-12 md:px-6 bg-gray-950">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-6 text-white">タグ: ビジネス</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
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

