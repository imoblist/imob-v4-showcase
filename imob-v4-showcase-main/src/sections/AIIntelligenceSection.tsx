import { motion } from 'motion/react';
import { TrendingUp, DollarSign } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';

export function AIIntelligenceSection() {
  return (
    <section id="budget_intelligence" className="bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 p-6 rounded-full bg-accent/10 border border-accent/20"
        >
          <TrendingUp size={48} className="text-accent" />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">Inteligência na Distribuição de Verba</h2>
        <p className="text-lg text-gray-400 max-w-2xl mb-12">
          O valor de verba é colocado sobre todos os imóveis do catálogo. A inteligência da Meta usa o valor conforme a performance de cada imóvel, com base em interesses, intenções e ações dos usuários.
        </p>

        {/* Visual Diagram */}
        <div className="relative w-full max-w-lg h-64 bg-secondary/30 rounded-2xl border border-white/5 flex items-end justify-center gap-4 p-8 overflow-hidden mb-16">
            {/* Budget Source */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-black font-bold shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                    <DollarSign />
                </div>
                <div className="h-8 w-0.5 bg-gradient-to-b from-green-500 to-transparent"></div>
            </div>

            {/* Bars */}
            {[40, 75, 55, 90, 30].map((height, i) => (
                <motion.div
                    key={i}
                    className="w-12 bg-blue-600 rounded-t-lg relative group"
                    initial={{ height: 10 }}
                    whileInView={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                >
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg"></div>
                    {/* Performance Indicator */}
                    {height > 80 && (
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: -10 }}
                            transition={{ delay: 1 }}
                            className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-green-400"
                        >
                            
                        </motion.div>
                    )}
                </motion.div>
            ))}
        </div>

        <div className="flex justify-center">
          <a href="#contact">
            <ShinyButton className="px-8 py-3 text-base">
              Quero essa inteligência em meus anúncios
            </ShinyButton>
          </a>
        </div>
      </div>
    </section>
  );
}
