import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'

import { buildConfig } from 'payload'
import { Users } from './backend/collections/Users/Users'
import { Images } from './backend/collections/Images/Images'
import { Admins } from './backend/collections/Admins/Admins'


export default buildConfig( {

   admin: {
      user: Admins.slug,
      theme: 'dark',

   },

   collections: [ Admins, Users, Images ],


   db: vercelPostgresAdapter(),

   secret: process.env.PAYLOAD_SECRET || '',


   plugins: [
      uploadthingStorage( {
         collections: {
            images: true,
         },
         options: {
            token: process.env.UPLOADTHING_TOKEN,
            acl: 'public-read',
         },
      } ),
   ]

} )