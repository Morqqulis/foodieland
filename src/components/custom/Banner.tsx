import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

interface IRecipeBanner {
   id: number
   title: string
   image: string
   width: number
   height: number
   href: string
}

export function Banner( { banner }: { banner: IRecipeBanner } ) {
   return (
      <div className={`relative text-center flex flex-col h-[434px] bg-linear-to-b from-[#357355] to-[#1D483B] text-white w-full overflow-hidden transition-all duration-500 hover:animate-shake cursor-pointer before:bg-[url('/recipes/star.svg')] before:bg-cover before:bg-center before:absolute before:inset-0`}>
         <h3 className={cn( `text-2xl max-w-42.5 mx-auto translate-y-10` )}>{banner.title}</h3>

         <div className={`mx-auto translate-y-10`}>
            <Image className={`relative z-20`} src={banner.image} alt={banner.title} width={banner.width} height={banner.height} /></div>



         <Link href={banner.href} className={`mt-auto block relative text-white/60 hover:text-[#FF6363] -translate-y-8`}>{banner.href}</Link>
      </div>
   )
}