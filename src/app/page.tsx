import Categories from '@/components/pages/home/Categories/Categories'
import { Hero } from '@/components/pages/home/Hero/Hero'
import Recipes from '@/components/pages/home/Recipes/Recipes'

export default function Home() {
	return (
		<main>
			<Hero />
			<Categories />
			<Recipes />
		</main>
	)
}
