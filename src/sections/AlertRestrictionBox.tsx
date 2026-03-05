import { AlertTriangle } from 'lucide-react';
import { motion } from 'motion/react';

export function AlertRestrictionBox() {
  return (
    <section id="meta_rule_restriction" className="px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto bg-secondary rounded-2xl border border-red-500/20 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_50px_rgba(239,68,68,0.05)]"
      >
        <div className="shrink-0 w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
          <AlertTriangle size={32} />
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold mb-2 text-white">Regra de Meta para local de conversão</h3>
          <p className="text-gray-400">
            Ao utilizar catálogos a Meta não permite usar Whatsapp como local de conversão. Quando alguém clicar em <span className="text-white font-bold">SAIBA MAIS</span>, precisa ser direcionada para a página do imóvel correspondente.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
