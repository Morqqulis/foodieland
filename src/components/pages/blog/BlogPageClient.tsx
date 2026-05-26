'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ChevronRight } from 'lucide-react'
import BlogHero from './BlogHero'
import BlogPostCard from './BlogPostCard'
import BlogSidebar from './BlogSidebar'
import { BLOG_POSTS } from './const'
import { BlogPost } from './types'

const ITEMS_PER_PAGE = 3

interface BlogPageClientProps {
   initialPosts?: BlogPost[]
}

export default function BlogPageClient( { initialPosts = BLOG_POSTS }: BlogPageClientProps ) {
   const [ searchQuery, setSearchQuery ] = useState( '' )
   const [ currentPage, setCurrentPage ] = useState( 1 )
   const postsListRef = useRef<HTMLDivElement>( null )

   // Filter posts based on search query
   const filteredPosts = initialPosts.filter( post =>
      post.title.toLowerCase().includes( searchQuery.toLowerCase() ) ||
      post.excerpt.toLowerCase().includes( searchQuery.toLowerCase() )
   )

   // Reset page to 1 whenever search query changes
   useEffect( () => {
      setCurrentPage( 1 )
   }, [ searchQuery ] )

   // Calculate pagination metrics
   const totalPages = Math.ceil( filteredPosts.length / ITEMS_PER_PAGE )
   const paginatedPosts = filteredPosts.slice(
      ( currentPage - 1 ) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
   )

   // Scroll smoothly back to top of the list when changing pages
   const handlePageChange = ( page: number ) => {
      if ( page >= 1 && page <= totalPages ) {
         setCurrentPage( page )
         if ( postsListRef.current ) {
            postsListRef.current.scrollIntoView( { behavior: 'smooth', block: 'start' } )
         }
      }
   }

   const handleSearch = ( query: string ) => {
      setSearchQuery( query )
   }

   const handleClearSearch = () => {
      setSearchQuery( '' )
   }

   // Helper to generate pagination array matching screenshot: [1, 2, 3, ..., next]
   const renderPaginationButtons = () => {
      if ( totalPages <= 1 ) return null

      const buttons = []
      for ( let i = 1; i <= totalPages; i++ ) {
         buttons.push(
            <button
               key={i}
               onClick={() => handlePageChange( i )}
               className={`w-12 h-12 flex items-center justify-center rounded-[16px] font-bold text-sm lg:text-base border border-black/5 transition-all duration-300 cursor-pointer ${
                  currentPage === i
                     ? 'bg-black text-white hover:bg-black/90'
                     : 'bg-white text-black hover:bg-black/5'
               }`}
            >
               {i}
            </button>
         )
      }

      // Add "..." decorative button if pages are many, followed by next arrow
      if ( totalPages > 3 ) {
         buttons.push(
            <span
               key="dots"
               className={`w-12 h-12 flex items-center justify-center text-black/40 font-bold`}
            >
               ...
            </span>
         )
      }

      // Arrow button on right
      buttons.push(
         <button
            key="next"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange( currentPage + 1 )}
            className={`w-12 h-12 flex items-center justify-center rounded-[16px] font-bold text-sm lg:text-base border border-black/5 bg-white text-black hover:bg-black/5 disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 cursor-pointer`}
            aria-label="Next Page"
         >
            <ChevronRight size={18} />
         </button>
      )

      return (
         <div className={`flex items-center gap-3 mt-12 justify-center lg:justify-start`}>
            {buttons}
         </div>
      )
   }

   return (
      <>
         {/* Top Hero and Search */}
         <BlogHero onSearch={handleSearch} />

         {/* Main Content Layout */}
         <section ref={postsListRef} className={`pt-12 pb-24`}>
            <div className={`container flex flex-col lg:flex-row gap-10 lg:gap-16`}>
               {/* Left Column: Blog Feed list */}
               <div className={`grow flex flex-col gap-10 lg:gap-12`}>
                  {paginatedPosts.length > 0 ? (
                     <div className={`flex flex-col gap-10 lg:gap-12`}>
                        {paginatedPosts.map( post => (
                           <BlogPostCard key={post.id} post={post} />
                        ) )}

                        {/* Pagination links */}
                        {renderPaginationButtons()}
                     </div>
                  ) : (
                     <div className={`text-center py-20 bg-black/2 rounded-custom border border-dashed border-black/10 px-6`}>
                        <h4 className={`text-xl font-semibold mb-2 text-black`}>
                           No articles found
                        </h4>
                        <p className={`text-black/60 mb-6 max-w-md mx-auto`}>
                           We couldn&apos;t find any blog posts matching &ldquo;{searchQuery}&rdquo;. Try another keyword or reset the search.
                        </p>
                        <button
                           onClick={handleClearSearch}
                           className={`px-6 py-3 bg-black hover:bg-black/90 active:scale-95 text-white font-semibold rounded-2xl transition-all cursor-pointer`}
                        >
                           Clear Search
                        </button>
                     </div>
                  )}
               </div>

               {/* Right Column: Tasty Recipes and Ad Sidebar */}
               <BlogSidebar />
            </div>
         </section>
      </>
   )
}
