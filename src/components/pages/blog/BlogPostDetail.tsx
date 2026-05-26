import Image from 'next/image'
import Text from '@/components/custom/Text'
import BlogPostContent from './BlogPostContent'
import BlogPostShareSidebar from './BlogPostShareSidebar'
import type { BlogPostDetail as BlogPostDetailType } from './types'

export default function BlogPostDetail({ post }: { post: BlogPostDetailType }) {
	return (
		<section className='pt-16 pb-12 lg:pb-20 overflow-x-clip'>
			<div className='container'>
				<header className='mx-auto max-w-[840px] flex flex-col items-center text-center gap-6'>
					<h1 className='font-semibold text-3xl md:text-4xl lg:text-[48px] tracking-[-0.04em] leading-tight text-black'>
						{post.title}
					</h1>

					<div className='flex items-center justify-center gap-6 text-sm'>
						<div className='flex items-center gap-2 md:gap-3'>
							<Image
								className='rounded-full shrink-0'
								src={post.author.avatar}
								alt='avatar'
								width={40}
								height={40}
							/>
							<span className='font-bold text-black text-sm md:text-base'>{post.author.name}</span>
						</div>
						<div className='w-px h-6 bg-black/10' />
						<span className='text-black/60 font-medium text-sm md:text-base'>{post.author.date}</span>
					</div>

					<Text
						className='text-[15px] lg:text-base leading-7 text-center'
						text={post.subtitle}
					/>
				</header>

				{post.heroImage && (
					<div className='mt-10 lg:mt-12 w-full overflow-hidden rounded-custom'>
						<Image
							className='w-full h-auto'
							src={post.heroImage}
							alt={post.title}
							width={post.heroImageWidth}
							height={post.heroImageHeight}
							priority
							sizes='100vw'
						/>
					</div>
				)}

				<div className='mx-auto mt-10 lg:mt-12 w-full max-w-[1040px] flex flex-col lg:flex-row gap-12 lg:gap-16 items-start justify-center'>
					<div className='flex-1 max-w-[840px] w-full'>
						<BlogPostContent blocks={post.content} />
					</div>
					<BlogPostShareSidebar className='hidden lg:flex' />
				</div>
			</div>
		</section>
	)
}
