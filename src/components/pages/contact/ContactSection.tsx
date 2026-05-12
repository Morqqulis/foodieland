'use client'
import Image from 'next/image'
import ContactForm from './ContactForm'

export default function ContactSection() {
   return (
      <section className="py-20">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
               {/* Left side: Chef Image */}
               <div className="relative w-full lg:w-1/3 aspect-4/5 rounded-[40px] overflow-hidden bg-[#E7FAFE]">
                  <Image
                     src="/contact-hero/contact-image.jpg"
                     alt="Our Chef"
                     fill
                     className="object-cover object-center"
                     priority
                     sizes="(max-width: 768px) 100vw, 33vw"
                  />
               </div>

               {/* Right side: Contact Form */}
               <div className="w-full lg:w-2/3">
                  <ContactForm />
               </div>
            </div>
         </div>
      </section>
   )
}
