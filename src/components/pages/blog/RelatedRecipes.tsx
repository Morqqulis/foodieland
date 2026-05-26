import RecipeItem from '@/components/custom/recipe-item/RecipeItem'
import { RECIPES } from '@/components/custom/recipe-item/const'
import Title from '@/components/custom/Title'

export default function RelatedRecipes() {
	const recipes = RECIPES.slice(0, 4)

	return (
		<section className='pb-20 lg:pb-24'>
			<div className='container'>
				<Title text='Check out the delicious recipe' as='h3' className='mb-12 lg:mb-16' />

				<div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10'>
					{recipes.map(recipe => (
						<RecipeItem key={recipe.id} recipe={recipe} type='default' />
					))}
				</div>
			</div>
		</section>
	)
}
