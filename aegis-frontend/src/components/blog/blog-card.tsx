import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, UserIcon } from "lucide-react"
import { Card, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  category: string
  tags: string[]
  image: string
  slug: string
}

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-gray-900 border-gray-800">
      <div className="relative h-40 sm:h-48 w-full">
        <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
      </div>
      <CardHeader className="flex-1 p-4 sm:p-6">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
          <Badge variant="secondary">{post.category}</Badge>
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-3 w-3" />
            <span>{post.date}</span>
          </div>
        </div>
        <Link href={`/blog/${post.slug}`} className="hover:underline">
          <h3 className="text-xl font-bold text-white">{post.title}</h3>
        </Link>
        <p className="text-gray-400 mt-2">{post.excerpt}</p>
      </CardHeader>
      <CardFooter className="border-t border-gray-800 pt-3 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-2">
          <div className="flex items-center gap-1 text-sm text-gray-400">
            <UserIcon className="h-3 w-3" />
            <span>{post.author}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <Link key={tag} href={`/blog/tag1`}>
                <Badge variant="outline" className="hover:bg-gray-800 border-gray-700 text-gray-300">
                  {tag}
                </Badge>
              </Link>
            ))}
            {post.tags.length > 2 && (
              <Badge variant="outline" className="border-gray-700 text-gray-300">
                +{post.tags.length - 2}
              </Badge>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

