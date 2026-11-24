/**
 * Catálogo de projetos do repositório Web-Development
 * Estrutura padronizada em kebab-case compatível com hospedagem estática no GitHub Pages
 */
(function (window) {
  const GITHUB_REPO_BASE = "https://github.com/rafaelmm16/Web-Development/tree/main";

  const CATEGORIES = [
    { id: "all", label: "Todos", dotClass: "dot-all" },
    { id: "sites", label: "Sites & Clones", dotClass: "dot-sites" },
    { id: "lp", label: "Landing Pages", dotClass: "dot-lp" },
    { id: "login", label: "Autenticação", dotClass: "dot-login" },
    { id: "components", label: "Componentes", dotClass: "dot-components" },
    { id: "js", label: "JavaScript", dotClass: "dot-js" }
  ];

  const PROJECTS_DATA = [
    /* ================= Sites & Clones (sites/) ================= */
    {
      id: "spotify-cover",
      title: "Spotify Web Player Clone",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "sites/spotify-cover",
      image: "sites/spotify-cover/U2.jpg",
      desc: "Recriação interativa do Spotify Web Player com síntese de áudio via Web Audio API, iluminação ambiente dinâmica, busca em tempo real e playlists.",
      tags: ["Next.js", "Tailwind CSS", "Web Audio API", "React"],
      liveUrl: "sites/spotify-cover/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/sites/spotify-cover`
    },
    {
      id: "netflix-clone",
      title: "Netflix UI Clone",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "sites/netflix",
      image: "sites/netflix/img.jpg",
      desc: "Recriação da interface principal da Netflix com destaque para o catálogo horizontal, banner principal e cabeçalho adaptativo.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "sites/netflix/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/sites/netflix`
    },
    {
      id: "youtube-clone",
      title: "YouTube Interface",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "sites/youtube",
      image: "sites/youtube/img.png",
      desc: "Estrutura da página inicial do YouTube construída com CSS Grid e Flexbox, incluindo barra lateral retrátil e grade de vídeos.",
      tags: ["HTML5", "CSS Grid", "Flexbox"],
      liveUrl: "sites/youtube/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/sites/youtube`
    },
    {
      id: "pinterest-clone",
      title: "Pinterest Masonry Feed",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "sites/pinterest",
      image: "sites/pinterest/image.png",
      desc: "Feed visual em layout estilo alvenaria (masonry) com cartões de proporções variadas e sobreposição de ações no hover.",
      tags: ["HTML5", "CSS Columns", "UI Layout"],
      liveUrl: "sites/pinterest/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/sites/pinterest`
    },
    {
      id: "apple-showcase",
      title: "Apple Product Page",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "sites/apple-showcase",
      image: "sites/apple-showcase/img.png",
      desc: "Página de apresentação de produto focada em tipografia limpa, contraste editorial e organização espacial minimalista.",
      tags: ["HTML5", "CSS3", "Editorial UI"],
      liveUrl: "sites/apple-showcase/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/sites/apple-showcase`
    },
    {
      id: "currency-converter",
      title: "Conversor de Moedas",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "sites/currency-converter",
      image: "sites/currency-converter/img.png",
      desc: "Calculadora financeira para conversão rápida de Real (BRL) para Dólar (USD) e Euro (EUR) com formatação monetária.",
      tags: ["JavaScript", "CSS Modular", "DOM"],
      liveUrl: "sites/currency-converter/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/sites/currency-converter`
    },
    {
      id: "word-game",
      title: "Léxico — Word Puzzle",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "sites/word-game",
      image: "sites/word-game/image.png",
      desc: "Jogo de adivinhação de palavras com 40 termos em 4 categorias, suporte a diacríticos do português, dicas progressivas e teclado virtual.",
      tags: ["JavaScript", "Game Engine", "CSS3"],
      liveUrl: "sites/word-game/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/sites/word-game`
    },
    {
      id: "flowers-animation",
      title: "CSS Night Flowers",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "sites/flowers",
      image: "sites/flowers/image.png",
      desc: "Composição ilustrada e animada inteiramente via keyframes de CSS, simulando o desabrochar de plantas em ambiente noturno.",
      tags: ["CSS Keyframes", "Ilustração CSS", "JS"],
      liveUrl: "sites/flowers/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/sites/flowers`
    },

    /* ================= Landing Pages (landing-pages/) ================= */
    {
      id: "lp-modern-gradient",
      title: "Landing Page — SaaS Product",
      category: "lp",
      categoryName: "Landing Pages",
      dotClass: "dot-lp",
      pathLabel: "landing-pages/modern-gradient",
      image: "landing-pages/modern-gradient/hero.png",
      desc: "Página de conversão completa com cabeçalho fixo, grade de diferenciais técnicos, indicadores e seção de planos.",
      tags: ["Tailwind CSS", "HTML5", "Responsivo"],
      liveUrl: "landing-pages/modern-gradient/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/landing-pages/modern-gradient`
    },
    {
      id: "lp-corporate-tech",
      title: "Landing Page — Consultoria Tech",
      category: "lp",
      categoryName: "Landing Pages",
      dotClass: "dot-lp",
      pathLabel: "landing-pages/corporate-tech",
      image: "landing-pages/corporate-tech/img.png",
      desc: "Página institucional voltada para serviços de tecnologia, com apresentação de portfólio, métricas e bloco institucional.",
      tags: ["Tailwind CSS", "JavaScript", "Layout"],
      liveUrl: "landing-pages/corporate-tech/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/landing-pages/corporate-tech`
    },

    /* ================= Login Pages (login-pages/) ================= */
    {
      id: "login-page-1",
      title: "Auth 01 — Minimal Card",
      category: "login",
      categoryName: "Autenticação",
      dotClass: "dot-login",
      pathLabel: "login-pages/modern-card",
      image: "login-pages/modern-card/image.png",
      desc: "Formulário de acesso enxuto e centralizado, focado em hierarquia visual clara, estados de foco e alinhamento Flexbox.",
      tags: ["HTML5", "CSS3", "Forms"],
      liveUrl: "login-pages/modern-card/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/login-pages/modern-card`
    },
    {
      id: "login-page-2",
      title: "Auth 02 — Split Vector Layout",
      category: "login",
      categoryName: "Autenticação",
      dotClass: "dot-login",
      pathLabel: "login-pages/astronaut-theme",
      image: "login-pages/astronaut-theme/img.png",
      desc: "Tela dividida em duas colunas combinando ilustração SVG animada à esquerda e painel de credenciais em tema escuro.",
      tags: ["HTML5", "CSS3", "SVG"],
      liveUrl: "login-pages/astronaut-theme/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/login-pages/astronaut-theme`
    },
    {
      id: "login-page-3",
      title: "Auth 03 — Forest Glass",
      category: "login",
      categoryName: "Autenticação",
      dotClass: "dot-login",
      pathLabel: "login-pages/forest-glass",
      image: "login-pages/forest-glass/image.png",
      desc: "Estudo de propriedades backdrop-filter e camadas semi-transparentes sobre fotografia em alta resolução.",
      tags: ["CSS Backdrop", "HTML5", "UI"],
      liveUrl: "login-pages/forest-glass/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/login-pages/forest-glass`
    },
    {
      id: "login-page-4",
      title: "Auth 04 — Dual Sliding Panel",
      category: "login",
      categoryName: "Autenticação",
      dotClass: "dot-login",
      pathLabel: "login-pages/animated-toggle",
      image: "login-pages/animated-toggle/img.png",
      desc: "Componente de autenticação dupla com painel deslizante que alterna entre login e criação de conta sem recarregar a página.",
      tags: ["JavaScript", "CSS Transitions", "Forms"],
      liveUrl: "login-pages/animated-toggle/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/login-pages/animated-toggle`
    },

    /* ================= Componentes UI (components/) ================= */
    {
      id: "comp-dark-light-loading",
      title: "Theme Switcher & Loader",
      category: "components",
      categoryName: "Componentes",
      dotClass: "dot-components",
      pathLabel: "components/dark-light-loading",
      image: "components/dark-light-loading/img.png",
      desc: "Micro-componente de estado de carregamento acompanhado de controle para inversão imediata entre paleta clara e escura.",
      tags: ["CSS Variables", "JavaScript", "Keyframes"],
      liveUrl: "components/dark-light-loading/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/components/dark-light-loading`
    },
    {
      id: "comp-modern-loading",
      title: "Ring Spinner Loader",
      category: "components",
      categoryName: "Componentes",
      dotClass: "dot-components",
      pathLabel: "components/modern-loading",
      image: "components/modern-loading/img.png",
      desc: "Indicador de progresso circular construído com bordas parciais e rotação contínua para feedbacks de requisição.",
      tags: ["CSS3", "Animation", "Micro-UI"],
      liveUrl: "components/modern-loading/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/components/modern-loading`
    },
    {
      id: "comp-stairs",
      title: "3D Isometric Stairs",
      category: "components",
      categoryName: "Componentes",
      dotClass: "dot-components",
      pathLabel: "components/stairs",
      image: "components/stairs/image.png",
      desc: "Experimento de transformação 3D e perspectiva isométrica em CSS puro simulando degraus em movimento contínuo.",
      tags: ["CSS 3D", "Transforms", "Keyframes"],
      liveUrl: "components/stairs/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/components/stairs`
    },

    /* ================= JavaScript & Estudos (javascript/) ================= */
    {
      id: "js-bootstrap",
      title: "Bootstrap 5 — Galeria & Carrossel",
      category: "js",
      categoryName: "JavaScript",
      dotClass: "dot-js",
      pathLabel: "javascript/bootstrap",
      image: "javascript/bootstrap/public/img/natureza1.jpg",
      desc: "Implementação prática de componentes nativos do Bootstrap 5 com controle de slides, indicadores e grid responsivo.",
      tags: ["Bootstrap 5", "HTML5", "Componentes"],
      liveUrl: "javascript/bootstrap/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/javascript/bootstrap`
    },
    {
      id: "js-form-validation",
      title: "Form Validator Engine",
      category: "js",
      categoryName: "JavaScript",
      dotClass: "dot-js",
      pathLabel: "javascript/form-validation",
      image: "javascript/form-validation/img.png",
      desc: "Validação client-side em JavaScript puro com inspeção de regras por campo, bloqueio de submissão inválida e alertas no DOM.",
      tags: ["Vanilla JS", "DOM API", "Forms"],
      liveUrl: "javascript/form-validation/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/javascript/form-validation`
    },
    {
      id: "js-funcional",
      title: "JS Funcional — Interactive Runner",
      category: "js",
      categoryName: "JavaScript",
      dotClass: "dot-js",
      pathLabel: "javascript/functional-js",
      image: "javascript/functional-js/img.png",
      desc: "Ambiente interativo para execução de trechos ES6+ demonstrando imutabilidade, Array.map, Arrow Functions, IIFE e Spread.",
      tags: ["ES6+", "Programação Funcional", "Runner"],
      liveUrl: "javascript/functional-js/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/javascript/functional-js`
    },
    {
      id: "js-algorithms",
      title: "POO & Higher-Order Closures",
      category: "js",
      categoryName: "JavaScript",
      dotClass: "dot-js",
      pathLabel: "javascript/algorithms",
      image: "javascript/algorithms/img.png",
      desc: "Resolução interativa de algoritmos: transações bancárias com classes ES6 (Account) e fábrica de loggers com closures.",
      tags: ["POO", "Closures", "Algoritmos"],
      liveUrl: "javascript/algorithms/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/javascript/algorithms`
    },
    {
      id: "js-jquery",
      title: "jQuery DOM Lab",
      category: "js",
      categoryName: "JavaScript",
      dotClass: "dot-js",
      pathLabel: "javascript/jquery",
      image: "javascript/jquery/img1.png",
      desc: "Caderno prático de manipulação de elementos, encadeamento de eventos, troca dinâmica de atributos e transições via jQuery.",
      tags: ["jQuery", "DOM Events", "Seletores"],
      liveUrl: "javascript/jquery/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/javascript/jquery`
    }
  ];

  window.PORTFOLIO_CONFIG = {
    repoBase: GITHUB_REPO_BASE,
    categories: CATEGORIES,
    projects: PROJECTS_DATA
  };
})(window);
