import { NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'
import fs from 'fs'
import path from 'path'
import { getRecipesData } from './data'

export const revalidate = 0

export async function GET() {
	try {
		const payload = await getPayload({ config })

		// 1. Очищаем существующие рецепты
		payload.logger.info('Начало очистки базы данных для сида рецептов...')
		
		const existingRecipes = await payload.find({
			collection: 'recipes',
			limit: 100,
		})
		
		for (const doc of existingRecipes.docs) {
			await payload.delete({
				collection: 'recipes',
				id: doc.id,
			})
		}
		
		payload.logger.info('База данных успешно очищена от старых рецептов.')

		// Helper для поиска или загрузки файлов в Payload
		const uploadImage = async (fileName: string, relativePath: string) => {
			// Ищем изображение по имени, чтобы избежать дублирования и нарушения внешних ключей
			const existing = await payload.find({
				collection: 'images',
				where: {
					name: {
						equals: fileName,
					},
				},
				limit: 1,
			})

			if (existing.docs.length > 0) {
				payload.logger.info(`Изображение ${fileName} уже существует с ID: ${existing.docs[0].id}`)
				return existing.docs[0]
			}

			const filePath = path.join(process.cwd(), relativePath)
			if (!fs.existsSync(filePath)) {
				throw new Error(`Файл не найден по пути: ${filePath}`)
			}
			const fileBuffer = fs.readFileSync(filePath)
			const ext = path.extname(fileName).toLowerCase()
			const mimetype = ext === '.png' ? 'image/png' : 'image/jpeg'

			payload.logger.info(`Загружаем новое изображение ${fileName}...`)
			return await payload.create({
				collection: 'images',
				data: {
					name: fileName,
				},
				file: {
					data: fileBuffer,
					name: fileName,
					mimetype,
					size: fileBuffer.length,
				},
			})
		}

		// 2. Загружаем или находим изображения
		payload.logger.info('Поиск или загрузка медиафайлов в базу данных...')
		const avatarDoc = await uploadImage('avatar.jpg', 'public/hero/avatar.jpg')
		const cookProcessDoc = await uploadImage('cook-process.jpg', 'public/recipes/cook-process.jpg')

		const recipeImages: any[] = []
		for (let i = 1; i <= 8; i++) {
			const imgDoc = await uploadImage(`item-${i}.jpg`, `public/recipes/item-${i}.jpg`)
			recipeImages.push(imgDoc)
		}
		payload.logger.info('Все медиафайлы успешно проверены/импортированы!')

		// 3. Получаем данные рецептов
		const recipesData = getRecipesData({
			avatarId: avatarDoc.id,
			cookProcessId: cookProcessDoc.id,
			recipeImageIds: recipeImages.map(img => img.id),
		})

		// 4. Создаем рецепты в базе данных Payload CMS
		payload.logger.info('Запись 10 премиальных рецептов в базу данных...')
		const createdRecipes = []
		for (const recipe of recipesData) {
			const doc = await payload.create({
				collection: 'recipes',
				data: recipe,
			})
			createdRecipes.push({ id: doc.id, title: doc.title })
		}
		
		payload.logger.info('Сидинг успешно завершен!')

		return NextResponse.json({
			success: true,
			message: 'База данных успешно очищена от старых рецептов и наполнена 10 новыми премиальными рецептами на русском языке!',
			count: createdRecipes.length,
			recipes: createdRecipes,
		})
	} catch (error: any) {
		console.error('Ошибка в процессе сидинга базы данных:', error)
		return NextResponse.json({
			success: false,
			error: error.message || 'Внутренняя ошибка сервера при сидинге рецептов',
		}, { status: 500 })
	}
}
