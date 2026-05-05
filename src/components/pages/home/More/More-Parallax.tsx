'use client'
import { MouseParallaxChild } from "react-parallax-mouse"


import Image from 'next/image'
import { cn } from '@/lib/utils'

const ITEMS = [
   {
      src: '/more/1.png',
      width: 50,
      height: 50,
      factorX: .8,
      factorY: 0.7,
      className: 'left-[34px] bottom-[124px]',
   },
   {
      src: '/more/2.png',
      width: 80,
      height: 80,
      factorX: 0.8,
      factorY: 2,
      className: 'top-[70px] left-[102px]',
   },
   {
      src: '/more/3.png',
      width: 50,
      height: 50,
      factorX: 0.2,
      factorY: 3,
      className: 'top-[97px] right-[130px]',
   },
   {
      src: '/more/4.png',
      width: 80,
      height: 80,
      factorX: 0.8,
      factorY: -4.2,
      className: 'top-[167px] -right-[14px]',
   },
] as const


export function MoreParallax() {
   return (
      <div className={`relative`}>
         <Image className={`relative z-1`} src={'/more/chef.png'} alt={'More Parallax'} width={660} height={597} />
         <div className={`absolute bottom-0 -right-12.5 min-w-162.5 min-h-125 bg-linear-to-b from-transparent to-custom-blue rounded-30 -z-2`}></div>
         <div className={`absolute inset-0`}>
            {ITEMS.map( ( item ) => (
               <MouseParallaxChild className={cn( `absolute -z-1`, item.className )} key={item.src} factorX={item.factorX} factorY={item.factorY}>
                  <Image
                     className={`animate-up-and-down`}
                     src={item.src}
                     alt={'More Parallax'}
                     width={item.width}
                     height={item.height}
                  />

               </MouseParallaxChild>
            ) )}
         </div>
      </div>
   )
}