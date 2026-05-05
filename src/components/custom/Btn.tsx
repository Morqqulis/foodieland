import { cn } from '@/lib/utils'
import { cva, type VariantProps } from "class-variance-authority"
import Image from 'next/image'
import Link, { type LinkProps } from 'next/link'

const btnVariants = cva( `min-h-15 flex justify-center items-center gap-4 rounded-2xl text-center hover:-translate-y-1 transition-all hover:shadow-xl duration-500 active:scale-90 active:shadow-md active:translate-y-1 whitespace-nowrap font-semibold tracking-[-0.02em]`, {
   variants: {
      size: {
         lg: 'w-50',
         md: 'w-45',
         sm: 'w-40'
      },
      color: {
         default: 'text-background bg-foreground hover:shadow-foreground/70',
         blue: 'text-foreground bg-custom-blue hover:bg-cyan-200',
      }
   },
   defaultVariants: {
      size: 'sm',
      color: 'default'
   }
} )

type BtnProps = VariantProps<typeof btnVariants> & {
   className?: string
   as?: 'button' | 'Link'
   icon?: string | React.ReactNode
   iconAlt?: string
   width?: number
   height?: number
   text?: React.ReactNode
} & (
      | ( React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' } )
      | ( { as: 'Link' } & Omit<LinkProps, 'className'> )
   )

export function Btn( {
   size = 'sm',
   className,
   as = 'button',
   icon,
   iconAlt = 'icon',
   width = 24,
   height = 24,
   text,
   color = 'default',
   ...props
}: BtnProps ) {
   const classes = cn( btnVariants( { size, color } ), className )

   const inner = (
      <>
         {text && <span>{text}</span>}
         {icon && typeof icon === 'string' ? <Image src={icon} alt={iconAlt} width={width} height={height} /> : icon}
      </>
   )

   if ( as === 'Link' ) {
      const { href, ...rest } = props as { as: 'Link' } & Omit<LinkProps, 'className'>
      return (
         <Link href={href} className={classes} {...rest}>
            {inner}
         </Link>
      )
   }

   return (
      <button type="button" className={classes} {...( props as React.ButtonHTMLAttributes<HTMLButtonElement> )}>
         {inner}
      </button>
   )
}
