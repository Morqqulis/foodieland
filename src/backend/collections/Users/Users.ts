import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {

   slug: 'users',

   admin: {
      useAsTitle: 'email',
   },
   auth: true,
   fields: [
      {
         name: 'name',
         type: 'text',
         required: true,
      },
      {
         name: 'email',
         type: 'email',
         unique: true,
         required: true,
      },
   ],
}