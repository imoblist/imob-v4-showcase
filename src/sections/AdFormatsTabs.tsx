import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Image as ImageIcon, Layers, Grid } from 'lucide-react';
import { ShinyButton } from '@/components/ui/shiny-button';

const tabs = [
  { id: 'single', label: 'Imagem Única', icon: ImageIcon },
  { id: 'carousel', label: 'Carrossel', icon: Layers },
  { id: 'collection', label: 'Coleção', icon: Grid },
];

const tabImages: Record<string, string> = {
  single: '/assets/imagem-unica.webp',
  carousel: '/assets/imagem-carrossel.webp',
  collection: '/assets/carrossel.webp',
};

export function AdFormatsTabs() {
  const [activeTab, setActiveTab] = useState('carousel');

  return (
    <section id="ad_formats" className="bg-primary border-t border-white/5 py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        
        {/* Left: Content & Tabs */}
        <div className="md:col-span-5 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Alguns exemplos de modelos de anúncios</h2>
          <p className="text-gray-400 mb-8">
            Não há necessidade de fazer criativos, pois a Meta já possui seu “template” para anúncios com controles dinâmicos de VALOR, DESCRIÇÃO e BAIRRO.
          </p>

          <div className="flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300",
                  activeTab === tab.id 
                    ? "bg-accent text-white shadow-lg shadow-accent/20" 
                    : "bg-secondary/50 text-gray-400 hover:bg-secondary hover:text-white"
                )}
              >
                <tab.icon size={20} />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Mockup Display */}
        <div className="md:col-span-7 flex flex-col items-center justify-center">
          <div className="relative w-[300px] h-[600px] bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
            {/* Phone Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>
            
            {/* Screen Content */}
            <div className="w-full h-full bg-black">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeTab}
                  src={tabImages[activeTab]}
                  alt={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className={cn(
                    "w-full h-full object-fill"
                  )}
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-3 text-center font-medium">*Imagem de anúncio meramente ilustrativa</p>
        </div>

      </div>

      <div className="flex justify-center">
        <a href="#contact">
          <ShinyButton className="px-8 py-3 text-base">
            Quero anúncios dinâmicos
          </ShinyButton>
        </a>
      </div>
    </section>
  );
}
