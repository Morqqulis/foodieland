'use client'
import AvatarItem from '@/components/custom/AvatarItem'
import BigTitle from '@/components/custom/BigTitle'
import Text from '@/components/custom/Text'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import Image from 'next/image'
import HeroVideo from './HeroVideo'

export default function HeroSlider() {
   return (
      <Carousel>
         <CarouselContent>
            {[ 1, 2, 3, 4, 5 ].map( item => (
               <CarouselItem key={item}>
                  <div className={`flex rounded-2xl text-black relative`}>
                     {/* Левая часть */}
                     <div className={`p-12.5 bg-custom-blue basis-155 rounded-l-custom`}>
                        <div className={`px-5 h-11.25 inline-flex items-center gap-3.25 rounded-full bg-white mb-8`}>
                           <Image src={'/hero/recipe.jpg'} alt={'Recipe'} width={24} height={24} />
                           <span className={`text-sm font-semibold  tracking-[-0.02em]`}>Hot Recipes</span>
                        </div>

                        <BigTitle className={`mb-6`} text={'Spicy delicious chicken wings'} />

                        <Text className={`mb-7.5`} text={`Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim`} />

                        <div className={`flex items-center gap-4 mb-25`}>
                           <div className={`inline-flex items-center gap-2.5 bg-black/5 rounded-full h-10 px-4`}>
                              <Image src={'/hero/timer.svg'} alt={'timer'} width={24} height={24} />
                              <span>30 Minutes</span>
                           </div>
                           <div className={`inline-flex items-center gap-2.5 bg-black/5 rounded-full h-10 px-4`}>
                              <Image src={'/hero/knife.svg'} alt={'knife'} width={24} height={24} />
                              <span>Chicken</span>
                           </div>
                        </div>



                        <div className={`w-full flex items-center justify-between gap-2`}>
                           <AvatarItem name={'John Smith'} date={`15 March 2022`} image={'/hero/avatar.jpg'} />
                           <HeroVideo />
                        </div>
                     </div>

                     <div className={`basis-165`}>
                        <Image className={`h-full`} src={`/hero/hero-image.jpg`} alt={'Hero Image'} width={660} height={640} />
                     </div>

                     <Image className={`absolute left-1/2 -translate-x-1/2 top-12.5`} src={'/hero/hero-logo.png'} alt={'Badge'} width={150} height={150} />

                  </div>
               </CarouselItem>
            ) )}
         </CarouselContent>
      </Carousel>
   )
}