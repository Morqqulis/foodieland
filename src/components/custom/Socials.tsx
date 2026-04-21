import Image from 'next/image'
import Link from 'next/link'


interface SocialProps {
   href: string
   icon: string
   width: number
   height: number
}


const links: SocialProps[] = [
   {
      href: '#',
      icon: '/socials/facebook.svg',
      width: 10,
      height: 20
   },
   {
      href: '#',
      icon: '/socials/twitter.svg',
      width: 22,
      height: 18
   },
   {
      href: '#',
      icon: '/socials/insta.svg',
      width: 22,
      height: 22
   }
]


export default function Socials() {
   return (
      <div className={`flex items-center gap-10`}>
         {links.map( link => (
            <Link href={link.href} key={link.icon}>
               <Image src={link.icon} alt="Social icon" width={link.width} height={link.height} />
            </Link>
         ) )}
      </div>
   )
}