import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';

export function LPHeroSolution() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="landing_pages_solution" className="bg-gradient-to-b from-primary to-background py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text */}
        <div className="order-1 lg:order-1 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Criador de Landing Pages
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-lg text-gray-400 leading-relaxed"
          >
            <p>
              Desenvolvemos uma ferramenta que cria uma LP para cada imóvel, com carregamento rápido e focada em alta conversão, servindo como um filtro de qualificação de leads e proporcionado uma apresentação diferenciada para seus produtos
            </p>
            <p>
              Estas páginas podem ser utilizadas junto com a Integração Meta ou separadamente, aplicando em várias situações como TikTok, You Tube, placas, para corretores compartilharem, etc
            </p>
            <p>
              São compatíveis com Venda, Locação e Lançamentos
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-200 font-medium text-lg group"
            >
              Ler mais
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-1" />
              ) : (
                <ChevronDown className="w-5 h-5 transition-transform group-hover:translate-y-1" />
              )}
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 space-y-6 text-lg text-gray-400 leading-relaxed text-left">
                    <p>
                      Quando uma imobiliária ou construtora precisa de uma landing page, é necessário desenvolver uma página para cada imóvel, ficando inviável criar para todo o estoque. Para desenvolvemos uma solução que consegue criar uma LP para um dos imóveis de forma dinâmica, apresentando as informações contidas nos arquivos XML enviados pelos CRMs, ou seja, se uma imobiliária possuir 2 mil imóveis ela terá uma LP para cada um
                    </p>
                    <p>
                      Podem ser utilizadas nas campanhas de anúncios Meta e também em outras aplicações (vinculadas a outros tipos de anúncios, placas dos imóveis, usadas no dia a dia dos corretores para compartilhamentos etc).
                    </p>
                    <p>
                      Nós também criamos uma forma de utilizar o domínio principal de nossos clientes ao invés do nosso (exemplo - landingpage.nomedaimobiliaria.com.br).
                    </p>
                    
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
          </motion.div>
        </div>

        {/* Image */}
        <div className="order-2 lg:order-2 w-full flex flex-col items-center justify-center">
          <img 
            src="https://painel.lipplead.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-03-at-09.55.08.jpeg" 
            alt="Criador de Landing Pages" 
            className="w-full max-w-xs rounded-2xl shadow-2xl border border-white/10"
            referrerPolicy="no-referrer"
          />
          <p className="text-xs text-gray-400 mt-2 text-center italic">*Imagem de anúncio meramente ilustrativa</p>
        </div>

      </div>
    </section>
  );
}
