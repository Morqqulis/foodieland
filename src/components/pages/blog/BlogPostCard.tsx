import Image from 'next/image'
import Link from 'next/link'
import AvatarItem from '@/components/custom/AvatarItem'
import { BlogPost } from './types'

export default function BlogPostCard({ post }: { post: BlogPost }) {
	return (
		<article className={``}>
			<Link
				className={`flex flex-col md:flex-row gap-6 lg:gap-10 items-center bg-white rounded-custom transition-all hover:shadow-md duration-300 group`}
				href={`/blog/${post.id}`}>
				{/* Left Side: Post Image */}
				<div className={`w-full md:w-[290px] h-[200px] relative overflow-hidden rounded-[24px] shrink-0`}>
					<Image
						className={`object-cover transition-transform duration-500 group-hover:scale-105`}
						src={post.image}
						alt={post.title}
						fill
						sizes='(max-width: 768px) 100vw, 290px'
						priority={post.id <= 2}
					/>
				</div>

				{/* Right Side: Post Details */}
				<div className={`flex flex-col justify-between grow gap-4 py-2`}>
					<div className={`flex flex-col gap-3.5`}>
						<div>
							<h3
								className={`font-semibold text-2xl lg:text-[24px] tracking-[-0.04em] leading-[32px] text-black hover:text-black/80 transition-colors`}>
								{post.title}
							</h3>
						</div>
						<p className={`text-foreground/60 text-[14px] lg:text-[15px] leading-[24px] tracking-[-0.02em]`}>
							{post.excerpt}
						</p>
					</div>

					{/* Author Block */}
					<div className={`flex items-center gap-4`}>
						<AvatarItem name={post.author.name} date={post.author.date} image={post.author.avatar} className={`mt-2`} />
					</div>
				</div>
			</Link>
		</article>
	)
}
