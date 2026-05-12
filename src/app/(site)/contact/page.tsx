import BigTitle from '@/components/custom/BigTitle'
import Subscribe from '@/components/global/Subscribe/Subscribe'
import Advanced from '@/components/pages/home/Advanced/Advanced'
import ContactSection from '@/components/pages/contact/ContactSection'

export default function ContactPage() {
   return (
      <main className="pt-20">
         <BigTitle text={'Contact us'} className="text-center mb-16" />

         <ContactSection />

         <Subscribe />
         <Advanced page={'contact'} />
      </main>
   )
}