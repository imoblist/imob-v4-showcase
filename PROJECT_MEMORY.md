# PROJECT_MEMORY.md

## 1) Project Overview
- Projeto: **Imoblist HUB Showcase**.
- Objetivo: manter e evoluir a landing page da Imoblist com alta fidelidade visual à referência (`https://mobihh-4b4h.vercel.app/`) e deploy via GitHub Pages.
- Regra operacional central definida pelo Lauro: **source-first**.
  - Editar no fonte.
  - Rodar build.
  - Publicar artefato em `docs/`.
  - **Nunca editar `docs/` manualmente.**
- Branches válidas deste projeto (por decisão do Lauro): **`main`** e **`dev-luna`**.

## 2) Current Status
### Onde estamos agora
- Branch de trabalho: `dev-luna`.
- Processo de trabalho consolidado em source-first (sem edição direta de artefato).
- `docs/` é somente saída de build para GitHub Pages.

### O que já está concluído
- Fluxo de build/deploy ajustado para Pages com saída em `docs/`.
- Versionamento no footer com `vX.X.X` + data/hora de build.
- Diversos ajustes de UI/UX solicitados em revisão:
  - navbar (links/âncoras e comportamento mobile),
  - blocos “Ler mais”,
  - espaçamentos e labels,
  - seção “Como funciona?” alinhada com HTML de referência fornecido pelo Lauro.
- Imagens e assets de conteúdo foram trazidos para uso local no repositório (com sincronização para `docs/assets` no build).
- README atualizado para refletir o fluxo atual de trabalho.

### O que está em andamento
- Ajustes finos de paridade visual podem continuar sob validação direta do Lauro.
- Footer mobile: removido o botão "Voltar para o início" na coluna de endereço (conforme feedback do Lauro em 2026-03-10).
- Bump de versão para `1.0.13` + rebuild para refletir `v1.0.13` no footer.
- Ajuste Hero/FAQ com bump para `1.0.14`: evitar quebra de "e‑commerce" no mobile e alterar resposta do FAQ para "Sim, é...".

## 3) Decisions Log
1. **Source-first obrigatório**
   - Motivo: evitar divergência entre fonte e artefato.
2. **`docs/` como artefato de deploy**
   - Motivo: compatibilidade direta com GitHub Pages.
3. **Versionamento visível no footer** (`vX.X.X` + build time)
   - Motivo: rastreabilidade das mudanças para validação rápida.
4. **Assets locais**
   - Motivo: reduzir dependência de mídia remota e evitar links quebrados.
5. **Dependências externas aceitas no momento**
   - Google Fonts.
   - Link institucional `imoblist.com.br`.
   - UnicornStudio CDN (mantido por causa dos efeitos visuais).
6. **Atenção sobre contexto de stack**
   - Não assumir stack “oficial” sem validar com o Lauro.
   - Quando houver divergência entre código e direcionamento do Lauro, seguir o direcionamento dele.

## 4) Architecture & Conventions
### Estrutura funcional esperada
- `src/` → fonte do projeto (componentes/seções/página).
- `assets/` → mídia local fonte.
- `docs/` → saída final de build para deploy.
- `README.md` + `PROJECT_MEMORY.md` → contexto operacional para humanos/IA.

### Convenções de trabalho
- Alterações incrementais.
- Sempre validar no navegador após build.
- Commits pequenos e descritivos.
- Não reescrever do zero sem solicitação explícita.
- Em dúvidas visuais, usar Vercel como referência e confirmar com o Lauro.

### Naming
- Nomes descritivos e consistentes para arquivos de asset.
- Padronização de nomes em componentes/seções conforme estrutura já existente no projeto.

## 5) Data Model / Config Notes
- Projeto é landing estática (sem modelo de dados/back-end complexo).
- Arquivos de configuração críticos:
  - `package.json` (scripts de dev/build/clean/lint e versão).
  - `CNAME` (domínio no deploy do Pages).
  - configs de build/estilo usadas no projeto atual.
- Regra importante: qualquer mudança de build precisa manter `docs/` íntegro para publicação.

## 6) Open Tasks / Next Steps
1. Continuar validação visual seção a seção contra referência e feedback do Lauro.
2. Manter disciplina source-first em 100% das alterações.
3. Garantir que `docs/assets` reflita corretamente `assets` após cada build.
4. Se necessário, revisar dependência do Unicorn CDN (manter/remover) com análise de impacto visual.

## 7) Known Issues / Risks
- Risco de regressão se alguém editar `docs/` manualmente.
- Risco de desalinhamento visual sem validação final no navegador.
- Dependência externa do Unicorn CDN pode variar por disponibilidade/política externa.
- Risco de incoerência de documentação se este arquivo não for atualizado junto com mudanças estruturais.

## 8) How to Resume This Project (for AI)
1. Leia `PROJECT_MEMORY.md` por completo.
2. Leia `README.md`.
3. Confirme que está em `dev-luna` e sincronizado.
4. Faça somente mudanças incrementais no fonte.
5. Rode build e valide `docs/`.
6. Entregue com resumo objetivo + commit/hash + pedido de validação do Lauro.
7. Atualize este arquivo (Current Status / Open Tasks / Change Log) ao concluir mudanças relevantes.

## 9) Change Log (high level)
- Definição do fluxo source-first como regra mandatória.
- Consolidação do deploy em `docs/` para GitHub Pages.
- Rodada extensa de ajustes visuais conforme feedback do Lauro.
- Localização de imagens/assets e padronização de labels/UI.
- Criação deste `PROJECT_MEMORY.md` como bootstrap de contexto para IA.
- Correção de contexto: branches válidas do projeto = `main` e `dev-luna`; evitar assumir stack sem validação explícita do Lauro.
- Remoção do botão mobile "Voltar para o início" no footer (seção de endereço), com rebuild de `docs/` no fluxo source-first.
- Atualização de versão para `1.0.13` e novo build para atualizar versionamento no footer.
- Ajuste textual no Hero (nowrap em "e‑commerce") + atualização do FAQ ("Sim, é...") com rebuild de `docs/` e versão `1.0.14`.

---
## AI Resume Prompt
Antes de continuar este projeto:
1. Leia este arquivo (`PROJECT_MEMORY.md`) por completo.
2. Leia `README.md`.
3. Confirme o estado atual em “Current Status”.
4. Execute apenas mudanças incrementais, sem reescrever do zero.
5. Ao concluir alterações, atualize “Current Status”, “Open Tasks” e “Change Log”.
