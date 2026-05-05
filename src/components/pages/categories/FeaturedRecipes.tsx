import Title from '@/components/custom/Title'
import RecipeItem from '@/components/custom/recipe-item/RecipeItem'
import { RECIPES } from '@/components/custom/recipe-item/const'
import { Btn } from '@/components/custom/Btn'

export default function FeaturedRecipes() {
	// Let's take some popular recipes
	const featured = RECIPES.slice(0, 3)

	return (
		<section className='py-20 bg-linear-to-b from-transparent to-custom-blue/30'>
			<div className='container'>
				<header className='flex flex-col md:flex-row justify-between items-end gap-6 mb-16'>
					<div className='max-w-2xl'>
						<Title text='Most Popular This Week' className='mb-4' />
						<p className='text-foreground/60'>
							Check out the recipes that are trending right now across all our categories. 
							Join thousands of happy cooks today!
						</p>
					</div>
					<Btn text='View All Recipes' as='Link' href='/recipes' color='blue' size='md' />
				</header>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
					{featured.map(recipe => (
						<RecipeItem key={recipe.id} recipe={recipe} />
					))}
				</div>
			</div>
		</section>
	)
}
