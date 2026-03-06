import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home, Share2, Layout, Users, Mail, HelpCircle, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ShinyButton } from '@/components/ui/shiny-button';

const navItems = [
  { name: 'Início', href: '#hero_section', icon: Home },
  { name: 'Integração Meta', href: '#how_it_works_integration', icon: Share2 },
  { name: 'Landing pages', href: '#landing_page_features', icon: Layout },
  { name: 'Sobre nós', href: '#authority_and_cta', icon: Users },
  { name: 'Contato', href: '#contact', icon: Mail },
  { name: 'Faq', href: '#faq', icon: HelpCircle },
];

export function Navbar() {
  const [activeItem, setActiveItem] = useState('Início');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-center pointer-events-none",
          isScrolled ? "py-2" : "py-6"
        )}
      >
        <div className="w-full max-w-7xl flex items-center justify-between relative gap-4">
          {/* Logo - Left */}
          <div className="pointer-events-auto shrink-0">
            <a href="#" className="flex items-center gap-2">
              <img 
                src="https://painel.lipplead.com/wp-content/uploads/2026/03/LogoImobilist-1-scaled.png" 
                alt="Imoblist HUB Logo" 
                className="h-8 md:h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
          </div>

          {/* Centered Pill Navigation (Desktop) */}
          <nav className="hidden xl:flex pointer-events-auto justify-center flex-1 min-w-0">
            <div className="flex items-center gap-1 bg-[#0f172a]/90 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-lg shadow-black/20">
              {navItems.map((item) => {
                const isActive = activeItem === item.name;
                const Icon = item.icon;
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setActiveItem(item.name)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                      isActive 
                        ? "bg-blue-600/20 text-white shadow-sm" 
                        : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                    )}
                  >
                    <Icon size={16} className={cn(isActive ? "text-blue-400" : "text-gray-500")} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </nav>

          {/* CTA Button & Mobile Toggle - Right */}
          <div className="flex items-center gap-3 md:gap-4 pointer-events-auto shrink-0">
            <div className="block">
              <a href="#contact" className="flex items-center">
                <ShinyButton className="px-4 h-8 text-[10px] md:px-6 md:h-9 md:text-xs flex items-center justify-center whitespace-nowrap">
                  Começar Agora
                </ShinyButton>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="xl:hidden text-white p-2 bg-secondary/80 rounded-full border border-white/10 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-20 left-4 right-4 z-40 bg-[#0f172a]/95 backdrop-blur-xl border border-white/10 rounded-2xl xl:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-4 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.name;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                      isActive ? "bg-blue-600/20 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"
                    )}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Icon size={18} className={cn(isActive ? "text-blue-400" : "text-gray-500")} />
                    {item.name}
                  </a>
                );
              })}
              <div className="mt-4 pt-4 border-t border-white/10">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <ShinyButton className="w-full justify-center">
                    Começar Agora
                  </ShinyButton>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
