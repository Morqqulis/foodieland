import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import Image from 'next/image'

const recipeBadgeVariants = cva(`inline-flex items-center gap-2.5 rounded-full  whitespace-nowrap`, {
	variants: {
		hasBg: {
			true: 'bg-black/5 py-2 px-4',
			false: 'bg-transparent',
		},
	},
	defaultVariants: {
		hasBg: false,
	},
})

type RecipeBadgeProps = VariantProps<typeof recipeBadgeVariants> & {
	variant: 'timer' | 'knife'
	text: string
	className?: string
}

export function RecipeBadge({ variant, text, className, hasBg }: RecipeBadgeProps) {
	return (
		<div className={cn(recipeBadgeVariants({ hasBg }), className)}>
			<Image src={`/hero/${variant === 'timer' ? 'timer' : 'knife'}.svg`} alt={'icon'} width={24} height={24} />
			<span className={`text-sm font-semibold tracking-[-0.02em] capitalize whitespace-nowrap`}>{text}</span>
		</div>
	)
}
