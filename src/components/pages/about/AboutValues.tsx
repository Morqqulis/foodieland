'use client'

import RevealOnScroll from '@/components/custom/RevealOnScroll'
import Title from '@/components/custom/Title'
import Text from '@/components/custom/Text'
import { BookOpen, Users, Sparkles } from 'lucide-react'

const VALUES = [
   {
      icon: BookOpen,
      title: 'Curated Recipes',
      description: 'Every single recipe on Foodieland is developed, tested, and refined by professional culinary experts. No guesswork, just perfect results.',
      bgColor: 'bg-custom-blue',
      iconColor: 'text-primary',
   },
   {
      icon: Users,
      title: 'Culinary Community',
      description: 'We believe food is a universal language. Our platform fosters a warm, supportive community where home cooks can share their culinary wins.',
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-500',
   },
   {
      icon: Sparkles,
      title: 'Inspiring Stories',
      description: 'We explore the deep-rooted stories, cultures, and traditions behind every ingredient and culinary style, making cooking an inspiring ritual.',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
   },
]

export default function AboutValues() {
   return (
      <section className="py-24">
         <div className="container">
            <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-16">
               <RevealOnScroll variant="fade-in-down" delay={100}>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3 block">
                     Our Values
                  </span>
               </RevealOnScroll>
               <RevealOnScroll variant="fade-in-up" delay={200}>
                  <Title
                     text="What drives us every single day"
                     className="mb-4"
                  />
               </RevealOnScroll>
               <RevealOnScroll variant="fade-in-up" delay={300}>
                  <Text
                     text="We operate on a set of core principles that put the home cook first. Here is what we prioritize in every single recipe, article, and video we make."
                  />
               </RevealOnScroll>
            </div>

            {/* Core Values Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {VALUES.map((value, index) => {
                  const Icon = value.icon
                  return (
                     <RevealOnScroll
                        key={value.title}
                        variant="scale-up"
                        delay={100 * (index + 1)}
                        duration={700}
                        className="h-full"
                     >
                        <div className="h-full flex flex-col p-8 md:p-10 rounded-[30px] border border-foreground/5 bg-white shadow-xs hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden">
                           {/* Hover background highlight */}
                           <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                           <div className={`w-14 h-14 rounded-2xl ${value.bgColor} flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                              <Icon className={`w-7 h-7 ${value.iconColor}`} />
                           </div>

                           <h3 className="text-xl font-bold text-black mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                              {value.title}
                           </h3>

                           <Text
                              text={value.description}
                              className="leading-relaxed text-sm md:text-base text-foreground/70"
                           />
                        </div>
                     </RevealOnScroll>
                  )
               })}
            </div>
         </div>
      </section>
   )
}
