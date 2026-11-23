/**
 * Catálogo de projetos do repositório Web-Development
 * Compatível com hospedagem estática no GitHub Pages (caminhos relativos)
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
    /* ================= Sites & Clones ================= */
    {
      id: "netflix-clone",
      title: "Netflix UI Clone",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "Sites/Netflix",
      image: "Sites/Netflix/img.jpg",
      desc: "Recriação da interface principal da Netflix com destaque para o catálogo horizontal, banner principal e cabeçalho adaptativo.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      liveUrl: "Sites/Netflix/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Sites/Netflix`
    },
    {
      id: "youtube-clone",
      title: "YouTube Interface",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "Sites/YouTube",
      image: "Sites/YouTube/img.png",
      desc: "Estrutura da página inicial do YouTube construída com CSS Grid e Flexbox, incluindo barra lateral retrátil e grade de vídeos.",
      tags: ["HTML5", "CSS Grid", "Flexbox"],
      liveUrl: "Sites/YouTube/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Sites/YouTube`
    },
    {
      id: "pinterest-clone",
      title: "Pinterest Masonry Feed",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "Sites/Pinterest",
      image: "Sites/Pinterest/image.png",
      desc: "Feed visual em layout estilo alvenaria (masonry) com cartões de proporções variadas e sobreposição de ações no hover.",
      tags: ["HTML5", "CSS Columns", "UI Layout"],
      liveUrl: "Sites/Pinterest/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Sites/Pinterest`
    },
    {
      id: "apple-showcase",
      title: "Apple Product Page",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "Sites/Apples",
      image: "Sites/Apples/img.png",
      desc: "Página de apresentação de produto focada em tipografia limpa, contraste editorial e organização espacial minimalista.",
      tags: ["HTML5", "CSS3", "Editorial UI"],
      liveUrl: "Sites/Apples/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Sites/Apples`
    },
    {
      id: "currency-converter",
      title: "Conversor de Moedas",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "Sites/Currency Converter",
      image: "Sites/Currency Converter/img.png",
      desc: "Calculadora financeira para conversão rápida de Real (BRL) para Dólar (USD) e Euro (EUR) com formatação monetária.",
      tags: ["JavaScript", "CSS Modular", "DOM"],
      liveUrl: "Sites/Currency%20Converter/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Sites/Currency%20Converter`
    },
    {
      id: "word-game",
      title: "Word Guess Game",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "Sites/Word Game",
      image: "Sites/Word Game/image.png",
      desc: "Jogo de adivinhação de palavras no navegador com controle de tentativas, dicas contextuais e validação de letras.",
      tags: ["JavaScript", "Game State", "CSS3"],
      liveUrl: "Sites/Word%20Game/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Sites/Word%20Game`
    },
    {
      id: "flowers-animation",
      title: "CSS Night Flowers",
      category: "sites",
      categoryName: "Sites & Clones",
      dotClass: "dot-sites",
      pathLabel: "Sites/Flowers",
      image: "Sites/Flowers/image.png",
      desc: "Composição ilustrada e animada inteiramente via keyframes de CSS, simulando o desabrochar de plantas em ambiente noturno.",
      tags: ["CSS Keyframes", "Ilustração CSS", "JS"],
      liveUrl: "Sites/Flowers/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Sites/Flowers`
    },

    /* ================= Landing Pages ================= */
    {
      id: "lp-modern-gradient",
      title: "Landing Page — SaaS Product",
      category: "lp",
      categoryName: "Landing Pages",
      dotClass: "dot-lp",
      pathLabel: "LP/LP 1",
      image: "LP/LP 1/hero.png",
      desc: "Página de conversão completa com cabeçalho fixo, grade de diferenciais técnicos, indicadores e seção de planos.",
      tags: ["Tailwind CSS", "HTML5", "Responsivo"],
      liveUrl: "LP/LP%201/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/LP/LP%201`
    },
    {
      id: "lp-corporate-tech",
      title: "Landing Page — Consultoria Tech",
      category: "lp",
      categoryName: "Landing Pages",
      dotClass: "dot-lp",
      pathLabel: "LP/LP 2",
      image: "LP/LP 2/img.png",
      desc: "Página institucional voltada para serviços de tecnologia, com apresentação de portfólio, métricas e bloco institucional.",
      tags: ["Tailwind CSS", "JavaScript", "Layout"],
      liveUrl: "LP/LP%202/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/LP/LP%202`
    },

    /* ================= Login Pages ================= */
    {
      id: "login-page-1",
      title: "Auth 01 — Minimal Card",
      category: "login",
      categoryName: "Autenticação",
      dotClass: "dot-login",
      pathLabel: "Login Page/Login Page 1",
      image: "Login Page/Login Page 1/image.png",
      desc: "Formulário de acesso enxuto e centralizado, focado em hierarquia visual clara, estados de foco e alinhamento Flexbox.",
      tags: ["HTML5", "CSS3", "Forms"],
      liveUrl: "Login%20Page/Login%20Page%201/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Login%20Page/Login%20Page%201`
    },
    {
      id: "login-page-2",
      title: "Auth 02 — Split Vector Layout",
      category: "login",
      categoryName: "Autenticação",
      dotClass: "dot-login",
      pathLabel: "Login Page/Login Page 2",
      image: "Login Page/Login Page 2/img.png",
      desc: "Tela dividida em duas colunas combinando ilustração SVG animada à esquerda e painel de credenciais em tema escuro.",
      tags: ["HTML5", "CSS3", "SVG"],
      liveUrl: "Login%20Page/Login%20Page%202/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Login%20Page/Login%20Page%202`
    },
    {
      id: "login-page-3",
      title: "Auth 03 — Backdrop Translúcido",
      category: "login",
      categoryName: "Autenticação",
      dotClass: "dot-login",
      pathLabel: "Login Page/Login Page 3",
      image: "Login Page/Login Page 3/image.png",
      desc: "Estudo de propriedades backdrop-filter e camadas semi-transparentes sobre fotografia em alta resolução.",
      tags: ["CSS Backdrop", "HTML5", "UI"],
      liveUrl: "Login%20Page/Login%20Page%203/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Login%20Page/Login%20Page%203`
    },
    {
      id: "login-page-4",
      title: "Auth 04 — Dual Sliding Panel",
      category: "login",
      categoryName: "Autenticação",
      dotClass: "dot-login",
      pathLabel: "Login Page/Login Page 4",
      image: "Login Page/Login Page 4/img.png",
      desc: "Componente de autenticação dupla com painel deslizante que alterna entre login e criação de conta sem recarregar a página.",
      tags: ["JavaScript", "CSS Transitions", "Forms"],
      liveUrl: "Login%20Page/Login%20Page%204/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Login%20Page/Login%20Page%204`
    },

    /* ================= Componentes UI ================= */
    {
      id: "comp-dark-light-loading",
      title: "Theme Switcher & Loader",
      category: "components",
      categoryName: "Componentes",
      dotClass: "dot-components",
      pathLabel: "Components/Dark-Light Loading",
      image: "Components/Dark-Light Loading/img.png",
      desc: "Micro-componente de estado de carregamento acompanhado de controle para inversão imediata entre paleta clara e escura.",
      tags: ["CSS Variables", "JavaScript", "Keyframes"],
      liveUrl: "Components/Dark-Light%20Loading/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Components/Dark-Light%20Loading`
    },
    {
      id: "comp-modern-loading",
      title: "Ring Spinner Loader",
      category: "components",
      categoryName: "Componentes",
      dotClass: "dot-components",
      pathLabel: "Components/Modern Loading",
      image: "Components/Modern Loading/img.png",
      desc: "Indicador de progresso circular construído com bordas parciais e rotação contínua para feedbacks de requisição.",
      tags: ["CSS3", "Animation", "Micro-UI"],
      liveUrl: "Components/Modern%20Loading/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Components/Modern%20Loading`
    },
    {
      id: "comp-stairs",
      title: "3D Isometric Stairs",
      category: "components",
      categoryName: "Componentes",
      dotClass: "dot-components",
      pathLabel: "Components/Stairs",
      image: "Components/Stairs/image.png",
      desc: "Experimento de transformação 3D e perspectiva isométrica em CSS puro simulando degraus em movimento contínuo.",
      tags: ["CSS 3D", "Transforms", "Keyframes"],
      liveUrl: "Components/Stairs/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Components/Stairs`
    },

    /* ================= JavaScript & Estudos ================= */
    {
      id: "js-bootstrap",
      title: "Bootstrap 5 — Galeria & Carrossel",
      category: "js",
      categoryName: "JavaScript",
      dotClass: "dot-js",
      pathLabel: "Curso de JS/Bootstrap",
      image: "Curso de JS/Bootstrap/public/img/natureza1.jpg",
      desc: "Implementação prática de componentes nativos do Bootstrap 5 com controle de slides, indicadores e grid responsivo.",
      tags: ["Bootstrap 5", "HTML5", "Componentes"],
      liveUrl: "Curso%20de%20JS/Bootstrap/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Curso%20de%20JS/Bootstrap`
    },
    {
      id: "js-form-validation",
      title: "Form Validator Engine",
      category: "js",
      categoryName: "JavaScript",
      dotClass: "dot-js",
      pathLabel: "Curso de JS/Form validation",
      image: "Curso de JS/Form validation/img.png",
      desc: "Validação client-side em JavaScript puro com inspeção de regras por campo, bloqueio de submissão inválida e alertas no DOM.",
      tags: ["Vanilla JS", "DOM API", "Forms"],
      liveUrl: "Curso%20de%20JS/Form%20validation/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Curso%20de%20JS/Form%20validation`
    },
    {
      id: "js-funcional",
      title: "JS Funcional — Interactive Runner",
      category: "js",
      categoryName: "JavaScript",
      dotClass: "dot-js",
      pathLabel: "Curso de JS/JavaScript Funcional",
      image: "Curso de JS/JavaScript Funcional/img.png",
      desc: "Ambiente interativo para execução de trechos ES6+ demonstrando imutabilidade, Array.map, Arrow Functions, IIFE e Spread.",
      tags: ["ES6+", "Programação Funcional", "Runner"],
      liveUrl: "Curso%20de%20JS/JavaScript%20Funcional/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Curso%20de%20JS/JavaScript%20Funcional`
    },
    {
      id: "js-algorithms",
      title: "POO & Higher-Order Closures",
      category: "js",
      categoryName: "JavaScript",
      dotClass: "dot-js",
      pathLabel: "JS",
      image: "JS/img.png",
      desc: "Resolução interativa de algoritmos: transações bancárias com classes ES6 (Account) e fábrica de loggers com closures.",
      tags: ["POO", "Closures", "Algoritmos"],
      liveUrl: "JS/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/JS`
    },
    {
      id: "js-jquery",
      title: "jQuery DOM Lab",
      category: "js",
      categoryName: "JavaScript",
      dotClass: "dot-js",
      pathLabel: "Curso de JS/jQuery",
      image: "Curso de JS/jQuery/img1.png",
      desc: "Caderno prático de manipulação de elementos, encadeamento de eventos, troca dinâmica de atributos e transições via jQuery.",
      tags: ["jQuery", "DOM Events", "seletores"],
      liveUrl: "Curso%20de%20JS/jQuery/index.html",
      githubUrl: `${GITHUB_REPO_BASE}/Curso%20de%20JS/jQuery`
    }
  ];

  window.PORTFOLIO_CONFIG = {
    repoBase: GITHUB_REPO_BASE,
    categories: CATEGORIES,
    projects: PROJECTS_DATA
  };
})(window);
