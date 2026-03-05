import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';

export function HowItWorksSection() {
  const steps = [
    {
      text: "O esforço por parte da imobiliária é bem pequeno, nós ficamos com a maior parte do trabalho, deixando o processo bem simples para nossos clientes."
    },
    {
      text: "Damos o treinamento para o time marketing, conduzindo juntamente desde a criação do catálogo, segmentação dos conjuntos de produtos e configuração das campanhas."
    },
    {
      text: "Não fazemos gestão de tráfego, ensinamos seu departamento de marketing a utilizar os recursos, o comando da estratégia fica com a imobiliária."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Como funciona?</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left Column: Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    <CheckCircle2 size={20} />
                  </div>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Meta Rule Warning */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accent/5 border border-accent/20 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertCircle size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4 text-accent">
                <AlertCircle size={24} />
                <h3 className="text-xl font-bold">Regra da Meta para local de conversão</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Ao utilizar catálogos a Meta não permite usar Whatsapp como local de conversão. Quando alguém clicar em um anúncio precisa ser direcionada para a página do imóvel correspondente.
              </p>
            </div>
          </motion.div>

        </div>

        <div className="flex justify-center">
          <a href="#contact">
            <ShinyButton className="px-8 py-3 text-base">
              Quero implementar na minha imobiliária
            </ShinyButton>
          </a>
        </div>
      </div>
    </section>
  );
}
