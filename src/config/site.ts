const env = import.meta.env;

export const site = {
  name: 'Imoblist',
  description:
    'Integração de imóveis ao Meta Ads via Catálogo + landing pages por imóvel para alta conversão.',
  locale: 'pt-BR',

  // URL pública do site (usada para canonical + OpenGraph). Pode ficar vazio em preview local.
  // TODO (Lauro): definir a URL final (ex.: https://hub.imoblist.com.br)
  url: env.PUBLIC_SITE_URL ?? '',

  // WhatsApp
  // PUBLIC_WHATSAPP_NUMBER: número em formato internacional, somente dígitos (E.164), ex: 5544999999999
  // Deixe vazio para desabilitar CTAs.
  whatsappNumberE164Digits: env.PUBLIC_WHATSAPP_NUMBER ?? '',
  // PUBLIC_WHATSAPP_DEFAULT_MESSAGE: mensagem padrão pré-preenchida no WhatsApp
  whatsappDefaultMessage:
    env.PUBLIC_WHATSAPP_DEFAULT_MESSAGE ??
    'Olá! Tenho interesse no Imoblist HUB (Integração Meta Ads via Catálogo) e gostaria de uma demonstração.',

  // Formulário
  // PUBLIC_FORM_ENDPOINT_URL: endpoint HTTP(s) para receber POST JSON (ex.: https://api.seudominio.com/leads)
  // Deixe vazio para desabilitar envio (UI sugere WhatsApp como fallback).
  formEndpointUrl: env.PUBLIC_FORM_ENDPOINT_URL ?? '',

  // Contato (footer)
  portalUrl: 'https://imoblist.com.br',
  contactEmail: 'contato@imoblist.com.br',
  // TODO (Lauro): ajustar telefone quando definir
  contactPhone: '',
  // Endereço fiscal (placeholder): Evoa, Maringá-PR
  contactAddress: 'Evoa — Maringá/PR',
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
