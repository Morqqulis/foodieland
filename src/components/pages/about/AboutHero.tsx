'use client'

import Image from 'next/image'
import RevealOnScroll from '@/components/custom/RevealOnScroll'
import BigTitle from '@/components/custom/BigTitle'
import Text from '@/components/custom/Text'

export default function AboutHero() {
   return (
      <section className="pt-10 pb-20">
         <div className="container">
            <div className="flex flex-col items-center text-center max-w-[900px] mx-auto mb-16">
               <RevealOnScroll variant="fade-in-down" delay={100}>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-custom-blue text-primary font-semibold text-sm mb-6">
                     <span>✨</span> Who We Are
                  </div>
               </RevealOnScroll>

               <RevealOnScroll variant="fade-in-up" delay={200}>
                  <BigTitle
                     text="We are Foodieland — Passionate about food and storytelling"
                     className="mb-8"
                  />
               </RevealOnScroll>

               <RevealOnScroll variant="fade-in-up" delay={300}>
                  <Text
                     text="Founded by a group of culinary enthusiasts, Foodieland is a digital haven for home cooks, food lovers, and professional creators alike. We believe that cooking is not just a chore—it is an art, a form of expression, and the ultimate way to bring people together."
                     className="text-lg md:text-xl text-foreground/75 leading-relaxed"
                  />
               </RevealOnScroll>
            </div>

            {/* Premium Hero Image with Floating Badges */}
            <RevealOnScroll variant="zoom-in" delay={400} duration={1000}>
               <div className="relative w-full aspect-16/9 md:aspect-21/9 rounded-[40px] overflow-hidden shadow-2xl group">
                  <Image
                     src="/about/about-hero.png"
                     alt="Foodieland culinary art"
                     fill
                     priority
                     className="object-cover transition-transform duration-1000 group-hover:scale-105"
                     sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Badges */}
                  <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl flex items-center gap-4 animate-up-and-down">
                     <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                        🍳
                     </div>
                     <div>
                        <p className="text-xs text-foreground/60 font-medium">Established</p>
                        <p className="text-sm md:text-base font-bold text-black">October 2020</p>
                     </div>
                  </div>

                  <div className="absolute top-6 right-6 bg-primary/95 text-white backdrop-blur-md rounded-full px-5 py-2.5 shadow-xl font-semibold text-xs md:text-sm tracking-wide">
                     ⭐ 100% Chef Certified
                  </div>
               </div>
            </RevealOnScroll>
         </div>
      </section>
   )
}
