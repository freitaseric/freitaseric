import type { StructureResolver } from "sanity/structure";

export const SITE_SETTINGS_ID = "siteSettings";

export const portfolioStructure: StructureResolver = (S) =>
  S.list()
    .title("Conteúdo")
    .items([
      S.listItem()
        .title("Geral")
        .child(
          S.list()
            .title("Geral")
            .items([
              S.listItem()
                .title("Informações do site")
                .schemaType("siteSettings")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId(SITE_SETTINGS_ID)
                    .title("Informações do site"),
                ),
            ]),
        ),
      S.listItem()
        .title("Portfólio")
        .child(
          S.list()
            .title("Portfólio")
            .items([
              S.listItem()
                .title("Projetos")
                .schemaType("project")
                .child(S.documentTypeList("project").title("Projetos")),
            ]),
        ),
    ]);
