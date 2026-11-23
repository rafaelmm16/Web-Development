# Web-Development — Diretório de Projetos Front-End

<p align="center">
  <img src="https://img.shields.io/badge/GitHub%20Pages-Online-16a34a?style=flat-square&logo=github" alt="GitHub Pages Live">
  <img src="https://img.shields.io/badge/Projetos-21%20Entradas-e06d44?style=flat-square" alt="21 Projetos">
  <img src="https://img.shields.io/badge/Arquitetura-kebab--case%20%7C%20Modular-272724?style=flat-square" alt="Arquitetura Modular">
</p>

<p align="center">
  <strong><a href="https://rafaelmm16.github.io/Web-Development/">Acessar o Diretório Interativo no GitHub Pages &rarr;</a></strong>
</p>

---

## Sobre o Repositório

Catálogo prático de interfaces web, clones de produtos, páginas de conversão (Landing Pages), fluxos de autenticação, micro-componentes CSS e laboratórios de JavaScript (**ES6+**, **POO**, **Programação Funcional**, **DOM**, **Tailwind CSS**, **Bootstrap 5** e **jQuery**).

Toda a estrutura de diretórios segue a convenção **`kebab-case`** (sem espaços ou caracteres especiais nas URLs), garantindo rotas limpas e compatibilidade direta com servidores estáticos e **GitHub Pages**.

---

## Arquitetura de Diretórios

```text
Web-Development/
├── index.html                           # Portal principal do GitHub Pages
├── assets/                              # Arquitetura modular do portal
│   ├── css/
│   │   ├── variables.css                # Tokens de design e temas (Dark / Light)
│   │   ├── layout.css                   # Grid, cabeçalho editorial e estrutura
│   │   └── components.css               # Cards, barra de ferramentas e lista
│   └── js/
│       ├── projects-data.js             # Catálogo e metadados dos 21 projetos
│       └── app.js                       # Busca, filtros, atalhos e estado de UI
│
├── sites/                               # Clones de Interfaces e Aplicações Web
│   ├── apple-showcase/                  # Página de produto estilo Apple
│   ├── currency-converter/              # Conversor de moedas (BRL -> USD / EUR)
│   ├── flowers/                         # Animação noturna de flores em CSS puro
│   ├── netflix/                         # Clone da interface principal da Netflix
│   ├── pinterest/                       # Feed em layout Masonry estilo Pinterest
│   ├── word-game/                       # Léxico: Jogo de adivinhação de palavras
│   └── youtube/                         # Clone da página inicial do YouTube
│
├── landing-pages/                       # Páginas de Conversão e Institucionais
│   ├── modern-gradient/                 # Landing page SaaS com Tailwind CSS
│   └── corporate-tech/                  # Landing page corporativa de tecnologia
│
├── login-pages/                         # Telas de Autenticação
│   ├── modern-card/                     # Cartão de login minimalista centralizado
│   ├── astronaut-theme/                 # Layout dividido com ilustração SVG
│   ├── forest-glass/                    # Autenticação com efeito Glassmorphism
│   └── animated-toggle/                 # Painel deslizante duplo (Sign In / Sign Up)
│
├── components/                          # Micro-Componentes e Animações CSS
│   ├── dark-light-loading/              # Loader com alternador de tema claro/escuro
│   ├── modern-loading/                  # Spinner circular em rotação contínua
│   └── stairs/                          # Perspectiva isométrica 3D em CSS puro
│
└── javascript/                          # Estudos, Algoritmos e Frameworks JS
    ├── algorithms/                      # POO (Account) e Higher-Order Closures (Logger)
    ├── bootstrap/                       # Galeria e carrossel com Bootstrap 5
    ├── form-validation/                 # Motor de validação de formulários no DOM
    ├── functional-js/                   # Runner interativo ES6+ (map, arrow, spread, IIFE)
    └── jquery/                          # Laboratório de eventos e manipulação com jQuery
```

---

## Catálogo de Projetos

### 1. Sites & Aplicações (`sites/`)
| Projeto | Demo Live | Diretório | Stack |
| :--- | :--- | :--- | :--- |
| **Netflix UI Clone** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/sites/netflix/index.html) | [`sites/netflix`](sites/netflix/) | HTML5, CSS3, JavaScript |
| **YouTube Interface** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/sites/youtube/index.html) | [`sites/youtube`](sites/youtube/) | HTML5, CSS Grid, Flexbox |
| **Pinterest Masonry Feed** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/sites/pinterest/index.html) | [`sites/pinterest`](sites/pinterest/) | HTML5, CSS Columns |
| **Apple Product Page** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/sites/apple-showcase/index.html) | [`sites/apple-showcase`](sites/apple-showcase/) | HTML5, CSS3, Editorial UI |
| **Conversor de Moedas** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/sites/currency-converter/index.html) | [`sites/currency-converter`](sites/currency-converter/) | HTML5, CSS Modular, JS |
| **Léxico — Word Puzzle** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/sites/word-game/index.html) | [`sites/word-game`](sites/word-game/) | HTML5, CSS3, JS Game Engine |
| **CSS Night Flowers** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/sites/flowers/index.html) | [`sites/flowers`](sites/flowers/) | CSS3 Keyframes, JavaScript |

### 2. Landing Pages (`landing-pages/`)
| Projeto | Demo Live | Diretório | Stack |
| :--- | :--- | :--- | :--- |
| **SaaS Modern Gradient** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/landing-pages/modern-gradient/index.html) | [`landing-pages/modern-gradient`](landing-pages/modern-gradient/) | Tailwind CSS, HTML5 |
| **Consultoria Corporate Tech** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/landing-pages/corporate-tech/index.html) | [`landing-pages/corporate-tech`](landing-pages/corporate-tech/) | Tailwind CSS, JavaScript |

### 3. Autenticação (`login-pages/`)
| Projeto | Demo Live | Diretório | Stack |
| :--- | :--- | :--- | :--- |
| **Auth 01 — Minimal Card** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/login-pages/modern-card/index.html) | [`login-pages/modern-card`](login-pages/modern-card/) | HTML5, CSS3, Flexbox |
| **Auth 02 — Astronaut Theme** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/login-pages/astronaut-theme/index.html) | [`login-pages/astronaut-theme`](login-pages/astronaut-theme/) | HTML5, CSS3, SVG |
| **Auth 03 — Forest Glass** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/login-pages/forest-glass/index.html) | [`login-pages/forest-glass`](login-pages/forest-glass/) | CSS Backdrop Filter, UI |
| **Auth 04 — Dual Sliding Panel** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/login-pages/animated-toggle/index.html) | [`login-pages/animated-toggle`](login-pages/animated-toggle/) | HTML5, CSS3, JavaScript |

### 4. Componentes UI (`components/`)
| Projeto | Demo Live | Diretório | Stack |
| :--- | :--- | :--- | :--- |
| **Theme Switcher & Loader** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/components/dark-light-loading/index.html) | [`components/dark-light-loading`](components/dark-light-loading/) | CSS Variables, Keyframes |
| **Ring Spinner Loader** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/components/modern-loading/index.html) | [`components/modern-loading`](components/modern-loading/) | CSS3 Keyframes |
| **3D Isometric Stairs** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/components/stairs/index.html) | [`components/stairs`](components/stairs/) | CSS 3D Transforms |

### 5. JavaScript & Estudos (`javascript/`)
| Projeto | Demo Live | Diretório | Stack |
| :--- | :--- | :--- | :--- |
| **Bootstrap 5 Showcase** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/javascript/bootstrap/index.html) | [`javascript/bootstrap`](javascript/bootstrap/) | Bootstrap 5, HTML5 |
| **Form Validator Engine** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/javascript/form-validation/index.html) | [`javascript/form-validation`](javascript/form-validation/) | JavaScript Vanilla, DOM |
| **JS Funcional (Runner)** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/javascript/functional-js/index.html) | [`javascript/functional-js`](javascript/functional-js/) | ES6+, Array.map, Closures |
| **POO & Closures** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/javascript/algorithms/index.html) | [`javascript/algorithms`](javascript/algorithms/) | Classes ES6, Higher-Order JS |
| **jQuery DOM Lab** | [Abrir Demo](https://rafaelmm16.github.io/Web-Development/javascript/jquery/index.html) | [`javascript/jquery`](javascript/jquery/) | jQuery, DOM Events |

---

## Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/rafaelmm16/Web-Development.git
cd Web-Development
```

2. Abra o arquivo `index.html` diretamente no navegador ou sirva a pasta raiz com qualquer servidor estático:
```bash
npx serve .
```
