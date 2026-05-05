import { IAdvanced } from '@/components/pages/home/Advanced/const'
import Image from 'next/image'
import { RecipeBadge } from '../RecipeBadge'
import LikeBtn from './like-btn'
import { IRecipe } from './types'
import { cn } from '@/lib/utils'

export default function RecipeItem({ recipe, type }: { recipe: IRecipe | IAdvanced; type?: 'advanced' | 'default' }) {
	return (
		<div
			className={cn(
				`p-4 rounded-custom flex flex-col gap-6`,
				type === 'default' && 'bg-linear-to-b from-transparent to-custom-blue',
			)}>
			<div className={`relative`}>
				<Image
					className={`rounded-custom`}
					src={recipe.image}
					alt={recipe.title}
					width={type === 'default' ? 368 : 290}
					height={type === 'default' ? 364 : 291}
				/>
				<LikeBtn />
			</div>
			<h3 className={cn(`font-semibold tracking-[-0.04em]`, type === 'default' ? ' text-2xl' : 'text-lg')}>
				{recipe.title}
			</h3>
			<div className={`flex items-center gap-6 pb-4`}>
				<RecipeBadge variant={'timer'} text={`${recipe.cookTime} Minutes`} />
				<RecipeBadge variant={'knife'} text={`${recipe.category}`} />
			</div>
		</div>
	)
}
