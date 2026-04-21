import Image from 'next/image'

export type AvatarItemProps = {
   name: string
   date: string
   image: string
   className?: string
}

export default function AvatarItem( { name, date, image, className }: AvatarItemProps ) {
   return (
      <div className={`flex items-center gap-4 ${className}`}>
         <Image className={`rounded-full`} src={image} alt={'avatar'} width={50} height={50} />
         <div className={`flex flex-col gap-2 tracking-[-0.02em]`}>
            <span className={`font-bold`}>{name}</span>
            <span className={`text-sm text-black/60`}>{date}</span>
         </div>
      </div>
   )
}