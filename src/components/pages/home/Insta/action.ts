'use server'

import { getPayload } from 'payload'
import { Recipe } from '../../../../../payload-types'
import config from '@/payload.config'

export async function seedRecipes() {
	const payload = await getPayload({ config })

	const newRecipes = await payload.create({
		collection: 'recipes',
		data: {
			title: 'Классический украинский борщ',
			desc: 'Наваристый, яркий и невероятно ароматный традиционный борщ на говяжьей косточке.',
			category: 'Супы',
			image: 101,
			cookTime: 90,
			prepTime: 30,
			author: {
				name: 'John Doe',
				avatar: 101,
				date: '2026-01-15T12:00:00Z',
			},
			nutrionInfo: {
				calories: 240,
				totalFat: 14,
				protein: 12,
				carbohydrates: 18,
				cholesterol: 45,
			},
			ingredientsGroups: [
				{ title: 'Говядина на кости (500г)', ingredients: [{ name: 'Говядина на кости (500г)', isReady: true }] },
				{ title: 'Капуста белокочанная (300г)', ingredients: [{ name: 'Капуста белокочанная (300г)', isReady: true }] },
				{ title: 'Картофель (3 шт)', ingredients: [{ name: 'Картофель (3 шт)', isReady: true }] },
				{ title: 'Свекла (2 шт)', ingredients: [{ name: 'Свекла (2 шт)', isReady: true }] },
				{ title: 'Морковь (1 шт)', ingredients: [{ name: 'Морковь (1 шт)', isReady: true }] },
				{ title: 'Лук репчатый (1 шт)', ingredients: [{ name: 'Лук репчатый (1 шт)', isReady: true }] },
			],
			directions: [
				{
					step: 1,
					title: 'Варка бульона',
					desc: 'Залейте говядину водой, доведите до кипения, снимите пену и варите на медленном огне 1.5 часа.',
					image: 101,
					id: 'b1-s1',
				},
				{
					step: 2,
					title: 'Приготовление заправки',
					desc: 'Натрите свеклу, морковь и лук. Обжарьте лук с морковью, затем добавьте свеклу, томатную пасту, уксус и немного бульона. Тушите 15 минут.',
					image: 1012,
					id: 'b1-s2',
				},
				{
					step: 3,
					title: 'Сборка борща',
					desc: 'Добавьте в бульон нарезанный картофель и капусту. Варите 15 минут, затем выложите заправку, проварите еще 5 минут и дайте настояться.',
					image: 1013,
					id: 'b1-s3',
				},
			],
			updatedAt: '2026-01-15T12:00:00Z',
			createdAt: '2026-01-15T12:00:00Z',
		},
	})
}
