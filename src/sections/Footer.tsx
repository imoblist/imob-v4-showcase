import { motion } from 'motion/react';

export function Footer() {
  const appVersion = import.meta.env.VITE_APP_VERSION || '1.0.6';
  const buildTime = import.meta.env.VITE_BUILD_TIME || 'N/A';

  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Column 1: Brand */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <img 
            src="/assets/footer-logo.svg" 
            alt="Imoblist HUB Logo" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <p className="text-gray-400 text-sm text-center md:text-left">
            Imoblist HUB é um produto da Imoblist Ltda
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="font-semibold text-white mb-2">Navegação</h3>
          <ul className="space-y-3 text-sm text-gray-400 text-center md:text-left">
            <li><a href="#hero_section" className="hover:text-accent transition-colors">Início</a></li>
            <li><a href="#how_it_works_integration" className="hover:text-accent transition-colors">Integração Meta</a></li>
            <li><a href="#landing_page_features" className="hover:text-accent transition-colors">Landing pages</a></li>
            <li><a href="#authority_and_cta" className="hover:text-accent transition-colors">Sobre nós</a></li>
            <li><a href="#contact" className="hover:text-accent transition-colors">Contato</a></li>
            <li><a href="#faq" className="hover:text-accent transition-colors">Faq</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-4 text-sm text-gray-400 text-center md:text-left">
           <h3 className="font-semibold text-white mb-2">Contato</h3>
           <div className="space-y-1">
             <p className="font-medium text-white">E-mail</p>
             <a href="mailto:contato@imoblist.com.br" className="hover:text-accent transition-colors">contato@imoblist.com.br</a>
           </div>
           
           <div className="space-y-1 mt-2">
             <p className="font-medium text-white">CNPJ</p>
             <p>32.253.725/0001-88</p>
           </div>

           <div className="space-y-1 mt-2 text-center md:text-left flex flex-col items-center md:items-start">
             <p>Imoblist Ltda</p>
             <p>Maringá - PR</p>
             <a 
               href="#hero_section" 
               className="md:hidden inline-block mt-4 text-accent hover:text-blue-400 transition-colors text-sm font-medium"
             >
               Voltar para o início
             </a>
           </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 Todos os direitos reservados - Imoblist - (build {buildTime}) - v{appVersion}</p>
        <a href="https://www.imoblist.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          www.imoblist.com.br
        </a>
      </div>
    </footer>
  );
}
