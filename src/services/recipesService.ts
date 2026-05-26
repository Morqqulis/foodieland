import { getPayload } from 'payload'
import config from '@/payload.config'
import { RECIPES } from '@/components/custom/recipe-item/const'
import { IRecipe } from '@/components/custom/recipe-item/types'
import { getPayloadImageUrl } from '@/lib/payloadMedia'

export interface IGroupedIngredient {
	name: string
	isReady: boolean
	groupTitle?: string
}

export interface IInstructionStep {
	step: number
	title: string
	desc: string[]
	image?: string
}

export interface IRecipeDetail extends Omit<IRecipe, 'ingredients' | 'instructions'> {
	ingredients: IGroupedIngredient[]
	instructions: IInstructionStep[]
}

export async function getRecipeById(id: string): Promise<IRecipeDetail | null> {
	// 1. Пытаемся получить рецепт из базы данных Payload CMS
	try {
		const payload = await getPayload({ config })
		const dbRecipe = await payload.findByID({
			collection: 'recipes',
			id: Number(id),
			depth: 2,
		})

		if (dbRecipe) {
			return {
				id: Number(dbRecipe.id),
				title: dbRecipe.title,
				category: dbRecipe.category,
				desc: dbRecipe.desc,
				image: getPayloadImageUrl(dbRecipe.image) || '/recipes/item-1.jpg',
				width: 640,
				height: 480,
				cookTime: dbRecipe.cookTime,
				prepTime: dbRecipe.prepTime,
				nutrionInfo: {
					calories: dbRecipe.nutrionInfo?.calories || 0,
					totalFat: dbRecipe.nutrionInfo?.totalFat || 0,
					protein: dbRecipe.nutrionInfo?.protein || 0,
					carbohydrates: dbRecipe.nutrionInfo?.carbohydrates || 0,
					cholesterol: dbRecipe.nutrionInfo?.cholesterol || 0,
				},
				ingredients: (dbRecipe.ingredientsGroups || []).flatMap(g =>
					(g.ingredients || []).map(i => ({
						name: i.name,
						isReady: !!i.isReady,
						groupTitle: g.title
					}))
				),
				instructions: (dbRecipe.directions || []).map(d => ({
					step: d.step,
					title: d.title,
					desc: d.desc ? [d.desc] : [],
					image: d.image ? getPayloadImageUrl(d.image) : undefined
				})),
				author: {
					name: dbRecipe.author?.name || 'Anonymous',
					image: getPayloadImageUrl(dbRecipe.author?.avatar, '/hero/avatar.jpg') || '/hero/avatar.jpg',
					date: dbRecipe.author?.date || '15 March 2022',
				}
			}
		}
	} catch (error) {
		console.warn('Не удалось загрузить данные из Payload CMS или рецепт не найден, переключаемся на моки:', error)
	}

	// 2. Фолбэк на моковые данные из const.ts
	const mockId = Number(id)
	const mockRecipe = RECIPES.find(r => r.id === mockId)
	if (mockRecipe) {
		// Приводим моковые данные к структуре сгруппированных ингредиентов
		return {
			...mockRecipe,
			ingredients: mockRecipe.ingredients.map(i => ({
				...i,
				groupTitle: 'Ingredients' // Название группы по умолчанию
			})),
			instructions: mockRecipe.instructions.map(step => ({
				...step,
				image: step.step === 1 ? '/recipes/cook-process.jpg' : undefined // Добавляем картинку готовки для 1 шага
			}))
		}
	}

	return null
}

export async function getAllRecipes(): Promise<IRecipeDetail[]> {
	try {
		const payload = await getPayload({ config })
		const dbRecipes = await payload.find({
			collection: 'recipes',
			depth: 2,
		})

		if (dbRecipes.docs.length > 0) {
			return dbRecipes.docs.map(dbRecipe => ({
				id: Number(dbRecipe.id),
				title: dbRecipe.title,
				category: dbRecipe.category,
				desc: dbRecipe.desc,
				image: getPayloadImageUrl(dbRecipe.image) || '/recipes/item-1.jpg',
				width: 368,
				height: 250,
				cookTime: dbRecipe.cookTime,
				prepTime: dbRecipe.prepTime,
				nutrionInfo: {
					calories: dbRecipe.nutrionInfo?.calories || 0,
					totalFat: dbRecipe.nutrionInfo?.totalFat || 0,
					protein: dbRecipe.nutrionInfo?.protein || 0,
					carbohydrates: dbRecipe.nutrionInfo?.carbohydrates || 0,
					cholesterol: dbRecipe.nutrionInfo?.cholesterol || 0,
				},
				ingredients: (dbRecipe.ingredientsGroups || []).flatMap(g =>
					(g.ingredients || []).map(i => ({
						name: i.name,
						isReady: !!i.isReady,
						groupTitle: g.title
					}))
				),
				instructions: (dbRecipe.directions || []).map(d => ({
					step: d.step,
					title: d.title,
					desc: d.desc ? [d.desc] : [],
					image: d.image ? getPayloadImageUrl(d.image) : undefined
				})),
				author: {
					name: dbRecipe.author?.name || 'Anonymous',
					image: getPayloadImageUrl(dbRecipe.author?.avatar, '/hero/avatar.jpg') || '/hero/avatar.jpg',
					date: dbRecipe.author?.date || '15 March 2022',
				}
			}))
		}
	} catch (error) {
		console.warn('Не удалось загрузить все рецепты, возвращаем моки:', error)
	}

	return RECIPES.map(r => ({
		...r,
		ingredients: r.ingredients.map(i => ({
			...i,
			groupTitle: 'Ingredients'
		})),
		instructions: r.instructions.map(step => ({
			...step,
			image: step.step === 1 ? '/recipes/cook-process.jpg' : undefined
		}))
	}))
}
