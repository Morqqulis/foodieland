import type { Post } from '../../../../payload-types'
import { formatDate } from '@/lib/formatDate'
import { getPayloadImageDimensions, getPayloadImageUrl } from '@/lib/payloadMedia'
import type { BlogPostDetail } from './types'

export function mapPostToDetail(post: Post): BlogPostDetail {
	const heroDimensions = getPayloadImageDimensions(post.featuredImage)

	return {
		id: Number(post.id),
		title: post.title,
		subtitle: post.subtitle,
		heroImage: getPayloadImageUrl(post.featuredImage),
		heroImageWidth: heroDimensions.width,
		heroImageHeight: heroDimensions.height,
		author: {
			name: post.author?.name || 'Anonymous',
			avatar: getPayloadImageUrl(post.author?.avatar, '/hero/avatar.jpg'),
			date: formatDate(post.publishDate),
		},
		content: post.content,
	}
}
