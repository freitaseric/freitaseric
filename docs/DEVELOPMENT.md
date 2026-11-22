# Desenvolvimento do Portfólio

Documentação técnica do portfólio pessoal de Eric Freitas, com foco em produtos de software próprios, apresentados com o problema, as decisões e o estado de cada projeto.

## Stack

- Astro
- Sanity Studio (CMS em `/admin`)
- Vercel
- Instrument Serif, Inter e JetBrains Mono (tema escuro e claro automáticos)

## Desenvolvimento

```bash
npm install
npm run dev
```

Sem variáveis de ambiente, o site usa o conteúdo de fallback em `src/data/fallback.ts`.

## Ativar o CMS

1. Crie um projeto no Sanity e um dataset público `production`.
2. Adicione `http://localhost:4321` e `https://freitaseric.com` nas origens CORS do projeto, permitindo credenciais para o Studio.
3. Na Vercel, configure as variáveis de ambiente:
   - `PUBLIC_SANITY_PROJECT_ID`
   - `PUBLIC_SANITY_DATASET` = `production`
4. Para desenvolvimento local, copie `.env.example` para `.env` e informe o mesmo project ID.
5. Abra `/admin/`, faça login no Sanity e publique `Informações do site` e os projetos.

### Conteúdo inicial

O Studio trata `Informações do site` como um documento único e organiza o conteúdo em `Geral` e `Portfólio`.

Para importar novamente os textos iniciais de forma idempotente, autentique o Sanity CLI e execute:

```bash
npm run sanity:seed
```

O comando cria ou substitui somente os documentos de `sanity/seed/portfolio.ndjson`: as informações do site e os projetos MacIsland, discordkit e Aresta.

O frontend usa conteúdo do Sanity quando disponível e mantém o fallback caso o CMS esteja indisponível.

## Publicação

A Vercel cria previews para pull requests e publica a branch `main` em produção. O arquivo `vercel.json` direciona as rotas internas de `/admin/*` para o Sanity Studio, permitindo abrir ou atualizar diretamente qualquer tela do CMS.

Para refletir alterações do Sanity no HTML estático e no SEO imediatamente, configure um Deploy Hook da Vercel acionado por publicação no dataset `production`.

## Conteúdo

Cada projeto pode ter:

- nome, resumo, ano e status;
- contexto, problema e solução;
- descrição da atuação e o que foi decidido, revisado e testado;
- link do repositório;
- tecnologias/capacidades;
- imagem de capa e galeria;
- destaque e ordenação.

Projetos não precisam de repositório ou URL pública.
