const PROFILE = {
  githubUser: "freitaseric",
};

const projects = [
  {
    title: "Plataforma SaaS de gestao",
    description:
      "Aplicacao fullstack com autenticacao, painel administrativo, filtros avancados e API REST para operacoes de negocio.",
    tags: ["React", "Node.js", "PostgreSQL", "REST"],
    repo: "https://github.com/seu-usuario/projeto-saas",
    demo: "https://seu-projeto.com",
    icon: "SA",
  },
];

const fallbackRepos = [
  {
    name: "contribuicao-em-projeto-aberto",
    html_url: "https://github.com/seu-usuario/contribuicao-em-projeto-aberto",
    description: "PRs de melhoria em documentacao, testes e pequenos ajustes de experiencia de desenvolvedor.",
    language: "TypeScript",
    stargazers_count: 12,
    forks_count: 3,
  },
  {
    name: "api-publica",
    html_url: "https://github.com/seu-usuario/api-publica",
    description: "API REST com validacao, camadas de servico, testes e exemplos de consumo.",
    language: "Node.js",
    stargazers_count: 8,
    forks_count: 1,
  },
  {
    name: "frontend-lab",
    html_url: "https://github.com/seu-usuario/frontend-lab",
    description: "Experimentos de UI, acessibilidade, performance e padroes de componentes.",
    language: "React",
    stargazers_count: 5,
    forks_count: 0,
  },
];

const projectGrid = document.querySelector("#projectGrid");
const repoList = document.querySelector("#repoList");
const githubInput = document.querySelector("#githubUser");
const loadGithubButton = document.querySelector("#loadGithub");

function renderProjects(items) {
  projectGrid.innerHTML = items
    .map(
      (project) => `
        <article class="project-card">
          <div class="project-topline">
            <span class="project-icon" aria-hidden="true">${project.icon}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <ul class="tag-list">
            ${project.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
          <div class="project-links">
            <a href="${project.repo}" target="_blank" rel="noreferrer">Repositorio</a>
            <a href="${project.demo}" target="_blank" rel="noreferrer">Demo</a>
          </div>
        </article>
      `
    )
    .join("");
}

function renderRepos(items, message) {
  if (message) {
    repoList.innerHTML = `<div class="repo-item"><p>${message}</p></div>`;
    return;
  }

  repoList.innerHTML = items
    .map(
      (repo) => `
        <article class="repo-item">
          <h3><a href="${repo.html_url}" target="_blank" rel="noreferrer">${repo.name}</a></h3>
          <p>${repo.description || "Repositorio publico sem descricao cadastrada."}</p>
          <div class="repo-meta">
            <span>${repo.language || "Multilinguagem"}</span>
            <span>${repo.stargazers_count} estrelas</span>
            <span>${repo.forks_count} forks</span>
          </div>
        </article>
      `
    )
    .join("");
}

async function loadGithubRepos(username) {
  const cleanUsername = username.trim();

  if (!cleanUsername || cleanUsername === "seu-usuario") {
    renderRepos(fallbackRepos);
    return;
  }

  renderRepos([], "Carregando repositorios publicos...");

  try {
    const response = await fetch(
      `https://api.github.com/users/${encodeURIComponent(cleanUsername)}/repos?sort=updated&per_page=6`
    );

    if (!response.ok) {
      throw new Error("Nao foi possivel carregar os repositorios.");
    }

    const repos = await response.json();
    const meaningfulRepos = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
      .slice(0, 5);

    renderRepos(meaningfulRepos.length ? meaningfulRepos : repos.slice(0, 5));
  } catch (error) {
    renderRepos(
      fallbackRepos,
      "Nao consegui acessar o GitHub agora. Abaixo esta uma lista de exemplo para voce personalizar."
    );
  }
}

renderProjects(projects);
githubInput.value = PROFILE.githubUser;
renderRepos(fallbackRepos);

loadGithubButton.addEventListener("click", () => loadGithubRepos(githubInput.value));
githubInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    loadGithubRepos(githubInput.value);
  }
});
