import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { urlForImage } from '@/sanity/lib/image'  

export interface Blog {
  title: string
  excerpt: string
  coverImage: { asset: { url: string } } | null 
  slug: { current: string }
}

async function LatestBlog() {
  let data: Blog[] = []
  
  try {
    data = await client.fetch(`
      *[_type == "blog"  ] {
  title,
  excerpt,
  coverImage,
  slug
}
    `)
  } catch (error) {
    console.error('Error fetching blogs:', error)
  }

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="flex flex-wrap">
              {data.length === 0 ? (
                <p>No blog posts found.</p>  
              ) : (
                data.map((blog, index) => (
                  <div key={index} className="p-4 md:w-1/3 transition-all hover:scale-105">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                      <Link href={`/blog/${blog.slug.current}`} passHref>
                        <div className="relative w-full h-48">
                        
                          {blog.coverImage ? (
                            <Image
                              src={urlForImage(blog.coverImage).url()}  
                              alt={blog.title}
                              className="object-cover object-center"
                              fill
                            />
                          ) : (
                            <div className="h-full bg-gray-300"></div> 
                          )}
                        </div>
                      </Link>
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">
                          Insights
                        </h2>
                        <h1 className="title-font text-lg font-medium text-black mb-3">
                          {blog.title}
                        </h1>
                        <p className="leading-relaxed text-gray-300 mb-3 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center flex-wrap">
                          <Link
                            href={`/blog/${blog.slug.current}`}
                            className="text-black inline-flex items-center md:mb-2 lg:mb-0 hover:underline"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LatestBlog




