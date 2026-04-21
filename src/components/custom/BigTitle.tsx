export default function BigTitle( { text, className }: { text: string, className?: string } ) {
   return (
      <h1 className={`font-semibold text-4xl md:text-5xl lg:text-[64px] tracking-[-0.04em] leading-none ${className}`}>
         {text}
      </h1>
   )
}