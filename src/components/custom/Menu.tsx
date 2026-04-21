import { cn } from '@/lib/utils'
import Link from 'next/link'


interface MenuItemProps {
   href: string,
   label: string
}

const items: MenuItemProps[] = [
   {
      href: '/',
      label: 'Home'
   },
   {
      href: '/recipes',
      label: 'Recipes'
   },
   {
      href: '/blog',
      label: 'Blog'
   },
   {
      href: '/contact',
      label: 'Contact'
   },
   {
      href: '/about',
      label: 'About us'
   },
]

interface MenuProps {
   hideHome?: boolean
}

export default function Menu( { hideHome = false }: MenuProps ) {
   return (
      <ul className={`flex items-center gap-10 lg:gap-15`}>
         {items.map( item => (
            <li key={item.label}>
               <Link className={cn(
                  `tracking-[-0.02em] font-medium hover:underline`,
                  item.href === '/' && hideHome && 'hidden'
               )} href={item.href}>

                  {item.label}
               </Link>
            </li>
         ) )}
      </ul>
   )
}