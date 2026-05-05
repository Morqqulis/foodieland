import CategoriesHero from '@/components/pages/categories/CategoriesHero'
import CategoriesList from '@/components/pages/categories/CategoriesList'
import FeaturedRecipes from '@/components/pages/categories/FeaturedRecipes'
import InstagramFeed from '@/components/pages/categories/InstagramFeed'
import Newsletter from '@/components/pages/categories/Newsletter'

export default function CategoriesPage() {
	return (
		<main className='flex flex-col gap-10'>
			<CategoriesHero />
			<CategoriesList />
			<FeaturedRecipes />
			<InstagramFeed />
			<Newsletter />
		</main>
	)
}