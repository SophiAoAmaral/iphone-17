import { useState } from "react";

function Colors(){
    const colors =[
        {id:'blue', name:'Titânio Azul', image:'/img/iphone-blue.jpg', colorClass:'bg-blue-500'},
        {id:'silver', name:'Titânio Natural', image:'/img/iphone-gray...jpg', colorClass:'bg-gray-300'},
        {id:'orange', name:'Titânio Laranja', image:'/img/iphone-orange.jpg', colorClass:'bg-orange-500'},
    ];

    const models =[
        {name:'Pro Max', screen:'6.9 polegadas', storage:'256GB, 512GB ou 1TB', battery:'33h de vídeo', weight:'221g'},
        {name:'Pro', screen:'6.3 polegadas', storage:'128GB, 256GB ou 512TB', battery:'29h de vídeo', weight:'199g'}
    ];

    return(

        <section id="colors" className="bg-black py-20 px-8">
            <div className="max-w-7xl m-auto ">
                <div className="text-cent mb-16">
                    <h2 className="text-xl mb:text-6xl font-bold mb-4">Escolha sua cor</h2>
                    <p className="text-xl text-gray-400">Quatro acabamentos em titânio </p>
                </div>
            </div>

        </section>
    )
}

export default Colors