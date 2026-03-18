import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import navbarLogo from '../../assets/logo-imoblist-hub-2.svg';
import { Home, Share2, Layout, Users, Mail, HelpCircle, Menu, X } from 'lucide-react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Início', href: '#hero_section', icon: Home },
  { name: 'Integração Meta', href: '#how_it_works_integration', icon: Share2 },
  { name: 'Landing pages', href: '#landing_pages_solution', icon: Layout },
  { name: 'Sobre nós', href: '#authority_and_cta', icon: Users },
  { name: 'Contato', href: '#contact', icon: Mail },
  { name: 'Faq', href: '#faq', icon: HelpCircle },
];

const whatsappMessage = encodeURIComponent(
  'Olá! Tenho interesse e quero mais informações sobre o Imoblist HUB, por favor.'
);

const whatsappLinks = {
  mobile: `https://wa.me/5544999733080?text=${whatsappMessage}`,
  desktop: `https://web.whatsapp.com/send?phone=5544999733080&text=${whatsappMessage}`,
};

export function Navbar() {
  const [activeItem, setActiveItem] = useState('Início');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileViewport, setIsMobileViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1279px)');

    const handleViewportChange = (event: MediaQueryListEvent) => {
      setIsMobileViewport(event.matches);
    };

    setIsMobileViewport(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleViewportChange);

    return () => mediaQuery.removeEventListener('change', handleViewportChange);
  }, []);

  const whatsappHref = useMemo(() => {
    return isMobileViewport ? whatsappLinks.mobile : whatsappLinks.desktop;
  }, [isMobileViewport]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex justify-center pointer-events-none',
          isScrolled ? 'py-2' : 'py-6'
        )}
      >
        <div className="w-full relative gap-4 flex items-center justify-between xl:grid xl:grid-cols-3 xl:gap-0">
          {/* Logo - Left */}
          <div className="pointer-events-auto shrink-0 flex items-center h-full xl:justify-start xl:pl-8">
            <a href="#" className="flex items-center gap-2">
              <img
                src={navbarLogo}
                alt="Imoblist HUB Logo"
                className="h-9 sm:h-14 md:h-16 lg:h-[4.5rem] xl:h-8 max-w-[198px] sm:max-w-[265px] md:max-w-[331px] lg:max-w-[397px] xl:max-w-[163px] w-auto object-contain transition-all duration-300"
              />
            </a>
          </div>

          {/* Centered Pill Navigation (Desktop) */}
          <nav className="hidden xl:flex pointer-events-auto justify-center min-w-0">
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
                      'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap',
                      isActive
                        ? 'bg-blue-600/20 text-white shadow-sm'
                        : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                    )}
                  >
                    <Icon size={16} className={cn(isActive ? 'text-blue-400' : 'text-gray-500')} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </nav>

          {/* CTA Button & Mobile Toggle - Right */}
          <div className="flex items-center gap-3 md:gap-4 pointer-events-auto shrink-0 xl:justify-end xl:pr-8">
            <div className="hidden xl:block">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp com a equipe da Imoblist"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-2 text-sm font-semibold transition-colors duration-300 pulse-shadow"
              >
                <IconBrandWhatsapp size={18} />
                <span>Fale pelo Whatspp</span>
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
                      'flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                      isActive ? 'bg-blue-600/20 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    )}
                    onClick={() => {
                      setActiveItem(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Icon size={18} className={cn(isActive ? 'text-blue-400' : 'text-gray-500')} />
                    {item.name}
                  </a>
                );
              })}
              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar no WhatsApp com a equipe da Imoblist"
                  className="inline-flex w-full justify-center items-center gap-2 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white px-5 py-3 text-sm font-semibold transition-colors duration-300 pulse-shadow"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <IconBrandWhatsapp size={18} />
                  <span>Fale pelo Whatspp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile floating WhatsApp CTA */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a equipe da Imoblist"
        className={cn(
          'xl:hidden fixed bottom-5 z-50 inline-flex items-center bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full pulse-shadow',
          'transition-[left,transform,padding,width,border-radius,background-color] duration-500 ease-out',
          isScrolled
            ? 'left-4 -translate-x-0 px-3 py-3 w-auto justify-center'
            : 'left-1/2 -translate-x-1/2 px-6 py-3 min-w-[220px] justify-center'
        )}
      >
        <IconBrandWhatsapp size={24} className="shrink-0" />
        <span
          className={cn(
            'overflow-hidden whitespace-nowrap transition-all duration-500 ease-out',
            isScrolled ? 'max-w-0 opacity-0 ml-0 -translate-x-2' : 'max-w-[180px] opacity-100 ml-2 translate-x-0'
          )}
          aria-hidden={isScrolled}
        >
          Fale pelo Whatspp
        </span>
      </a>
    </>
  );
}
