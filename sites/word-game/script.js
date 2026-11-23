/**
 * LÉXICO — Word Puzzle Engine
 * Suporte completo a diacríticos do português (A revela Á/Â/Ã, C revela Ç),
 * teclado virtual e físico, dicas contextuais, sistema de tentativas e persistência.
 */
(function () {
  const MAX_MISTAKES = 6;

  const CATEGORY_NAMES = {
    tech: "Computação & Web",
    nature: "Fauna & Natureza",
    science: "Ciência & Cosmos",
    culture: "Geografia & Cultura"
  };

  // Banco curado de 40 palavras com dicas reais e acentuação correta
  const WORD_BANK = [
    // Computação & Web
    { word: "ALGORITMO", category: "tech", clue: "Sequência finita de instruções bem definidas para resolver um problema." },
    { word: "COMPILADOR", category: "tech", clue: "Programa que traduz código-fonte para linguagem de máquina." },
    { word: "INTERFACE", category: "tech", clue: "Camada visual ou ponto de interação entre o usuário e um sistema." },
    { word: "PROTOCOLO", category: "tech", clue: "Conjunto de regras que governa a comunicação de dados na rede." },
    { word: "CRIPTOGRAFIA", category: "tech", clue: "Técnica de codificar informações para garantir sigilo e autenticidade." },
    { word: "RECURSIVIDADE", category: "tech", clue: "Propriedade de uma função que invoca a si mesma." },
    { word: "SERVIDOR", category: "tech", clue: "Computador ou processo dedicado a fornecer recursos em uma rede." },
    { word: "NAVEGADOR", category: "tech", clue: "Software cliente utilizado para renderizar documentos HTML na web." },
    { word: "VARIAVEL", display: "VARIÁVEL", category: "tech", clue: "Espaço nomeado na memória usado para armazenar um valor mutável." },
    { word: "BIBLIOTECA", category: "tech", clue: "Coleção de funções e módulos reutilizáveis no desenvolvimento." },

    // Fauna & Natureza
    { word: "CAMALEAO", display: "CAMALEÃO", category: "nature", clue: "Réptil conhecido por alterar sua coloração e mover os olhos de forma independente." },
    { word: "ELEFANTE", category: "nature", clue: "Maior mamífero terrestre vivo, dotado de tromba preênsil." },
    { word: "GUEPARDO", category: "nature", clue: "Felino africano recordista de velocidade em corridas curtas." },
    { word: "ALBATROZ", category: "nature", clue: "Ave marinha de grande envergadura que plana sobre os oceanos." },
    { word: "SEQUOIA", category: "nature", clue: "Árvore conífera gigante que pode ultrapassar cem metros de altura." },
    { word: "ORQUIDEA", display: "ORQUÍDEA", category: "nature", clue: "Família de flores tropicais muito apreciada pela simetria de suas pétalas." },
    { word: "POLVO", category: "nature", clue: "Molusco marinho de oito tentáculos, três corações e alta inteligência." },
    { word: "CORUJA", category: "nature", clue: "Ave de rapina noturna capaz de girar o pescoço em até 270 graus." },
    { word: "MANGUEZAL", category: "nature", clue: "Ecossistema costeiro de transição entre os ambientes terrestre e marinho." },
    { word: "CAPIVARA", category: "nature", clue: "O maior roedor do mundo, nativo da América do Sul." },

    // Ciência & Cosmos
    { word: "NEBULOSA", category: "science", clue: "Nuvem interestelar gigantesca composta de poeira, hidrogênio e plasma." },
    { word: "GRAVIDADE", category: "science", clue: "Força fundamental de atração mútua entre corpos com massa." },
    { word: "MOLECULA", display: "MOLÉCULA", category: "science", clue: "Agrupamento eletricamente neutro de dois ou mais átomos unidos por ligações." },
    { word: "ECLIPSE", category: "science", clue: "Fenômeno astronômico de ocultação total ou parcial de um astro por outro." },
    { word: "FOTOSSINTESE", display: "FOTOSSÍNTESE", category: "science", clue: "Processo pelo qual plantas convertem luz solar em energia química." },
    { word: "QUASAR", category: "science", clue: "Núcleo galáctico extremamente luminoso alimentado por um buraco negro supermassivo." },
    { word: "MAGNETISMO", category: "science", clue: "Fenômeno físico associado à atração ou repulsão de dipolos e correntes elétricas." },
    { word: "ENTROPIA", category: "science", clue: "Grandeza termodinâmica que mede o grau de desordem de um sistema." },
    { word: "CATALISADOR", category: "science", clue: "Substância que acelera uma reação química sem ser consumida durante o processo." },
    { word: "TELESCOPIO", display: "TELESCÓPIO", category: "science", clue: "Instrumento óptico ou de rádio projetado para observar objetos distantes no espaço." },

    // Geografia & Cultura
    { word: "ARQUIPELAGO", display: "ARQUIPÉLAGO", category: "culture", clue: "Conjunto de ilhas próximas umas das outras e de origem geológica semelhante." },
    { word: "BUSSOLA", display: "BÚSSOLA", category: "culture", clue: "Instrumento de navegação que utiliza uma agulha magnetizada alinhada ao norte." },
    { word: "CORDILHEIRA", category: "culture", clue: "Cadeia extensa de montanhas interligadas, como os Andes ou o Himalaia." },
    { word: "PENINSULA", display: "PENÍNSULA", category: "culture", clue: "Porção de terra cercada de água por quase todos os lados, ligada ao continente por um istmo." },
    { word: "LABIRINTO", category: "culture", clue: "Construção de caminhos intricados criada na mitologia para deter o Minotauro." },
    { word: "SINFONIA", category: "culture", clue: "Composição musical extensa escrita para ser executada por uma orquestra." },
    { word: "MANUSCRITO", category: "culture", clue: "Documento ou livro antigo redigido inteiramente à mão." },
    { word: "ANFITEATRO", category: "culture", clue: "Arena circular ou oval rodeada de degraus usada na Antiguidade para espetáculos." },
    { word: "MERIDIANO", category: "culture", clue: "Semelhança imaginária que liga os polos terrestres e define os fusos horários." },
    { word: "CARTOGRAFIA", category: "culture", clue: "Ciência e arte dedicada à concepção e elaboração de mapas geográficos." }
  ];

  const KEYBOARD_ROWS = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"]
  ];

  // Estado do jogo
  const state = {
    categoryFilter: "all",
    currentEntry: null,
    normalizedWord: "",
    displayWord: "",
    guessedLetters: new Set(),
    wrongLetters: new Set(),
    mistakes: 0,
    clueUsed: false,
    status: "playing", // 'playing' | 'won' | 'lost'
    lastWord: "",
    score: Number(localStorage.getItem("lexico_score") || 0),
    streak: Number(localStorage.getItem("lexico_streak") || 0),
    bestStreak: Number(localStorage.getItem("lexico_best") || 0),
    theme: localStorage.getItem("wd_theme") || "dark"
  };

  // Referências de DOM
  const els = {
    categorySelect: document.getElementById("category-select"),
    themeBtn: document.getElementById("theme-btn"),
    themeLabel: document.getElementById("theme-label"),
    statScore: document.getElementById("stat-score"),
    statStreak: document.getElementById("stat-streak"),
    statBest: document.getElementById("stat-best"),
    attemptsText: document.getElementById("attempts-text"),
    attemptsBar: document.getElementById("attempts-bar"),
    boardPanel: document.getElementById("board-panel"),
    categoryBadge: document.getElementById("current-category-badge"),
    wordLengthBadge: document.getElementById("word-length-badge"),
    wordSlots: document.getElementById("word-slots"),
    clueText: document.getElementById("clue-text"),
    btnHint: document.getElementById("btn-hint"),
    feedbackLine: document.getElementById("feedback-line"),
    keyboard: document.getElementById("virtual-keyboard"),
    fullGuessForm: document.getElementById("full-guess-form"),
    guessInput: document.getElementById("guess-input"),
    btnRevealLetter: document.getElementById("btn-reveal-letter"),
    btnNewWord: document.getElementById("btn-new-word"),
    // Modal
    modal: document.getElementById("result-modal"),
    modalTag: document.getElementById("modal-tag"),
    modalClose: document.getElementById("modal-close"),
    modalTitle: document.getElementById("modal-title"),
    modalDesc: document.getElementById("modal-desc"),
    modalWord: document.getElementById("modal-word"),
    modalWordClue: document.getElementById("modal-word-clue"),
    modalMistakes: document.getElementById("modal-mistakes"),
    modalPoints: document.getElementById("modal-points"),
    modalStreak: document.getElementById("modal-streak"),
    modalNextBtn: document.getElementById("modal-next-btn")
  };

  /**
   * Remove acentos e normaliza para A-Z maiúsculo
   */
  function normalizeText(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase()
      .replace(/[^A-Z]/g, "");
  }

  /**
   * Tema Claro / Escuro compartilhado com o portal
   */
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("wd_theme", theme);
    els.themeLabel.textContent = theme === "dark" ? "Light" : "Dark";
  }

  /**
   * Persiste estatísticas no localStorage
   */
  function saveStats() {
    localStorage.setItem("lexico_score", String(state.score));
    localStorage.setItem("lexico_streak", String(state.streak));
    localStorage.setItem("lexico_best", String(state.bestStreak));
  }

  /**
   * Exibe mensagem na barra de status com tom visual
   */
  function setFeedback(text, tone = "neutral") {
    els.feedbackLine.textContent = text;
    els.feedbackLine.className = "feedback-line";
    if (tone === "error") els.feedbackLine.classList.add("tone-error");
    if (tone === "success") els.feedbackLine.classList.add("tone-success");
    if (tone === "warn") els.feedbackLine.classList.add("tone-warn");
  }

  /**
   * Dispara efeito sutil de shake no tabuleiro em caso de erro
   */
  function triggerShake() {
    els.boardPanel.classList.remove("shake");
    void els.boardPanel.offsetWidth;
    els.boardPanel.classList.add("shake");
  }

  /**
   * Constrói o teclado virtual QWERTY
   */
  function buildKeyboard() {
    els.keyboard.innerHTML = KEYBOARD_ROWS.map(
      (row) => `
        <div class="kb-row">
          ${row
            .map(
              (letter) => `
              <button
                type="button"
                class="kb-key"
                data-key="${letter}"
                aria-label="Letra ${letter}"
              >${letter}</button>
            `
            )
            .join("")}
        </div>
      `
    ).join("");
  }

  /**
   * Atualiza estado visual das teclas do teclado virtual
   */
  function updateKeyboardUI() {
    const keys = els.keyboard.querySelectorAll(".kb-key");
    keys.forEach((btn) => {
      const letter = btn.dataset.key;
      btn.classList.remove("hit", "miss");
      btn.disabled = false;

      if (state.guessedLetters.has(letter)) {
        btn.classList.add("hit");
        btn.disabled = true;
      } else if (state.wrongLetters.has(letter)) {
        btn.classList.add("miss");
        btn.disabled = true;
      } else if (state.status !== "playing") {
        btn.disabled = true;
      }
    });
  }

  /**
   * Renderiza o HUD (pontos, sequência e barra de tentativas)
   */
  function renderHUD() {
    els.statScore.textContent = state.score;
    els.statStreak.textContent = state.streak;
    els.statBest.textContent = state.bestStreak;

    const remaining = Math.max(0, MAX_MISTAKES - state.mistakes);
    els.attemptsText.textContent = `${remaining} / ${MAX_MISTAKES}`;
    els.attemptsBar.setAttribute("aria-valuenow", String(remaining));

    let segmentsHTML = "";
    for (let i = 0; i < MAX_MISTAKES; i++) {
      const isLost = i >= remaining;
      segmentsHTML += `<div class="life-segment ${isLost ? "lost" : ""}"></div>`;
    }
    els.attemptsBar.innerHTML = segmentsHTML;

    // Botão de revelar letra só fica ativo se houver mais de 1 vida restante e faltar mais de 1 letra
    const unrevealedCount = getUnrevealedLetters().length;
    els.btnRevealLetter.disabled = state.status !== "playing" || remaining <= 1 || unrevealedCount <= 1;
  }

  /**
   * Renderiza os tiles da palavra atual
   */
  function renderWordSlots() {
    const chars = state.displayWord.split("");
    const normChars = state.normalizedWord.split("");

    els.wordSlots.innerHTML = chars
      .map((char, idx) => {
        const baseChar = normChars[idx];
        const isGuessed = state.guessedLetters.has(baseChar);
        const showMissedOnLoss = state.status === "lost" && !isGuessed;

        let tileClass = "letter-tile";
        let content = "";

        if (isGuessed) {
          tileClass += " revealed";
          content = char;
        } else if (showMissedOnLoss) {
          tileClass += " missed-reveal";
          content = char;
        }

        return `<div class="${tileClass}" aria-label="${isGuessed ? char : "Letra oculta"}">${content}</div>`;
      })
      .join("");
  }

  /**
   * Retorna lista de letras únicas que ainda não foram descobertas
   */
  function getUnrevealedLetters() {
    const uniqueLetters = new Set(state.normalizedWord.split(""));
    return Array.from(uniqueLetters).filter((l) => !state.guessedLetters.has(l));
  }

  /**
   * Verifica se todas as letras da palavra foram descobertas
   */
  function isWordComplete() {
    return getUnrevealedLetters().length === 0;
  }

  /**
   * Sorteia uma nova palavra respeitando o filtro de categoria
   */
  function startNewRound() {
    const pool =
      state.categoryFilter === "all"
        ? WORD_BANK
        : WORD_BANK.filter((item) => item.category === state.categoryFilter);

    const candidates = pool.length > 1 ? pool.filter((item) => item.word !== state.lastWord) : pool;
    const chosen = candidates[Math.floor(Math.random() * candidates.length)];

    state.currentEntry = chosen;
    state.lastWord = chosen.word;
    state.normalizedWord = normalizeText(chosen.word);
    state.displayWord = (chosen.display || chosen.word).toUpperCase();
    state.guessedLetters.clear();
    state.wrongLetters.clear();
    state.mistakes = 0;
    state.clueUsed = false;
    state.status = "playing";

    // Atualiza metadados do tabuleiro
    els.categoryBadge.textContent = CATEGORY_NAMES[chosen.category] || "Geral";
    els.wordLengthBadge.textContent = `${state.normalizedWord.length} letras`;

    // Reseta barra de dica
    els.clueText.textContent = "Pista oculta. Use o botão ao lado se precisar de contexto.";
    els.clueText.classList.remove("active-clue");
    els.btnHint.disabled = false;
    els.btnHint.innerHTML = "<span>Revelar pista</span>";

    els.guessInput.value = "";
    els.modal.hidden = true;

    setFeedback("Nova palavra sorteada. Escolha uma letra para começar.");
    renderWordSlots();
    updateKeyboardUI();
    renderHUD();
  }

  /**
   * Revela a pista contextual da palavra
   */
  function revealClue() {
    if (state.status !== "playing" || state.clueUsed) return;
    state.clueUsed = true;
    els.clueText.textContent = state.currentEntry.clue;
    els.clueText.classList.add("active-clue");
    els.btnHint.disabled = true;
    els.btnHint.innerHTML = "<span>Pista ativa</span>";
    setFeedback("Pista contextual revelada.", "warn");
  }

  /**
   * Revela uma letra aleatória custando 1 tentativa
   */
  function revealRandomLetter() {
    if (state.status !== "playing") return;
    const remainingLives = MAX_MISTAKES - state.mistakes;
    const unrevealed = getUnrevealedLetters();

    if (remainingLives <= 1 || unrevealed.length <= 1) return;

    const randomLetter = unrevealed[Math.floor(Math.random() * unrevealed.length)];
    state.mistakes += 1;
    state.guessedLetters.add(randomLetter);

    setFeedback(`Letra '${randomLetter}' revelada (-1 tentativa).`, "warn");
    renderWordSlots();
    updateKeyboardUI();
    renderHUD();

    if (isWordComplete()) {
      finishRound(true);
    }
  }

  /**
   * Processa a tentativa de uma única letra (A-Z)
   */
  function handleLetterGuess(rawLetter) {
    if (state.status !== "playing") return;
    const letter = normalizeText(rawLetter);
    if (letter.length !== 1) return;

    if (state.guessedLetters.has(letter) || state.wrongLetters.has(letter)) {
      setFeedback(`A letra '${letter}' já foi testada nesta rodada.`, "warn");
      return;
    }

    if (state.normalizedWord.includes(letter)) {
      state.guessedLetters.add(letter);
      const occurrences = state.normalizedWord.split("").filter((c) => c === letter).length;
      setFeedback(
        occurrences > 1
          ? `Boa! A letra '${letter}' aparece ${occurrences} vezes.`
          : `Certo! A letra '${letter}' faz parte da palavra.`,
        "success"
      );

      renderWordSlots();
      updateKeyboardUI();
      renderHUD();

      if (isWordComplete()) {
        finishRound(true);
      }
    } else {
      state.wrongLetters.add(letter);
      state.mistakes += 1;

      // Se o jogador errar 3 vezes e ainda não tiver aberto a dica, libera a dica automaticamente
      if (state.mistakes >= 3 && !state.clueUsed) {
        revealClue();
      }

      triggerShake();
      setFeedback(`A letra '${letter}' não está presente na palavra.`, "error");
      updateKeyboardUI();
      renderHUD();

      if (state.mistakes >= MAX_MISTAKES) {
        finishRound(false);
      }
    }
  }

  /**
   * Processa um chute de palavra completa (ou letra única pelo input)
   */
  function handleDirectInputGuess(rawValue) {
    if (state.status !== "playing") return;
    const cleaned = normalizeText(rawValue);

    if (!cleaned) {
      setFeedback("Digite uma letra ou a palavra completa antes de enviar.", "warn");
      return;
    }

    // Se digitou apenas 1 caractere no input, trata como chute de letra
    if (cleaned.length === 1) {
      els.guessInput.value = "";
      handleLetterGuess(cleaned);
      return;
    }

    // Verifica se o tamanho bate com a palavra oculta
    if (cleaned.length !== state.normalizedWord.length) {
      triggerShake();
      setFeedback(
        `A palavra oculta possui ${state.normalizedWord.length} letras (você digitou ${cleaned.length}).`,
        "warn"
      );
      return;
    }

    els.guessInput.value = "";

    if (cleaned === state.normalizedWord) {
      // Revela todas as letras e vence
      state.normalizedWord.split("").forEach((c) => state.guessedLetters.add(c));
      renderWordSlots();
      updateKeyboardUI();
      finishRound(true, true);
    } else {
      state.mistakes += 1;
      triggerShake();
      setFeedback(`Palavra '${rawValue.toUpperCase()}' incorreta! (-1 tentativa)`, "error");
      renderHUD();

      if (state.mistakes >= MAX_MISTAKES) {
        finishRound(false);
      }
    }
  }

  /**
   * Finaliza a rodada (vitória ou derrota), calcula pontuação e exibe o modal
   */
  function finishRound(isWin, wasDirectWordGuess = false) {
    state.status = isWin ? "won" : "lost";
    renderWordSlots();
    updateKeyboardUI();
    renderHUD();

    let pointsEarned = 0;

    if (isWin) {
      const remainingLives = MAX_MISTAKES - state.mistakes;
      const basePoints = state.normalizedWord.length * 10;
      const lifeBonus = remainingLives * 15;
      const directBonus = wasDirectWordGuess ? 30 : 0;
      const cluePenalty = state.clueUsed ? 15 : 0;

      pointsEarned = Math.max(20, basePoints + lifeBonus + directBonus - cluePenalty);
      state.score += pointsEarned;
      state.streak += 1;
      if (state.streak > state.bestStreak) {
        state.bestStreak = state.streak;
      }

      setFeedback(`Palavra decifrada! +${pointsEarned} pontos.`, "success");
    } else {
      state.streak = 0;
      setFeedback(`Tentativas esgotadas. A palavra era ${state.displayWord}.`, "error");
    }

    saveStats();
    renderHUD();
    openResultModal(isWin, pointsEarned);
  }

  /**
   * Abre o modal com o resumo técnico da partida
   */
  function openResultModal(isWin, pointsEarned) {
    els.modalTag.textContent = isWin ? "SUCESSO" : "FIM DE TENTATIVAS";
    els.modalTag.className = `modal-status-tag ${isWin ? "tag-win" : "tag-loss"}`;

    els.modalTitle.textContent = isWin ? "Palavra Decifrada!" : "Não foi desta vez";
    els.modalDesc.textContent = isWin
      ? "Você identificou todos os caracteres antes de esgotar a integridade."
      : "Suas 6 tentativas acabaram. Confira o termo oculto abaixo:";

    els.modalWord.textContent = state.displayWord;
    els.modalWordClue.textContent = state.currentEntry.clue;
    els.modalMistakes.textContent = `${state.mistakes} / ${MAX_MISTAKES}`;
    els.modalPoints.textContent = isWin ? `+${pointsEarned}` : "0";
    els.modalStreak.textContent = String(state.streak);

    els.modal.hidden = false;
    setTimeout(() => els.modalNextBtn.focus(), 60);
  }

  /**
   * Registra todos os eventos de interação
   */
  function bindEvents() {
    // Clique no teclado virtual
    els.keyboard.addEventListener("click", (e) => {
      const btn = e.target.closest(".kb-key");
      if (!btn || btn.disabled) return;
      handleLetterGuess(btn.dataset.key);
    });

    // Teclado físico
    window.addEventListener("keydown", (e) => {
      // Se o modal estiver aberto, Enter ou Espaço avança para a próxima palavra
      if (!els.modal.hidden) {
        if (e.key === "Enter") {
          e.preventDefault();
          startNewRound();
        } else if (e.key === "Escape") {
          els.modal.hidden = true;
        }
        return;
      }

      // Ignora atalhos com Ctrl / Alt / Meta ou quando o usuário está digitando no campo de palavra completa
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      if (document.activeElement === els.guessInput || document.activeElement === els.categorySelect) {
        return;
      }

      if (/^[a-zA-ZçÇ]$/.test(e.key)) {
        e.preventDefault();
        const normalizedKey = e.key.toUpperCase() === "Ç" ? "C" : e.key.toUpperCase();
        handleLetterGuess(normalizedKey);
      }
    });

    // Formulário de chute de palavra completa
    els.fullGuessForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleDirectInputGuess(els.guessInput.value);
    });

    // Botão de revelar pista
    els.btnHint.addEventListener("click", revealClue);

    // Botão de revelar 1 letra
    els.btnRevealLetter.addEventListener("click", revealRandomLetter);

    // Botão de nova palavra
    els.btnNewWord.addEventListener("click", startNewRound);

    // Mudança de categoria
    els.categorySelect.addEventListener("change", (e) => {
      state.categoryFilter = e.target.value;
      startNewRound();
    });

    // Fechar modal ou avançar
    els.modalClose.addEventListener("click", () => {
      els.modal.hidden = true;
    });

    els.modalNextBtn.addEventListener("click", startNewRound);

    els.modal.addEventListener("click", (e) => {
      if (e.target === els.modal) {
        els.modal.hidden = true;
      }
    });

    // Alternar Tema
    els.themeBtn.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });
  }

  /**
   * Inicialização
   */
  function init() {
    applyTheme(state.theme);
    buildKeyboard();
    bindEvents();
    startNewRound();
  }

  init();
})();
