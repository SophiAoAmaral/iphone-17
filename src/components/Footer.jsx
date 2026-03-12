function Footer(){
    const sections = [
  {title: 'Comprar e Saber Mais', links: ['iPhone 17 Pro', 'iPhone 17 Pro Max', 'Comparar modelos', 'Acessórios']},
  {title: 'Especificações', links: ['Características técnicas', 'Câmera', 'Bateria', 'Display']},
  {title: 'Suporte', links: ['Suporte ao iPhone', 'AppleCare+', 'iOS 19', 'Contato']},
  {title: 'Apple', links: ['Sobre a Apple', 'Newsroom', 'Privacidade', 'Carreiras']}
];

const bootomLinks = ['Politica de Privacidade', 'Termos de Uso', 'Vendas']
    return(
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    {
                        sections.map((section, i)=>(
                            <div key={i}>
                                <h4 className="font-semibold mb-4">{section.title}</h4>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    {
                                        section.links.map((link , index)=>(
                                            <li key={index}>
                                                <a className=" hover:text-white" href="/">{link}
                                                </a>
                                                </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
                <div className="border-t border-gray-800 pt-6">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">Copyright © 2025 Apple Inc. Todos os direitos reservados.</p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        {
                            bootomLinks.map((link, i)=>(
                                <a key={i} href="/" className="hover:text-white text-xs">{link}</a>
                            ))
                        }
                    </div>
                </div>
            </div>
            </div>
            


        </footer>
    )
}

export default Footer