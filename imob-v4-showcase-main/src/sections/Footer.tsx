import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Column 1: Brand */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <img 
            src="https://painel.lipplead.com/wp-content/uploads/2026/03/LogoImobilist-1-scaled.png" 
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

           <div className="space-y-1 mt-2">
             <p>Imoblist Ltda</p>
             <p>Maringá - PR</p>
           </div>

           {/* Back to top - Mobile only */}
           <div className="flex md:hidden justify-center mt-6">
             <a 
               href="#hero_section" 
               className="flex flex-col items-center gap-2 text-gray-400 hover:text-accent transition-colors group"
             >
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-0.5 transition-transform"><path d="m18 15-6-6-6 6"/></svg>
               </div>
               <span className="text-sm font-medium">Voltar para o início</span>
             </a>
           </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© 2026 Todos os direitos reservados - Imoblist</p>
        <a href="https://www.imoblist.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          www.imoblist.com.br
        </a>
      </div>
    </footer>
  );
}
