import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { cn } from "@/lib/utils"
import { inter } from '@sh/fonts'
import "@sh/styles/index.css"
import type { Metadata } from "next"


export const metadata: Metadata = {
   title: "Мой проект на Next",
   description: "Мой проект на Next",
}

export default function RootLayout( {
   children,
}: Readonly<{
   children: React.ReactNode
}> ) {
   return (
      <html
         lang="en"
         className={cn( "h-full antialiased font-sans", inter.className, )}
      >
         <body className="min-h-full flex flex-col">
            <Header />
            {children}
            <Footer />
         </body>
      </html>
   )
}
