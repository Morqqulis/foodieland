import Text from '@/components/custom/Text'
import Title from '@/components/custom/Title'
import { ADVANCED_ITEMS } from './const'
import RecipeItem from '@/components/custom/recipe-item/RecipeItem'

export default function Advanced() {
	return (
		<section className={`py-40`}>
			<div className='container'>
				<header className={`flex items-center gap-38 mb-10`}>
					<Title text={'Try this delicious recipe to make your day'} />
					<Text
						text={
							'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '
						}
					/>
				</header>

				<div className={`grid grid-cols-4 gap-10 justify-center`}>
					{ADVANCED_ITEMS.map(item => (
						<RecipeItem key={item.id} recipe={item} type='advanced' />
					))}
				</div>
			</div>
		</section>
	)
}
