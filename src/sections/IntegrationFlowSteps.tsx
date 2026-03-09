import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShinyButton } from '@/components/ui/shiny-button';
import { ChevronDown, ChevronUp, CheckCircle2, X } from 'lucide-react';

export function IntegrationFlowSteps() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section 
      id="how_it_works_integration" 
      className="relative w-full min-h-[900px] h-auto overflow-hidden flex items-center py-24"
    >
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(min-width: 768px)" srcSet="/assets/fundo-pc.webp" />
          <img 
            src="/assets/fundo-mobile.webp" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </picture>
        {/* Top Gradient Fade for Smooth Transition */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-background via-background/60 to-transparent z-10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-end md:justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center md:text-left mt-48 md:mt-0"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Integração de imóveis ao Meta ADS</h2>
            <p className="text-lg text-gray-400 leading-relaxed mb-4">
              Não há necessidade de trocar seu sistema CRM. Nós importamos os imóveis do mesmo, com atualizações diárias de novos itens cadastrados, alterados ou baixados.
            </p>

            {/* Read More Toggle */}
            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mx-auto md:mx-0 font-medium mb-4"
            >
                {isExpanded ? 'Ler menos' : 'Ler mais'}
                {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {/* Expanded Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden text-left"
                    >
                        <div className="relative bg-secondary/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 mt-4 space-y-6 shadow-2xl">
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                                aria-label="Fechar"
                            >
                                <X size={20} />
                            </button>

                            <div>
                                <h3 className="text-xl font-bold text-white">Imobiliárias, corretores e construtoras</h3>
                                <p className="text-accent font-medium">Uma nova forma de anunciar seus imóveis!</p>
                            </div>

                            <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                                <p>
                                    Muitas imobiliárias ainda fazem anúncios de forma manual, precisando desenvolver criativos para cada imóvel, selecionando apenas alguns e deixando todo o restante do estoque de venda e locação de fora dos anúncios. A maioria dos CRMs imobiliárias não oferece integração XML do catálogo, e, mesmo que ofereça, as imobiliárias não tem conhecimento para utilizar e configurar as campanhas desta forma
                                </p>
                                <p>
                                    O anúncio por catálogo é uma ferramenta muito poderosa e interessante:
                                </p>
                            </div>

                            <ul className="space-y-4">
                                {[
                                    { title: "Proporciona maior alcance", text: "Colocando mais imóveis em anúncio você alcança mais pessoas, pois o algoritmo da Meta mostra produtos com base nos interesses, intenções e ações" },
                                    { title: "Pouca concorrência já que raras imobiliárias fazem", text: "Este recurso da Meta é pouco conhecido e explorado pelo mercado imobiliário, algumas vezes a imobiliária até conhece, porém esbarra na ausência ou falha da integração por seu sistema. Em outras situações o marketing até consegue integrar e usar os catálogos, no entanto as campanhas geram pouco resultado e acabam desistindo. Isso ocorre por alguns motivos como falha na gestão do tráfego e estratégia e falta de landing pages de alta conversão" },
                                    { title: "Custo por clique mais baixo (CPC)", text: "A verba é colocar sobre o catálogo todo e não sobre um imóvel, com isso o algoritmo da Meta consegue otimizar o valor que será distribuído conforme a performance de cada imóvel" },
                                    { title: "Não precisa fazer criativos", text: "A Meta possui um modelo (template) para anúncios de catálogo, desta não é necessário fazer os criativos, sendo ainda possível controlar de forma dinâmica algumas informações mostradas como descrição, valor etc, respectivamente de cada imóvel" },
                                    { title: "Anúncios automatizados com atualização diária de todo o inventário", text: "Nosso sistema se encarrega de puxar as informações de seu CRM a atualizar junto a Meta, tudo de forma automática e diária, normalmente feito de madrugada. Imóveis incluídos, alterados ou baixados serão atualizados, e o interessante é que as companhias não serão pausadas" },
                                    { title: "Integrados com seu CRM e não precisa trocar o mesmo", text: "Não existe a necessidade de trocar seu sistema, integramos como o mesmo de forma simples e rápida, tanto o recebimento de imóveis quanto a possibilidade de envio dos leads gerado" },
                                    { title: "Fica no comando da estratégia", text: "Ao contrário de outras plataformas de anúncios no Meta ADS que comanda a estratégia é você, definindo quanto investir, onde etc. Nós não somos agência, e sim uma empresa de tecnologia, não interferimos na sua gestão de tráfego, apenas contribuímos com opiniões" },
                                    { title: "Investe em sua própria marca pois tudo é feito dentro de sua conta Meta", text: "Ao contrário de outras plataformas os anúncios são feitos na conta da imobiliária, então todo a verba alocada, tráfego e visibilidade gerada mostram a sua marca" }
                                ].map((item, index) => (
                                    <li key={index} className="flex gap-3 text-sm text-gray-300">
                                        <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={16} />
                                        <span>
                                            <strong className="text-white block mb-1">{item.title}</strong>
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <a href="#contact">
                                    <ShinyButton className="w-full">
                                        Tenho Interesse
                                    </ShinyButton>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <p className={`text-sm text-blue-400 font-bold mb-8 bg-accent/10 inline-block px-4 py-2 rounded-lg border border-accent/20 ${isExpanded ? 'mt-6' : ''}`}>
              (Recomendado: acima de 100 imóveis e gestor de tráfego)
            </p>
            
            <div className="mb-6">
              <a href="#contact">
                <ShinyButton className="hover:shadow-[0_0_30px_rgba(0,100,224,0.5)]">
                  Quero Integrar Meu CRM
                </ShinyButton>
              </a>
            </div>
          </motion.div>

          {/* Empty column to maintain grid structure on desktop, content removed as requested */}
          <div className="hidden md:block"></div>

        </div>
      </div>
    </section>
  );
}
