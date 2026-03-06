import { motion } from 'motion/react';
import { ShinyButton } from '@/components/ui/shiny-button';

// Animated Wireframe Icons
const WireframeIcon = ({ type }: { type: string }) => {
  const strokeColor = "var(--color-accent)"; // Using the accent color variable
  const transition = {
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "reverse" as const
  };

  const pathVariants: any = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  switch (type) {
    case 'house':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
          <motion.path d="M9 22V12h6v10" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.5 }} />
        </svg>
      );
    case 'building':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
          <motion.path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.3 }} />
          <motion.path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.6 }} />
          <motion.path d="M10 6h4" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.8 }} />
          <motion.path d="M10 10h4" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 1.0 }} />
          <motion.path d="M10 14h4" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 1.2 }} />
          <motion.path d="M10 18h4" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 1.4 }} />
        </svg>
      );
    case 'key':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
        </svg>
      );
    case 'map':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
          <motion.circle cx="12" cy="10" r="3" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.5 }} />
        </svg>
      );
    case 'dollar':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.rect x="2" y="5" width="20" height="14" rx="2" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
          <motion.line x1="2" y1="10" x2="22" y2="10" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.4 }} />
        </svg>
      );
    case 'star':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
        </svg>
      );
    case 'bed':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M2 4v16" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
          <motion.path d="M2 8h18a2 2 0 0 1 2 2v10" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.2 }} />
          <motion.path d="M2 17h20" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.4 }} />
          <motion.path d="M6 8v9" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.6 }} />
        </svg>
      );
    case 'tree':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M12 22v-9" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
          <motion.path d="M12 13l-5-5 5-5 5 5-5 5" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.2 }} />
          <motion.path d="M12 13l-7 4 7-4 7 4-7-4" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.4 }} />
        </svg>
      );
    default:
      return null;
  }
};

const cards = [
  { title: "VENDA", type: "dollar" },
  { title: "LOCAÇÃO", type: "key" },
  { title: "APARTAMENTOS", type: "building" },
  { title: "CASAS", type: "house" },
  { title: "POR BAIRRO", type: "map" },
  { title: "ALTO PADRÃO", type: "star" },
  { title: "LANÇAMENTOS", type: "building" },
  { title: "ATÉ R$ 500K", type: "dollar" },
  { title: "3 QUARTOS", type: "bed" }
];

export function SegmentationShowcase() {
  return (
    <section id="ad_segmentation" className="bg-background py-24 px-6 overflow-hidden relative">
      <div className="max-w-5xl mx-auto flex flex-col gap-8 text-center mb-16 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Conjunto de anúncios e Segmentações
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-400 max-w-3xl mx-auto"
        >
          Crie várias segmentações alinhadas com as estratégias de campanha: IMÓVEIS DE VENDA, LOCAÇÃO, APARTAMENTOS, POR BAIRRO, POR FAIXA DE VALOR, etc.
        </motion.p>
      </div>

      {/* Marquee Effect with Cards */}
      <div className="relative flex overflow-hidden py-4 mask-gradient mb-16">
        <div className="animate-marquee flex gap-6 items-center">
          {[...cards, ...cards, ...cards].map((card, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, scale: 1.05 }}
              className="
                flex flex-col items-center justify-center gap-4 
                min-w-[200px] h-[200px] p-6 rounded-2xl border backdrop-blur-sm
                transition-all duration-300 cursor-pointer
                bg-accent/5 border-accent/20 text-accent
                hover:bg-accent/10 hover:shadow-[0_0_30px_rgba(0,100,224,0.15)]
                group
              "
            >
              <div className="p-4 rounded-full bg-background/50 backdrop-blur-md shadow-inner group-hover:scale-110 transition-transform duration-300">
                <WireframeIcon type={card.type} />
              </div>
              <span className="font-bold tracking-wider text-sm">{card.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center relative z-10">
        <a href="#contact">
          <ShinyButton className="px-8 py-3 text-base">
            Quero segmentação inteligente
          </ShinyButton>
        </a>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
