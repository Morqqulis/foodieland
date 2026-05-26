'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealOnScrollProps {
   children: React.ReactNode
   className?: string
   variant?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'zoom-in' | 'scale-up'
   delay?: number // Задержка в мс
   duration?: number // Длительность в мс
   threshold?: number // Доля видимости элемента (0.0 - 1.0)
   once?: boolean // Анимировать только один раз
}

export default function RevealOnScroll({
   children,
   className,
   variant = 'fade-in-up',
   delay = 0,
   duration = 800,
   threshold = 0.1,
   once = true,
}: RevealOnScrollProps) {
   const [isVisible, setIsVisible] = useState(false)
   const ref = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true)
               if (once && ref.current) {
                  observer.unobserve(ref.current)
               }
            } else if (!once) {
               setIsVisible(false)
            }
         },
         { threshold }
      )

      const currentRef = ref.current
      if (currentRef) {
         observer.observe(currentRef)
      }

      return () => {
         if (currentRef) {
            observer.unobserve(currentRef)
         }
      }
   }, [once, threshold])

   const getVariantClasses = () => {
      if (!isVisible) {
         switch (variant) {
            case 'fade-in':
               return 'opacity-0'
            case 'fade-in-up':
               return 'opacity-0 translate-y-12'
            case 'fade-in-down':
               return 'opacity-0 -translate-y-12'
            case 'fade-in-left':
               return 'opacity-0 -translate-x-12'
            case 'fade-in-right':
               return 'opacity-0 translate-x-12'
            case 'zoom-in':
               return 'opacity-0 scale-90'
            case 'scale-up':
               return 'opacity-0 scale-95 translate-y-4'
            default:
               return 'opacity-0 translate-y-12'
         }
      } else {
         switch (variant) {
            case 'fade-in':
               return 'opacity-100'
            case 'fade-in-up':
            case 'fade-in-down':
               return 'opacity-100 translate-y-0'
            case 'fade-in-left':
            case 'fade-in-right':
               return 'opacity-100 translate-x-0'
            case 'zoom-in':
            case 'scale-up':
               return 'opacity-100 scale-100 translate-y-0'
            default:
               return 'opacity-100 translate-y-0'
         }
      }
   }

   return (
      <div
         ref={ref}
         className={cn(
            'transition-all ease-out will-change-transform',
            getVariantClasses(),
            className
         )}
         style={{
            transitionDelay: `${delay}ms`,
            transitionDuration: `${duration}ms`,
         }}
      >
         {children}
      </div>
   )
}
