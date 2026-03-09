import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const testimonials = [
  {
    quote: "A página para onde o usuário é enviado é um ponto muito importante. Este modelo foi desenvolvido com foco total em conversão, garantindo que cada clique tenha o máximo potencial de virar um lead qualificado.",
    name: "Modelo Silvio Iwata",
    designation: "Alta Conversão",
    src: "/assets/landing-page.jpeg",
  },
  {
    quote: "Design moderno e responsivo, ideal para lançamentos imobiliários. A estrutura foi pensada para destacar os diferenciais do empreendimento e facilitar o contato imediato.",
    name: "Modelo Ingaville",
    designation: "Lançamentos",
    src: "/assets/imagem-unica.webp",
  },
  {
    quote: "Focado em imóveis de alto padrão, este layout transmite sofisticação e exclusividade. As imagens ganham destaque e a navegação é fluida para um público exigente.",
    name: "Modelo Luxury",
    designation: "Alto Padrão",
    src: "/assets/imagem-carrossel.webp",
  },
  {
    quote: "Perfeito para captação de leads em volume. Com formulários estratégicos e chamadas para ação claras, este modelo é ideal para campanhas de Minha Casa Minha Vida.",
    name: "Modelo Popular",
    designation: "Volume de Leads",
    src: "/assets/carrossel.webp",
  },
  {
    quote: "Uma landing page institucional que apresenta a imobiliária com autoridade. Ideal para campanhas de branding e fortalecimento de marca no mercado local.",
    name: "Modelo Institucional",
    designation: "Branding",
    src: "/assets/imagem-celular-dois.webp",
  },
];

export function MockupCarouselLinks() {
  return (
    <section id="live_examples" className="bg-secondary border-y border-white/5 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Veja nossas Landing Pages em Ação</h2>
          <p className="text-gray-400">A página para onde o usuário é enviado é um ponto muito importante.</p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
