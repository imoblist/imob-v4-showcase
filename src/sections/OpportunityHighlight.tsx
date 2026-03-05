import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function OpportunityHighlight() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <section id="market_opportunity" ref={ref} className="bg-[#050505] py-10 md:py-20 px-6 md:px-12 lg:px-24">
      <motion.div 
        style={{ opacity, y }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
          O segredo dos grandes players <br className="hidden md:block" /> de e-commerce
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
          Agora as imobiliárias podem utilizar esta forma de anúncio no Facebook e Instagram que eram exploradas somente por grandes players do e-commerce.
        </p>
      </motion.div>
    </section>
  );
}
