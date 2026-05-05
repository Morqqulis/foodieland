import Title from '@/components/custom/Title'
import { Btn } from '@/components/custom/Btn'
import Image from 'next/image'

export default function InstagramFeed() {
   const posts = [
      '/recipes/item-1.jpg',
      '/recipes/item-2.jpg',
      '/recipes/item-3.jpg',
      '/recipes/item-4.jpg'
   ]

   return (
      <section className='py-20'>
         <div className='container'>
            <header className='text-center mb-16'>
               <Title text='Check out @foodieland on Instagram' className='mb-6' />
               <p className='text-foreground/60 max-w-2xl mx-auto'>
                  Join our community for daily inspiration, tips from world-class chefs, and
                  behind-the-scenes content that you won&apos;t find anywhere else.
               </p>
            </header>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-12'>
               {posts.map( ( post, idx ) => (
                  <div key={idx} className='aspect-square rounded-2xl overflow-hidden relative group cursor-pointer'>
                     <Image
                        src={post}
                        alt='Instagram post'
                        fill
                        className='object-cover transition-transform duration-700 group-hover:scale-110'
                     />
                     <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center'>
                        <Image src='/socials/insta.svg' alt='Instagram' width={32} height={32} className='brightness-0 invert' />
                     </div>
                  </div>
               ) )}
            </div>

            <div className='flex justify-center'>
               <Btn
                  text='Visit Our Instagram'
                  icon={<Image src='/socials/insta.svg' alt='Instagram' width={18} height={18} className='brightness-0 invert' />}
                  color='default'
                  size='md'
               />
            </div>
         </div>
      </section>
   )
}
