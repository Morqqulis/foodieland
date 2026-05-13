import type { CollectionConfig } from 'payload'


export const Images: CollectionConfig = {
   slug: 'images',
   admin: {
      useAsTitle: 'name',
   },
   access: {
      read: () => true,
      create: () => true,
      update: () => true,
      delete: () => true,
   },
   upload: true,
   fields: [
      {
         name: 'name',
         type: 'text',
      }
   ],
}