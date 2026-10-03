/**
 * PersonalHub Component
 * Arthur Cavalcante de Andrade | Personal Portal
 * Displays creative facets: Gear & Setup, Gaming & Steam, and Music & Audio Synthesis (with infinite favorite artists carousel).
 */

import { getAudioHabitsData } from '../modules/audiohabits.js';

export function renderPersonalHub(container, data) {
  const { personal } = data;
  if (!personal) return;

  const { gear, gaming, music, cinema } = personal;


  const personalHtml = `
    <div class="personal-hub-wrap" style="display: flex; flex-direction: column; gap: 3.5rem;">

      <!-- Section 2: Workstation, Hardware & Lab -->
      <section id="personal-gear" class="personal-section">
        <div class="section-title-wrap">
          <div class="section-accent-bar yellow"></div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <h2 class="section-heading">${gear.title}</h2>
              <span class="badge badge-yellow" style="font-size: 0.65rem;">${gear.badge}</span>
            </div>
          </div>
        </div>

        <div class="cyber-card personal-detail-card">
          <p class="personal-card-desc">${gear.description}</p>

          <div class="personal-items-grid ${gear.items && gear.items.length <= 2 ? 'two-cols' : ''}">
            ${gear.items.map(item => `
              <div class="personal-spec-box yellow-accent">
                <div class="spec-header">
                  ${item.icon ? `<i class="${item.icon} spec-icon"></i>` : ''}
                  <span class="spec-label">${item.label}</span>
                </div>
                ${item.name ? `<div class="spec-device-name">${item.name}</div>` : ''}
                ${item.details && item.details.length ? `
                  <ul class="spec-details-list">
                    ${item.details.map(d => `
                      <li class="spec-detail-item">
                        <span class="spec-bullet">›</span>
                        <span>${d.includes(': ') ? `<strong class="spec-item-key">${d.split(': ')[0]}:</strong> ${d.split(': ').slice(1).join(': ')}` : d}</span>
                      </li>
                    `).join('')}
                  </ul>
                ` : `
                  <span class="spec-val text-yellow">${item.val || ''}</span>
                `}
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Section 3: Gaming Telemetry -->
      <section id="personal-gaming" class="personal-section">
        <div class="section-title-wrap">
          <div class="section-accent-bar magenta"></div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <h2 class="section-heading">${gaming.title}</h2>
              <span class="badge badge-magenta" style="font-size: 0.65rem;">${gaming.badge}</span>
            </div>
          </div>
        </div>

        <div class="cyber-card personal-detail-card">
          <p class="personal-card-desc">${gaming.description}</p>

          ${gaming.recommendedGames && gaming.recommendedGames.length ? `
            <div class="gaming-recommended-section" id="gaming-recommended-section">
              <div class="gaming-recommended-header">
                <div class="gaming-recommended-title">
                  <i class="fa-solid fa-gamepad text-magenta"></i>
                  <span>RECOMMENDED TITLES</span>
                </div>
                <div class="gaming-carousel-toolbar">
                  <span class="gaming-carousel-counter" id="gaming-carousel-counter">1 / ${gaming.recommendedGames.length}</span>
                  <div class="gaming-nav-group">
                    <button class="gaming-nav-icon-btn prev" id="gaming-prev-btn" type="button" aria-label="Previous category" title="Previous Category">
                      <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button class="gaming-nav-icon-btn next" id="gaming-next-btn" type="button" aria-label="Next category" title="Next Category">
                      <i class="fa-solid fa-chevron-right"></i>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Interactive Category Tabs -->
              <div class="gaming-category-tabs" id="gaming-category-tabs">
                ${gaming.recommendedGames.map((cat, idx) => `
                  <button type="button" class="gaming-tab-btn ${idx === 0 ? 'active' : ''}" data-cat-idx="${idx}">
                    ${cat.icon ? `<i class="${cat.icon}"></i>` : ''}
                    <span>${cat.category}</span>
                  </button>
                `).join('')}
              </div>

              <!-- Carousel Viewport & Track -->
              <div class="gaming-carousel-viewport" id="gaming-carousel-viewport">
                <div class="gaming-carousel-track" id="gaming-carousel-track">
                  ${gaming.recommendedGames.map((cat, catIdx) => `
                    <div class="gaming-carousel-slide" data-slide-idx="${catIdx}">
                      <div class="gaming-games-grid">
                        ${(cat.games || []).map((g, gIdx) => `
                          <div class="gaming-game-card">
                            <div class="gaming-capsule-wrap">
                              <span class="gaming-rank-badge">#${String(gIdx + 1).padStart(2, '0')}</span>
                              ${g.image ? `
                                <img src="${g.image}" alt="${g.title || 'Game'}" class="gaming-capsule-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.classList.add('img-error');" />
                              ` : ''}
                              <div class="gaming-capsule-placeholder ${g.image ? 'fallback' : ''}">
                                <i class="fa-solid fa-gamepad"></i>
                                <span>STEAM CAPSULE</span>
                              </div>
                            </div>
                            <div class="gaming-card-body">
                              <span class="gaming-card-title" title="${g.title || `Slot ${gIdx + 1}`}">${g.title || `Slot ${gIdx + 1}`}</span>
                              ${g.tag ? `<span class="gaming-card-sub">${g.tag}</span>` : ''}
                            </div>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          ` : ''}

          <div style="display: flex; align-items: center; justify-content: flex-end; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.06);">
            <a href="${gaming.steamUrl}" target="_blank" rel="noopener noreferrer" class="cyber-button-sm magenta">
              <i class="fa-brands fa-steam"></i>
              <span>STEAM PROFILE</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Section 4: Music & Audio Synthesis (Green Aesthetic + Favorite Artists Carousel) -->
      <section id="personal-music" class="personal-section">
        <div class="section-title-wrap">
          <div class="section-accent-bar green"></div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <h2 class="section-heading">${music.title}</h2>
              <span class="badge badge-green" style="font-size: 0.65rem;">${music.badge}</span>
            </div>
          </div>
        </div>

        <div class="cyber-card green-variant personal-detail-card">
          <p class="personal-card-desc">${music.description}</p>

          <!-- 1. Top Music Artists Carousel (Unified Format) -->
          <div class="artists-clean-section" id="artists-clean-section">
            <div class="artists-clean-header">
              <div class="artists-clean-title">
                <i class="fa-solid fa-headphones text-green"></i>
                <span>TOP RECENT ARTISTS</span>
                <span class="badge badge-green" style="font-size: 0.62rem;">SPOTIFY</span>
              </div>
              <div class="artists-carousel-toolbar">
                <span class="artists-carousel-counter" id="artists-carousel-counter">1-5 / 10</span>
                <div class="artists-nav-group">
                  <button class="artists-nav-icon-btn prev" id="ah-prev-btn" type="button" aria-label="Previous artists" title="Previous 5 artists">
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                  <button class="artists-nav-icon-btn next" id="ah-next-btn" type="button" aria-label="Next artists" title="Next 5 artists">
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- Viewport & Hardware-Accelerated Sliding Track -->
            <div class="artists-carousel-viewport" id="artist-carousel-viewport">
              <div class="artists-carousel-track" id="artist-carousel-track">
                <!-- Dynamically populated with clean artist cards -->
              </div>
            </div>
          </div>

          <!-- 2. Home Studio Hardware & Instruments Grid (Clean & Direct) -->
          <div class="studio-gear-section">
            <div class="studio-gear-header">
              <div class="studio-gear-title">
                <i class="fa-solid fa-guitar text-green"></i>
                <span>HOME STUDIO GEAR & INSTRUMENTS</span>
              </div>
              <span class="badge badge-green" style="font-size: 0.62rem;">MY SETUP</span>
            </div>

            <div class="studio-gear-grid">
              ${(music.studioGear || []).map(gear => `
                <div class="studio-gear-card">
                  <div class="studio-gear-img-wrap">
                    <span class="studio-gear-cat-badge">${gear.category}</span>
                    <img src="${gear.image}" alt="${gear.name}" class="studio-gear-img" loading="lazy" onerror="this.classList.add('img-error');" />
                    <div class="studio-gear-icon-fallback" aria-hidden="true" title="${gear.name}">
                      <i class="${gear.icon}"></i>
                    </div>
                  </div>
                  <div class="studio-gear-info">
                    <span class="studio-gear-name">${gear.name}</span>
                    <span class="studio-gear-edition">${gear.edition}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>


          <div style="display: flex; align-items: center; justify-content: flex-end; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.06);">
            <a href="${music.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="cyber-button-sm green" title="Open Spotify Profile">
              <i class="fa-brands fa-spotify"></i>
              <span>SPOTIFY PROFILE</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Section 5: Cinema & Series -->
      ${cinema ? `
        <section id="personal-cinema" class="personal-section">
          <div class="section-title-wrap">
            <div class="section-accent-bar cyan"></div>
            <div>
              <div style="display: flex; align-items: center; gap: 0.65rem;">
                <h2 class="section-heading">${cinema.title}</h2>
                <span class="badge badge-cyan" style="font-size: 0.65rem;">${cinema.badge}</span>
              </div>
            </div>
          </div>

          <div class="cyber-card personal-detail-card">
            <p class="personal-card-desc">${cinema.description}</p>

            <!-- 1. Top Movies (Top 10 Carousel) -->
            ${cinema.topMovies && cinema.topMovies.length ? `
              <div class="cinema-subsection" id="cinema-movies-subsection">
                <div class="cinema-sub-header">
                  <div class="cinema-sub-title">
                    <i class="fa-solid fa-film text-cyan"></i>
                    <span>MOVIES</span>
                    <span class="badge badge-cyan" style="font-size: 0.62rem;">TOP 10</span>
                  </div>
                  <div class="cinema-carousel-toolbar">
                    <span class="cinema-carousel-counter" id="movies-carousel-counter">1-5 / 10</span>
                    <div class="cinema-nav-group">
                      <button class="cinema-nav-icon-btn prev" id="movies-prev-btn" type="button" aria-label="Previous movies" title="Previous 5 movies">
                        <i class="fa-solid fa-chevron-left"></i>
                      </button>
                      <button class="cinema-nav-icon-btn next" id="movies-next-btn" type="button" aria-label="Next movies" title="Next 5 movies">
                        <i class="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="cinema-carousel-viewport" id="movies-carousel-viewport">
                  <div class="cinema-carousel-track" id="movies-carousel-track">
                    ${cinema.topMovies.map(movie => `
                      <div class="cinema-media-card">
                        <div class="cinema-poster-wrap">
                          <span class="cinema-rank-pill">#${String(movie.rank).padStart(2, '0')}</span>
                          ${movie.image ? `
                            <img src="${movie.image}" alt="${movie.title || `Movie #${movie.rank}`}" class="cinema-poster-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.classList.add('img-error');" />
                          ` : ''}
                          <div class="cinema-poster-placeholder ${movie.image ? 'fallback' : ''}">
                            <i class="fa-solid fa-film"></i>
                            <span>${movie.image ? 'NO IMAGE' : 'POSTER'}</span>
                          </div>
                        </div>
                        <div class="cinema-card-info">
                          <span class="cinema-card-title ${!movie.title ? 'cinema-title-empty' : ''}" title="${movie.title || `Movie #${movie.rank}`}">
                            ${movie.title ? movie.title : `Movie #${movie.rank}`}
                          </span>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            ` : ''}

            <!-- 2. Top Series Category Carousel (Live Action & Anime) -->
            ${cinema.seriesCategories && cinema.seriesCategories.length ? `
              <div class="cinema-subsection series-carousel-section" id="series-carousel-section">
                <div class="cinema-sub-header">
                  <div class="cinema-sub-title">
                    <i class="fa-solid fa-tv text-cyan"></i>
                    <span>TOP SERIES</span>
                  </div>
                  <div class="series-carousel-toolbar">
                    <span class="series-carousel-counter" id="series-carousel-counter">1 / ${cinema.seriesCategories.length}</span>
                    <div class="series-nav-group">
                      <button class="series-nav-icon-btn prev" id="series-prev-btn" type="button" aria-label="Previous category" title="Previous Category">
                        <i class="fa-solid fa-chevron-left"></i>
                      </button>
                      <button class="series-nav-icon-btn next" id="series-next-btn" type="button" aria-label="Next category" title="Next Category">
                        <i class="fa-solid fa-chevron-right"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Interactive Category Tabs -->
                <div class="series-category-tabs" id="series-category-tabs">
                  ${cinema.seriesCategories.map((cat, idx) => `
                    <button type="button" class="series-tab-btn ${idx === 0 ? 'active' : ''}" data-cat-idx="${idx}">
                      ${cat.icon ? `<i class="${cat.icon}"></i>` : ''}
                      <span>${cat.category}</span>
                    </button>
                  `).join('')}
                </div>

                <!-- Carousel Viewport & Track -->
                <div class="series-carousel-viewport" id="series-carousel-viewport">
                  <div class="series-carousel-track" id="series-carousel-track">
                    ${cinema.seriesCategories.map((cat, catIdx) => `
                      <div class="series-carousel-slide" data-slide-idx="${catIdx}">
                        <div class="cinema-media-grid">
                          ${(cat.items || []).map(item => `
                            <div class="cinema-media-card">
                              <div class="cinema-poster-wrap">
                                <span class="cinema-rank-pill">#${String(item.rank).padStart(2, '0')}</span>
                                ${item.image ? `
                                  <img src="${item.image}" alt="${item.title || `Item #${item.rank}`}" class="cinema-poster-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.classList.add('img-error');" />
                                ` : ''}
                                <div class="cinema-poster-placeholder ${item.image ? 'fallback' : ''}">
                                  <i class="${cat.icon || 'fa-solid fa-tv'}"></i>
                                  <span>${item.image ? 'NO IMAGE' : 'POSTER'}</span>
                                </div>
                              </div>
                              <div class="cinema-card-info">
                                <span class="cinema-card-title ${!item.title ? 'cinema-title-empty' : ''}" title="${item.title || `Item #${item.rank}`}">
                                  ${item.title ? item.title : `Item #${item.rank}`}
                                </span>
                              </div>
                            </div>
                          `).join('')}
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            ` : ''}

          </div>
        </section>
      ` : ''}

    </div>
  `;

  container.innerHTML = personalHtml;

  // Initialize the favorite artists seamless infinite carousel
  setupArtistsCarousel(container);

  // Setup Movies Carousel
  setupMoviesCarousel(container);

  // Setup Gaming Recommended Carousel
  setupGamingCarousel(container);

  // Setup Series Category Carousel (Live Action & Anime)
  setupSeriesCarousel(container);
}

/**
 * Initializes Favorite Artists clean carousel logic:
 * - Hardware-accelerated CSS transform
 * - Discrete page transitions matching Movies carousel
 * - Scaled-up avatar prominence (185px) with direct Spotify link
 * - Clean integrated toolbar (no dots to miscount)
 * - Manual button & touch swipe navigation
 */
function setupArtistsCarousel(container) {
  const viewport = container.querySelector('#artist-carousel-viewport');
  const track = container.querySelector('#artist-carousel-track');
  const prevBtn = container.querySelector('#ah-prev-btn');
  const nextBtn = container.querySelector('#ah-next-btn');
  const counter = container.querySelector('#artists-carousel-counter');

  if (!track || !viewport) return;

  let currentArtists = [];
  let currentPage = 0;

  function getCardsPerPage() {
    const w = window.innerWidth;
    if (w <= 640) return 2;
    if (w <= 1024) return 3;
    return 5;
  }

  function getTotalPages() {
    const perPage = getCardsPerPage();
    return Math.ceil(currentArtists.length / perPage);
  }

  function renderCards(artists) {
    if (!artists || !artists.length) {
      track.innerHTML = `<p style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); padding: 1.5rem; width: 100%; text-align: center;">No artist data available.</p>`;
      return;
    }

    currentArtists = artists;

    track.innerHTML = currentArtists.map((a, idx) => {
      const rankNum = a.rank || (idx + 1);
      return `
        <a href="${a.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="artist-card-clean" title="Open ${a.name} on Spotify">
          <div class="artist-avatar-container">
            <span class="artist-rank-pill">#${rankNum}</span>
            <div class="artist-image-circle">
              <img src="${a.imageUrl}" alt="${a.name}" class="artist-clean-img" loading="lazy" onerror="this.onerror=null; this.src='https://ui-avatars.com/api/?name=${encodeURIComponent(a.name)}&background=05050a&color=1ed760';"/>
            </div>
            <div class="artist-spotify-badge" aria-hidden="true" title="Spotify">
              <i class="fa-brands fa-spotify"></i>
            </div>
          </div>
          <div class="artist-clean-info">
            <span class="artist-clean-name" title="${a.name}">${a.name}</span>
            <span class="artist-clean-genre">${a.genre || 'electronic'}</span>
          </div>
        </a>
      `;
    }).join('');

    currentPage = 0;
    setTimeout(applyTransform, 60);
  }

  function applyTransform() {
    if (!currentArtists.length) return;
    const cards = track.querySelectorAll('.artist-card-clean');
    if (!cards.length) return;

    const perPage = getCardsPerPage();
    const totalPages = Math.ceil(currentArtists.length / perPage);

    if (currentPage >= totalPages) currentPage = totalPages - 1;
    if (currentPage < 0) currentPage = 0;

    const firstCard = cards[0];
    const secondCard = cards[1];
    let cardStep = 0;
    if (firstCard && secondCard) {
      cardStep = secondCard.offsetLeft - firstCard.offsetLeft;
    } else if (firstCard) {
      cardStep = firstCard.offsetWidth + 16;
    }

    const maxOffset = Math.max(0, track.scrollWidth - viewport.clientWidth);
    let offset = currentPage * perPage * cardStep;
    if (offset > maxOffset) offset = maxOffset;
    if (offset < 0) offset = 0;

    track.style.transform = `translateX(-${offset}px)`;

    if (counter) {
      const startItem = currentPage * perPage + 1;
      const endItem = Math.min((currentPage + 1) * perPage, currentArtists.length);
      counter.textContent = `${startItem}-${endItem} / ${currentArtists.length}`;
    }
  }

  function nextPage() {
    const totalPages = getTotalPages();
    if (currentPage < totalPages - 1) {
      currentPage++;
    } else {
      currentPage = 0;
    }
    applyTransform();
  }

  function prevPage() {
    const totalPages = getTotalPages();
    if (currentPage > 0) {
      currentPage--;
    } else {
      currentPage = totalPages - 1;
    }
    applyTransform();
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      nextPage();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      prevPage();
    });
  }

  // Touch swipe support
  let touchStartX = 0;
  let touchDeltaX = 0;

  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 40) {
      if (touchDeltaX < 0) {
        nextPage();
      } else {
        prevPage();
      }
    }
  });

  // Fetch verified authentic dataset
  getAudioHabitsData().then(({ data }) => {
    const list = Array.isArray(data) ? data : (data.artists || data.sixMonths || data.allTime);
    renderCards(list);
  });

  // Background update listener
  window.addEventListener('audiohabits:updated', (e) => {
    if (e.detail?.data) {
      const data = e.detail.data;
      const list = Array.isArray(data) ? data : (data.artists || data.sixMonths);
      renderCards(list);
    }
  });

  // Window resize
  window.addEventListener('resize', () => {
    applyTransform();
  }, { passive: true });

  // Realm change alignment
  window.addEventListener('portal:realmchange', (e) => {
    if (e.detail?.realm === 'personal') {
      setTimeout(() => {
        applyTransform();
      }, 80);
    }
  });
}

/**
 * Sets up horizontal Carousel for Top Movies
 */
function setupMoviesCarousel(container) {
  const viewport = container.querySelector('#movies-carousel-viewport');
  const track = container.querySelector('#movies-carousel-track');
  const prevBtn = container.querySelector('#movies-prev-btn');
  const nextBtn = container.querySelector('#movies-next-btn');
  const counter = container.querySelector('#movies-carousel-counter');

  if (!viewport || !track) return;

  const cards = track.querySelectorAll('.cinema-media-card');
  const totalCards = cards.length;
  if (totalCards <= 1) return;

  let currentPage = 0;

  function getCardsPerPage() {
    const w = window.innerWidth;
    if (w <= 640) return 2;
    if (w <= 1024) return 3;
    return 5;
  }

  function getTotalPages() {
    const perPage = getCardsPerPage();
    return Math.ceil(totalCards / perPage);
  }

  function applyTransform() {
    const perPage = getCardsPerPage();
    const totalPages = Math.ceil(totalCards / perPage);

    if (currentPage >= totalPages) currentPage = totalPages - 1;
    if (currentPage < 0) currentPage = 0;

    const firstCard = cards[0];
    const secondCard = cards[1];
    let cardStep = 0;
    if (firstCard && secondCard) {
      cardStep = secondCard.offsetLeft - firstCard.offsetLeft;
    } else if (firstCard) {
      cardStep = firstCard.offsetWidth + 16;
    }

    const maxOffset = Math.max(0, track.scrollWidth - viewport.clientWidth);
    let offset = currentPage * perPage * cardStep;
    if (offset > maxOffset) offset = maxOffset;
    if (offset < 0) offset = 0;

    track.style.transform = `translateX(-${offset}px)`;

    if (counter) {
      const startItem = currentPage * perPage + 1;
      const endItem = Math.min((currentPage + 1) * perPage, totalCards);
      counter.textContent = `${startItem}-${endItem} / ${totalCards}`;
    }
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const totalPages = getTotalPages();
      if (currentPage < totalPages - 1) {
        currentPage++;
      } else {
        currentPage = 0; // loop back to first page
      }
      applyTransform();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const totalPages = getTotalPages();
      if (currentPage > 0) {
        currentPage--;
      } else {
        currentPage = totalPages - 1; // loop to last page
      }
      applyTransform();
    });
  }

  // Touch swipe support
  let touchStartX = 0;
  let touchDeltaX = 0;

  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 40) {
      const totalPages = getTotalPages();
      if (touchDeltaX < 0) {
        if (currentPage < totalPages - 1) currentPage++;
        else currentPage = 0;
      } else {
        if (currentPage > 0) currentPage--;
        else currentPage = totalPages - 1;
      }
      applyTransform();
    }
  });

  window.addEventListener('resize', () => {
    applyTransform();
  }, { passive: true });

  // Initial alignment
  setTimeout(applyTransform, 60);
}

/**
 * Sets up Category Carousel for Gaming Recommended Titles
 */
function setupGamingCarousel(container) {
  const section = container.querySelector('#gaming-recommended-section');
  if (!section) return;

  const track = section.querySelector('#gaming-carousel-track');
  const viewport = section.querySelector('#gaming-carousel-viewport');
  const counter = section.querySelector('#gaming-carousel-counter');
  const prevBtn = section.querySelector('#gaming-prev-btn');
  const nextBtn = section.querySelector('#gaming-next-btn');
  const tabBtns = section.querySelectorAll('.gaming-tab-btn');
  const slides = section.querySelectorAll('.gaming-carousel-slide');

  if (!track || !viewport || !slides.length) return;

  let currentCategory = 0;
  const totalCategories = slides.length;

  function updateActiveState() {
    track.style.transform = `translateX(-${currentCategory * 100}%)`;

    if (counter) {
      counter.textContent = `${currentCategory + 1} / ${totalCategories}`;
    }

    tabBtns.forEach((btn, idx) => {
      if (idx === currentCategory) {
        btn.classList.add('active');
        const tabsContainer = btn.parentElement;
        if (tabsContainer && tabsContainer.scrollWidth > tabsContainer.clientWidth) {
          tabsContainer.scrollTo({
            left: btn.offsetLeft - (tabsContainer.clientWidth - btn.offsetWidth) / 2,
            behavior: 'smooth'
          });
        }
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function nextCategory() {
    currentCategory = (currentCategory + 1) % totalCategories;
    updateActiveState();
  }

  function prevCategory() {
    currentCategory = (currentCategory - 1 + totalCategories) % totalCategories;
    updateActiveState();
  }

  if (nextBtn) nextBtn.addEventListener('click', nextCategory);
  if (prevBtn) prevBtn.addEventListener('click', prevCategory);

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.catIdx, 10);
      if (!isNaN(idx) && idx >= 0 && idx < totalCategories) {
        currentCategory = idx;
        updateActiveState();
      }
    });
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchDeltaX = 0;

  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 40) {
      if (touchDeltaX < 0) {
        nextCategory();
      } else {
        prevCategory();
      }
    }
  });

  window.addEventListener('resize', updateActiveState, { passive: true });
  window.addEventListener('portal:realmchange', (e) => {
    if (e.detail?.realm === 'personal') {
      setTimeout(updateActiveState, 80);
    }
  });

  // Initial render alignment
  updateActiveState();
}

/**
 * Sets up Category Carousel for Top Series (Live Action & Anime)
 */
function setupSeriesCarousel(container) {
  const section = container.querySelector('#series-carousel-section');
  if (!section) return;

  const track = section.querySelector('#series-carousel-track');
  const viewport = section.querySelector('#series-carousel-viewport');
  const counter = section.querySelector('#series-carousel-counter');
  const prevBtn = section.querySelector('#series-prev-btn');
  const nextBtn = section.querySelector('#series-next-btn');
  const tabBtns = section.querySelectorAll('.series-tab-btn');
  const slides = section.querySelectorAll('.series-carousel-slide');

  if (!track || !viewport || !slides.length) return;

  let currentCategory = 0;
  const totalCategories = slides.length;

  function updateActiveState() {
    track.style.transform = `translateX(-${currentCategory * 100}%)`;

    if (counter) {
      counter.textContent = `${currentCategory + 1} / ${totalCategories}`;
    }

    tabBtns.forEach((btn, idx) => {
      if (idx === currentCategory) {
        btn.classList.add('active');
        const tabsContainer = btn.parentElement;
        if (tabsContainer && tabsContainer.scrollWidth > tabsContainer.clientWidth) {
          tabsContainer.scrollTo({
            left: btn.offsetLeft - (tabsContainer.clientWidth - btn.offsetWidth) / 2,
            behavior: 'smooth'
          });
        }
      } else {
        btn.classList.remove('active');
      }
    });
  }

  function nextCategory() {
    currentCategory = (currentCategory + 1) % totalCategories;
    updateActiveState();
  }

  function prevCategory() {
    currentCategory = (currentCategory - 1 + totalCategories) % totalCategories;
    updateActiveState();
  }

  if (nextBtn) nextBtn.addEventListener('click', nextCategory);
  if (prevBtn) prevBtn.addEventListener('click', prevCategory);

  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.catIdx, 10);
      if (!isNaN(idx) && idx >= 0 && idx < totalCategories) {
        currentCategory = idx;
        updateActiveState();
      }
    });
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchDeltaX = 0;

  viewport.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 40) {
      if (touchDeltaX < 0) {
        nextCategory();
      } else {
        prevCategory();
      }
    }
  });

  window.addEventListener('resize', updateActiveState, { passive: true });
  window.addEventListener('portal:realmchange', (e) => {
    if (e.detail?.realm === 'personal') {
      setTimeout(updateActiveState, 80);
    }
  });

  // Initial render alignment
  updateActiveState();
}

