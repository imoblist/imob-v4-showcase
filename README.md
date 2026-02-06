# imob-v4-showcase

Landing page (showcase) da Imoblist, construída em **AstroJS**.

## Requisitos

- Node.js 18+

## Rodar local

```bash
npm install
npm run dev
```

## Build/preview

```bash
npm run build
npm run preview
```

## Deploy (DigitalOcean App Platform)

> Objetivo: publicar esta landing **estática** (Astro build → `dist/`) na DigitalOcean App Platform.

### 1) Criar o app e conectar o repositório

1. DigitalOcean → **Apps** → **Create App**.
2. Conecte o GitHub e selecione o repositório.
3. Escolha a branch desejada (ex.: `main`).
4. Tipo de componente: **Static Site**.

### 2) Build settings (comandos e diretório)

- **Build command:**
  - `npm ci && npm run build`
  - (alternativa) `npm install && npm run build`
- **Output directory:** `dist`

### 3) Node / Package manager

- Recomendado: **Node 18+** (ver `package.json` e/ou `.nvmrc` se existir).
- Se a DO oferecer seleção de package manager, usar **npm**.

### 4) Variáveis de ambiente (env vars)

Este projeto não exige env vars por padrão.

Se no futuro precisarmos de algo (analytics, endpoints de formulário, etc.), preferir:
- `PUBLIC_*` para variáveis que vão para o client build (Astro), ou
- variáveis server-only apenas se houver SSR (não é o caso no momento).

### 5) Domínio e HTTPS

1. Em **Settings → Domains**, configure:
   - Subdomínio (ex.: `showcase.imoblist.com.br`) ou domínio raiz.
2. Ajuste o DNS conforme instruções da DO.
3. Verifique se o **HTTPS/SSL** ficou ativo.

### 6) Cache / CDN

- A App Platform já serve via CDN na borda.
- Se houver Cloudflare na frente, garantir:
  - Cache respeitando assets versionados (Astro gera hashes em assets) e
  - Regras simples para HTML (cache curto ou bypass) se necessário.

### 7) Deploys automáticos e rollback

- Habilitar **autodeploy** ao fazer merge na branch publicada.
- Usar **Rollback** da DO em caso de regressão.

### 8) Checklist rápido

- [ ] Static Site
- [ ] Build command `npm ci && npm run build`
- [ ] Output dir `dist`
- [ ] Domínio configurado + HTTPS ok
- [ ] Autodeploy ligado
