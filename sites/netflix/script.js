/* ==========================================================================
   Netflix Clone - Application Logic
   ========================================================================== */

// Database of Netflix titles
const catalog = [
  /* Séries Populares */
  {
    id: "stranger-things",
    title: "Stranger Things",
    category: "series",
    image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    match: "98% relevante",
    age: "16+",
    duration: "4 Temporadas",
    genres: "Ficção Científica, Suspense, Terror",
    cast: "Winona Ryder, David Harbour, Millie Bobby Brown, Finn Wolfhard",
    creator: "Os Irmãos Duffer",
    synopsis: "Quando um jovem garoto desaparece na pacata cidade de Hawkins, amigos, familiares e a polícia local entram em uma teia de mistérios extraordinários envolvendo experimentos ultra-secretos do governo e forças sobrenaturais aterrorizantes."
  },
  {
    id: "wednesday",
    title: "Wandinha (Wednesday)",
    category: "series",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    match: "96% relevante",
    age: "14+",
    duration: "1 Temporada",
    genres: "Comédia Macabra, Fantasia, Mistério",
    cast: "Jenna Ortega, Gwendoline Christie, Riki Lindhome",
    creator: "Alfred Gough, Miles Millar",
    synopsis: "Inteligente, sarcástica e um pouco morta por dentro, Wandinha Addams investiga uma onda de assassinatos enquanto faz novos amigos — e inimigos — na Escola Nunca Mais."
  },
  {
    id: "squid-game",
    title: "Round 6 (Squid Game)",
    category: "series",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80",
    match: "99% relevante",
    age: "18+",
    duration: "1 Temporada",
    genres: "Suspense, Drama Social, Ação",
    cast: "Lee Jung-jae, Park Hae-soo, Wi Ha-jun",
    creator: "Hwang Dong-hyuk",
    synopsis: "Centenas de jogadores falidos aceitam um estranho convite para competir em jogos infantis tradicionais coreanos. Um prêmio tentador os espera, mas as apostas são fatais."
  },
  {
    id: "the-witcher",
    title: "The Witcher",
    category: "series",
    image: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1514533450685-4493e01d1fdc?auto=format&fit=crop&w=1200&q=80",
    match: "94% relevante",
    age: "18+",
    duration: "3 Temporadas",
    genres: "Fantasia Medieval, Ação, Aventura",
    cast: "Henry Cavill, Anya Chalotra, Freya Allan",
    creator: "Lauren Schmidt Hissrich",
    synopsis: "O mutante Geralt de Rívia é um caçador de monstros que luta para encontrar seu lugar em um mundo onde as pessoas muitas vezes são mais perversas que as bestas."
  },
  {
    id: "dark",
    title: "Dark",
    category: "series",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1200&q=80",
    match: "97% relevante",
    age: "16+",
    duration: "3 Temporadas",
    genres: "Ficção Científica, Mistério, Viagem no Tempo",
    cast: "Louis Hofmann, Oliver Masucci, Jördis Triebel",
    creator: "Baran bo Odar, Jantje Friese",
    synopsis: "O desaparecimento de duas crianças em uma cidade alemã expõe as vidas duplas e os relacionamentos rompidos entre quatro famílias, revelando uma intrincada conspiração de viagem no tempo."
  },
  {
    id: "black-mirror",
    title: "Black Mirror",
    category: "series",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    match: "95% relevante",
    age: "18+",
    duration: "6 Temporadas",
    genres: "Distopia, Ficção Científica, Antologia",
    cast: "Elenco rotativo a cada episódio",
    creator: "Charlie Brooker",
    synopsis: "Esta série antológica explora um futuro próximo hipertecnológico, onde as maiores inovações da humanidade colidem com seus instintos mais sombrios."
  },

  /* Filmes Recomendados */
  {
    id: "interstellar",
    title: "Interestelar",
    category: "filmes",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    match: "99% relevante",
    age: "12+",
    duration: "2h 49min",
    genres: "Ficção Científica Espacial, Drama",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    creator: "Christopher Nolan",
    synopsis: "Com os dias da Terra contados, uma equipe de exploradores assume a missão mais importante da história da humanidade: viajar para além da nossa galáxia para descobrir se a humanidade tem futuro entre as estrelas."
  },
  {
    id: "inception",
    title: "A Origem (Inception)",
    category: "filmes",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    match: "98% relevante",
    age: "14+",
    duration: "2h 28min",
    genres: "Ação Psicológica, Ficção Científica",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    creator: "Christopher Nolan",
    synopsis: "Dom Cobb é um ladrão habilidoso, o melhor na perigosa arte da extração: roubar segredos valiosos do fundo do subconsciente durante o estado de sono profundo."
  },
  {
    id: "blade-runner",
    title: "Blade Runner 2049",
    category: "filmes",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    match: "93% relevante",
    age: "16+",
    duration: "2h 43min",
    genres: "Ficção Científica Cyberpunk, Neo-noir",
    cast: "Ryan Gosling, Harrison Ford, Ana de Armas",
    creator: "Denis Villeneuve",
    synopsis: "Trinta anos após os acontecimentos do primeiro filme, um novo Blade Runner, o oficial K de Los Angeles, desenterra um segredo há muito enterrado que tem o potencial de mergulhar a sociedade no caos."
  },
  {
    id: "extraction",
    title: "Resgate (Extraction)",
    category: "filmes",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=1200&q=80",
    match: "91% relevante",
    age: "18+",
    duration: "1h 56min",
    genres: "Ação Explosiva, Espionagem",
    cast: "Chris Hemsworth, Rudhraksh Jaiswal, Randeep Hooda",
    creator: "Sam Hargrave",
    synopsis: "Em Bangladesh, o mercenário Tyler Rake luta para sobreviver durante a missão de resgate do filho sequestrado de um chefe do crime internacional."
  },
  {
    id: "theirishman",
    title: "O Irlandês (The Irishman)",
    category: "filmes",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80",
    match: "92% relevante",
    age: "16+",
    duration: "3h 29min",
    genres: "Drama Policial, Mafia, Biografia",
    cast: "Robert De Niro, Al Pacino, Joe Pesci",
    creator: "Martin Scorsese",
    synopsis: "Frank Sheeran é um veterano de guerra condecorado que concilia a vida de caminhoneiro com a de assassino de aluguel para a máfia de Bufalino."
  },
  {
    id: "glass-onion",
    title: "Glass Onion: Um Mistério Knives Out",
    category: "filmes",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
    match: "94% relevante",
    age: "14+",
    duration: "2h 19min",
    genres: "Comédia de Mistério, Investigação",
    cast: "Daniel Craig, Edward Norton, Janelle Monáe",
    creator: "Rian Johnson",
    synopsis: "O famoso detetive Benoit Blanc viaja para a Grécia para desvendar as camadas de um mistério que envolve um bilionário da tecnologia e seu eclético grupo de amigos."
  },

  /* Em Alta no Brasil */
  {
    id: "lacasadepapel",
    title: "La Casa de Papel",
    category: "trending",
    image: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1200&q=80",
    match: "99% relevante",
    age: "16+",
    duration: "5 Temporadas",
    genres: "Ação, Suspense, Roubo Elaborado",
    cast: "Úrsula Corberó, Álvaro Morte, Itziar Ituño, Pedro Alonso",
    creator: "Álex Pina",
    synopsis: "Oito ladrões se trancam na Casa da Moeda da Espanha com reféns enquanto o líder do plano, o Professor, manipula a polícia do lado de fora."
  },
  {
    id: "peakyblinders",
    title: "Peaky Blinders",
    category: "trending",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    match: "98% relevante",
    age: "18+",
    duration: "6 Temporadas",
    genres: "Drama de Época, Crime, Gangues",
    cast: "Cillian Murphy, Paul Anderson, Helen McCrory",
    creator: "Steven Knight",
    synopsis: "Uma notória gangue da Inglaterra de 1919 é liderada pelo implacável Tommy Shelby, um líder criminoso disposto a subir no mundo a qualquer preço."
  },
  {
    id: "queensgambit",
    title: "O Gambito da Rainha",
    category: "trending",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&w=1200&q=80",
    match: "97% relevante",
    age: "16+",
    duration: "Minissérie",
    genres: "Drama Psicológico, Xadrez",
    cast: "Anya Taylor-Joy, Bill Camp, Marielle Heller",
    creator: "Scott Frank, Allan Scott",
    synopsis: "Em um orfanato nos anos 1950, uma jovem prodígio do xadrez luta contra o vício enquanto busca se tornar a maior jogadora do mundo."
  },
  {
    id: "cyberpunk",
    title: "Cyberpunk: Mercenários",
    category: "trending",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    match: "96% relevante",
    age: "18+",
    duration: "1 Temporada",
    genres: "Anime, Ficção Científica, Ação Brutal",
    cast: "Aoi Yuuki, KENN, Hiroki Touchi",
    creator: "Studio Trigger, CD Projekt Red",
    synopsis: "Em uma distopia repleta de corrupção e implantes cibernéticos, um garoto talentoso e impulsivo decide se tornar um mercenário fora da lei."
  }
];

// User's saved list in localStorage
let myList = JSON.parse(localStorage.getItem("netflix_my_list") || "[]");

// Selected movie currently loaded in modal
let activeMovie = catalog[0];

// DOM references
const navbar = document.getElementById("navbar");
const seriesList = document.getElementById("series-list");
const moviesList = document.getElementById("movies-list");
const trendingList = document.getElementById("trending-list");
const myListItems = document.getElementById("my-list-items");
const emptyListMsg = document.getElementById("empty-list-msg");
const listBadge = document.getElementById("list-badge");

const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search-input");
const searchClose = document.getElementById("search-close");
const searchResultsSection = document.getElementById("search-results-section");
const searchResultsGrid = document.getElementById("search-results-grid");
const searchQueryText = document.getElementById("search-query-text");

const modal = document.getElementById("movie-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalClose = document.getElementById("modal-close");
const modalHero = document.getElementById("modal-hero");
const modalTitle = document.getElementById("modal-title");
const modalMatch = document.getElementById("modal-match");
const modalAge = document.getElementById("modal-age");
const modalDuration = document.getElementById("modal-duration");
const modalSynopsis = document.getElementById("modal-synopsis");
const modalCast = document.getElementById("modal-cast");
const modalGenres = document.getElementById("modal-genres");
const modalCreator = document.getElementById("modal-creator");
const modalPlayAction = document.getElementById("modal-play-action");
const modalAddList = document.getElementById("modal-add-list");

const bannerPlayBtn = document.getElementById("banner-play-btn");
const bannerInfoBtn = document.getElementById("banner-info-btn");
const bannerListBtn = document.getElementById("banner-list-btn");
const audioBtn = document.getElementById("audio-btn");
const profileAvatar = document.getElementById("profile-avatar");
const profileDropdown = document.getElementById("profile-dropdown");
const toast = document.getElementById("toast");

/* ==========================================================================
   Initialization
   ========================================================================== */
function init() {
  renderRows();
  updateMyList();
  setupEventListeners();
}

/* ==========================================================================
   Render Movie Cards
   ========================================================================== */
function createCard(item) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.dataset.id = item.id;

  const inList = myList.includes(item.id);

  card.innerHTML = `
    <img src="${item.image}" alt="${item.title}" class="movie-card-thumb" loading="lazy">
    <div class="movie-card-info">
      <h3 class="movie-card-title">${item.title}</h3>
      <div class="movie-card-meta">
        <span class="match-score">${item.match}</span>
        <span class="age-badge">${item.age}</span>
        <span>${item.duration}</span>
      </div>
      <div class="movie-card-actions">
        <button class="card-action-btn play-btn-mini" title="Assistir" onclick="playMovie('${item.id}', event)">
          <i class="fas fa-play"></i>
        </button>
        <button class="card-action-btn add-btn-mini ${inList ? 'in-list' : ''}" title="${inList ? 'Remover da Lista' : 'Adicionar à Lista'}" onclick="toggleList('${item.id}', event)">
          <i class="fas ${inList ? 'fa-check' : 'fa-plus'}"></i>
        </button>
        <button class="card-action-btn info-btn-mini" title="Mais detalhes" onclick="openModal('${item.id}', event)">
          <i class="fas fa-chevron-down"></i>
        </button>
      </div>
    </div>
  `;

  card.addEventListener("click", () => openModal(item.id));
  return card;
}

function renderRows() {
  seriesList.innerHTML = "";
  moviesList.innerHTML = "";
  trendingList.innerHTML = "";

  catalog.forEach(item => {
    if (item.category === "series") {
      seriesList.appendChild(createCard(item));
    } else if (item.category === "filmes") {
      moviesList.appendChild(createCard(item));
    } else if (item.category === "trending") {
      trendingList.appendChild(createCard(item));
    }
  });
}

function updateMyList() {
  myListItems.innerHTML = "";
  listBadge.textContent = myList.length;

  const listItems = catalog.filter(item => myList.includes(item.id));

  if (listItems.length === 0) {
    emptyListMsg.style.display = "block";
  } else {
    emptyListMsg.style.display = "none";
    listItems.forEach(item => {
      myListItems.appendChild(createCard(item));
    });
  }

  // Update banner list button icon
  const strangerInList = myList.includes("stranger-things");
  bannerListBtn.innerHTML = `<i class="fas ${strangerInList ? 'fa-check' : 'fa-plus'}"></i>`;
  bannerListBtn.title = strangerInList ? "Remover da Minha Lista" : "Adicionar à Minha Lista";
}

/* ==========================================================================
   Horizontal Carousel Slider
   ========================================================================== */
window.slideRow = function(containerId, direction) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const scrollDistance = container.clientWidth * 0.75 * direction;
  container.scrollBy({ left: scrollDistance, behavior: "smooth" });
};

/* ==========================================================================
   Minha Lista Toggle (Save / Remove)
   ========================================================================== */
window.toggleList = function(id, event) {
  if (event) event.stopPropagation();

  const item = catalog.find(m => m.id === id);
  if (!item) return;

  const index = myList.indexOf(id);
  if (index > -1) {
    myList.splice(index, 1);
    showToast(`"${item.title}" foi removido da sua lista.`);
  } else {
    myList.push(id);
    showToast(`"${item.title}" adicionado à sua lista!`);
  }

  localStorage.setItem("netflix_my_list", JSON.stringify(myList));
  renderRows();
  updateMyList();

  // If modal is open with this item, update modal button icon
  if (activeMovie && activeMovie.id === id) {
    const isNowInList = myList.includes(id);
    modalAddList.innerHTML = `<i class="fas ${isNowInList ? 'fa-check' : 'fa-plus'}"></i>`;
  }
};

/* ==========================================================================
   Modal Handling
   ========================================================================== */
window.openModal = function(id, event) {
  if (event) event.stopPropagation();

  const item = catalog.find(m => m.id === id);
  if (!item) return;

  activeMovie = item;

  modalHero.style.backgroundImage = `url('${item.backdrop || item.image}')`;
  modalTitle.textContent = item.title;
  modalMatch.textContent = item.match;
  modalAge.textContent = item.age;
  modalDuration.textContent = item.duration;
  modalSynopsis.textContent = item.synopsis;
  modalCast.textContent = item.cast;
  modalGenres.textContent = item.genres;
  modalCreator.textContent = item.creator;

  const inList = myList.includes(item.id);
  modalAddList.innerHTML = `<i class="fas ${inList ? 'fa-check' : 'fa-plus'}"></i>`;

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
};

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "auto";
}

window.playMovie = function(id, event) {
  if (event) event.stopPropagation();
  const item = catalog.find(m => m.id === id);
  const title = item ? item.title : "o conteúdo";
  showToast(`▶ Iniciando reprodução de "${title}" em HD...`);
};

/* ==========================================================================
   Toast Notification
   ========================================================================== */
let toastTimeout;
function showToast(message) {
  clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

/* ==========================================================================
   Event Listeners
   ========================================================================== */
function setupEventListeners() {
  // Sticky Navbar Scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Profile Dropdown Toggle
  profileAvatar.addEventListener("click", (e) => {
    e.stopPropagation();
    profileDropdown.classList.toggle("show");
  });

  document.addEventListener("click", () => {
    profileDropdown.classList.remove("show");
  });

  // Search Toggle & Input
  searchBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchBox.classList.add("open");
    searchInput.focus();
  });

  searchClose.addEventListener("click", () => {
    searchInput.value = "";
    searchBox.classList.remove("open");
    searchResultsSection.style.display = "none";
    document.querySelectorAll(".movie-row-section:not(#search-results-section)").forEach(s => s.style.display = "block");
  });

  searchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q) {
      searchResultsSection.style.display = "none";
      document.querySelectorAll(".movie-row-section:not(#search-results-section)").forEach(s => s.style.display = "block");
      return;
    }

    // Hide standard rows and show search results
    document.querySelectorAll(".movie-row-section:not(#search-results-section)").forEach(s => s.style.display = "none");
    searchResultsSection.style.display = "block";
    searchQueryText.textContent = `"${e.target.value}"`;

    const filtered = catalog.filter(m => 
      m.title.toLowerCase().includes(q) ||
      m.genres.toLowerCase().includes(q) ||
      m.cast.toLowerCase().includes(q) ||
      m.creator.toLowerCase().includes(q)
    );

    searchResultsGrid.innerHTML = "";
    if (filtered.length === 0) {
      searchResultsGrid.innerHTML = `<p style="grid-column: 1/-1; color: #888; padding: 2rem 0;">Nenhum título encontrado para "${e.target.value}".</p>`;
    } else {
      filtered.forEach(item => {
        searchResultsGrid.appendChild(createCard(item));
      });
    }
  });

  // Modal Close Events
  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Modal action buttons
  modalPlayAction.addEventListener("click", () => playMovie(activeMovie.id));
  modalAddList.addEventListener("click", () => toggleList(activeMovie.id));

  // Banner Actions
  bannerPlayBtn.addEventListener("click", () => playMovie("stranger-things"));
  bannerInfoBtn.addEventListener("click", () => openModal("stranger-things"));
  bannerListBtn.addEventListener("click", () => toggleList("stranger-things"));

  // Audio Toggle
  let isMuted = false;
  audioBtn.addEventListener("click", () => {
    isMuted = !isMuted;
    audioBtn.innerHTML = `<i class="fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'}"></i>`;
    showToast(isMuted ? "Áudio desativado" : "Áudio ativado");
  });

  // Category navigation filtering
  document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");

      const filter = item.dataset.filter;
      const rowSeries = document.getElementById("row-series");
      const rowMovies = document.getElementById("row-movies");
      const rowTrending = document.getElementById("row-trending");
      const rowMyList = document.getElementById("row-my-list");

      // Close search if open
      searchClose.click();

      if (filter === "all") {
        rowSeries.style.display = "block";
        rowMovies.style.display = "block";
        rowTrending.style.display = "block";
        rowMyList.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (filter === "series") {
        rowSeries.style.display = "block";
        rowMovies.style.display = "none";
        rowTrending.style.display = "none";
        rowMyList.style.display = "none";
        rowSeries.scrollIntoView({ behavior: "smooth" });
      } else if (filter === "filmes") {
        rowSeries.style.display = "none";
        rowMovies.style.display = "block";
        rowTrending.style.display = "none";
        rowMyList.style.display = "none";
        rowMovies.scrollIntoView({ behavior: "smooth" });
      } else if (filter === "em-alta") {
        rowSeries.style.display = "none";
        rowMovies.style.display = "none";
        rowTrending.style.display = "block";
        rowMyList.style.display = "none";
        rowTrending.scrollIntoView({ behavior: "smooth" });
      } else if (filter === "minha-lista") {
        rowSeries.style.display = "none";
        rowMovies.style.display = "none";
        rowTrending.style.display = "none";
        rowMyList.style.display = "block";
        rowMyList.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// Start
init();