
interface INutrionInfo {
	calories: number
	totalFat: number
	protein: number
	carbohydrates: number
	cholesterol: number
}

interface IIngredient {
	name: string
	isReady: boolean
}

interface IInstruction {
	step: number
	title: string
	desc: string[]
}

export interface IRecipe {
	id: number
	category: string
	title: string
	desc: string
	image: string
	video?: string
	width: number
	height: number
	cookTime: number
	prepTime: number
	nutrionInfo: INutrionInfo
	ingredients: IIngredient[]
	instructions: IInstruction[]
	author: {
		name: string
		image: string
		date: string
	}
}
