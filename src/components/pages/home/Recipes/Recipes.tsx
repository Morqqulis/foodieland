import { RECIPES } from '@/components/custom/recipe-item/const'
import RecipeItem from '@/components/custom/recipe-item/RecipeItem'
import Text from '@/components/custom/Text'
import Title from '@/components/custom/Title'

export default function Recipes() {
	return (
		<section>
			<div className='container'>
				<header className={`text-center mb-24`}>
					<Title className={`mb-6`} text={'Simple and tasty recipes'} as={'h3'} />
					<Text
						text={
							'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim'
						}
					/>
				</header>

				<div className={`grid grid-cols-3 gap-10`}>
					{RECIPES.map(recipe => (
						<RecipeItem recipe={recipe} key={recipe.id} />
					))}
				</div>
			</div>
		</section>
	)
}
