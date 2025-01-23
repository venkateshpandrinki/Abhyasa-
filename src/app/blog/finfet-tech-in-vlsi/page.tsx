'use client'
import { useParams } from "next/navigation"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback,  } from "@/components/ui/avatar" 
import { Clock, Fullscreen, User } from "lucide-react"

import { blogPosts } from "@/lib/blogdata"
import Navbar from "@/components/Navbar"
import ExportedImage from "next-image-export-optimizer"

export default function BlogPostPage() {
  const { slug } = useParams() 
  const post = blogPosts[1]

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div className=" bg-gradient-to-br from-black via-gray-900 to-gray-800 text-justify">
    <Navbar/>
    <div className="min-h-screen text-white flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl bg-gray-800 bg-opacity-50 border-none">
        <CardContent className="p-6 md:p-8">
          <div className="space-y-6">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden">
              <ExportedImage
                src={post.imageUrl}
                alt={post.title}
                width={800}
                height={400}
                
                className="transition-transform duration-300 object-contain  hover:scale-105"
                />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white">{post.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8">
                    
                    <AvatarFallback><User className="w-4 h-4" /></AvatarFallback>
                  </Avatar>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                </div>
              </div>
              <p className="text-lg text-gray-200">{post.excerpt}</p>
              <p className="mt-4 text-gray-300 whitespace-break-spaces">{post.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
                </div>
  )
}
