import Subscribe from '@/components/global/Subscribe/Subscribe'
import Advanced from '@/components/pages/home/Advanced/Advanced'
import Categories from '@/components/pages/home/Categories/Categories'
import { Hero } from '@/components/pages/home/Hero/Hero'
import Insta from '@/components/pages/home/Insta/insta'
import More from '@/components/pages/home/More/More'
import Recipes from '@/components/pages/home/Recipes/Recipes'

export default function Home() {
   return (
      <main>
         <Hero />
         <Categories />
         <Recipes />
         <More />
         <Insta />
         <Advanced />
         <Subscribe />
      </main>
   )
}
