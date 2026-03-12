function Highlights(){

    const cards = [
        {value:'48MB', label:'Principal', description:"Sensor quad-pixel com foco automático",color:'text-blue-600'},
        {value:'12MB', label:'Ultra Wide', description:'Campo de visão de 120° com modo noturno', color:'text-orange-500'},
        {vaue:'12MB', label:'Telefoto 5x', description:'Zoom óptico de 5x com estabilização', color:'text-blue-600'}
    ]
    return(
        <section className="bg-black py-20 px-6" id="desing">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">Desing Revolucionario</h2>
                    <p className="text-xl text-gray-400">Cada detalhe foi pensado para criar a melhor experiência./</p>
                </div>

                <div className="grid grid-cols-2 gap-8 mb-16">
                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img src="../../public/img/titanium-desing.jpg" alt="desing iphone 17" className="w-full rounded-2xl mb-4" />
                        <h3 className="font-bold mb-2 text-3xl">Titânio Premium</h3> 
                        <p className="text-gray-300">Estrutura em titânio de grau de aeroespacial. O smartphone mais forte e leve.</p>
                    </div>

                    <div className="bg-gray-900 rounded-3xl p-8">
                        <img src="../../public/img/ios-features.webp" alt="ios 2025" className="w-full rounded-2xl mb-4" />
                        <h3 className="font-bold mb-2 text-3xl">IOS 26</h3>
                        <p className="text-gray-300">O Sistema operacional mais avançado do mundo com IA integrada.</p>
                    </div>
                </div>

                <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="perfomarce">
                    <h3 className="text-4xl font-bold mb-6 text-gradient">A18 Pro</h3>
                    <p className="text-gray-300 mb-6">O chip mais poderoso em um smartphone</p>
                    <img className="w-full rounded-2xl mb-4" src="../.public/img/chip-a18-pro.jpg" alt="chip a18" />
                    <ul className="space-y-3 text-gray-300 list-disc">
                        <li className="mb-3">CPU 20% mais rapida</li>
                        <li className="mb-3">GPU 25% mais eficiente</li>
                        <li className="mb-3">Neural Engine com 16 núcleos</li>
                        <li>Ray tracing acelerado por hardware</li>
                    </ul>
                </div>

                <div className="text-center]" id="camera">
                    <h3 className="font-bold text-xl mb-10">Sistema de câmera Pro avançado</h3>
                    <div className="grid grid-cols-3 gap-6">
                        {
                            cards.map((card,index)=>(
                                <div key={index} className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all
                                duration-300">
                                    <div className={`${card.color} text-4xl font-bold mb-4`}>{card.value}</div>
                                    <h4 className="text-xl font-semibold mb-2">{card.label}</h4>
                                    <p className="text-gray-400">{card.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Highlights