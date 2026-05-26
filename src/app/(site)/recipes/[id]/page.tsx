import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getRecipeById, getAllRecipes } from '@/services/recipesService'
import RecipeDetailClient from '@/components/pages/recipes/RecipeDetailClient'
import Subscribe from '@/components/global/Subscribe/Subscribe'

export const revalidate = 0

type PageProps = {
	params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { id } = await params
	const recipe = await getRecipeById(id)

	if (!recipe) {
		return { title: 'Recipe not found | Foodieland' }
	}

	return {
		title: `${recipe.title} | Foodieland Recipes`,
		description: recipe.desc || `Delicious and healthy ${recipe.category} recipe on Foodieland. Learn how to cook ${recipe.title} step by step.`,
		openGraph: {
			title: `${recipe.title} | Foodieland Recipes`,
			description: recipe.desc,
			images: [{ url: recipe.image }],
		},
	}
}

export default async function RecipeDetailPage({ params }: PageProps) {
	const { id } = await params
	const recipe = await getRecipeById(id)

	if (!recipe) {
		notFound()
	}

	const allRecipes = await getAllRecipes()

	// Исключаем текущий рецепт из списков рекомендаций
	const otherRecipes = allRecipes
		.filter(r => r.id !== recipe.id)
		.slice(0, 3)

	const recommendedRecipes = allRecipes
		.filter(r => r.id !== recipe.id)
		.slice(0, 4)

	return (
		<main className="flex-grow">
			<RecipeDetailClient
				recipe={recipe}
				otherRecipes={otherRecipes}
				recommendedRecipes={recommendedRecipes}
			/>
			<Subscribe />
		</main>
	)
}
