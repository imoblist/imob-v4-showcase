export const site = {
  name: 'Imoblist',
  description:
    'Integração de imóveis ao Meta Ads via Catálogo + landing pages por imóvel para alta conversão.',
  locale: 'pt-BR',

  // URL pública do site (usada para canonical + OpenGraph). Pode ficar vazio em preview local.
  // TODO (Lauro): definir a URL final (ex.: https://hub.imoblist.com.br)
  url: '',

  // TODO (Lauro): informar número em formato internacional, ex: 5544999999999 (sem + e sem espaços)
  whatsappNumberE164Digits: '',
  // TODO (Lauro): definir mensagem padrão
  whatsappDefaultMessage:
    'Olá! Tenho interesse no Imoblist HUB (Integração Meta Ads via Catálogo) e gostaria de uma demonstração.',
};

export function buildWhatsAppLink(
  numberDigits: string,
  message: string,
  utm?: Record<string, string>
) {
  if (!numberDigits) return '#';

  const base = `https://wa.me/${numberDigits}`;
  const params = new URLSearchParams();
  if (message) params.set('text', message);

  if (utm) {
    for (const [k, v] of Object.entries(utm)) {
      if (v) params.set(k, v);
    }
  }

  const q = params.toString();
  return q ? `${base}?${q}` : base;
}
