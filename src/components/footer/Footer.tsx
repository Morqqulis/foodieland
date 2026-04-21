import { Logo } from '../custom/Logo'
import Menu from '../custom/Menu'
import Socials from '../custom/Socials'

export default function Footer() {
   return (
      <footer>
         <div className="container">
            {/* Верхняя часть */}
            <div className={`flex items-center justify-between gap- border-b border-b-black/10 pb-12`}>
               <div>
                  <Logo />
                  <p className={`mt-4 text-black/60`}>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
               </div>
               <Menu hideHome />
            </div>
            {/* Нижняя часть */}
            <div className={`py-12 flex items-center gap-4 justify-end`}>
               <p className={`text-black/60 text-center text-lg justify-self-center w-full`}>
                  © 2020 Flowbase. Powered by <span className={`text-[#FF7967]`}>Webflow</span>
               </p>
               <Socials />
            </div>
         </div>
      </footer>
   )
}