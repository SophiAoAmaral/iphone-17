import { useState } from "react";

function Colors(){

    const [selectedColor, setSelectedColor]= useState('blue')
    const colors =[
        {id:'blue', name:'Titânio Azul', image:'/img/iphone-blue.jpg', colorClass:'bg-blue-500'},
        {id:'silver', name:'Titânio Natural', image:'/img/iphone-gray...jpg', colorClass:'bg-gray-300'},
        {id:'orange', name:'Titânio Laranja', image:'/img/iphone-orange.jpg', colorClass:'bg-orange-500'},
    ];

    const models =[
        {name:'Pro Max', screen:'Tela de 6.9 polegadas com ProMotion 120Hz e Always-On display', storage:'256GB, 512GB ou 1TB', battery:'33h de vídeo', weight:'221g'},
        {name:'Pro', screen:'Tela de 6.3 polegadas com ProMotion 12Hz e Always-On display', storage:'128GB, 256GB ou 512TB', battery:'29h de vídeo', weight:'199g'}
    ];

    return(

        <section id="colors" className="bg-black py-20 px-8 items-center">
            <div className="max-w-7xl m-auto text-center">
                <div className="text-cent mb-16">
                    <h2 className="text-5xl font-bold mb-4">Escolha sua cor</h2>
                    <p className="text-xl text-gray-400">Quatro acabamentos em titânio </p>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center  mb-12">
                <div className="relative w-full max-w-3xl">
                    <div className="relative flex items-center justify-center min-h[500px]">
                        <img src={colors.find(color =>color.id === selectedColor).image} alt="iphone 17" 
                        className="max-w-full max-h[600px] mx-auto items-center" />
                    </div>

                    <div className="absolute bottom-8 left-0 right-0 text-center">
                        <div className="px-8 py-4 rounded-full backdrop-blur-md bg-black/40 inline-block">
                            <h3 className="text-2xl font-bold">{colors.find(color=> color.id === selectedColor).name}</h3>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center relative gap-8 mt-5">
                    {colors.map((color)=>(
                        <button key={color.id} onClick={() => setSelectedColor(color.id)} className={`relative transition-all duration-300`}>
                            <div className={`w-16 h-16 rounded-full border-4 cursor-pointer  ${color.colorClass} ${selectedColor === color.id ?'border-white': 'border-transparent'}`}></div>
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 mt-9 gap-8  ">
                    {
                        models.map((model)=>(
                            <div className='bg-gradient-to-br from-gray-900 to-transparent rounded-3xl p-8 border border-gray-800'>
                                <div className='text-4xl mb-4'>📱</div>
                                <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                                <p className="text-gray-400 mb-1">{model.screen}</p>
                                <ul className="list-disc space-y-2 text-gray-300 p-3">
                                    <li>{model.storage}</li>
                                    <li>{model.battery}</li>
                                    <li>{model.weight}</li>
                                </ul>
                            </div>
                        ))
                    }
                
                </div>

                <div className="text-center mt-16 grid">
                        <button className="bg-blue-700 hover:bg-blue-800 text-white px-12 py-4 rounded-full text-lg font-mediium transition-all duration-300 mb-5 hover:scale-105 shodow-lg shadow-blue-500/50 cursor-pointer" >Compre agora á partir de R$ 9.950,00</button>
                        <p className="text-gray-400">Ou em ate 12x de R$ 994,92 sem juros</p>
                    </div>
            </div>
        </section>
    )
}

export default Colors