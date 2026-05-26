import { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
	slug: 'posts',
	labels: {
		singular: { ru: 'Статья', az: 'Məqalə' },
		plural: { ru: 'Статьи', az: 'Məqalələr' },
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
				ru: 'Заголовок',
				az: 'Başlıq',
			},
		},
		{
			name: 'subtitle',
			type: 'text',
			required: true,
			label: {
				ru: 'Подзаголовок',
				az: 'Alt başlıq',
			},
		},
		{
			name: 'featuredImage',
			type: 'upload',
			relationTo: 'images',
			required: true,
			label: {
				ru: 'Главное изображение',
				az: 'Əsas şəkil',
			},
		},
		{
			name: 'publishDate',
			type: 'date',
			required: true,
			label: {
				ru: 'Дата публикации',
				az: 'Dərc olunma tarixi',
			},
		},
		{
			name: 'author',
			type: 'group',
			label: {
				ru: 'Автор',
				az: 'Müəllif',
			},
			fields: [
				{
					name: 'name',
					type: 'text',
					required: true,
					label: {
						ru: 'Имя автора',
						az: 'Müəllif adı',
					},
				},
				{
					name: 'avatar',
					type: 'upload',
					relationTo: 'images',
					required: true,
					label: {
						ru: 'Аватар автора',
						az: 'Müəllif avatarı',
					},
				},
			],
		},
		{
			name: 'content',
			type: 'blocks',
			required: true,
			label: {
				ru: 'Содержимое статьи',
				az: 'Məqalə məzmunu',
			},
			blocks: [
				{
					slug: 'titleBlock',
					labels: {
						singular: { ru: 'Заголовок', az: 'Başlıq' },
						plural: { ru: 'Заголовки', az: 'Başlıqlar' },
					},
					fields: [
						{
							name: 'title',
							type: 'text',
							required: true,
							label: {
								ru: 'Заголовок',
								az: 'Başlıq',
							},
						},
					],
				},
				{
					slug: 'paragraphBlock',
					labels: {
						singular: { ru: 'Параграф', az: 'Paragraf' },
						plural: { ru: 'Параграфы', az: 'Paragraflar' },
					},
					fields: [
						{
							name: 'text',
							type: 'textarea',
							required: true,
							label: {
								ru: 'Текст',
								az: 'Mətn',
							},
						},
					],
				},
				{
					slug: 'textBlock',
					labels: {
						singular: { ru: 'Текстовый блок', az: 'Mətn bloku' },
						plural: { ru: 'Текстовые блоки', az: 'Mətn blokları' },
					},
					fields: [
						{
							name: 'heading',
							type: 'text',
							label: {
								ru: 'Заголовок секции',
								az: 'Bölmə başlığı',
							},
						},
						{
							name: 'text',
							type: 'textarea',
							required: true,
							label: {
								ru: 'Текст',
								az: 'Mətn',
							},
						},
					],
				},

				{
					slug: 'imageBlock',
					labels: {
						singular: { ru: 'Изображение', az: 'Şəkil' },
						plural: { ru: 'Изображения', az: 'Şəkillər' },
					},
					fields: [
						{
							name: 'image',
							type: 'upload',
							relationTo: 'images',
							required: true,
							label: {
								ru: 'Изображение',
								az: 'Şəkil',
							},
						},
						{
							name: 'caption',
							type: 'text',
							label: {
								ru: 'Подпись к изображению',
								az: 'Şəkil başlığı',
							},
						},
					],
				},
				{
					slug: 'quoteBlock',
					labels: {
						singular: { ru: 'Цитата', az: 'Sitat' },
						plural: { ru: 'Цитаты', az: 'Sitatlar' },
					},
					fields: [
						{
							name: 'quote',
							type: 'textarea',
							required: true,
							label: {
								ru: 'Текст цитаты',
								az: 'Sitat mətni',
							},
						},
						{
							name: 'author',
							type: 'text',
							label: {
								ru: 'Автор цитаты',
								az: 'Sitat müəllifi',
							},
						},
					],
				},
			],
		},
	],
}
