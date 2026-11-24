/**
 * Spotify Web Player Clone — Motor Interativo & Web Audio API Synth
 * Compatível com hospedagem estática direta no GitHub Pages.
 */
(function () {
  const ALL_TRACKS = [
    {
      id: "glee",
      title: "Don't Stop Believin'",
      artist: "Glee Cast",
      album: "This is Glee",
      cover: "glee.jpg",
      duration: 230,
      color: "from-blue-700/40"
    },
    {
      id: "sabrina",
      title: "Espresso",
      artist: "Sabrina Carpenter",
      album: "Short n' Sweet",
      cover: "sabrina.jpg",
      duration: 175,
      color: "from-amber-700/40"
    },
    {
      id: "billie",
      title: "BIRDS OF A FEATHER",
      artist: "Billie Eilish",
      album: "HIT ME HARD AND SOFT",
      cover: "billie.jpg",
      duration: 183,
      color: "from-indigo-700/40"
    },
    {
      id: "yung",
      title: "Aquário",
      artist: "YUNG LI",
      album: "This is YUNG LI",
      cover: "yung.jpg",
      duration: 165,
      color: "from-purple-700/40"
    },
    {
      id: "matue",
      title: "Máquina do Tempo",
      artist: "Matuê",
      album: "333",
      cover: "matue4.webp",
      duration: 195,
      color: "from-rose-700/40"
    },
    {
      id: "katseye",
      title: "Touch",
      artist: "KATSEYE",
      album: "SIS (Soft Is Strong)",
      cover: "katseye.jpg",
      duration: 138,
      color: "from-pink-700/40"
    },
    {
      id: "daily1",
      title: "Daily Mix 1",
      artist: "Lady Gaga, Dua Lipa, Katy Perry",
      album: "Mix Pop",
      cover: "daily1.jpg",
      duration: 215,
      color: "from-emerald-700/40"
    },
    {
      id: "daily2",
      title: "Daily Mix 2",
      artist: "Lana Del Rey, Lorde, Mitski",
      album: "Indie Vibes",
      cover: "daily2.jpg",
      duration: 245,
      color: "from-teal-700/40"
    },
    {
      id: "daily3",
      title: "Daily Mix 3",
      artist: "Taylor Swift, Olivia Rodrigo, Gracie Abrams",
      album: "Heartbreak Hits",
      cover: "daily3.jpg",
      duration: 222,
      color: "from-sky-700/40"
    },
    {
      id: "daily4",
      title: "Daily Mix 4",
      artist: "The Weeknd, Post Malone, Drake",
      album: "R&B / Hip-hop",
      cover: "daily4.jpg",
      duration: 210,
      color: "from-violet-700/40"
    },
    {
      id: "daily5",
      title: "Daily Mix 5",
      artist: "Billie Eilish, Finneas, girl in red",
      album: "Chill Alt",
      cover: "daily5.jpg",
      duration: 192,
      color: "from-cyan-700/40"
    },
    {
      id: "daily6",
      title: "Daily Mix 6",
      artist: "Eminem, 50 Cent, Dr. Dre",
      album: "Classic Hip-Hop",
      cover: "daily6.jpg",
      duration: 284,
      color: "from-orange-700/40"
    },
    {
      id: "u2",
      title: "Walk On",
      artist: "U2",
      album: "All That You Can't Leave Behind",
      cover: "U2.jpg",
      duration: 242,
      color: "from-yellow-700/40"
    }
  ];

  // Estado da aplicação
  const state = {
    currentTrack: ALL_TRACKS[12], // U2 padrão
    isPlaying: false,
    currentTime: 31,
    volume: 0.75,
    previousVolume: 0.75,
    isShuffle: false,
    repeatMode: "off", // 'off' | 'all' | 'one'
    likedIds: new Set(["glee", "sabrina", "u2"]),
    filterCategory: "all", // 'all' | 'music' | 'liked'
    searchQuery: "",
    playlists: [
      "Anos 80 preferidas",
      "This is A-ha",
      "As minhas preferidas",
      "Hot 100 Rock",
      "The best of Glee",
      "No Pain No Gain",
      "DJ Juninho",
      "Summer Eletro Hits",
      "Forró Anos 90",
      "Clássicas do Forró"
    ]
  };

  // Web Audio API Synth
  let audioCtx = null;
  let gainNode = null;
  let synthInterval = null;
  let playbackTimer = null;
  let chordIndex = 0;

  const CHORDS = [
    [261.63, 329.63, 392.0, 493.88], // Cmaj7
    [220.0, 261.63, 329.63, 392.0],  // Am7
    [174.61, 220.0, 261.63, 329.63], // Fmaj7
    [196.0, 246.94, 293.66, 349.23]  // G7
  ];

  // Elementos do DOM
  const els = {
    greetingTitle: document.getElementById("greeting-title"),
    ambientGradient: document.getElementById("ambient-gradient"),
    playlistsContainer: document.getElementById("playlists-container"),
    playlistCount: document.getElementById("playlist-count"),
    likedCountLabel: document.getElementById("liked-count-label"),
    quickMixGrid: document.getElementById("quick-mix-grid"),
    quickMixEmpty: document.getElementById("quick-mix-empty"),
    dailyMixGrid: document.getElementById("daily-mix-grid"),
    dailyMixEmpty: document.getElementById("daily-mix-empty"),
    recentTracksList: document.getElementById("recent-tracks-list"),
    searchInput: document.getElementById("search-input"),
    btnClearSearch: document.getElementById("btn-clear-search"),
    btnCreatePlaylist: document.getElementById("btn-create-playlist"),
    btnLikedSongs: document.getElementById("btn-liked-songs"),
    btnShowAll: document.getElementById("btn-show-all"),
    categoryPills: document.getElementById("category-pills"),
    // Player bar
    playerCover: document.getElementById("player-cover"),
    playerTitle: document.getElementById("player-title"),
    playerArtist: document.getElementById("player-artist"),
    btnPlayerLike: document.getElementById("btn-player-like"),
    playerHeartIcon: document.getElementById("player-heart-icon"),
    btnShuffle: document.getElementById("btn-shuffle"),
    shuffleDot: document.getElementById("shuffle-dot"),
    btnPrev: document.getElementById("btn-prev"),
    btnNavPrev: document.getElementById("btn-nav-prev"),
    btnPlayPause: document.getElementById("btn-play-pause"),
    iconPlay: document.getElementById("icon-play"),
    iconPause: document.getElementById("icon-pause"),
    btnNext: document.getElementById("btn-next"),
    btnNavNext: document.getElementById("btn-nav-next"),
    btnRepeat: document.getElementById("btn-repeat"),
    repeatDot: document.getElementById("repeat-dot"),
    timeCurrent: document.getElementById("time-current"),
    timeDuration: document.getElementById("time-duration"),
    seekBar: document.getElementById("seek-bar"),
    seekFill: document.getElementById("seek-fill"),
    btnMute: document.getElementById("btn-mute"),
    volumeBar: document.getElementById("volume-bar"),
    volumeFill: document.getElementById("volume-fill")
  };

  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  }

  function updateGreeting() {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) els.greetingTitle.textContent = "Bom dia";
    else if (hour >= 12 && hour < 18) els.greetingTitle.textContent = "Boa tarde";
    else els.greetingTitle.textContent = "Boa noite";
  }

  // Sintetizador Web Audio API
  function playChordTone() {
    if (!audioCtx || !gainNode || !state.isPlaying) return;
    const now = audioCtx.currentTime;
    const notes = CHORDS[chordIndex % CHORDS.length];
    chordIndex++;

    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const noteGain = audioCtx.createGain();

      osc.type = idx % 2 === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, now);

      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.04 * (state.volume || 0.05), now + 0.12);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

      osc.connect(noteGain);
      noteGain.connect(gainNode);

      osc.start(now);
      osc.stop(now + 2.0);
    });
  }

  function startAudioEngine() {
    try {
      if (!audioCtx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioCtx();
        gainNode = audioCtx.createGain();
        gainNode.gain.setValueAtTime(state.volume * 0.18, audioCtx.currentTime);
        gainNode.connect(audioCtx.destination);
      }
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      playChordTone();
      clearInterval(synthInterval);
      synthInterval = setInterval(playChordTone, 2000);
    } catch {
      // Ignora bloqueio de autoplay caso ocorra
    }
  }

  function stopAudioEngine() {
    clearInterval(synthInterval);
    synthInterval = null;
  }

  function syncPlaybackTimer() {
    clearInterval(playbackTimer);
    if (state.isPlaying) {
      startAudioEngine();
      playbackTimer = setInterval(() => {
        if (state.currentTime >= state.currentTrack.duration) {
          if (state.repeatMode === "one") {
            state.currentTime = 0;
          } else if (state.repeatMode === "all" || state.isShuffle) {
            nextTrack();
            return;
          } else {
            state.isPlaying = false;
            state.currentTime = 0;
            stopAudioEngine();
            renderAll();
            return;
          }
        } else {
          state.currentTime += 1;
        }
        updatePlayerProgressUI();
      }, 1000);
    } else {
      stopAudioEngine();
    }
  }

  function togglePlay() {
    state.isPlaying = !state.isPlaying;
    syncPlaybackTimer();
    renderAll();
  }

  function selectTrack(trackId) {
    const track = ALL_TRACKS.find((t) => t.id === trackId);
    if (!track) return;

    if (state.currentTrack.id === track.id) {
      togglePlay();
    } else {
      state.currentTrack = track;
      state.currentTime = 0;
      state.isPlaying = true;
      syncPlaybackTimer();
      renderAll();
    }
  }

  function nextTrack() {
    const idx = ALL_TRACKS.findIndex((t) => t.id === state.currentTrack.id);
    if (state.isShuffle) {
      const rand = Math.floor(Math.random() * ALL_TRACKS.length);
      state.currentTrack = ALL_TRACKS[rand];
    } else {
      state.currentTrack = ALL_TRACKS[(idx + 1) % ALL_TRACKS.length];
    }
    state.currentTime = 0;
    state.isPlaying = true;
    syncPlaybackTimer();
    renderAll();
  }

  function prevTrack() {
    if (state.currentTime > 3) {
      state.currentTime = 0;
      updatePlayerProgressUI();
      return;
    }
    const idx = ALL_TRACKS.findIndex((t) => t.id === state.currentTrack.id);
    state.currentTrack = ALL_TRACKS[(idx - 1 + ALL_TRACKS.length) % ALL_TRACKS.length];
    state.currentTime = 0;
    state.isPlaying = true;
    syncPlaybackTimer();
    renderAll();
  }

  function toggleLike(trackId) {
    if (state.likedIds.has(trackId)) {
      state.likedIds.delete(trackId);
    } else {
      state.likedIds.add(trackId);
    }
    renderAll();
  }

  function matchesFilter(track) {
    if (state.filterCategory === "liked" && !state.likedIds.has(track.id)) {
      return false;
    }
    if (!state.searchQuery.trim()) return true;
    const q = state.searchQuery.toLowerCase();
    return (
      track.title.toLowerCase().includes(q) ||
      track.artist.toLowerCase().includes(q) ||
      track.album.toLowerCase().includes(q)
    );
  }

  function renderPlaylists() {
    els.playlistCount.textContent = String(state.playlists.length);
    els.likedCountLabel.textContent = `${state.likedIds.size} músicas`;
    els.playlistsContainer.innerHTML = state.playlists
      .map(
        (name) => `
        <div class="group flex items-center justify-between py-1.5 px-2 rounded-md hover:bg-white/5 hover:text-zinc-100 transition cursor-pointer">
          <span class="truncate">${name}</span>
        </div>
      `
      )
      .join("");
  }

  function renderQuickMixes() {
    const items = ALL_TRACKS.slice(0, 6).filter(matchesFilter);
    if (items.length === 0) {
      els.quickMixGrid.innerHTML = "";
      els.quickMixEmpty.textContent = `Nenhuma faixa encontrada para "${state.searchQuery}"`;
      els.quickMixEmpty.classList.remove("hidden");
      return;
    }
    els.quickMixEmpty.classList.add("hidden");

    els.quickMixGrid.innerHTML = items
      .map((track) => {
        const isActive = state.currentTrack.id === track.id;
        const activePlaying = isActive && state.isPlaying;

        return `
          <div
            data-track-id="${track.id}"
            class="track-card group flex items-center gap-4 bg-white/5 hover:bg-white/15 rounded-md overflow-hidden cursor-pointer transition-all duration-300 relative border border-white/5 hover:border-white/20 shadow-md ${
              isActive ? "bg-white/15 border-white/20" : ""
            }"
          >
            <div class="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 bg-zinc-800">
              <img src="${track.cover}" alt="${track.title}" class="w-full h-full object-cover" loading="lazy">
            </div>

            <div class="flex-1 min-w-0 pr-2">
              <p class="font-bold text-sm truncate ${isActive ? "text-[#1ed760]" : "text-white"}">
                ${track.album || track.title}
              </p>
              <p class="text-xs text-zinc-400 truncate mt-0.5">${track.artist}</p>
            </div>

            <div class="mr-4 shrink-0">
              ${
                activePlaying
                  ? `<div class="flex items-end gap-1 h-5 w-5 justify-center">
                      <span class="w-1 bg-[#1ed760] rounded-full equalizer-bar-1"></span>
                      <span class="w-1 bg-[#1ed760] rounded-full equalizer-bar-2"></span>
                      <span class="w-1 bg-[#1ed760] rounded-full equalizer-bar-3"></span>
                      <span class="w-1 bg-[#1ed760] rounded-full equalizer-bar-4"></span>
                    </div>`
                  : `<div class="w-11 h-11 flex items-center justify-center rounded-full bg-[#1ed760] text-black shadow-xl transition-all duration-300 hover:scale-105 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    }">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="ml-0.5">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </div>`
              }
            </div>
          </div>
        `;
      })
      .join("");
  }

  function renderDailyMixes() {
    const items = ALL_TRACKS.slice(6, 12).filter(matchesFilter);
    if (items.length === 0) {
      els.dailyMixGrid.innerHTML = "";
      els.dailyMixEmpty.textContent = `Nenhum mix correspondente ao filtro atual.`;
      els.dailyMixEmpty.classList.remove("hidden");
      return;
    }
    els.dailyMixEmpty.classList.add("hidden");

    els.dailyMixGrid.innerHTML = items
      .map((track) => {
        const isActive = state.currentTrack.id === track.id;
        const activePlaying = isActive && state.isPlaying;

        return `
          <div
            data-track-id="${track.id}"
            class="track-card group bg-[#181818]/80 hover:bg-[#282828] p-3.5 rounded-lg flex flex-col gap-3 cursor-pointer transition-all duration-300 border border-white/5 hover:border-white/10 shadow-lg relative ${
              isActive ? "bg-[#282828] border-white/20 ring-1 ring-[#1ed760]/30" : ""
            }"
          >
            <div class="relative aspect-square w-full rounded-md overflow-hidden bg-zinc-800 shadow-md">
              <img src="${track.cover}" alt="${track.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy">
              <div class="absolute bottom-2 right-2 w-11 h-11 flex items-center justify-center rounded-full bg-[#1ed760] text-black shadow-xl hover:scale-105 transition-all duration-300 ${
                activePlaying
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0"
              }">
                ${
                  activePlaying
                    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
                    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" class="ml-0.5"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`
                }
              </div>
            </div>
            <div class="flex flex-col min-w-0">
              <strong class="font-bold text-sm truncate ${isActive ? "text-[#1ed760]" : "text-zinc-100"}">
                ${track.title}
              </strong>
              <span class="text-xs text-zinc-400 line-clamp-2 mt-1 leading-snug">${track.artist}</span>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function renderRecentTracks() {
    const items = ALL_TRACKS.slice(0, 7).filter(matchesFilter);
    els.recentTracksList.innerHTML = items
      .map((track, idx) => {
        const isActive = state.currentTrack.id === track.id;
        const activePlaying = isActive && state.isPlaying;
        const isLiked = state.likedIds.has(track.id);

        return `
          <div
            data-track-id="${track.id}"
            class="track-row group grid grid-cols-[auto_1fr_1fr_auto] gap-4 px-4 py-2.5 items-center hover:bg-white/10 transition cursor-pointer text-sm ${
              isActive ? "bg-white/10 text-[#1ed760]" : "text-zinc-300"
            }"
          >
            <div class="w-6 flex items-center justify-center text-xs">
              ${
                activePlaying
                  ? `<div class="flex items-end gap-0.5 h-3">
                      <span class="w-0.5 bg-[#1ed760] equalizer-bar-1"></span>
                      <span class="w-0.5 bg-[#1ed760] equalizer-bar-2"></span>
                      <span class="w-0.5 bg-[#1ed760] equalizer-bar-3"></span>
                    </div>`
                  : `<span class="text-zinc-500">${idx + 1}</span>`
              }
            </div>

            <div class="flex items-center gap-3 min-w-0">
              <div class="relative w-10 h-10 shrink-0 rounded overflow-hidden bg-zinc-800">
                <img src="${track.cover}" alt="${track.title}" class="w-full h-full object-cover" loading="lazy">
              </div>
              <div class="flex flex-col min-w-0">
                <span class="font-semibold truncate ${isActive ? "text-[#1ed760]" : "text-white"}">${track.title}</span>
                <span class="text-xs text-zinc-400 truncate">${track.artist}</span>
              </div>
            </div>

            <span class="hidden md:inline text-xs text-zinc-400 truncate">${track.album}</span>

            <div class="flex items-center gap-3 justify-end text-xs text-zinc-400">
              <button
                type="button"
                data-like-id="${track.id}"
                class="row-like-btn transition ${isLiked ? "text-[#1ed760]" : "opacity-0 group-hover:opacity-100 hover:text-white"}"
                title="Curtir faixa"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="${isLiked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </button>
              <span>${formatTime(track.duration)}</span>
            </div>
          </div>
        `;
      })
      .join("");
  }

  function updatePlayerProgressUI() {
    els.timeCurrent.textContent = formatTime(state.currentTime);
    els.timeDuration.textContent = formatTime(state.currentTrack.duration);
    const pct = Math.min(100, (state.currentTime / state.currentTrack.duration) * 100);
    els.seekFill.style.width = `${pct}%`;
  }

  function renderPlayerBar() {
    els.playerCover.src = state.currentTrack.cover;
    els.playerTitle.textContent = state.currentTrack.title;
    els.playerArtist.textContent = state.currentTrack.artist;

    // Atualiza gradiente ambiente no topo
    els.ambientGradient.className = `absolute top-0 left-0 right-0 h-96 bg-gradient-to-b ${state.currentTrack.color} to-transparent pointer-events-none transition-all duration-700 opacity-70`;

    // Like da faixa atual
    const isLiked = state.likedIds.has(state.currentTrack.id);
    els.btnPlayerLike.className = `transition ml-2 p-1 ${isLiked ? "text-[#1ed760]" : "text-zinc-400 hover:text-white"}`;
    els.playerHeartIcon.setAttribute("fill", isLiked ? "currentColor" : "none");

    // Ícone Play / Pause
    els.iconPlay.classList.toggle("hidden", state.isPlaying);
    els.iconPause.classList.toggle("hidden", !state.isPlaying);

    // Shuffle & Repeat
    els.btnShuffle.className = `transition relative ${state.isShuffle ? "text-[#1ed760]" : "text-zinc-400 hover:text-white"}`;
    els.shuffleDot.classList.toggle("hidden", !state.isShuffle);

    const repeatActive = state.repeatMode !== "off";
    els.btnRepeat.className = `transition relative ${repeatActive ? "text-[#1ed760]" : "text-zinc-400 hover:text-white"}`;
    els.repeatDot.classList.toggle("hidden", !repeatActive);

    // Volume
    els.volumeFill.style.width = `${state.volume * 100}%`;

    updatePlayerProgressUI();
  }

  function renderAll() {
    renderPlaylists();
    renderQuickMixes();
    renderDailyMixes();
    renderRecentTracks();
    renderPlayerBar();
  }

  function bindEvents() {
    // Clique nos cards de música
    document.addEventListener("click", (e) => {
      const likeBtn = e.target.closest(".row-like-btn");
      if (likeBtn) {
        e.stopPropagation();
        toggleLike(likeBtn.dataset.likeId);
        return;
      }

      const card = e.target.closest("[data-track-id]");
      if (card) {
        selectTrack(card.dataset.trackId);
      }
    });

    // Controles do Player
    els.btnPlayPause.addEventListener("click", togglePlay);
    els.btnNext.addEventListener("click", nextTrack);
    els.btnPrev.addEventListener("click", prevTrack);
    els.btnNavNext.addEventListener("click", nextTrack);
    els.btnNavPrev.addEventListener("click", prevTrack);

    els.btnPlayerLike.addEventListener("click", () => {
      toggleLike(state.currentTrack.id);
    });

    els.btnShuffle.addEventListener("click", () => {
      state.isShuffle = !state.isShuffle;
      renderPlayerBar();
    });

    els.btnRepeat.addEventListener("click", () => {
      if (state.repeatMode === "off") state.repeatMode = "all";
      else if (state.repeatMode === "all") state.repeatMode = "one";
      else state.repeatMode = "off";
      renderPlayerBar();
    });

    // Barra de progresso (Seek)
    els.seekBar.addEventListener("click", (e) => {
      const rect = els.seekBar.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      state.currentTime = Math.floor(ratio * state.currentTrack.duration);
      updatePlayerProgressUI();
    });

    // Barra de volume
    els.volumeBar.addEventListener("click", (e) => {
      const rect = els.volumeBar.getBoundingClientRect();
      state.volume = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      if (gainNode && audioCtx) {
        gainNode.gain.setValueAtTime(state.volume * 0.18, audioCtx.currentTime);
      }
      renderPlayerBar();
    });

    els.btnMute.addEventListener("click", () => {
      if (state.volume > 0) {
        state.previousVolume = state.volume;
        state.volume = 0;
      } else {
        state.volume = state.previousVolume > 0 ? state.previousVolume : 0.75;
      }
      if (gainNode && audioCtx) {
        gainNode.gain.setValueAtTime(state.volume * 0.18, audioCtx.currentTime);
      }
      renderPlayerBar();
    });

    // Busca em tempo real
    els.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      els.btnClearSearch.classList.toggle("hidden", !state.searchQuery);
      renderQuickMixes();
      renderDailyMixes();
      renderRecentTracks();
    });

    els.btnClearSearch.addEventListener("click", () => {
      state.searchQuery = "";
      els.searchInput.value = "";
      els.btnClearSearch.classList.add("hidden");
      renderAll();
    });

    // Pílulas de categoria
    els.categoryPills.addEventListener("click", (e) => {
      const pill = e.target.closest(".cat-pill");
      if (!pill) return;
      state.filterCategory = pill.dataset.cat;

      els.categoryPills.querySelectorAll(".cat-pill").forEach((btn) => {
        const active = btn.dataset.cat === state.filterCategory;
        btn.className = `cat-pill px-3 py-1.5 rounded-full text-xs font-semibold transition ${
          active ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"
        }`;
      });

      renderAll();
    });

    // Criar Playlist
    els.btnCreatePlaylist.addEventListener("click", () => {
      const name = prompt("Nome da nova playlist:", `Minha Playlist #${state.playlists.length + 1}`);
      if (name && name.trim()) {
        state.playlists.unshift(name.trim());
        renderPlaylists();
      }
    });

    // Filtrar músicas curtidas pela sidebar
    els.btnLikedSongs.addEventListener("click", () => {
      state.filterCategory = state.filterCategory === "liked" ? "all" : "liked";
      els.categoryPills.querySelectorAll(".cat-pill").forEach((btn) => {
        const active = btn.dataset.cat === state.filterCategory;
        btn.className = `cat-pill px-3 py-1.5 rounded-full text-xs font-semibold transition ${
          active ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"
        }`;
      });
      renderAll();
    });

    els.btnShowAll.addEventListener("click", () => {
      state.searchQuery = "";
      state.filterCategory = "all";
      els.searchInput.value = "";
      els.btnClearSearch.classList.add("hidden");
      renderAll();
    });
  }

  function init() {
    updateGreeting();
    renderAll();
    bindEvents();
    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  init();
})();
