import { Btn } from '@/components/custom/Btn'
import Text from '@/components/custom/Text'
import Title from '@/components/custom/Title'

import MoreParallaxWrapper from './MoreParallaxWrapper'
import { MoreParallax } from './More-Parallax'

export default function More() {
   return (
      <section className={`py-40`}>
         <MoreParallaxWrapper>
            <div className="container flex items-center gap-11">

               {/* Левая часть */}
               <div className={`max-w-132`}>
                  <Title className={`mb-6`} text={'Everyone can be a chef in their own kitchen'} />

                  <Text className={`mb-18`} text={`Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim `} />

                  <Btn href={'#'} text={'Learn More'} />
               </div>



               {/* Правая часть */}
               <MoreParallax />

            </div>
         </MoreParallaxWrapper>
      </section>

   )
}