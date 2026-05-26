import { IAdvanced } from '@/components/pages/home/Advanced/const'
import Image from 'next/image'
import Link from 'next/link'
import { RecipeBadge } from '../RecipeBadge'
import LikeBtn from './like-btn'
import { IRecipe } from './types'
import { cn } from '@/lib/utils'

export default function RecipeItem( { recipe, type, className, style }: { recipe: IRecipe | IAdvanced; type?: 'advanced' | 'default'; className?: string; style?: React.CSSProperties } ) {
   return (
      <Link
         href={`/recipes/${recipe.id}`}
         style={style}
         className={cn(
            `p-4 rounded-custom flex flex-col gap-6 h-[434px] transition-all duration-500 hover:shadow-xl hover:-translate-y-1.5 active:scale-98 bg-white border border-transparent hover:border-slate-100`,
            type === 'default' && 'bg-linear-to-b from-transparent to-custom-blue hover:to-cyan-50/50',
            className
         )}>
         <div className={`relative overflow-hidden rounded-custom`}>
            <Image
               className={`rounded-custom transition-transform duration-700 hover:scale-103`}
               src={recipe.image}
               alt={recipe.title}
               width={type === 'default' ? 368 : 290}
               height={type === 'default' ? 364 : 291}
            />
            <LikeBtn />
         </div>
         <h3 className={cn( `font-semibold tracking-[-0.04em] text-black transition-colors duration-300 hover:text-primary`, type === 'default' ? ' text-2xl' : 'text-lg' )}>
            {recipe.title}
         </h3>
         <div className={`flex items-center gap-6 pb-4 mt-auto`}>
            <RecipeBadge variant={'timer'} text={`${recipe.cookTime} Minutes`} />
            <RecipeBadge variant={'knife'} text={`${recipe.category}`} />
         </div>
      </Link>
   )
}
