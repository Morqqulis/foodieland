import RecipeItem from '@/components/custom/recipe-item/RecipeItem'
import Text from '@/components/custom/Text'
import Title from '@/components/custom/Title'
import { ADVANCED_ITEMS } from './const'

export default function Advanced( { page = 'home' }: { page?: 'contact' | 'home' } ) {
   const title = page === 'contact' ? 'Check out the delicious recipe' : 'Try this delicious recipe to make your day'

   return (
      <section className={`py-40`}>
         <div className='container'>
            <header className={`flex items-center gap-38 mb-10`}>
               <Title text={title} />
               <Text
                  text={
                     'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '
                  }
               />
            </header>

            <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center`}>

               {page === 'contact' && ADVANCED_ITEMS.slice( 0, 4 ).map( item => (
                  <RecipeItem key={item.id} recipe={item} type='advanced' />
               ) )}

               {page === 'home' && ADVANCED_ITEMS.map( item => (
                  <RecipeItem key={item.id} recipe={item} type='advanced' />
               ) )}

            </div>
         </div>
      </section>
   )
}
