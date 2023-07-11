"use client"

import { FotoItem } from "@/components/fotoItem";
import { ListeFoto } from "@/data/listeFoto";
const Page = () => {
   
    return (
        <div className="mx-2">
            <h1 className="text-center text-3xl font-bold my-10">lista de fotos</h1>

            <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
                {ListeFoto.map(item =>(
                    <FotoItem
                      key={item.id}
                      foto={item}
                      onClick={() => {}}
                    />
                ))}
            </section>
        </div>
    );
}

export default Page;