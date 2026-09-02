# Eric Freitas — Portfólio GovTech

Portfólio pessoal de Eric Freitas, com foco profissional em **GovTech** e apresentação de projetos como estudos de caso.

## Stack

- Astro
- Sanity Studio (CMS em `/admin`)
- GitHub Pages
- IBM Plex Sans / IBM Plex Mono

## Desenvolvimento

```bash
npm install
npm run dev
```

Sem variáveis de ambiente, o site usa o conteúdo de fallback em `src/data/fallback.ts`.

## Ativar o CMS

1. Crie um projeto no Sanity e um dataset público `production`.
2. Adicione `http://localhost:4321` e `https://freitaseric.com` nas origens CORS do projeto, permitindo credenciais para o Studio.
3. No GitHub, crie as Repository Variables:
   - `PUBLIC_SANITY_PROJECT_ID`
   - `PUBLIC_SANITY_DATASET` = `production`
4. Para desenvolvimento local, copie `.env.example` para `.env` e informe o mesmo project ID.
5. Abra `/admin/`, faça login no Sanity e publique `Informações do site` e os projetos.

O frontend usa conteúdo do Sanity quando disponível e mantém o fallback caso o CMS esteja indisponível.

## Publicação

O workflow `.github/workflows/deploy.yml` publica o Astro no GitHub Pages quando há push em `main`, manualmente e uma vez ao dia. O build diário garante que alterações publicadas no CMS sejam incorporadas ao HTML estático para SEO.

## Conteúdo

Cada projeto pode ter:

- nome, resumo, ano e status;
- contexto, problema e solução;
- descrição da atuação;
- tecnologias/capacidades;
- imagem de capa e galeria;
- destaque e ordenação.

Projetos não precisam de repositório ou URL pública.
