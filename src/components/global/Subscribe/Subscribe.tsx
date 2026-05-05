import Text from '@/components/custom/Text'
import Title from '@/components/custom/Title'
import SubscribeForm from './SubscribeForm'

export default function Subscribe() {
   return (
      <section className={`pb-[160px]`}>
         <div className="container py-20 bg-[url('/subscribe/bg.jpg')] bg-cover bg-center bg-no-repeat rounded-[60px]">
            <header className={`flex flex-col items-center text-center mx-auto max-w-[600px] gap-6 mb-16 `}>
               <Title text={'Deliciousness to your inbox'} />
               <Text text={'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '} />
            </header>

            <SubscribeForm />
         </div>
      </section>
   )
}