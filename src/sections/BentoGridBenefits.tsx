import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { ShinyButton } from '@/components/ui/shiny-button';
import { 
  ReachIcon, 
  CompetitionIcon, 
  CPCIcon, 
  NoCreativesIcon, 
  AutomationIcon, 
  CRMIntegrationIcon, 
  StrategyIcon, 
  BrandIcon 
} from '@/components/ui/glass-icons';

const benefits = [
  {
    icon: ReachIcon,
    title: "Maior alcance",
    description: "Com mais imóveis anunciados você alcança mais pessoas"
  },
  {
    icon: CompetitionIcon,
    title: "Pouca concorrência",
    description: "Destaque-se em sua cidade, pois poucas imobiliárias conhecem esse recurso"
  },
  {
    icon: CPCIcon,
    title: "CPC mais baixo",
    description: "Otimize seu orçamento com custo por clique reduzido"
  },
  {
    icon: NoCreativesIcon,
    title: "Sem criativos manuais",
    description: "Os anúncios gerados automaticamente, sem necessidade de criativos"
  },
  {
    icon: AutomationIcon,
    title: "Anúncios automatizados",
    description: "Seu estoque integrado, e atualizado diariamente sem esforço manual"
  },
  {
    icon: CRMIntegrationIcon,
    title: "Integração CRM",
    description: "Integramos ao seu CRM, sem necessidade de trocar"
  },
  {
    icon: StrategyIcon,
    title: "Estratégia no comando",
    description: "Você tem a vantagem de gerenciar a estratégia das campanhas conforme seus interesses"
  },
  {
    icon: BrandIcon,
    title: "Sua marca",
    description: "Tudo roda dentro de sua conta Meta, valorizando sua marca"
  }
];

export function BentoGridBenefits() {
  return (
    <section id="meta_integration_benefits" className="bg-background py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold">Veja as vantagens que você pode ter</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.03)" }}
              className={cn(
                "p-6 rounded-3xl border border-white/10 bg-secondary/50 backdrop-blur-sm",
                "flex flex-col gap-4 hover:border-accent/50 transition-colors duration-300 group relative overflow-hidden"
              )}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-full h-40 flex items-center justify-center relative z-10">
                <div className="absolute inset-0 bg-accent/10 blur-[40px] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                <benefit.icon />
              </div>
              
              <div className="text-center relative z-10">
                <h4 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{benefit.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <a href="#contact">
            <ShinyButton className="px-8 py-3 text-base">
              Quero aproveitar essas vantagens
            </ShinyButton>
          </a>
        </div>
      </div>
    </section>
  );
}
