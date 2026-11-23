/**
 * Lógica de interface, filtragem, busca, alternância de visualização (Grid/Lista) e Tema
 * Construído sem dependências externas para funcionar tanto via file:// quanto no GitHub Pages.
 */
(function () {
  const { categories, projects } = window.PORTFOLIO_CONFIG;

  // Estado da aplicação
  const state = {
    category: "all",
    query: "",
    viewMode: localStorage.getItem("wd_view_mode") || "grid",
    theme: localStorage.getItem("wd_theme") || "dark"
  };

  // Referências de DOM
  const els = {
    filterNav: document.getElementById("filter-nav"),
    projectsContainer: document.getElementById("projects-container"),
    searchInput: document.getElementById("search-input"),
    searchClear: document.getElementById("search-clear"),
    searchKbd: document.getElementById("search-kbd"),
    resultsSummary: document.getElementById("results-summary"),
    activePathLabel: document.getElementById("active-path-label"),
    emptyState: document.getElementById("empty-state"),
    resetBtn: document.getElementById("btn-reset-filters"),
    btnViewGrid: document.getElementById("btn-view-grid"),
    btnViewList: document.getElementById("btn-view-list"),
    themeToggle: document.getElementById("theme-toggle"),
    statTotal: document.getElementById("stat-total")
  };

  // Ícones SVG inline limpos e técnicos
  const icons = {
    arrowUpRight: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 11.5L11.5 4.5M11.5 4.5H5.5M11.5 4.5V10.5"/></svg>`,
    code: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 11L2.5 8L5.5 5M10.5 5L13.5 8L10.5 11"/></svg>`,
    sun: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="3.2"/><path d="M8 1.5v1.5M8 13v1.5M2.8 2.8l1.1 1.1M12.1 12.1l1.1 1.1M1.5 8H3M13 8h1.5M2.8 13.2l1.1-1.1M12.1 3.9l1.1-1.1"/></svg>`,
    moon: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 9.8A5.8 5.8 0 016.2 2.5a5.8 5.8 0 107.3 7.3z"/></svg>`
  };

  /**
   * Aplica o tema salvo ou selecionado (dark / light)
   */
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("wd_theme", theme);

    if (els.themeToggle) {
      const isDark = theme === "dark";
      els.themeToggle.innerHTML = `${isDark ? icons.sun : icons.moon}<span>${isDark ? "Light" : "Dark"}</span>`;
      els.themeToggle.setAttribute("aria-label", isDark ? "Mudar para tema claro" : "Mudar para tema escuro");
    }
  }

  /**
   * Aplica o modo de exibição (grid ou list)
   */
  function applyViewMode(mode) {
    state.viewMode = mode;
    localStorage.setItem("wd_view_mode", mode);

    els.projectsContainer.classList.toggle("view-grid", mode === "grid");
    els.projectsContainer.classList.toggle("view-list", mode === "list");

    els.btnViewGrid.classList.toggle("active", mode === "grid");
    els.btnViewList.classList.toggle("active", mode === "list");
  }

  /**
   * Lê parâmetro `?category=` da URL (usado pelos redirecionamentos das subpastas no GitHub Pages)
   */
  function syncFromURL() {
    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat && categories.some((c) => c.id === cat)) {
      state.category = cat;
    }
  }

  /**
   * Atualiza a URL sem recarregar a página ao trocar de categoria
   */
  function updateURLCategory(cat) {
    const url = new URL(window.location);
    if (cat === "all") {
      url.searchParams.delete("category");
    } else {
      url.searchParams.set("category", cat);
    }
    window.history.replaceState({}, "", url);
  }

  /**
   * Renderiza as abas de categorias com contagem real
   */
  function renderCategoryTabs() {
    const counts = projects.reduce(
      (acc, item) => {
        acc[item.category] = (acc[item.category] || 0) + 1;
        return acc;
      },
      { all: projects.length }
    );

    els.filterNav.innerHTML = categories
      .map((cat) => {
        const isActive = state.category === cat.id;
        const count = counts[cat.id] || 0;
        return `
          <button
            type="button"
            class="filter-tab ${isActive ? "active" : ""}"
            data-category="${cat.id}"
            aria-pressed="${isActive}"
          >
            <span class="cat-dot ${cat.dotClass}"></span>
            <span>${cat.label}</span>
            <span class="tab-count">${count}</span>
          </button>
        `;
      })
      .join("");
  }

  /**
   * Filtra e renderiza os projetos
   */
  function renderProjects() {
    const query = state.query.toLowerCase();

    const filtered = projects.filter((item) => {
      const matchesCat = state.category === "all" || item.category === state.category;
      const matchesQuery =
        query === "" ||
        item.title.toLowerCase().includes(query) ||
        item.desc.toLowerCase().includes(query) ||
        item.pathLabel.toLowerCase().includes(query) ||
        item.tags.some((t) => t.toLowerCase().includes(query));

      return matchesCat && matchesQuery;
    });

    // Atualiza breadcrumb e contador técnico
    const activeCatObj = categories.find((c) => c.id === state.category);
    const dirSegment = state.category === "all" ? "~ / root / *" : `~ / ${activeCatObj.label.toLowerCase()}`;
    els.activePathLabel.textContent = dirSegment;
    els.resultsSummary.textContent = `${filtered.length} de ${projects.length} entradas`;

    if (filtered.length === 0) {
      els.projectsContainer.innerHTML = "";
      els.emptyState.style.display = "block";
      return;
    }

    els.emptyState.style.display = "none";

    els.projectsContainer.innerHTML = filtered
      .map((item, idx) => {
        const indexNumber = String(idx + 1).padStart(2, "0");
        return `
          <article class="project-item" data-id="${item.id}">
            <div class="card-preview">
              <div class="preview-chrome">
                <div class="chrome-dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <span class="chrome-path" title="${item.pathLabel}">${item.pathLabel}</span>
              </div>
              <a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" class="preview-media" tabindex="-1">
                <img
                  src="${item.image}"
                  alt="Preview do projeto ${item.title}"
                  class="preview-img"
                  loading="lazy"
                  onerror="this.src='Components/Modern%20Loading/img.png'"
                >
              </a>
            </div>

            <div class="card-content">
              <div class="card-header-row">
                <span class="card-index">#${indexNumber}</span>
                <span class="card-category-tag">
                  <span class="cat-dot ${item.dotClass}"></span>
                  ${item.categoryName}
                </span>
              </div>

              <h2 class="card-title">
                <a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer">${item.title}</a>
              </h2>

              <p class="card-description">${item.desc}</p>

              <div class="card-tech-list">
                ${item.tags.map((tag) => `<span class="tech-badge">${tag}</span>`).join("")}
              </div>

              <div class="card-footer-actions">
                <a
                  href="${item.githubUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="action-link action-secondary"
                  title="Inspecionar código-fonte no GitHub"
                >
                  ${icons.code}
                  <span>Fonte</span>
                </a>

                <a
                  href="${item.liveUrl}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="action-link action-primary"
                  title="Executar demonstração no GitHub Pages"
                >
                  <span>Abrir demo</span>
                  ${icons.arrowUpRight}
                </a>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  /**
   * Reseta busca e categoria
   */
  function resetAllFilters() {
    state.category = "all";
    state.query = "";
    els.searchInput.value = "";
    els.searchClear.style.display = "none";
    els.searchKbd.style.display = "inline-block";
    updateURLCategory("all");
    renderCategoryTabs();
    renderProjects();
  }

  /**
   * Inicializa eventos de interação
   */
  function bindEvents() {
    // Clique nas categorias
    els.filterNav.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-tab");
      if (!btn) return;

      const selectedCat = btn.dataset.category;
      if (selectedCat === state.category) return;

      state.category = selectedCat;
      updateURLCategory(selectedCat);
      renderCategoryTabs();
      renderProjects();
    });

    // Busca por texto
    els.searchInput.addEventListener("input", (e) => {
      state.query = e.target.value.trim();
      const hasQuery = state.query.length > 0;
      els.searchClear.style.display = hasQuery ? "block" : "none";
      els.searchKbd.style.display = hasQuery ? "none" : "inline-block";
      renderProjects();
    });

    // Limpar busca
    els.searchClear.addEventListener("click", () => {
      els.searchInput.value = "";
      state.query = "";
      els.searchClear.style.display = "none";
      els.searchKbd.style.display = "inline-block";
      els.searchInput.focus();
      renderProjects();
    });

    // Atalho "/" para focar na busca e "Escape" para limpar
    window.addEventListener("keydown", (e) => {
      if (e.key === "/" && document.activeElement !== els.searchInput) {
        e.preventDefault();
        els.searchInput.focus();
      } else if (e.key === "Escape" && document.activeElement === els.searchInput) {
        if (state.query) {
          els.searchClear.click();
        } else {
          els.searchInput.blur();
        }
      }
    });

    // Alternar visualização Grid / Lista
    els.btnViewGrid.addEventListener("click", () => applyViewMode("grid"));
    els.btnViewList.addEventListener("click", () => applyViewMode("list"));

    // Alternar Tema Claro / Escuro
    if (els.themeToggle) {
      els.themeToggle.addEventListener("click", () => {
        applyTheme(state.theme === "dark" ? "light" : "dark");
      });
    }

    // Botão de reset no empty state
    if (els.resetBtn) {
      els.resetBtn.addEventListener("click", resetAllFilters);
    }
  }

  /**
   * Inicialização
   */
  function init() {
    if (els.statTotal) {
      els.statTotal.textContent = projects.length;
    }
    applyTheme(state.theme);
    applyViewMode(state.viewMode);
    syncFromURL();
    renderCategoryTabs();
    renderProjects();
    bindEvents();
  }

  init();
})();
