import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
	slug: 'users',
	labels: {
		plural: { ru: 'Пользователи', az: 'İstifadəçilər' },
		singular: { ru: 'Пользователь', az: 'İstifadəçi' },
	},

	admin: {
		useAsTitle: 'email',
	},
	auth: true,
	access: {
		read: () => true,
		create: () => true,
		update: () => true,
		delete: () => true,
	},
	fields: [
		{
			name: 'email',
			type: 'email',
			unique: true,
			required: true,
			label: {
				ru: 'Почта',
				az: 'Elektron poçta',
			},
		},
		{
			name: 'geolocation',
			type: 'group',
			label: {
				ru: 'Геолокация',
				az: 'Coğrafi məlumat',
			},
			fields: [
				{
					name: 'city',
					type: 'text',
					label: {
						ru: 'Город',
						az: 'Şəhər',
					},
				},
				{
					name: 'country',
					type: 'text',
					label: {
						ru: 'Страна',
						az: 'Ölkə',
					},
				},
				{
					name: 'latitude',
					type: 'number',
					label: {
						ru: 'Широта',
						az: 'Enlik',
					},
				},
				{
					name: 'longitude',
					type: 'number',
					label: {
						ru: 'Долгота',
						az: 'Uzunluk',
					},
				},
			],
		},
	],
}
