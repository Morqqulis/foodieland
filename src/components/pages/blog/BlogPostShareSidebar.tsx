import Image from 'next/image'
import Link from 'next/link'

const SOCIAL_LINKS = [
	{ href: '#', icon: '/socials/facebook.svg', label: 'Share on Facebook', width: 10, height: 20 },
	{ href: '#', icon: '/socials/twitter.svg', label: 'Share on Twitter', width: 22, height: 18 },
	{ href: '#', icon: '/socials/insta.svg', label: 'Share on Instagram', width: 22, height: 22 },
] as const

export default function BlogPostShareSidebar({ className }: { className?: string }) {
	return (
		<aside className={`flex flex-col items-center shrink-0 sticky top-28 self-start ${className ?? ''}`}>
			<span className='font-bold text-xs tracking-[0.2em] text-black uppercase text-center w-full whitespace-nowrap mb-6'>
				Share this on
			</span>
			<div className='flex flex-col items-center gap-6'>
				{SOCIAL_LINKS.map(link => (
					<Link
						key={link.icon}
						href={link.href}
						aria-label={link.label}
						className='text-black hover:opacity-60 transition-opacity'>
						<Image src={link.icon} alt='' width={link.width} height={link.height} />
					</Link>
				))}
			</div>
		</aside>
	)
}
