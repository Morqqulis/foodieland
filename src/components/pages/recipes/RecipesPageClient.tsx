'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Utensils, Clock, Heart, Filter } from 'lucide-react'
import { IRecipeDetail } from '@/services/recipesService'
import RecipeItem from '@/components/custom/recipe-item/RecipeItem'

interface RecipesPageClientProps {
	initialRecipes: IRecipeDetail[]
}

export default function RecipesPageClient({ initialRecipes }: RecipesPageClientProps) {
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCategory, setSelectedCategory] = useState<string>('All')

	// Извлекаем все уникальные категории из рецептов
	const categories = useMemo(() => {
		const cats = new Set(initialRecipes.map(r => r.category))
		return ['All', ...Array.from(cats)]
	}, [initialRecipes])

	// Фильтруем рецепты по поиску и категории
	const filteredRecipes = useMemo(() => {
		return initialRecipes.filter(recipe => {
			const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				(recipe.desc && recipe.desc.toLowerCase().includes(searchQuery.toLowerCase()))
			
			const matchesCategory = selectedCategory === 'All' || recipe.category.toLowerCase() === selectedCategory.toLowerCase()

			return matchesSearch && matchesCategory
		})
	}, [initialRecipes, searchQuery, selectedCategory])

	return (
		<div className="container py-12 font-sans">
			{/* Хедер страницы с красивой анимацией */}
			<header className="text-center max-w-[700px] mx-auto mb-16 animate-fade-in-up">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-6">
					Recipes Catalogue
				</h1>
				<p className="text-black/60 text-base md:text-lg leading-relaxed">
					Discover our collection of delicious, healthy, and easy-to-cook recipes. 
					Filter by category or search by ingredients and names to find your perfect meal!
				</p>
			</header>

			{/* Панель поиска и фильтрации */}
			<div className="max-w-[800px] mx-auto mb-12 flex flex-col md:flex-row gap-4 items-center animate-fade-in-up delay-100">
				{/* Поле поиска */}
				<div className="relative w-full">
					<Search className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40 w-5 h-5" />
					<input
						type="text"
						placeholder="Search recipes, ingredients, keywords..."
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full pl-12 pr-4 py-4 rounded-2xl bg-black/5 focus:bg-white border-2 border-transparent focus:border-black/10 focus:shadow-md transition-all duration-300 outline-none text-black font-medium"
					/>
				</div>

				{/* Селектор категорий (выпадающий для мобилок / кнопки для десктопа) */}
				<div className="w-full md:w-auto flex-shrink-0 flex items-center gap-2">
					<Filter className="text-black/60 w-5 h-5 hidden md:block" />
					<select
						value={selectedCategory}
						onChange={(e) => setSelectedCategory(e.target.value)}
						className="md:hidden w-full px-4 py-4 rounded-2xl bg-black/5 text-black font-semibold border-0 outline-none"
					>
						{categories.map(cat => (
							<option key={cat} value={cat}>
								{cat === 'All' ? 'All Categories' : cat}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* Горизонтальные кнопки категорий (для десктопа) */}
			<div className="hidden md:flex flex-wrap justify-center gap-3 mb-16 animate-fade-in-up delay-200">
				{categories.map(cat => {
					const isActive = selectedCategory === cat
					return (
						<button
							key={cat}
							onClick={() => setSelectedCategory(cat)}
							className={`px-6 py-3 rounded-2xl text-sm font-semibold tracking-wide transition-all duration-300 transform active:scale-95 cursor-pointer ${
								isActive
									? 'bg-black text-white shadow-lg shadow-black/10 hover:bg-black/90'
									: 'bg-black/5 text-black/70 hover:bg-black/10'
							}`}
						>
							{cat}
						</button>
					)
				})}
			</div>

			{/* Сетка рецептов с плавной анимацией появления */}
			{filteredRecipes.length > 0 ? (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
					{filteredRecipes.map((recipe, idx) => (
						<RecipeItem
							key={recipe.id}
							recipe={recipe}
							type="default"
							className="animate-fade-in-up"
							style={{ animationDelay: `${idx * 50}ms` }}
						/>
					))}
				</div>
			) : (
				<div className="text-center py-20 animate-fade-in">
					<Utensils className="w-16 h-16 text-black/20 mx-auto mb-4 animate-bounce" />
					<h3 className="text-xl font-bold text-black mb-2">No recipes found</h3>
					<p className="text-black/60">
						Try adjusting your search keywords or clearing the category filter.
					</p>
					<button
						onClick={() => {
							setSearchQuery('')
							setSelectedCategory('All')
						}}
						className="mt-6 px-6 py-3 bg-black text-white font-bold rounded-2xl text-sm transition-all duration-300 hover:bg-black/80"
					>
						Clear Filters
					</button>
				</div>
			)}
		</div>
	)
}
