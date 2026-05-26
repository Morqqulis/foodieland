import Image from 'next/image'
import type { Post } from '../../../../payload-types'
import { getPayloadImageDimensions, getPayloadImageUrl } from '@/lib/payloadMedia'
import { cn } from '@/lib/utils'

type ContentBlock = Post['content'][number]

const textBlockClassName =
	'max-w-[840px] mx-auto text-left w-full'

export default function BlogPostContent({ blocks }: { blocks: ContentBlock[] }) {
	return (
		<article className='flex flex-col gap-8 lg:gap-10'>
			{blocks.map((block, index) => {
				const key = block.id ?? index

				switch (block.blockType) {
					case 'titleBlock':
						return (
							<h2
								key={key}
								className={cn(
									textBlockClassName,
									'font-semibold text-2xl lg:text-[28px] tracking-[-0.04em] leading-snug text-black',
								)}>
								{block.title}
							</h2>
						)

					case 'paragraphBlock':
						return (
							<p
								key={key}
								className={cn(
									textBlockClassName,
									'text-foreground/60 text-[15px] lg:text-base leading-7 tracking-[-0.02em]',
								)}>
								{block.text}
							</p>
						)

					case 'textBlock':
						return (
							<div key={key} className={cn(textBlockClassName, 'flex flex-col gap-4')}>
								{block.heading && (
									<h3 className='font-semibold text-xl lg:text-2xl tracking-[-0.04em] text-black'>
										{block.heading}
									</h3>
								)}
								<p className='text-foreground/60 text-[15px] lg:text-base leading-7 tracking-[-0.02em]'>
									{block.text}
								</p>
							</div>
						)

					case 'imageBlock': {
						const imageUrl = getPayloadImageUrl(block.image)
						if (!imageUrl) return null

						const { width, height } = getPayloadImageDimensions(block.image)

						return (
							<figure
								key={key}
								className={cn(textBlockClassName, 'flex flex-col gap-3 my-4')}>
								<Image
									className='w-full h-auto rounded-custom'
									src={imageUrl}
									alt={block.caption || 'Article image'}
									width={width}
									height={height}
									sizes='(max-width: 840px) 100vw, 840px'
								/>
								{block.caption && (
									<figcaption className='px-4 text-sm text-black/50 text-center tracking-[-0.02em]'>
										{block.caption}
									</figcaption>
								)}
							</figure>
						)
					}

					case 'quoteBlock':
						return (
							<blockquote
								key={key}
								className={cn(
									textBlockClassName,
									'bg-[#F4F6F5] border-l-[6px] border-black rounded-r-custom py-10 px-8 md:px-12 lg:px-16 text-left my-4',
								)}>
								<p className='italic font-semibold text-lg md:text-2xl lg:text-[36px] lg:leading-tight tracking-[-0.02em] text-black'>
									&ldquo;{block.quote}&rdquo;
								</p>
							</blockquote>
						)

					default:
						return null
				}
			})}
		</article>
	)
}
