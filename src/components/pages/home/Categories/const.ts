export interface ICategory {
   id: number
   name: string
   image: string
   gradient: string
}


export const CATEGORIES: ICategory[] = [
   {
      id: 1,
      name: 'breakfast',
      image: '/categories/breakfast.png',
      gradient: '#708246'
   },
   {
      id: 2,
      name: 'vegan',
      image: '/categories/vegan.png',
      gradient: '#6CC63F'
   },
   {
      id: 3,
      name: 'meat',
      image: '/categories/meat.png',
      gradient: '#CC261B'
   },
   {
      id: 4,
      name: 'dessert',
      image: '/categories/dessert.png',
      gradient: '#F09E00'
   },
   {
      id: 5,
      name: 'lunch',
      image: '/categories/lunch.png',
      gradient: '#000000'
   },
   {
      id: 6,
      name: 'chocolate',
      image: '/categories/chocolate.png',
      gradient: '#000000'
   },

]
