import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';

export function AuthorityFooterCTA() {
  return (
    <section id="authority_and_cta" className="bg-accent text-white py-24 px-6 text-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">25 Anos de paixão pelo Mercado Imobiliário</h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            A Imoblist foi fundada em 2018, porém atuamos a mais de 25 anos trazendo inovação para imobiliárias, corretores e construtoras. Conhecemos bem sobre as dores e necessidade de nossos clientes e buscamos desenvolver soluções que venham contribuir e ajudar na geração de resultados
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative mt-8"
        >
          <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 animate-pulse"></div>
          <a 
            href="#contact"
          >
            <ShinyButton className="[--shiny-cta-bg:white] [--shiny-cta-bg-subtle:#e5e5e5] [--shiny-cta-fg:var(--color-accent)] [--shiny-cta-highlight:var(--color-accent)] hover:shadow-2xl border-none">
              <span className="flex items-center gap-3">
                <MessageCircle size={24} />
                Fale com um especialista
              </span>
            </ShinyButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
