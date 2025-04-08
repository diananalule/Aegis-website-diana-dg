import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  }

  const groupSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  }

  return (
    <Link href="/" className={cn("flex items-center", className)}>
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className={cn("font-bold text-red-600", sizes[size])}>A</span>
          <span className={cn("font-bold text-gray-900 dark:text-white", sizes[size])}>EGIS</span>
        </div>
        <span className={cn("text-gray-600 dark:text-gray-400 -mt-1", groupSizes[size])}>GROUP</span>
      </div>
    </Link>
  )
}

