import { cn } from '@/lib/utils'


interface TitleProps {
   text: string
   className?: string
   as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export default function Title( { text, className, as = 'h2' }: TitleProps ) {
   const Tag = as
   return (
      <Tag className={cn( `text-3xl md:text-4xl lg:text-5xl font-semibold text-black tracking-[-0.04em]`, className )}>{text}</Tag>
   )
}