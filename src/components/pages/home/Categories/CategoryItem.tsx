import Image from 'next/image'
import Link from 'next/link'
import { ICategory } from './const'
import { cn } from '@/lib/utils'

export default function CategoryItem( { category }: { category: ICategory } ) {
   return (
      <Link href={`/categories/${category.name}`} className={cn( `min-h-50 w-full overflow-hidden rounded-[30px] group/category-item duration-500 transition-all hover:scale-105 relative` )}>
         <div className={`flex flex-col items-center justify-center gap-4 h-38 absolute bottom-0 left-0 w-full pb-7.5`}>
            <Image className={`absolute -top-12.5 left-1/2 -translate-x-1/2`} src={category.image} alt={category.name} width={100} height={100} />
            <span className={`text-lg font-semibold tracking-[-0.02em] mt-auto capitalize`}>{category.name}</span>

            <div className={cn( `absolute inset-0 transition-all duration-500 shadow-lg shadow-black/30 group-hover/category-item:shadow-md opacity-10 group-hover/category-item:opacity-50` )} style={{
               backgroundImage: `linear-gradient(to bottom, transparent, ${category.gradient})`
            }} />
         </div>
      </Link>
   )
}