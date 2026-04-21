import Image from 'next/image'
import { IRecipe } from './types'
import { RecipeBadge } from '../RecipeBadge'

export default function RecipeItem({ recipe }: { recipe: IRecipe }) {
	return (
		<div className={`p-4`}>
			<div className={`relative`}>
				<Image src={recipe.image} alt={recipe.title} width={recipe.width} height={recipe.height} />
			</div>
			<h3>{recipe.title}</h3>
			<div className={`flex items-center gap-6`}>
				<RecipeBadge variant={'timer'} text={`${recipe.cookTime} Minutes`} />
				<RecipeBadge variant={'knife'} text={`${recipe.category}`} />
			</div>
		</div>
	)
}
