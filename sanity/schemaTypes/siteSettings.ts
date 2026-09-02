import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Informações do site",
  type: "document",
  initialValue: {
    name: "Eric Freitas",
    role: "Desenvolvedor de software · GovTech",
    heroTitle: "Software para melhorar como o setor público trabalha.",
    heroBody:
      "Atuo na interseção entre desenvolvimento de software e processos públicos. Transformo fluxos administrativos complexos em produtos digitais mais claros, rastreáveis e eficientes.",
    location: "Boa Vista, Roraima",
    email: "contato@freitaseric.com",
    aboutTitle: "Tecnologia com contexto de serviço público.",
    aboutBody:
      "Sou estudante de Análise e Desenvolvimento de Sistemas no IFRR e desenvolvedor com atuação próxima a processos do setor público. Meu foco em GovTech nasce dessa experiência prática: entender o trabalho antes de automatizá-lo, reduzir atrito operacional e construir ferramentas que façam sentido para quem realmente executa o processo.",
    githubUrl: "https://github.com/freitaseric",
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
