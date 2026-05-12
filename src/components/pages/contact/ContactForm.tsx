'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

const contactSchema = z.object( {
   name: z.string().min( 1, 'Name is required' ),
   email: z.string().email( 'Invalid email address' ),
   subject: z.string().min( 1, 'Subject is required' ),
   enquiryType: z.string().min( 1, 'Enquiry type is required' ),
   message: z.string().min( 1, 'Message is required' ),
} )

type ContactFormValues = z.infer<typeof contactSchema>

export default function ContactForm() {
   const {
      register,
      handleSubmit,
      setValue,
      formState: { errors },
   } = useForm<ContactFormValues>( {
      resolver: zodResolver( contactSchema ),
      defaultValues: {
         enquiryType: 'Advertising',
      },
   } )

   const onSubmit = ( data: ContactFormValues ) => {
      console.log( 'Form Submitted:', data )
   }

   return (
      <form onSubmit={handleSubmit( onSubmit )} className="space-y-8 max-w-[800px] w-full">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
               <Label htmlFor="name" className="text-[12px] font-bold text-black/60 uppercase tracking-widest">
                  Name
               </Label>
               <Input
                  id="name"
                  placeholder="Enter your name..."
                  className="h-[60px] rounded-[16px] border-black/10 px-6 text-base"
                  {...register( 'name' )}
               />
               {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="space-y-3">
               <Label htmlFor="email" className="text-[12px] font-bold text-black/60 uppercase tracking-widest">
                  Email Address
               </Label>
               <Input
                  id="email"
                  placeholder="Your email address..."
                  className="h-[60px] rounded-[16px] border-black/10 px-6 text-base"
                  {...register( 'email' )}
               />
               {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
               <Label htmlFor="subject" className="text-[12px] font-bold text-black/60 uppercase tracking-widest">
                  Subject
               </Label>
               <Input
                  id="subject"
                  placeholder="Enter subject..."
                  className="h-[60px] rounded-[16px] border-black/10 px-6 text-base"
                  {...register( 'subject' )}
               />
               {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
            </div>

            <div className="space-y-3">
               <Label htmlFor="enquiryType" className="text-[12px] font-bold text-black/60 uppercase tracking-widest">
                  Enquiry Type
               </Label>
               <Select
                  onValueChange={( value ) => setValue( 'enquiryType', value )}
                  defaultValue="Advertising"
               >
                  <SelectTrigger
                     className="h-[60px] w-full rounded-[16px] border-black/10 px-6 text-base text-black/60"
                     icon={
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     }
                  >
                     <SelectValue placeholder="Advertising" />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value="Advertising">Advertising</SelectItem>
                     <SelectItem value="Support">Support</SelectItem>
                     <SelectItem value="Feedback">Feedback</SelectItem>
                     <SelectItem value="General">General</SelectItem>
                  </SelectContent>
               </Select>
               {errors.enquiryType && (
                  <p className="text-red-500 text-sm">{errors.enquiryType.message}</p>
               )}
            </div>
         </div>

         <div className="space-y-3">
            <Label htmlFor="message" className="text-[12px] font-bold text-black/60 uppercase tracking-widest">
               Messages
            </Label>
            <Textarea
               id="message"
               placeholder="Enter your messages..."
               className="min-h-[200px] rounded-[16px] border-black/10 p-6 text-base resize-none"
               {...register( 'message' )}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
         </div>

         <Button
            type="submit"
            className="w-[180px] h-[72px] bg-black text-white rounded-[16px] text-lg font-semibold hover:bg-black/80 transition-all mt-4"
         >
            Submit
         </Button>
      </form>
   )
}
