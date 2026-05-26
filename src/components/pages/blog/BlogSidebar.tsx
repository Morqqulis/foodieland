import Image from 'next/image'
import Link from 'next/link'
import { TASTY_RECIPES } from './const'

export default function BlogSidebar() {
   return (
      <aside className={`flex flex-col gap-10 w-full lg:w-[360px] flex-shrink-0`}>
         {/* Section: Tasty Recipes */}
         <div className={`flex flex-col gap-6`}>
            <h3 className={`font-semibold text-2xl tracking-[-0.04em] text-black`}>
               Tasty Recipes
            </h3>

            <div className={`flex flex-col gap-6`}>
               {TASTY_RECIPES.map( recipe => (
                  <Link href={`/recipes/${recipe.id}`} key={recipe.id} className={`flex items-center gap-6 group`}>
                     {/* Recipe Image */}
                     <div className={`w-[120px] h-[100px] relative overflow-hidden rounded-2xl flex-shrink-0`}>
                        <Image
                           className={`object-cover transition-transform duration-500 group-hover:scale-105`}
                           src={recipe.image}
                           alt={recipe.title}
                           fill
                           sizes="120px"
                        />
                     </div>

                     {/* Recipe details */}
                     <div className={`flex flex-col gap-1`}>
                        <h4 className={`font-semibold text-base leading-tight tracking-[-0.02em] text-black group-hover:text-black/80 transition-colors line-clamp-2`}>
                           {recipe.title}
                        </h4>
                        <span className={`text-xs font-semibold text-black/60`}>
                           By {recipe.author}
                        </span>
                     </div>
                  </Link>
               ) )}
            </div>
         </div>

         {/* Section: Promo / Ad Banner */}
         <div className={`relative w-full h-[430px] rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300`}>
            <Image
               className={`object-cover`}
               src={`/recipes/ad.png`}
               alt={`Don't forget to eat healthy food advertisement`}
               fill
               sizes="(max-width: 1024px) 100vw, 360px"
            />
            {/* Clickable link to website */}
            <Link href={`/`} className={`absolute inset-0`} aria-label="Visit Foodieland home" />
         </div>
      </aside>
   )
}
