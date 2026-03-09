# Imoblist HUB Showcase

Landing page React/Vite com deploy estático em `docs/` para GitHub Pages.

## Fluxo oficial (source-first)

1. Alterar código-fonte em `src/` (e assets em `assets/` quando necessário)
2. Rodar build
3. Publicar saída gerada em `docs/`

> Não editar `docs/` manualmente. `docs/` é artefato de build.

## Scripts

- `npm run dev` — sobe ambiente local
- `npm run build` — build de produção para `docs/`
- `npm run preview` — preview local do build
- `npm run clean` — limpa `dist/` e `docs/`

## Build e deploy (GitHub Pages)

```bash
npm install
npm run build
```

A build gera:
- `docs/index.html`
- `docs/assets/*` (bundles + imagens locais)
- `docs/CNAME`

No GitHub Pages, configurar a branch/pasta para servir de `docs/`.

## Dependências externas mantidas por decisão

- Google Fonts (`fonts.googleapis.com`)
- Link institucional para `https://www.imoblist.com.br`
- Script do Unicorn Studio (efeitos visuais)

## JSONs do projeto

- `public/unicorn-hero.json`: configuração do efeito visual do hero (em uso)
- `tsconfig.json`: configuração TypeScript (em uso)
- `package.json` / `package-lock.json`: configuração e lock de dependências (em uso)
