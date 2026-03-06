import { motion } from 'motion/react';
import { MousePointerClick, LayoutTemplate, Target, ArrowRight } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';

export function IdealCombinationSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Combinação ideal
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block px-6 py-2 rounded-full border border-accent/20 bg-accent/5 text-accent text-lg font-medium mb-6"
          >
            Integração Meta + Landing Pages
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Visual Flow Representation */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-8 rounded-2xl border border-white/5 bg-secondary/20 backdrop-blur-sm">
              <div className="flex flex-col gap-8 relative z-10">
                {/* Step 1: Ad */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <LayoutTemplate size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Passo 1</div>
                    <div className="font-semibold">Anúncio no Meta</div>
                  </div>
                </div>

                {/* Connector */}
                <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-gradient-to-b from-blue-500/20 via-accent/20 to-green-500/20" />

                {/* Step 2: Click */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                    <MousePointerClick size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Passo 2</div>
                    <div className="font-semibold">Clique Direcionado</div>
                  </div>
                </div>

                {/* Step 3: LP & Conversion */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
                    <Target size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Passo 3</div>
                    <div className="font-semibold">Conversão na LP</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray-300 leading-relaxed text-lg">
                Ao utilizar o catálogo com clique direcionando para a landing page do imóvel você proporciona uma jornada bem interessante, pois o usuário visualiza o anúncio e ao clicar é direcionado para a LP, onde tem fotos e outras informações do mesmo imóvel que viu, além de vários pontos de conversão.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="flex gap-4 items-start">
                <div className="mt-1 text-accent">
                  <Target size={20} />
                </div>
                <p className="text-gray-300 leading-relaxed">
                  As landing pages tem os principais pontos de conversão mapeados (Pixel), possibilitando a extração de dados em relatórios dentro da conta Meta da Imobiliária.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <a href="#contact">
            <ShinyButton className="hover:shadow-[0_0_30px_rgba(0,100,224,0.5)] px-8 py-4 text-lg">
              Quero saber mais
            </ShinyButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
