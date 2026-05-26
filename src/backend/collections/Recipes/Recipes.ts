import { CollectionConfig } from 'payload'

export const Recipes: CollectionConfig = {
	slug: 'recipes',
	labels: {
		singular: { ru: 'Рецепт', az: 'Resept' },
		plural: { ru: 'Рецепты', az: 'Reseptlər' },
	},

	admin: {
		useAsTitle: 'title',
	},

	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},

	fields: [
		{
			name: 'title',
			type: 'text',
			required: true,
			label: {
				ru: 'Название рецепта',
				az: 'Resept adı',
			},
		},
		{
			name: 'desc',
			type: 'textarea',
			required: true,
			label: {
				ru: 'Описание рецепта',
				az: 'Resept təsviri',
			},
		},
		{
			name: 'image',
			type: 'upload',
			relationTo: 'images',
			required: true,
			label: {
				ru: 'Изображение блюда',
				az: 'Yemək şəkli',
			},
		},
		{
			name: 'cookTime',
			type: 'number',
			required: true,
			label: {
				ru: 'Время готовки (минут)',
				az: 'Hazırlanma vaxtı (dəqiqə)',
			},
		},
		{
			name: 'prepTime',
			type: 'number',
			required: true,
			label: {
				ru: 'Время подготовки (минут)',
				az: 'Hazırlıq vaxtı (dəqiqə)',
			},
		},
		{
			name: 'category',
			type: 'text',
			required: true,
			label: {
				ru: 'Категория',
				az: 'Kateqoriya',
			},
		},
		{
			name: 'nutrionInfo',
			type: 'group',
			label: {
				ru: 'Пищевая ценность',
				az: 'Qida dəyəri',
			},
			fields: [
				{
					name: 'calories',
					type: 'number',
					label: { ru: 'Калории', az: 'Kalori' },
				},
				{
					name: 'totalFat',
					type: 'number',
					label: { ru: 'Всего жиров (г)', az: 'Ümumi yağ (q)' },
				},
				{
					name: 'protein',
					type: 'number',
					label: { ru: 'Белки (г)', az: 'Zülal (q)' },
				},
				{
					name: 'carbohydrates',
					type: 'number',
					label: { ru: 'Углеводы (г)', az: 'Karbohidrat (q)' },
				},
				{
					name: 'cholesterol',
					type: 'number',
					label: { ru: 'Холестерин (мг)', az: 'Xolesterol (mq)' },
				},
			],
		},
		{
			name: 'ingredientsGroups',
			type: 'array',
			label: {
				ru: 'Группы ингредиентов',
				az: 'İnqrediyent qrupları',
			},
			fields: [
				{
					name: 'title',
					type: 'text',
					required: true,
					label: { ru: 'Название группы (например, Для соуса)', az: 'Qrup adı' },
				},
				{
					name: 'ingredients',
					type: 'array',
					required: true,
					label: { ru: 'Ингредиенты', az: 'İnqrediyentlər' },
					fields: [
						{
							name: 'name',
							type: 'text',
							required: true,
							label: { ru: 'Название', az: 'Adı' },
						},
						{
							name: 'isReady',
							type: 'checkbox',
							defaultValue: false,
							label: { ru: 'Готов к приготовлению', az: 'Hazırdır' },
						},
					],
				},
			],
		},
		{
			name: 'directions',
			type: 'array',
			label: {
				ru: 'Инструкции по приготовлению',
				az: 'Hazırlanma qaydası',
			},
			fields: [
				{
					name: 'step',
					type: 'number',
					required: true,
					label: { ru: 'Номер шага', az: 'Mərhələ nömrəsi' },
				},
				{
					name: 'title',
					type: 'text',
					required: true,
					label: { ru: 'Заголовок шага', az: 'Mərhələ başlığı' },
				},
				{
					name: 'desc',
					type: 'textarea',
					required: true,
					label: { ru: 'Описание процесса', az: 'Gedişatın təsviri' },
				},
				{
					name: 'image',
					type: 'upload',
					relationTo: 'images',
					label: { ru: 'Изображение для этого шага', az: 'Bu mərhələ üçün şəkil' },
				},
			],
		},
		{
			name: 'author',
			type: 'group',
			label: {
				ru: 'Автор рецепта',
				az: 'Resept müəllifi',
			},
			fields: [
				{
					name: 'name',
					type: 'text',
					required: true,
					label: { ru: 'Имя автора', az: 'Müəllif adı' },
				},
				{
					name: 'avatar',
					type: 'upload',
					relationTo: 'images',
					required: true,
					label: { ru: 'Аватар автора', az: 'Müəllif avatarı' },
				},
				{
					name: 'date',
					type: 'text',
					required: true,
					label: { ru: 'Дата публикации (например, 15 March 2022)', az: 'Dərc olunma tarixi' },
				},
			],
		},
	],
}
