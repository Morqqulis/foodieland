import type { Metadata } from 'next'
import {
   Breadcrumb,
   BreadcrumbList,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbPage,
   BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import AboutHero from '@/components/pages/about/AboutHero'
import AboutStory from '@/components/pages/about/AboutStory'
import AboutValues from '@/components/pages/about/AboutValues'
import AboutTeam from '@/components/pages/about/AboutTeam'
import Subscribe from '@/components/global/Subscribe/Subscribe'
import Advanced from '@/components/pages/home/Advanced/Advanced'
import RevealOnScroll from '@/components/custom/RevealOnScroll'

export const metadata: Metadata = {
   title: 'About Us | Foodieland — Passionate Food Storytellers',
   description: 'Learn about Foodieland, our professional culinary team, our state-of-the-art kitchen studio, and our core values of bringing joy through cooking.',
   openGraph: {
      title: 'About Us | Foodieland — Passionate Food Storytellers',
      description: 'Learn about Foodieland, our professional culinary team, and our core values of bringing joy through cooking.',
      images: [{ url: '/about/about-hero.png' }],
   },
}

export default function AboutPage() {
   return (
      <main className="flex-grow pt-8">
         {/* Breadcrumbs Navigation */}
         <div className="container mb-8">
            <RevealOnScroll variant="fade-in" delay={50}>
               <Breadcrumb>
                  <BreadcrumbList>
                     <BreadcrumbItem>
                        <BreadcrumbLink href="/" className="font-medium">
                           Home
                        </BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbSeparator />
                     <BreadcrumbItem>
                        <BreadcrumbPage className="font-semibold text-black">
                           About us
                        </BreadcrumbPage>
                     </BreadcrumbItem>
                  </BreadcrumbList>
               </Breadcrumb>
            </RevealOnScroll>
         </div>

         {/* Sections Showcase */}
         <AboutHero />
         <AboutStory />
         <AboutValues />
         <AboutTeam />

         {/* Call to Actions & Recommendations */}
         <RevealOnScroll variant="scale-up" delay={200}>
            <Subscribe />
         </RevealOnScroll>
         
         <RevealOnScroll variant="fade-in-up" delay={200}>
            <Advanced page="contact" />
         </RevealOnScroll>
      </main>
   )
}
