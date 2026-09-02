export type ProjectStatus =
  | "Em validação"
  | "Em desenvolvimento"
  | "Em produção"
  | "Protótipo"
  | "Pausado"
  | "Concluído";

export type Project = {
  _id: string;
  title: string;
  slug: string;
  eyebrow: string;
  summary: string;
  year: number;
  status: ProjectStatus | string;
  context: string;
  problem: string;
  solution: string;
  role: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
  coverImage?: { asset?: { _ref?: string }; alt?: string };
  gallery?: Array<{ asset?: { _ref?: string }; alt?: string; caption?: string }>;
};

export type SiteSettings = {
  name: string;
  role: string;
  heroTitle: string;
  heroBody: string;
  location: string;
  email: string;
  aboutTitle: string;
  aboutBody: string;
  githubUrl: string;
  linkedinUrl?: string;
};

export const fallbackSettings: SiteSettings = {
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
};

export const fallbackProjects: Project[] = [
  {
    _id: "funderr",
    title: "FUNDERR",
    slug: "funderr",
    eyebrow: "Caso em destaque",
    summary:
      "Sistema web para estruturar a elaboração de projetos de crédito rural, substituindo fluxos fragmentados por um processo guiado e rastreável.",
    year: 2026,
    status: "Em validação",
    context:
      "O processo de elaboração de projetos de crédito rural envolve dados do beneficiário, propriedade, patrimônio, proposta, fluxo de caixa, financiamento e documentação. Quando essas etapas ficam distribuídas em planilhas e rotinas manuais, a consistência do dossiê depende excessivamente de conferências repetitivas.",
    problem:
      "Centralizar o fluxo sem perder as regras de negócio, dependências entre etapas e revisões necessárias quando informações anteriores são alteradas.",
    solution:
      "Uma aplicação web orientada ao fluxo do técnico, com etapas encadeadas, validações de consistência e organização dos dados necessários à elaboração do projeto de crédito rural.",
    role:
      "Produto, levantamento de requisitos, modelagem do fluxo, experiência do usuário e desenvolvimento da aplicação.",
    highlights: [
      "Fluxo guiado do beneficiário ao financiamento",
      "Regras de consistência entre etapas dependentes",
      "Estrutura pensada a partir da operação real dos técnicos",
    ],
    technologies: ["Aplicação web", "Banco de dados", "Automação de processos"],
    featured: true,
  },
];
