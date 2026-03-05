import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const testimonials = [
  {
    quote: "A página para onde o usuário é enviado é um ponto muito importante. Este modelo foi desenvolvido com foco total em conversão, garantindo que cada clique tenha o máximo potencial de virar um lead qualificado.",
    name: "Modelo Silvio Iwata",
    designation: "Alta Conversão",
    src: "https://picsum.photos/seed/realestate1/600/400",
  },
  {
    quote: "Design moderno e responsivo, ideal para lançamentos imobiliários. A estrutura foi pensada para destacar os diferenciais do empreendimento e facilitar o contato imediato.",
    name: "Modelo Ingaville",
    designation: "Lançamentos",
    src: "https://picsum.photos/seed/realestate2/600/400",
  },
  {
    quote: "Focado em imóveis de alto padrão, este layout transmite sofisticação e exclusividade. As imagens ganham destaque e a navegação é fluida para um público exigente.",
    name: "Modelo Luxury",
    designation: "Alto Padrão",
    src: "https://picsum.photos/seed/realestate3/600/400",
  },
  {
    quote: "Perfeito para captação de leads em volume. Com formulários estratégicos e chamadas para ação claras, este modelo é ideal para campanhas de Minha Casa Minha Vida.",
    name: "Modelo Popular",
    designation: "Volume de Leads",
    src: "https://picsum.photos/seed/realestate4/600/400",
  },
  {
    quote: "Uma landing page institucional que apresenta a imobiliária com autoridade. Ideal para campanhas de branding e fortalecimento de marca no mercado local.",
    name: "Modelo Institucional",
    designation: "Branding",
    src: "https://picsum.photos/seed/realestate5/600/400",
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
