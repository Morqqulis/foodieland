import Title from '@/components/custom/Title'
import { CATEGORIES } from '@/components/pages/home/Categories/const'
import CategoryItem from '@/components/pages/home/Categories/CategoryItem'

export default function CategoriesList() {
	return (
		<section className='py-20'>
			<div className='container'>
				<header className='mb-16 text-center'>
					<Title text='All Categories' className='mb-4' />
					<p className='text-foreground/60 max-w-2xl mx-auto'>
						Explore our diverse range of culinary categories. From healthy vegan options to 
						hearty meat dishes, find the perfect inspiration for your next meal.
					</p>
				</header>

				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-20 pt-10'>
					{CATEGORIES.map(cat => (
						<CategoryItem key={cat.id} category={cat} />
					))}
				</div>
			</div>
		</section>
	)
}
