import { Btn } from '@/components/custom/Btn'
import Title from '@/components/custom/Title'

export default function Newsletter() {
	return (
		<section className='pb-20'>
			<div className='container'>
				<div className='bg-custom-blue rounded-custom p-16 md:p-24 text-center flex flex-col items-center relative overflow-hidden'>
					<Title text='Deliciousness to your inbox' className='mb-6' />
					<p className='text-foreground/60 max-w-xl mb-10'>
						Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor 
						incididunt ut labore et dolore magna aliqut enim ad minim.
					</p>
					
					<form className='flex flex-col sm:flex-row gap-4 w-full max-w-md bg-white p-2 rounded-2xl shadow-sm'>
						<input 
							type='email' 
							placeholder='Your email address...' 
							className='flex-1 px-6 py-4 rounded-xl focus:outline-none placeholder:text-foreground/40 text-black'
							required
						/>
						<Btn text='Subscribe' size='md' className='h-full' />
					</form>
				</div>
			</div>
		</section>
	)
}
