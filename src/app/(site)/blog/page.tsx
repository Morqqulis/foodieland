import { getPayload } from 'payload'
import config from '@/payload.config'
import BlogPageClient from '@/components/pages/blog/BlogPageClient'
import Subscribe from '@/components/global/Subscribe/Subscribe'
import { mapPostToDetail } from '@/components/pages/blog/mapPost'
import { BlogPost } from '@/components/pages/blog/types'

export const revalidate = 0 // Ensure fresh data is always fetched from the database on page requests

export default async function BlogPage() {
   const payload = await getPayload({ config })
   const postsRes = await payload.find({
      collection: 'posts',
      sort: '-publishDate',
      depth: 2,
   })

   const initialPosts: BlogPost[] = postsRes.docs.map(post => {
      const detail = mapPostToDetail(post)

      return {
         id: detail.id,
         title: detail.title,
         excerpt: detail.subtitle,
         image: detail.heroImage,
         author: detail.author,
      }
   })

   return (
      <main>
         <BlogPageClient initialPosts={initialPosts} />
         <Subscribe />
      </main>
   )
}

