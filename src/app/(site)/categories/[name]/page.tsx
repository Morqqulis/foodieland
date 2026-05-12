

export default async function CategoryPage( { params }: { params: Promise<{ name: string }> } ) {
   const { name } = await params

   return (
      <main>
         <div className="container">
            <h1>Моя категория = {name}</h1>
         </div>
      </main>
   )
}

