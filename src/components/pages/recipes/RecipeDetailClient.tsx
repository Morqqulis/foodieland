'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Printer, Share2, Play, Check, ChevronRight } from 'lucide-react'
import { toast } from 'sonner'
import { IRecipeDetail } from '@/services/recipesService'
import RecipeItem from '@/components/custom/recipe-item/RecipeItem'

interface RecipeDetailClientProps {
	recipe: IRecipeDetail
	otherRecipes: IRecipeDetail[]
	recommendedRecipes: IRecipeDetail[]
}

export default function RecipeDetailClient({
	recipe,
	otherRecipes,
	recommendedRecipes,
}: RecipeDetailClientProps) {
	// Состояние для интерактивных чекбоксов ингредиентов
	const [checkedIngredients, setCheckedIngredients] = useState<Record<string, boolean>>({})

	// Состояние для шеринга в соцсетях
	const [isShareOpen, setIsShareOpen] = useState(false)
	const shareRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (shareRef.current && !shareRef.current.contains(event.target as Node)) {
				setIsShareOpen(false)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
	const shareTitle = `Попробуйте этот вкусный рецепт: ${recipe.title} | Foodieland`

	// Состояние для видеоплеера
	const [isPlayingVideo, setIsPlayingVideo] = useState(false)

	const toggleIngredient = (name: string) => {
		setCheckedIngredients(prev => ({
			...prev,
			[name]: !prev[name],
		}))
	}

	const handlePrint = () => {
		if (typeof window !== 'undefined') {
			window.print()
		}
	}

	const handleShare = () => {
		if (typeof window !== 'undefined') {
			navigator.clipboard.writeText(window.location.href)
			toast.success('Ссылка на рецепт скопирована в буфер обмена!')
		}
	}

	// Группировка ингредиентов по groupTitle
	const groupedIngredients: Record<string, typeof recipe.ingredients> = {}
	recipe.ingredients.forEach(ing => {
		const title = ing.groupTitle || 'Ingredients'
		if (!groupedIngredients[title]) {
			groupedIngredients[title] = []
		}
		groupedIngredients[title].push(ing)
	})

	return (
		<div className="container py-12 animate-fade-in font-sans print:p-0">
			{/* Хлебные крошки (для печати скрываем) */}
			<div className="flex items-center gap-2 text-sm text-black/60 mb-8 print:hidden">
				<Link href="/" className="hover:text-black transition-colors">
					Home
				</Link>
				<ChevronRight className="w-4 h-4" />
				<Link href="/recipes" className="hover:text-black transition-colors">
					Recipes
				</Link>
				<ChevronRight className="w-4 h-4" />
				<span className="text-black font-semibold truncate max-w-[200px] md:max-w-none">
					{recipe.title}
				</span>
			</div>

			{/* Заголовок рецепта */}
			<div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
				<div className="max-w-[800px]">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-tight mb-6">
						{recipe.title}
					</h1>

					{/* Инфо-панель метаданных */}
					<div className="flex flex-wrap items-center gap-y-4 gap-x-6 md:gap-x-8 text-sm">
						{/* Автор */}
						<div className="flex items-center gap-3">
							<Image
								src={recipe.author.image}
								alt={recipe.author.name}
								width={40}
								height={40}
								className="w-10 h-10 rounded-full object-cover border border-black/5"
							/>
							<div>
								<p className="font-bold text-black">{recipe.author.name}</p>
								<p className="text-xs text-black/60">{recipe.author.date}</p>
							</div>
						</div>

						{/* Разделитель */}
						<div className="hidden sm:block h-10 w-[1px] bg-black/10" />

						{/* PREP TIME */}
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center">
								<Image src="/hero/timer.svg" alt="prep time" width={20} height={20} />
							</div>
							<div>
								<p className="text-[10px] font-bold text-black uppercase tracking-wider">
									PREP TIME
								</p>
								<p className="text-xs text-black/60 font-semibold">{recipe.prepTime} Min</p>
							</div>
						</div>

						{/* COOK TIME */}
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center">
								<Image src="/hero/timer.svg" alt="cook time" width={20} height={20} />
							</div>
							<div>
								<p className="text-[10px] font-bold text-black uppercase tracking-wider">
									COOK TIME
								</p>
								<p className="text-xs text-black/60 font-semibold">{recipe.cookTime} Min</p>
							</div>
						</div>

						{/* CATEGORY */}
						<div className="flex items-center gap-3">
							<div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center">
								<Image src="/hero/knife.svg" alt="category" width={20} height={20} />
							</div>
							<div>
								<p className="text-[10px] font-bold text-black uppercase tracking-wider">
									CATEGORY
								</p>
								<p className="text-xs text-black/60 font-semibold capitalize">
									{recipe.category}
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Круглые кнопки справа (скрываем при печати) */}
				<div className="flex items-center gap-4 print:hidden self-start lg:self-center">
					<button
						onClick={handlePrint}
						className="w-12 h-12 rounded-full bg-[#E7FAFE] hover:bg-[#cbeffd] text-black flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
						title="Распечатать рецепт"
					>
						<Printer className="w-5 h-5" />
					</button>
					
					{/* Интерактивное меню шеринга в соцсетях */}
					<div className="relative" ref={shareRef}>
						<button
							onClick={() => setIsShareOpen(!isShareOpen)}
							className={`w-12 h-12 rounded-full text-black flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xs cursor-pointer ${
								isShareOpen ? 'bg-primary text-white hover:bg-primary/90' : 'bg-[#E7FAFE] hover:bg-[#cbeffd]'
							}`}
							title="Поделиться рецептом"
						>
							<Share2 className="w-5 h-5" />
						</button>

						{isShareOpen && (
							<div className="absolute right-0 mt-3 w-56 rounded-2xl bg-white border border-foreground/5 shadow-2xl p-2.5 z-50 animate-fade-in origin-top-right transition-all">
								<div className="flex flex-col gap-1">
									{/* Telegram */}
									<a
										href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-cyan-50 text-foreground hover:text-[#229ED9] transition-all duration-200 text-sm font-semibold"
									>
										<svg className="w-5 h-5 text-[#229ED9]" viewBox="0 0 24 24" fill="currentColor">
											<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.18-.08-.04-.19-.01-.27.01-.12.02-1.95 1.24-5.51 3.65-.52.36-.99.53-1.41.52-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.75 3.88-1.69 6.46-2.8 7.74-3.32 3.69-1.5 4.45-1.76 4.95-1.77.11 0 .36.03.52.16.13.1.17.24.19.34.02.09.03.26.01.4z"/>
										</svg>
										<span>Telegram</span>
									</a>

									{/* WhatsApp */}
									<a
										href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + ' - ' + shareUrl)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-emerald-50 text-foreground hover:text-emerald-500 transition-all duration-200 text-sm font-semibold"
									>
										<svg className="w-5 h-5 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
											<path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.72 14.15c-.25.7-.97 1.28-1.68 1.48-.48.13-1.11.23-3.21-.64-2.69-1.11-4.43-3.85-4.57-4.04-.13-.18-1.09-1.45-1.09-2.76 0-1.31.69-1.96.93-2.22.25-.26.54-.33.72-.33.18 0 .36.01.52.02.16.01.38-.06.59.44.22.52.74 1.8.8 1.93.07.13.11.29.02.48-.09.18-.18.33-.27.44-.09.11-.2.24-.09.43.11.19.5 0 .82.72.63.56.5 1.04 1.03 1.31 1.24.23.18.42.2.59.02.16-.18.72-.83.91-1.11.2-.28.39-.23.66-.13.27.1 1.73.82 2.03.97.3.15.5.22.57.35.07.12.07.72-.18 1.42z"/>
										</svg>
										<span>WhatsApp</span>
									</a>

									{/* Twitter / X */}
									<a
										href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-black/5 text-foreground hover:text-black transition-all duration-200 text-sm font-semibold"
									>
										<svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
											<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
										</svg>
										<span>Twitter / X</span>
									</a>

									{/* VKontakte */}
									<a
										href={`https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-blue-50/70 text-foreground hover:text-blue-600 transition-all duration-200 text-sm font-semibold"
									>
										<svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
											<path d="M15.06 2c5.44 0 6.94 1.5 6.94 6.94v6.12c0 5.44-1.5 6.94-6.94 6.94H8.94C3.5 22 2 20.5 2 15.06V8.94C2 3.5 3.5 2 8.94 2h6.12zm.89 13.91c-.34-.07-.76-.32-1.32-.78-.54-.44-.9-.81-1.08-1.11-.2-.33-.28-.53-.25-.6.04-.08.2-.18.48-.3 1.1-.47 2.06-1.12 2.87-1.96.2-.21.28-.4.24-.59-.05-.18-.2-.27-.45-.27h-2.14c-.16 0-.32.07-.48.21-.52.5-1.1 1.07-1.74 1.71-.62.63-1.07 1.03-1.35 1.2-.28.18-.49.25-.63.2-.14-.05-.22-.2-.24-.46V11.2c-.01-.73-.2-1.15-.57-1.25-.26-.07-.7-.11-1.34-.12-.86 0-1.42.09-1.68.27-.13.09-.23.23-.3.42.06.01.21.05.45.12.3.09.52.26.65.51.13.25.19.78.19 1.59v2.24c0 .32-.08.57-.24.75-.16.18-.39.27-.69.27-.37 0-.8-.28-1.29-.84a12.82 12.82 0 0 1-1.53-2.17.82.82 0 0 0-.25-.33c-.1-.08-.24-.12-.41-.12H3.72c-.19 0-.35.05-.48.15s-.17.25-.12.45c.44 1.15 1.02 2.21 1.74 3.19.72.98 1.57 1.77 2.55 2.37.98.6 2.02.9 3.12.9H12.36c.21 0 .39-.08.54-.24.15-.16.22-.38.22-.66v-1.13c0-.36.1-.6.3-.72s.43-.11.69.03c.53.28.98.66 1.35 1.14.37.48.74.88 1.11 1.2.37.32.74.48 1.11.48h2.14c.26 0 .44-.09.54-.27.1-.18.06-.41-.12-.69-.37-.53-.94-1.21-1.71-2.04-.37-.41-.65-.73-.83-.96z"/>
										</svg>
										<span>VKontakte</span>
									</a>

									{/* Разделитель */}
									<div className="h-[1px] bg-foreground/5 my-1" />

									{/* Copy Link */}
									<button
										onClick={() => {
											navigator.clipboard.writeText(shareUrl)
											toast.success('Ссылка на рецепт скопирована в буфер обмена!')
											setIsShareOpen(false)
										}}
										className="w-full flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-primary/5 text-foreground hover:text-primary transition-all duration-200 text-sm font-semibold cursor-pointer"
									>
										<span className="text-primary">
											<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
												<path strokeLinecap="round" strokeLinejoin="round" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
											</svg>
										</span>
										<span>Copy Link</span>
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Блок с Медиа и БЖУ */}
			<div className="grid lg:grid-cols-[1fr_380px] gap-8 mb-12">
				{/* Левая колонка: Изображение рецепта или Плеер */}
				<div className="relative aspect-video lg:h-[480px] rounded-[30px] overflow-hidden group shadow-md print:h-[350px]">
					{isPlayingVideo ? (
						<div className="w-full h-full bg-black flex items-center justify-center relative">
							<iframe
								src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
								title="Recipe Video"
								className="w-full h-full border-0 absolute inset-0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							></iframe>
							<button
								onClick={() => setIsPlayingVideo(false)}
								className="absolute top-4 right-4 px-4 py-2 bg-white text-black font-bold text-xs rounded-full shadow-md z-10 hover:bg-black hover:text-white transition-colors print:hidden"
							>
								Закрыть
							</button>
						</div>
					) : (
						<>
							<Image
								src={recipe.image}
								alt={recipe.title}
								fill
								priority
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							{/* Градиентное наложение */}
							<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />

							{/* Кнопка PLAY по центру */}
							<button
								onClick={() => setIsPlayingVideo(true)}
								className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group-hover:shadow-white/20 print:hidden cursor-pointer"
								title="Смотреть видео рецепта"
							>
								<Play className="w-8 h-8 fill-black translate-x-0.5" />
							</button>
						</>
					)}
				</div>

				{/* Правая колонка: Nutrition Information */}
				<div className="bg-[#E7FAFE] rounded-[30px] p-8 flex flex-col justify-between shadow-xs print:bg-white print:border print:border-black/10">
					<div>
						<h3 className="font-bold text-2xl text-black mb-6">Nutrition Information</h3>
						<div className="flex flex-col gap-4">
							{/* Калории */}
							<div className="flex justify-between items-center py-2.5 border-b border-black/10">
								<span className="text-black/60 text-sm font-medium">Calories</span>
								<span className="text-black font-bold">{recipe.nutrionInfo.calories} kcal</span>
							</div>
							{/* Жиры */}
							<div className="flex justify-between items-center py-2.5 border-b border-black/10">
								<span className="text-black/60 text-sm font-medium">Total Fat</span>
								<span className="text-black font-bold">{recipe.nutrionInfo.totalFat} g</span>
							</div>
							{/* Белки */}
							<div className="flex justify-between items-center py-2.5 border-b border-black/10">
								<span className="text-black/60 text-sm font-medium">Protein</span>
								<span className="text-black font-bold">{recipe.nutrionInfo.protein} g</span>
							</div>
							{/* Углеводы */}
							<div className="flex justify-between items-center py-2.5 border-b border-black/10">
								<span className="text-black/60 text-sm font-medium">Carbohydrates</span>
								<span className="text-black font-bold">{recipe.nutrionInfo.carbohydrates} g</span>
							</div>
							{/* Холестерин */}
							<div className="flex justify-between items-center py-2.5 border-b border-black/10">
								<span className="text-black/60 text-sm font-medium">Cholesterol</span>
								<span className="text-black font-bold">{recipe.nutrionInfo.cholesterol} mg</span>
							</div>
						</div>
					</div>

					<p className="text-xs text-black/50 leading-relaxed mt-6 print:hidden">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec varius dui, ac imperdiet elit.
					</p>
				</div>
			</div>

			{/* Описание рецепта */}
			<div className="max-w-[800px] text-black/70 leading-relaxed mb-12 text-base md:text-lg">
				<p>{recipe.desc || 'No description available for this recipe. Enjoy making this delicious and healthy meal that is sure to please everyone.'}</p>
			</div>

			{/* Основной контент (Ингредиенты, Шаги, Сайдбар) */}
			<div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-16">
				{/* Левая сторона: Ингредиенты и Шаги */}
				<div>
					{/* Ингредиенты */}
					<div className="mb-12">
						<h2 className="text-3xl font-bold text-black mb-8">Ingredients</h2>

						{Object.entries(groupedIngredients).map(([groupTitle, ingredients]) => (
							<div key={groupTitle} className="mb-8">
								<h3 className="text-xl font-bold text-black mb-4 capitalize">
									{groupTitle}
								</h3>

								<div className="flex flex-col gap-4">
									{ingredients.map((ing, idx) => {
										const isChecked = !!checkedIngredients[ing.name]
										return (
											<div
												key={idx}
												onClick={() => toggleIngredient(ing.name)}
												className="flex items-center gap-4 py-4 border-b border-black/5 cursor-pointer group hover:bg-black/2 duration-200 px-2 rounded-xl transition-all"
											>
												{/* Круглый интерактивный чекбокс */}
												<div
													className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
														isChecked
															? 'bg-black border-black text-white'
															: 'border-black/20 group-hover:border-black/40 text-transparent'
													}`}
												>
													<Check className="w-3.5 h-3.5 stroke-[3]" />
												</div>

												{/* Текст ингредиента */}
												<span
													className={`text-base font-medium select-none transition-all duration-300 ${
														isChecked
															? 'line-through text-black/40'
															: 'text-black'
													}`}
												>
													{ing.name}
												</span>
											</div>
										)
									})}
								</div>
							</div>
						))}
					</div>

					{/* Шаги инструкции */}
					<div>
						<h2 className="text-3xl font-bold text-black mb-8">Directions</h2>

						<div className="flex flex-col gap-10">
							{recipe.instructions.map((step, idx) => (
								<div key={idx} className="flex flex-col border-b border-black/5 pb-8 last:border-b-0">
									{/* Заголовок шага */}
									<h3 className="text-xl font-bold text-black mb-4 flex items-start gap-4">
										<span className="flex-shrink-0 w-8 h-8 rounded-full bg-black/5 text-black flex items-center justify-center text-sm font-bold">
											{step.step}
										</span>
										<span className="pt-0.5">{step.title}</span>
									</h3>

									{/* Описание шага */}
									<div className="pl-12 text-black/70 leading-relaxed text-base flex flex-col gap-3">
										{step.desc.map((para, pIdx) => (
											<p key={pIdx}>{para}</p>
										))}
									</div>

									{/* Изображение этапа готовки (если есть) */}
									{step.image && (
										<div className="pl-12 mt-6 relative w-full h-[300px] md:h-[400px] rounded-[24px] overflow-hidden shadow-xs">
											<Image
												src={step.image}
												alt={`Cooking step ${step.step}`}
												fill
												className="object-cover"
											/>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Правая сторона: Сайдбар (Скрываем при печати) */}
				<div className="print:hidden flex flex-col gap-10">
					{/* Другие рецепты */}
					<div>
						<h3 className="text-2xl font-bold text-black mb-6">Other Recipe</h3>
						<div className="flex flex-col gap-6">
							{otherRecipes.slice(0, 3).map(item => (
								<Link
									href={`/recipes/${item.id}`}
									key={item.id}
									className="flex gap-4 group hover:bg-black/2 p-2 rounded-2xl transition-all duration-200"
								>
									<div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
										<Image
											src={item.image}
											alt={item.title}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-105"
										/>
									</div>
									<div className="flex flex-col justify-center">
										<h4 className="font-bold text-sm text-black leading-snug line-clamp-2 group-hover:text-black/80 transition-colors mb-2">
											{item.title}
										</h4>
										<p className="text-xs text-black/60">
											By {item.author.name}
										</p>
									</div>
								</Link>
							))}
						</div>
					</div>

					{/* Рекламный баннер */}
					<div className="relative overflow-hidden rounded-[30px] shadow-sm group transform transition-all duration-500 hover:scale-[1.02]">
						<Image
							src="/recipes/ad.png"
							alt="Healthy Food Advertisement"
							width={360}
							height={400}
							className="w-full object-cover"
						/>
						{/* Эффект ховера для баннера */}
						<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
					</div>
				</div>
			</div>

			{/* Рекомендации (You may like these recipe too) */}
			<div className="mt-20 pt-16 border-t border-black/10 print:hidden">
				<h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-12">
					You may like these recipe too
				</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{recommendedRecipes.slice(0, 4).map(item => (
						<RecipeItem
							key={item.id}
							recipe={item}
							type="default"
						/>
					))}
				</div>
			</div>
		</div>
	)
}
