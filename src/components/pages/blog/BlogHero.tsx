'use client'

import React, { useState } from 'react'
import BigTitle from '@/components/custom/BigTitle'
import Text from '@/components/custom/Text'

interface BlogHeroProps {
   onSearch: ( query: string ) => void
}

export default function BlogHero( { onSearch }: BlogHeroProps ) {
   const [ query, setQuery ] = useState( '' )

   const handleSearchSubmit = ( e: React.FormEvent ) => {
      e.preventDefault()
      onSearch( query )
   }

   const handleKeyDown = ( e: React.KeyboardEvent ) => {
      if ( e.key === 'Enter' ) {
         onSearch( query )
      }
   }

   return (
      <section className={`pt-16 pb-12 text-center`}>
         <div className={`container max-w-[800px] flex flex-col items-center gap-6`}>
            <BigTitle text={'Blog & Article'} />
            <Text
               className={`text-black/60 max-w-[620px] mx-auto text-sm lg:text-base leading-relaxed`}
               text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'}
            />

            {/* Search Box Form */}
            <form
               onSubmit={handleSearchSubmit}
               className={`w-full max-w-[600px] mt-6 flex items-center justify-between bg-white rounded-3xl border border-black/5 p-2 shadow-sm focus-within:shadow-md transition-shadow duration-300`}
            >
               <input
                  type="text"
                  placeholder="Search article, news or recipe..."
                  value={query}
                  onChange={( e ) => setQuery( e.target.value )}
                  onKeyDown={handleKeyDown}
                  className={`w-full px-5 py-3.5 text-sm lg:text-base text-black placeholder-black/30 bg-transparent outline-none`}
               />
               <button
                  type="submit"
                  className={`px-8 py-3.5 bg-black hover:bg-black/90 active:scale-95 transition-all text-white font-semibold text-sm lg:text-base rounded-2xl cursor-pointer`}
               >
                  Search
               </button>
            </form>
         </div>
      </section>
   )
}
