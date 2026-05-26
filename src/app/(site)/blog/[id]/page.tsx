import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPayload } from 'payload'
import config from '@/payload.config'
import BlogPostDetail from '@/components/pages/blog/BlogPostDetail'
import { mapPostToDetail } from '@/components/pages/blog/mapPost'
import RelatedRecipes from '@/components/pages/blog/RelatedRecipes'
import Subscribe from '@/components/global/Subscribe/Subscribe'
import { getPayloadImageUrl } from '@/lib/payloadMedia'

export const revalidate = 0

type PageProps = {
	params: Promise<{ id: string }>
}

async function getPost(id: string) {
	const payload = await getPayload({ config })

	try {
		return await payload.findByID({
			collection: 'posts',
			id: Number(id),
			depth: 2,
		})
	} catch {
		return null
	}
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { id } = await params
	const post = await getPost(id)

	if (!post) {
		return { title: 'Post not found' }
	}

	const imageUrl = getPayloadImageUrl(post.featuredImage)

	return {
		title: post.title,
		description: post.subtitle,
		openGraph: {
			title: post.title,
			description: post.subtitle,
			...(imageUrl && { images: [{ url: imageUrl }] }),
		},
	}
}

export default async function BlogPostPage({ params }: PageProps) {
	const { id } = await params
	const post = await getPost(id)

	if (!post) {
		notFound()
	}

	return (
		<main>
			<BlogPostDetail post={mapPostToDetail(post)} />
			<Subscribe />
			<RelatedRecipes />
		</main>
	)
}
