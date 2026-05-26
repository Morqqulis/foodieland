'use client'

import Image from 'next/image'
import RevealOnScroll from '@/components/custom/RevealOnScroll'
import Title from '@/components/custom/Title'
import Text from '@/components/custom/Text'

export default function AboutStory() {
   return (
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10"></div>
         <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-custom-blue rounded-full blur-3xl -z-10"></div>

         <div className="container">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
               
               {/* Left Column: Image with unique styling */}
               <div className="w-full lg:w-1/2">
                  <RevealOnScroll variant="fade-in-left" delay={200}>
                     <div className="relative aspect-4/3 rounded-[40px] overflow-hidden shadow-2xl group border-8 border-white bg-white">
                        <Image
                           src="/about/about-studio.png"
                           alt="Foodieland Kitchen Studio"
                           fill
                           className="object-cover transition-transform duration-700 group-hover:scale-103"
                           sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                     </div>
                  </RevealOnScroll>
               </div>

               {/* Right Column: Story description */}
               <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <RevealOnScroll variant="fade-in-right" delay={300}>
                     <span className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3 block">
                        Our Story
                     </span>
                     <Title
                        text="Creating beautiful stories behind every single plate"
                        className="mb-6 text-3xl md:text-4xl"
                     />
                     <Text
                        text="Our journey began in a tiny home kitchen with a simple camera and a burning desire to capture the magic of home-cooked meals. Over the years, we have grown into a modern, state-of-the-art culinary kitchen studio where we test, shoot, and refine hundreds of recipes every month."
                        className="mb-6 leading-relaxed"
                     />
                     <Text
                        text="We meticulously test every recipe multiple times to ensure that when you recreate it at home, the flavors are perfectly balanced and the steps are clear. Our space represents our philosophy: bright, cozy, filled with fresh herbs, premium ingredients, and boundless creativity."
                        className="mb-8 leading-relaxed"
                     />

                     {/* Stats Showcase */}
                     <div className="grid grid-cols-3 gap-6 pt-6 border-t border-foreground/10">
                        <div className="text-center lg:text-left">
                           <p className="text-3xl lg:text-4xl font-bold text-black tracking-tight">500+</p>
                           <p className="text-xs text-foreground/50 font-medium mt-1">Tested Recipes</p>
                        </div>
                        <div className="text-center lg:text-left">
                           <p className="text-3xl lg:text-4xl font-bold text-black tracking-tight">1.2M</p>
                           <p className="text-xs text-foreground/50 font-medium mt-1">Monthly Readers</p>
                        </div>
                        <div className="text-center lg:text-left">
                           <p className="text-3xl lg:text-4xl font-bold text-black tracking-tight">15+</p>
                           <p className="text-xs text-foreground/50 font-medium mt-1">Expert Chefs</p>
                        </div>
                     </div>
                  </RevealOnScroll>
               </div>

            </div>
         </div>
      </section>
   )
}
