import BigTitle from '@/components/custom/BigTitle'
import Text from '@/components/custom/Text'
import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'

export default function CategoriesHero() {
	return (
		<section className='pt-10 pb-20'>
			<div className='container'>
				<div className='bg-custom-blue rounded-custom flex flex-col items-center text-center p-10 md:p-20 relative overflow-hidden'>
					{/* Decorative elements */}
					<div className='absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -mr-32 -mt-32' />
					<div className='absolute bottom-0 left-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -ml-32 -mb-32' />
					
					<div className='relative z-10 max-w-3xl'>
						<div className='inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-8 shadow-sm'>
							<span className='w-2 h-2 rounded-full bg-primary animate-pulse' />
							<span className='text-xs font-bold uppercase tracking-wider text-foreground/70'>Fresh & Seasonal</span>
						</div>
						
						<BigTitle text='Taste the World by Category' className='mb-8' />
						
						<Text 
							text='From morning breakfast to late-night desserts, we have curated the best recipes organized by what you love most. Explore our collection and find your next favorite dish.' 
							className='mb-12 text-lg'
						/>
						
						<div className='relative w-full max-w-xl mx-auto'>
							<SearchIcon className='absolute left-5 top-1/2 -translate-y-1/2 text-foreground/40' size={20} />
							<Input 
								placeholder='Search categories (e.g. Vegan, Meat, Dessert...)' 
								className='h-16 pl-14 pr-10 rounded-2xl bg-white border-none shadow-lg text-lg focus-visible:ring-primary/20'
							/>
						</div>
					</div>
					
					{/* Floating icons mock */}
					<div className='absolute left-10 top-1/2 -translate-y-1/2 hidden xl:block animate-bounce duration-[3000ms]'>
						<div className='p-4 bg-white rounded-2xl shadow-xl'>
							<Image src='/categories/breakfast.png' alt='icon' width={60} height={60} />
						</div>
					</div>
					<div className='absolute right-10 top-1/3 hidden xl:block animate-bounce duration-[4000ms]'>
						<div className='p-4 bg-white rounded-2xl shadow-xl'>
							<Image src='/categories/meat.png' alt='icon' width={60} height={60} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
