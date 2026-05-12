import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'

import { buildConfig } from 'payload'
import { Users } from './backend/collections/Users/Users'

export default buildConfig( {



   collections: [ Users ],

   db: vercelPostgresAdapter(),

   secret: process.env.PAYLOAD_SECRET || '',

} )