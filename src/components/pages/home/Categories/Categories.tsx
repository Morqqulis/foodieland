import Title from '@/components/custom/Title'
import Link from 'next/link'
import { CATEGORIES } from './const'
import CategoryItem from './CategoryItem'

export default function Categories() {
   return (
      <section className={`py-40`}>
         <div className="container">
            <header className={`flex justify-between gap-4 items-center mb-20`}>
               <Title text={'Categories'} />
               <Link className={`bg-custom-blue rounded-[16px] py-5 px-7 font-semibold hover:bg-cyan-200 hover:scale-105 transition-all duration-500`} href={'/categories'}>View All Categories</Link>
            </header>

            <div className={`flex justify-between gap-10`}>
               {CATEGORIES.map( cat => <CategoryItem key={cat.id} category={cat} /> )}
            </div>

         </div>
      </section>
   )
}