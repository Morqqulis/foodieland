import { Logo } from '../custom/Logo'
import Menu from '../custom/Menu'
import Socials from '../custom/Socials'

export default function Header() {
   return (
      <header className={`py-10 border-b border-b-black/10`}>
         <div className="container">
            <nav className={`flex items-center justify-between gap-4`}>
               <Logo />
               <Menu hideHome={true} />
               <Socials />
            </nav>
         </div>
      </header>
   )
}