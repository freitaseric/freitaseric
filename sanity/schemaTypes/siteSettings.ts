import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Informações do site",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nome", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", title: "Posicionamento profissional", type: "string" }),
    defineField({ name: "heroTitle", title: "Título principal", type: "string", validation: (r) => r.required() }),
    defineField({ name: "heroBody", title: "Texto de abertura", type: "text", rows: 4 }),
    defineField({ name: "location", title: "Localização", type: "string" }),
    defineField({ name: "email", title: "E-mail", type: "string" }),
    defineField({ name: "aboutTitle", title: "Título da seção Sobre", type: "string" }),
    defineField({ name: "aboutBody", title: "Texto da seção Sobre", type: "text", rows: 7 }),
    defineField({ name: "githubUrl", title: "GitHub", type: "url" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn", type: "url" }),
  ],
  preview: { prepare: () => ({ title: "Informações do site" }) },
});
