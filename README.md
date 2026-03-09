# Imoblist HUB Showcase

Site estático para publicação no GitHub Pages.

## Estrutura

- `index.html`
- `styles.css`
- `scripts.js`
- `CNAME`
- `docs/` (saída de deploy)

## Build para GitHub Pages

```bash
npm run build
```

O comando acima limpa e recria `docs/` com os arquivos estáticos prontos para publicação.

## Publicação

No GitHub, configure o Pages para servir da branch (`main` ou `dev-luna`) pasta `/docs`.
