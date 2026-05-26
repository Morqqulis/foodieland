import type { Post } from '../../../../payload-types'

export interface BlogAuthor {
   name: string
   avatar: string
   date: string
}

export interface BlogPost {
   id: number
   title: string
   excerpt: string
   image: string
   author: BlogAuthor
}

export interface BlogPostDetail {
   id: number
   title: string
   subtitle: string
   heroImage: string
   heroImageWidth: number
   heroImageHeight: number
   author: BlogAuthor
   content: Post['content']
}

export interface TastyRecipe {
   id: number
   title: string
   image: string
   author: string
}
