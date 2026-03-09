import { motion } from 'motion/react';
import { Target, MousePointerClick, Layout } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';

export function LPComparisonSection() {
  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Landing Pages VS Páginas comuns</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-accent/5 border border-accent/10 rounded-2xl p-8 md:p-12 relative mb-12"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-4 rounded-full border border-accent/20 shadow-lg">
            <Target className="w-8 h-8 text-accent" />
          </div>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Landing pages são páginas pensadas para converter, por isso são objetivas e focadas no imóvel que está sendo apresentado, trazendo apenas conteúdo do mesmo, sem distrações e com os CTA's (Call to Action - chamada para ação) devidamente posicionados, com textos e cores que favorecem a conversão.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Target size={24} />
              </div>
              <span className="text-sm font-medium text-gray-400">Foco no Imóvel</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Layout size={24} />
              </div>
              <span className="text-sm font-medium text-gray-400">Sem Distrações</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <MousePointerClick size={24} />
              </div>
              <span className="text-sm font-medium text-gray-400">Alta Conversão</span>
            </div>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <a href="#contact">
            <ShinyButton className="px-8 py-3 text-base">
              Quero ter landing pages de alta conversão
            </ShinyButton>
          </a>
        </div>

      </div>
    </section>
  );
}
