function Intro(){

    const specs= [
        {value:'6.3', label:'Display Super Retina XDR', color:'text-blue-600'},
        {value:'A18 Pro', label:'Chip mais rápido', color:'text-orange-500'},
        {value:'48MP', label:'Sistema de câmera', color:'text-blue-600'},
        {value:'29h', label:'Bateria', color:'text-orange-500'}
    ];

    return(
        <section className="bg-black py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-6xl md:text-8xl font-bold mb-6 ">iPhone 17 Pro</h1>
                <p className="text-2xl md:text-4xl " >Titâno. Tão Forte. Tão leve. Tão Pro.</p>
                <p>O desing mais refinado que já criamos. Titânio de grau auroespacial. Chip A18 Pro. Sistema de câmera Pro revolucionário.</p>
                <div>
                    <button>Compre Agora</button>
                    <button>Saiba Mais</button>
                </div>
            </div>
        </section>
    )4
}

export default Intro;