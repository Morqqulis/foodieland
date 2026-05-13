import { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {

   slug: 'users',

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
      },
      {
         name: 'geolocation',
         type: 'group',
         fields: [
            {
               name: 'city',
               type: 'text',
            },
            {
               name: 'country',
               type: 'text',
            },
            {
               name: 'latitude',
               type: 'number',
            },
            {
               name: 'longitude',
               type: 'number',
            },
         ]
      }
   ],
}