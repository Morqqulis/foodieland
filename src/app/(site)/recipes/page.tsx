import type { Metadata } from 'next'
import { getAllRecipes } from '@/services/recipesService'
import RecipesPageClient from '@/components/pages/recipes/RecipesPageClient'
import Subscribe from '@/components/global/Subscribe/Subscribe'

export const revalidate = 0

export const metadata: Metadata = {
	title: 'Delicious Recipes | Foodieland Catalogue',
	description: 'Explore the full list of healthy, easy-to-make, and delicious recipes on Foodieland. Search by ingredients, prep time, and categories.',
	openGraph: {
		title: 'Delicious Recipes | Foodieland Catalogue',
		description: 'Explore the full list of healthy, easy-to-make, and delicious recipes on Foodieland.',
		images: [{ url: '/recipes/item-1.jpg' }],
	},
}

export default async function RecipesPage() {
	const recipes = await getAllRecipes()

	return (
		<main className="flex-grow">
			<RecipesPageClient initialRecipes={recipes} />
			<Subscribe />
		</main>
	)
}
