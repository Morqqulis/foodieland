'use client'
import { MouseParallaxContainer } from 'react-parallax-mouse'

export default function MoreParallaxWrapper( { children }: { children: React.ReactNode } ) {
   return (
      <MouseParallaxContainer className={`h-full w-full relative`} globalFactorX={0.1} globalFactorY={0.1}>
         {children}
      </MouseParallaxContainer>
   )
}