import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Informações do site",
  type: "document",
  initialValue: {
    name: "Eric Freitas",
    role: "Desenvolvedor de software · Produtos em desenvolvimento",
    heroTitle: "Construo produtos de software próprios.",
    heroBody: "Estou desenvolvendo produtos de software com o objetivo de, em breve, abrir uma empresa e distribuí-los. Aqui estão os projetos que já existem em código e o que decidi em cada um.",
    location: "Boa Vista, Roraima",
    email: "contato@freitaseric.com",
    aboutTitle: "Do estudo ao produto.",
    aboutBody: "Sou estudante de Análise e Desenvolvimento de Sistemas no IFRR e desenvolvo produtos de software próprios. Meu objetivo é abrir uma empresa de software e distribuir o que construo. Os projetos deste site registram esse caminho, inclusive o que foi arquivado e por quê.",
    githubUrl: "https://github.com/freitaseric"
  },
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
