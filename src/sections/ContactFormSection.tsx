import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShinyButton } from '@/components/ui/shiny-button';
import { ArrowUp, CheckCircle2, X } from 'lucide-react';

export function ContactFormSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      // Reset form if needed, but for now we just show the success message
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[#050505] py-24 px-6 relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Fale com um especialista</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Preencha o formulário abaixo para tirar suas dúvidas ou solicitar uma demonstração. Nossa equipe entrará em contato em breve.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nome *</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp *</label>
                <input
                  type="tel"
                  id="whatsapp"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">E-mail</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Mensagem</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors resize-none"
                placeholder="Como podemos ajudar?"
              />
            </div>

            <div className="pt-4 flex flex-col items-center gap-6">
              <ShinyButton
                type="submit"
                disabled={isLoading}
                className="w-full md:w-auto px-12 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
              </ShinyButton>
            </div>
          </form>
        </motion.div>

        <div className="mt-14 flex justify-center">
          <a
            href="#hero_section"
            className="group inline-flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
              <ArrowUp size={22} className="group-hover:-translate-y-1 transition-transform duration-300" />
            </div>
            <span className="text-sm font-medium uppercase tracking-widest">Voltar ao topo</span>
          </a>
        </div>
      </div>

      {/* Success Popup Modal */}
      <AnimatePresence>
        {isSubmitted && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSubmitted(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-[#1a1a1a] border border-accent/20 rounded-2xl p-8 md:p-12 max-w-md w-full shadow-2xl text-center overflow-hidden"
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-accent/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-[-50%] right-[-50%] w-full h-full bg-blue-500/10 blur-[100px] rounded-full" />
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="relative z-10 flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent border border-accent/20 shadow-[0_0_30px_rgba(0,100,224,0.3)]">
                  <CheckCircle2 size={40} />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Obrigado!</h3>
                  <p className="text-gray-300 text-lg">
                    Seu formulário foi enviado com sucesso.
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Nossa equipe entrará em contato em breve.
                  </p>
                </div>

                <ShinyButton
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-8 py-3 w-full"
                >
                  Fechar
                </ShinyButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
