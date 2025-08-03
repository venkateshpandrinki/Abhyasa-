import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, User } from "lucide-react"
import Link from "next/link"
import {blogPosts} from '../lib/blogdata'
import ExportedImage from "next-image-export-optimizer"
import Head from "next/head" // Add this import

export default function Blog() {
  return (
    <>
      <Head>
        <meta name="description" content="Read the latest blog posts on various topics including technology, design, and more." />
      </Head>
      <div className="min-h-screen  p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-10 text-white  ">Latest Blog Posts</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-gray-800 text-white border-gray-700 flex flex-col">
                <CardHeader className="p-0">
                  <ExportedImage
                    src={post.imageUrl}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center text-sm text-gray-400">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <Badge variant="secondary" className="flex items-center">
                      <Clock className="w-3 h-3 mr-1 bg-slate-700" />
                      {post.readTime} min read
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-blue-600 hover:bg-blue-700 text-white">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Link href={`/blog/${post.slug}`} passHref>
                    <Button variant="secondary" className="w-full bg-blue-600 transition-colors hover:bg-blue-700" aria-label={`Read more about ${post.title}`}>
                      Read More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}