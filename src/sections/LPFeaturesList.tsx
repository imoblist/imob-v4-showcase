import { motion } from 'motion/react';

// Animated Wireframe Icons
const WireframeIcon = ({ type }: { type: string }) => {
  const strokeColor = "var(--color-accent)";
  
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
    case 'palette':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9c0 2.5 1.02 4.76 2.67 6.37" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
          <motion.circle cx="7.5" cy="10.5" r="1.5" stroke={strokeColor} strokeWidth="1.5" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.3 }} />
          <motion.circle cx="12" cy="7.5" r="1.5" stroke={strokeColor} strokeWidth="1.5" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.5 }} />
          <motion.circle cx="16.5" cy="10.5" r="1.5" stroke={strokeColor} strokeWidth="1.5" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.7 }} />
          <motion.path d="M12 21a9 9 0 0 1-2.67-17.63" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.9 }} />
        </svg>
      );
    case 'globe':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.circle cx="12" cy="12" r="10" stroke={strokeColor} strokeWidth="1.5" variants={pathVariants} initial="hidden" whileInView="visible" />
          <motion.path d="M2 12h20" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.3 }} />
          <motion.path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.6 }} />
        </svg>
      );
    case 'funnel':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
        </svg>
      );
    case 'webhook':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M18 8a3 3 0 1 0-3-3" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
          <motion.path d="M18 16a3 3 0 1 0 3 3" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.2 }} />
          <motion.path d="M6 16a3 3 0 1 0-3 3" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.4 }} />
          <motion.path d="M12 12a3 3 0 1 0 3-3" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.6 }} />
          <motion.path d="M8.7 17.3l2.6-2.6" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.8 }} />
          <motion.path d="M12.7 12.7l2.6 2.6" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 1.0 }} />
        </svg>
      );
    case 'message':
      return (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <motion.path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" />
          <motion.path d="M8 11h.01" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.5 }} />
          <motion.path d="M12 11h.01" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.7 }} />
          <motion.path d="M16 11h.01" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" variants={pathVariants} initial="hidden" whileInView="visible" transition={{ delay: 0.9 }} />
        </svg>
      );
    default:
      return null;
  }
};

const featuresLeft = [
  {
    type: "palette",
    title: "Identidade visual",
    description: "Configuramos o visual para seguir a identidade da sua imobiliária (Cores, fontes, logo)"
  },
  {
    type: "globe",
    title: "Seu domínio principal",
    description: "Usamos subdomínios ligados ao seu domínio (ex: landingpage.suaimobiliaria.com.br) para que todo o tráfego seja seu"
  }
];

const featuresRight = [
  {
    type: "funnel",
    title: "Leads no CRM",
    description: "Integração via webhook para que os leads caiam direto no seu sistema"
  },
  {
    type: "message",
    title: "Contato WhatsApp",
    description: "Leads direcionados para seu Whatsapp com mensagens pré-definidas e integração a ferramentas como a Lais"
  }
];

export function LPFeaturesList() {
  return (
    <section id="landing_page_features" className="bg-background py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Configuradas para a sua marca</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center w-full">
          
          {/* Left Column */}
          <div className="space-y-12 order-2 lg:order-1 flex flex-col justify-center w-full">
            {featuresLeft.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center lg:items-end text-center lg:text-right group px-4 lg:px-0"
              >
                <div className="mb-4 shrink-0 w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-md shadow-inner border border-white/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                  <WireframeIcon type={feature.type} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-sm lg:ml-auto">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column - Image */}
          <div className="order-1 lg:order-2 flex flex-col justify-center items-center w-full relative pt-8 lg:pt-0 pb-8 lg:pb-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 flex flex-col items-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]"
            >
              <img 
                src="/assets/imagem-celular-dois.webp" 
                alt="Mobile Landing Page Preview" 
                className="w-full h-auto object-contain drop-shadow-2xl z-20"
                referrerPolicy="no-referrer"
              />
              {/* Glow effect behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-accent/20 blur-[100px] z-0 rounded-full pointer-events-none" />
              <p className="text-xs text-gray-400 mt-6 text-center z-20 w-full font-medium">*Imagem de anúncio meramente ilustrativa</p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-12 order-3 lg:order-3 flex flex-col justify-center w-full">
            {featuresRight.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left group px-4 lg:px-0"
              >
                <div className="mb-4 shrink-0 w-16 h-16 rounded-2xl bg-background/50 backdrop-blur-md shadow-inner border border-white/5 flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                  <WireframeIcon type={feature.type} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-sm lg:mr-auto">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
