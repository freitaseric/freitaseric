import { defineArrayMember, defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Projetos",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Nome do projeto", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Endereço", type: "slug", options: { source: "title", maxLength: 80 }, validation: (r) => r.required() }),
    defineField({ name: "eyebrow", title: "Categoria curta", type: "string", description: "Ex.: Caso em destaque, Produto próprio, Projeto interno" }),
    defineField({ name: "summary", title: "Resumo", type: "text", rows: 4, validation: (r) => r.required().max(360) }),
    defineField({ name: "year", title: "Ano", type: "number" }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Em validação", "Em desenvolvimento", "Em produção", "Protótipo", "Pausado", "Concluído"] },
    }),
    defineField({ name: "featured", title: "Projeto em destaque", type: "boolean", initialValue: false }),
    defineField({ name: "order", title: "Ordem", type: "number", initialValue: 100 }),
    defineField({
      name: "coverImage",
      title: "Imagem de capa",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Texto alternativo", type: "string" })],
    }),
    defineField({ name: "context", title: "Contexto", type: "text", rows: 7 }),
    defineField({ name: "problem", title: "Problema", type: "text", rows: 7 }),
    defineField({ name: "solution", title: "Solução", type: "text", rows: 7 }),
    defineField({ name: "role", title: "Minha atuação", type: "text", rows: 4 }),
    defineField({ name: "highlights", title: "Pontos principais", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({ name: "technologies", title: "Tecnologias / capacidades", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({
      name: "gallery",
      title: "Galeria",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Texto alternativo", type: "string" }),
            defineField({ name: "caption", title: "Legenda", type: "string" }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "status", media: "coverImage" },
  },
});
