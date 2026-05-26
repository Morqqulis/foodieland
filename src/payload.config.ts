import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { az } from '@payloadcms/translations/languages/az'
import { ru } from '@payloadcms/translations/languages/ru'

import { buildConfig } from 'payload'
import { Admins } from './backend/collections/Admins/Admins'
import { Images } from './backend/collections/Images/Images'
import { Posts } from './backend/collections/Posts/Posts'
import { Recipes } from './backend/collections/Recipes/Recipes'
import { Users } from './backend/collections/Users/Users'

export default buildConfig({
	i18n: {
		supportedLanguages: { ru, az },
		fallbackLanguage: 'ru',
	},

	admin: {
		user: Admins.slug,
		theme: 'dark',
	},

	collections: [Admins, Users, Images, Posts, Recipes],

	db: vercelPostgresAdapter(),

	secret: process.env.PAYLOAD_SECRET || '',

	plugins: [
		uploadthingStorage({
			collections: {
				images: true,
			},
			options: {
				token: process.env.UPLOADTHING_TOKEN,
				acl: 'public-read',
			},
		}),
	],
})
