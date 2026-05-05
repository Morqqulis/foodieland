
export interface ParallaxItemProps {
   className?: string
   position: string
   src: string
   width: number
   height: number
   X: number
   Y: number
}

export const ITEMS: ParallaxItemProps[] = [
   {
      src: '/more/1.png',
      width: 50,
      height: 50,
      X: 1.3,
      Y: 2.5,
      position: 'left-8.5 bottom-31'
   },
   {
      src: '/more/2.png',
      width: 98,
      height: 98,
      X: 0.3,
      Y: 0.5,
      position: 'left-25.5 top-17.5'
   },
   {
      src: '/more/3.png',
      width: 62,
      height: 62,
      X: 0.3,
      Y: 0.5,
      position: 'top-25 right-32.5'
   },
   {
      src: '/more/4.png',
      width: 80,
      height: 80,
      X: 0.3,
      Y: 0.5,
      position: '-right-8.5 top-42'
   }
]