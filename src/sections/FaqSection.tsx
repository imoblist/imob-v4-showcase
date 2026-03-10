import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';

const faqs = [
  {
    question: "Tem limite de imóveis?",
    answer: "Não existe restrição da Meta em relação a quantidade de imóveis, já fizemos teste com cargas de 10 mil imóveis que integraram perfeitamente"
  },
  {
    question: "Tenho que fazer atualização manual dos anúncios?",
    answer: "Não, nosso sistema atualiza diariamente a conta Meta das imobiliárias, normalmente uma vez ao dia durante a madrugada"
  },
  {
    question: "Preciso ter um gestor de tráfego?",
    answer: "Sim, será necessário ter uma pessoa que faça a gestão dos anúncios, como se trata de um recurso mais avançado é fundamental ter um profissional com bom conhecimento, a fim de explorar o máximo de resultados"
  },
  {
    question: "Os imóveis são publicados no Facebook e Instagram?",
    answer: "Sim, simultaneamente em ambas as plataformas, sem retrabalho"
  },
  {
    question: "Como os anúncios são exibidos?",
    answer: "Os anúncios são apresentados da mesma forma que os patrocinado feitos de forma manual, em vários posicionamentos dentro do Facebook e Instagram"
  }
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-400">Tire suas dúvidas sobre o Imoblist HUB</p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-white/10 rounded-2xl bg-secondary/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-accent" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#contact">
            <ShinyButton className="px-8 py-4 text-lg">
              <span className="flex items-center gap-2">
                <MessageSquare size={20} />
                Faça sua pergunta
              </span>
            </ShinyButton>
          </a>
        </div>
      </div>
    </section>
  );
}
