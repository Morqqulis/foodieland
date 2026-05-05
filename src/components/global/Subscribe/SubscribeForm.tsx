'use client'

import { Btn } from '@/components/custom/Btn'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object( {
   email: z.email( 'Please enter a valid email' ).min( 3, 'Email is too short, minumin 3 symbols required' )
} )


type schemaType = z.infer<typeof schema>

export default function SubscribeForm() {
   const form = useForm<schemaType>( {
      resolver: zodResolver( schema ),
      defaultValues: {
         email: '',
      }
   } )

   function onSubmit( data: schemaType ) {
      console.log( data )
   }


   return (
      <form className={`relative max-w-[480px] mx-auto`} onSubmit={form.handleSubmit( onSubmit )}>
         <label className={`w-full`}>
            <input {...form.register( 'email' )} className={`w-full h-20 rounded-[24px] pl-8 pr-[180px] placeholder:font-medium placeholder:text-sm placeholder:text-black/40 bg-white`} type="email" placeholder={'Your email address...'} />
            {form.formState.errors.email?.message && <p className={`text-red-500 text-xs ml-2 mt-2`}>{form.formState.errors.email.message}</p>}
         </label>
         <Btn className={`absolute w-[160px] h-[60px] right-2.5 top-1/2 -translate-y-1/2`} type={'submit'} text={'Subscribe'} />
      </form>
   )
}