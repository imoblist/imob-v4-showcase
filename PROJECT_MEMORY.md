# PROJECT_MEMORY.md

## 1) Project Overview
- Projeto: **Imoblist HUB Showcase**.
- Objetivo: landing page institucional/comercial da Imoblist, com conteúdo e visual alinhados à referência de produto em produção (Vercel) quando necessário.
- Stack atual: **Astro nativo + TailwindCSS** (sem React runtime no build final).
- Deploy alvo: **GitHub Pages**, com saída estática em `docs/`.
- Regra operacional principal: **source-first** (editar fonte, buildar, publicar artefato).

## 2) Current Status
### Onde estamos agora
- Branch de trabalho: `dev-luna`.
- Pipeline atual consolidado em Astro (commits recentes de migração e refactor).
- Build gera `docs/` com assets locais sincronizados.

### Concluído
- Migração do fluxo anterior para Astro nativo (`a186710`, `6b25af2`).
- Padronização do fluxo de build para GitHub Pages.
- Localização de imagens para `assets/` e sincronização para `docs/assets` via build.
- Ajustes de UI/UX em múltiplas seções (navbar, ler mais, labels, seção "Como funciona?").
- Versionamento exibido no footer com `vX.X.X` + data/hora de build.
- README atualizado para refletir arquitetura/processo atual.

### Em andamento
- Ajustes finos pontuais de paridade visual com a versão de referência podem surgir (pixel tuning por seção), conforme revisão do stakeholder.

## 3) Decisions Log
1. **Source-first obrigatório**
   - Decisão: nunca editar `docs/` manualmente.
   - Motivo: evitar divergência entre fonte e artefato.

2. **Build em `docs/` para Pages**
   - Decisão: saída final sempre em `docs/`.
   - Motivo: compatibilidade direta com GitHub Pages.

3. **Astro nativo como stack principal**
   - Decisão: migrar de fluxo anterior para Astro puro.
   - Motivo: simplificação de build/deploy e manutenção da landing estática.

4. **Assets locais no repositório**
   - Decisão: remover dependência de imagens remotas sempre que possível.
   - Motivo: previsibilidade de deploy e redução de links quebrados.

5. **Dependências externas mantidas por escolha do dono**
   - Google Fonts.
   - Link do portal `imoblist.com.br`.
   - UnicornStudio CDN (efeitos visuais).

6. **Versionamento no footer + build time**
   - Decisão: manter indicador de versão e data/hora no rodapé.
   - Motivo: rastreabilidade de mudanças e validação rápida pelo stakeholder.

## 4) Architecture & Conventions
### Estrutura principal
- `src/pages/index.astro` → composição da página.
- `src/components/*.astro` → componentes reutilizáveis (ex.: Navbar, ShinyButton).
- `src/sections/*.astro` → seções da landing.
- `src/index.css` → estilos globais.
- `assets/` → mídia-fonte local.
- `public/assets/` → preenchido no build para publicação.
- `docs/` → artefato final estático.

### Convenções de trabalho
- Alterar somente em `src/`, `assets/`, configs.
- Rodar build antes de considerar tarefa concluída.
- Commits pequenos, com mensagem descritiva e foco em 1 tema.
- Quando solicitado, alinhar visual com referência Vercel em fonte, espaçamento, alinhamento, comportamento e CTA.

### Naming
- Seções/componentes em PascalCase (`HowItWorksSection.astro`, `ShinyButton.astro`).
- Assets com nome descritivo em kebab-case (`logo-imoblist-hub-2.svg`).

## 5) Data Model / Config Notes
- Não há modelo de dados complexo/back-end neste projeto (landing estática).

### Configs críticos
- `package.json`
  - scripts:
    - `dev`: `astro dev`
    - `build`: limpa, sincroniza `assets -> public/assets`, injeta `APP_VERSION`/`BUILD_TIME`, gera `docs`, copia `CNAME`.
    - `preview`, `clean`, `lint`.
- `astro.config.mjs` e `tailwind.config.cjs`
  - controlam build e estilos.
- `public/unicorn-hero.json`
  - configuração da cena/efeito Unicorn usada no hero.

## 6) Open Tasks / Next Steps
1. Validar visual final no navegador (desktop/mobile) após cada lote de mudanças.
2. Manter paridade com referência para ajustes finos ainda apontados por revisão humana.
3. Se solicitado, revisar dependência do Unicorn CDN (manter/remover) com impacto visual documentado.
4. Atualizar este arquivo sempre que houver decisão técnica nova.

## 7) Known Issues / Risks
- Risco de regressão se alguém editar `docs/` manualmente.
- Dependência externa do Unicorn CDN pode variar por disponibilidade/política externa.
- Ajustes visuais “pixel perfect” podem demandar rodadas curtas de calibração.
- Se `assets` não forem sincronizados corretamente no build, links de imagem podem quebrar em `docs/assets`.

## 8) How to Resume This Project (for AI)
1. Leia `PROJECT_MEMORY.md` e `README.md` integralmente.
2. Confirme branch (`dev-luna`) e estado local:
   - `git checkout dev-luna && git pull`
3. Instale e valide ambiente:
   - `npm install`
4. Faça alterações apenas no fonte (`src/`, `assets/`, configs).
5. Execute build:
   - `npm run build`
6. Verifique artefatos:
   - `docs/index.html`, `docs/assets/*`, `docs/CNAME`
7. Entregue com:
   - resumo objetivo
   - arquivos alterados
   - commit/hash
   - pedido de validação visual

## 9) Change Log (high level)
- `6819fed` início de simplificação para Pages (fase antiga).
- `c1f3dfd` restauração de fonte e pipeline com versionamento.
- `a401f1a` saída HTML/CSS/JS estática em `docs` (fase antiga).
- `6d67038` localização inicial de media assets.
- `a3ea970` consolidação de fluxo source-first.
- `2cd3428` limpeza de lixo + correções de logo/navbar/footer.
- `6c46e54` localização ampla de imagens remotas + ajustes visuais.
- `8e4affc` sincronização robusta de assets para `docs/assets`.
- `eff279d`, `61c5886` e posteriores: refinos na seção “Como funciona?” com base em HTML de referência.
- `3d949cf` README atualizado para o processo vigente.
- `a186710`, `6b25af2` migração/refactor para Astro nativo.

---
## AI Resume Prompt
Antes de continuar este projeto:
1. Leia este arquivo (`PROJECT_MEMORY.md`) por completo.
2. Leia `README.md`.
3. Confirme o estado atual em “Current Status”.
4. Execute apenas mudanças incrementais, sem reescrever do zero.
5. Ao concluir alterações, atualize “Current Status”, “Open Tasks” e “Change Log”.
