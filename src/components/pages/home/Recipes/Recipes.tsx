import { Banner } from '@/components/custom/Banner'
import { RECIPES } from '@/components/custom/recipe-item/const'
import RecipeItem from '@/components/custom/recipe-item/RecipeItem'
import Text from '@/components/custom/Text'
import Title from '@/components/custom/Title'
import { Fragment } from 'react/jsx-runtime'

const recipeBanner = {
   id: 1,
   title: 'Don’t forget to eat healthy food',
   image: '/recipes/ad.png',
   width: 354,
   height: 336,
   href: 'https://www.foodieland.com',
}

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
               {RECIPES.map( ( recipe, i ) => (
                  <Fragment key={recipe.id}>
                     <RecipeItem recipe={recipe} type={'default'} />
                     {i === 4 && <Banner banner={recipeBanner} />}
                  </Fragment>
               ) )}
            </div>
         </div>
      </section>
   )
}
