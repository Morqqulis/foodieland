'use client'

import Image from 'next/image'
import RevealOnScroll from '@/components/custom/RevealOnScroll'
import Title from '@/components/custom/Title'
import Text from '@/components/custom/Text'
import { Globe } from 'lucide-react'

const TEAM = [
   {
      name: 'Marcus Vance',
      role: 'Founder & Head Chef',
      image: '/more/chef.png',
      socials: { instagram: '#', twitter: '#', website: '#' },
      imageClass: 'object-top object-contain bg-custom-blue',
   },
   {
      name: 'Sarah Jenkins',
      role: 'Senior Pastry Chef',
      image: '/contact-hero/contact-image.jpg',
      socials: { instagram: '#', twitter: '#', website: '#' },
      imageClass: 'object-cover',
   },
   {
      name: 'John Smith',
      role: 'Lead Food Editor',
      image: '/hero/avatar.jpg',
      socials: { instagram: '#', twitter: '#', website: '#' },
      imageClass: 'object-cover bg-custom-blue',
   },
   {
      name: 'Elena Rostova',
      role: 'Asian Fusion Expert',
      image: '/hero/avatar.jpg',
      socials: { instagram: '#', twitter: '#', website: '#' },
      imageClass: 'object-cover bg-orange-50/50',
   },
]

export default function AboutTeam() {
   return (
      <section className="py-24 bg-secondary/20">
         <div className="container">
            <div className="flex flex-col items-center text-center max-w-[700px] mx-auto mb-16">
               <RevealOnScroll variant="fade-in-down" delay={100}>
                  <span className="text-xs uppercase font-extrabold tracking-widest text-primary mb-3 block">
                     Culinary Creators
                  </span>
               </RevealOnScroll>
               <RevealOnScroll variant="fade-in-up" delay={200}>
                  <Title
                     text="Meet the masters behind our tastes"
                     className="mb-4"
                  />
               </RevealOnScroll>
               <RevealOnScroll variant="fade-in-up" delay={300}>
                  <Text
                     text="A highly passionate group of professional chefs, pastry designers, food editors, and photographers working together to create inspiring culinary stories."
                  />
               </RevealOnScroll>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {TEAM.map((member, index) => (
                  <RevealOnScroll
                     key={member.name}
                     variant="fade-in-up"
                     delay={150 * (index + 1)}
                     duration={700}
                  >
                     <div className="group flex flex-col items-center text-center bg-white p-6 rounded-[35px] border border-foreground/5 shadow-xs hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5">
                        
                        {/* Member Photo Frame */}
                        <div className="relative w-full aspect-square rounded-[28px] overflow-hidden mb-6 bg-slate-50 border border-foreground/5 shadow-inner">
                           <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className={`transition-transform duration-700 group-hover:scale-105 ${member.imageClass}`}
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                           />
                        </div>

                        {/* Name and Role */}
                        <h4 className="text-lg font-bold text-black tracking-tight mb-1 group-hover:text-primary transition-colors duration-300">
                           {member.name}
                        </h4>
                        <p className="text-xs font-semibold text-primary mb-4 bg-primary/5 px-3 py-1 rounded-full">
                           {member.role}
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-3.5 mt-2">
                           <a
                              href={member.socials.instagram}
                              className="w-9 h-9 rounded-full bg-slate-50 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group/social"
                              aria-label="Instagram"
                           >
                              <Image
                                 src="/socials/insta.svg"
                                 alt="Instagram"
                                 width={16}
                                 height={16}
                                 className="transition-all duration-300 group-hover/social:brightness-0 group-hover/social:invert"
                              />
                           </a>
                           <a
                              href={member.socials.twitter}
                              className="w-9 h-9 rounded-full bg-slate-50 hover:bg-primary flex items-center justify-center transition-all duration-300 hover:scale-110 group/social"
                              aria-label="Twitter"
                           >
                              <Image
                                 src="/socials/twitter.svg"
                                 alt="Twitter"
                                 width={16}
                                 height={14}
                                 className="transition-all duration-300 group-hover/social:brightness-0 group-hover/social:invert"
                              />
                           </a>
                           <a
                              href={member.socials.website}
                              className="w-9 h-9 rounded-full bg-slate-50 hover:bg-primary hover:text-white flex items-center justify-center text-foreground/60 transition-all duration-300 hover:scale-110"
                              aria-label="Website"
                           >
                              <Globe className="w-4 h-4" />
                           </a>
                        </div>

                     </div>
                  </RevealOnScroll>
               ))}
            </div>
         </div>
      </section>
   )
}
