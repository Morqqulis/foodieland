import { Btn } from '@/components/custom/Btn'
import Text from '@/components/custom/Text'
import Title from '@/components/custom/Title'
import Image from 'next/image'

export default function Insta() {
	return (
		<section className={`py-20 bg-linear-to-b from-transparent to-custom-blue`}>
			<div className='container'>
				<header className={`text-center flex flex-col gap-6 items-center mb-20`}>
					<Title text={'Check out @foodieland on Instagram'} />
					<Text
						text={
							'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim '
						}
					/>
				</header>

				<div className={`flex gap-10 justify-center mb-20`}>
					{[1, 2, 3, 4].map(item => (
						<div key={item}>
							<Image src={`/insta/post-${item}.jpg`} alt={'insta'} width={290} height={445} />
						</div>
					))}
				</div>

				<Btn className={`max-w-57.5 px-8 w-full mx-auto`} text={'Visit Our Instagram'} icon={'/insta/icon.svg'} />
			</div>
		</section>
	)
}
