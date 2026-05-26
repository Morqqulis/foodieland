import { CollectionConfig } from 'payload'

export const Admins: CollectionConfig = {
	slug: 'admins',
	labels: {
		plural: { ru: 'Админы', az: 'Adminlər' },
		singular: { ru: 'Админ', az: 'Admin' },
	},
	auth: true,
	admin: {
		useAsTitle: 'email',
	},

	fields: [
		{
			name: 'email',
			type: 'email',
			required: true,
			unique: true,
			label: {
				ru: 'Почта',
				az: 'Elektron poçta',
			},
		},
	],
}
