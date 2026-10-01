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
            <p class="section-subheading">${gear.subtitle}</p>
          </div>
        </div>

        <div class="cyber-card personal-detail-card">
          <p class="personal-card-desc">${gear.description}</p>

          <div class="personal-items-grid">
            ${gear.items.map(item => `
              <div class="personal-spec-box yellow-accent">
                <span class="spec-label">${item.label}</span>
                <span class="spec-val text-yellow">${item.val}</span>
              </div>
            `).join('')}
          </div>

          <div class="personal-tags-row">
            ${gear.tags.map(t => `<span class="tech-chip">${t}</span>`).join('')}
          </div>
        </div>
      </section>

      <!-- Section 3: Gaming & Rig Telemetry -->
      <section id="personal-gaming" class="personal-section">
        <div class="section-title-wrap">
          <div class="section-accent-bar magenta"></div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <h2 class="section-heading">${gaming.title}</h2>
              <span class="badge badge-magenta" style="font-size: 0.65rem;">${gaming.badge}</span>
            </div>
            <p class="section-subheading">${gaming.subtitle}</p>
          </div>
        </div>

        <div class="cyber-card personal-detail-card">
          <p class="personal-card-desc">${gaming.description}</p>

          <div class="personal-items-grid">
            ${gaming.items.map(item => `
              <div class="personal-spec-box magenta-accent">
                <span class="spec-label">${item.label}</span>
                <span class="spec-val text-magenta">${item.val}</span>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.06);">
            <div class="personal-tags-row">
              ${gaming.tags.map(t => `<span class="tech-chip">${t}</span>`).join('')}
            </div>
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
            <p class="section-subheading">${music.subtitle}</p>
          </div>
        </div>

        <div class="cyber-card green-variant personal-detail-card">
          <p class="personal-card-desc">${music.description}</p>

          <!-- Favorite Artists Clean Carousel (No dots, Image-forward, Seamless Infinite Loop) -->
          <div class="artists-clean-section" id="artists-clean-section">
            <div class="artists-clean-header">
              <div class="artists-clean-title">
                <i class="fa-solid fa-headphones text-green"></i>
                <span>TOP RECENT ARTISTS</span>
              </div>
              <div class="artists-clean-toolbar">
                <div class="artists-nav-group">
                  <button class="ah-nav-icon-btn prev" id="ah-prev-btn" type="button" aria-label="Previous artist" title="Previous">
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                  <button class="ah-nav-icon-btn play-pause active" id="ah-play-btn" type="button" aria-label="Toggle Auto-play" title="Pause Auto-scroll">
                    <i class="fa-solid fa-pause"></i>
                  </button>
                  <button class="ah-nav-icon-btn next" id="ah-next-btn" type="button" aria-label="Next artist" title="Next">
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>

            <!-- Viewport & Hardware-Accelerated Sliding Track -->
            <div class="artists-clean-viewport" id="artist-carousel-viewport">
              <div class="artists-clean-track" id="artist-carousel-track">
                <!-- Dynamically populated with cloned cards for seamless 60fps loop -->
              </div>
            </div>
          </div>

          <div class="personal-items-grid">
            ${music.items.map(item => `
              <div class="personal-spec-box green-accent">
                <span class="spec-label">${item.label}</span>
                <span class="spec-val text-green">${item.val}</span>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.06);">
            <div class="personal-tags-row">
              ${music.tags.map(t => `<span class="tech-chip">${t}</span>`).join('')}
            </div>
            <div>
              <a href="${music.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="cyber-button-sm green" title="Open Spotify Profile">
                <i class="fa-brands fa-spotify"></i>
                <span>SPOTIFY PROFILE</span>
              </a>
            </div>
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
              <p class="section-subheading">${cinema.subtitle}</p>
            </div>
          </div>

          <div class="cyber-card personal-detail-card">
            <p class="personal-card-desc">${cinema.description}</p>

            <div class="personal-items-grid">
              ${cinema.items.map(item => `
                <div class="personal-spec-box">
                  <span class="spec-label">${item.label}</span>
                  <span class="spec-val text-cyan">${item.val}</span>
                </div>
              `).join('')}
            </div>

            <div class="personal-tags-row" style="padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.06);">
              ${cinema.tags.map(t => `<span class="tech-chip">${t}</span>`).join('')}
            </div>
          </div>
        </section>
      ` : ''}

    </div>
  `;

  container.innerHTML = personalHtml;

  // Initialize the favorite artists seamless infinite carousel
  setupArtistsCarousel(container);
}

/**
 * Initializes Favorite Artists clean carousel logic:
 * - Hardware-accelerated CSS transform loop (60fps)
 * - Seamless infinite circular wrapping via transitionend
 * - Maximum image prominence (160px) with direct Spotify link
 * - Clean integrated toolbar (no dots to miscount)
 * - Auto-scroll with pause on hover & touch swipe support
 */
function setupArtistsCarousel(container) {
  const viewport = container.querySelector('#artist-carousel-viewport');
  const track = container.querySelector('#artist-carousel-track');
  const prevBtn = container.querySelector('#ah-prev-btn');
  const nextBtn = container.querySelector('#ah-next-btn');
  const playBtn = container.querySelector('#ah-play-btn');

  if (!track || !viewport) return;

  let currentArtists = null;
  let isAutoPlaying = true;
  let autoPlayTimer = null;
  const AUTOPLAY_INTERVAL = 3200; // 3.2 seconds

  let cardStep = 0;
  let artistCount = 0;
  let multiplier = 3;
  let currentIndex = 0;
  let isAnimating = false;

  function renderCards(artists) {
    if (!artists || !artists.length) {
      track.innerHTML = `<p style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted); padding: 1.5rem; width: 100%; text-align: center;">No artist data available.</p>`;
      return;
    }

    artistCount = artists.length;
    // Clone 3 times to ensure seamless circular infinite loop
    multiplier = artistCount <= 5 ? 4 : 3;
    const clonedList = [];
    for (let m = 0; m < multiplier; m++) {
      clonedList.push(...artists);
    }

    track.innerHTML = clonedList.map((a, idx) => {
      const originalIndex = idx % artistCount;
      const rankNum = a.rank || (originalIndex + 1);
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

    // Start centered in the middle cloned set
    currentIndex = artistCount;
    requestAnimationFrame(() => {
      calculateMetrics();
      applyTransform(false);
    });
  }

  function calculateMetrics() {
    const card = track.querySelector('.artist-card-clean');
    const gap = 12; // 0.75rem - reduced padding between cards
    const width = (card && card.offsetWidth > 0) ? card.offsetWidth : (window.innerWidth <= 640 ? 150 : 175);
    cardStep = width + gap;
  }

  function applyTransform(withTransition = true) {
    if (!cardStep) return;
    if (withTransition) {
      track.style.transition = 'transform 0.42s cubic-bezier(0.22, 1, 0.36, 1)';
    } else {
      track.style.transition = 'none';
    }
    track.style.transform = `translateX(-${currentIndex * cardStep}px)`;
  }

  function slideNext() {
    if (isAnimating) return;
    calculateMetrics();
    isAnimating = true;
    currentIndex++;
    applyTransform(true);
  }

  function slidePrev() {
    if (isAnimating) return;
    calculateMetrics();
    isAnimating = true;
    currentIndex--;
    applyTransform(true);
  }

  // Flawless infinite circular wrapping on transitionend without visual rewind
  track.addEventListener('transitionend', () => {
    isAnimating = false;
    // Scrolled into rightmost cloned set -> seamlessly wrap back to middle set
    if (currentIndex >= (multiplier - 1) * artistCount) {
      currentIndex -= artistCount;
      applyTransform(false);
      void track.offsetHeight; // force reflow
    }
    // Scrolled into leftmost cloned set -> seamlessly wrap forward to middle set
    else if (currentIndex < artistCount) {
      currentIndex += artistCount;
      applyTransform(false);
      void track.offsetHeight;
    }
  });

  function startAutoPlay() {
    stopAutoPlay();
    if (!isAutoPlaying) return;
    if (document.body.classList.contains('fx-eco') || document.documentElement.classList.contains('fx-eco')) {
      return;
    }
    autoPlayTimer = setInterval(() => {
      slideNext();
    }, AUTOPLAY_INTERVAL);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  // Navigation button listeners
  if (prevBtn) prevBtn.addEventListener('click', () => { slidePrev(); });
  if (nextBtn) nextBtn.addEventListener('click', () => { slideNext(); });

  // Play / Pause toggle
  if (playBtn) {
    playBtn.addEventListener('click', () => {
      isAutoPlaying = !isAutoPlaying;
      playBtn.classList.toggle('active', isAutoPlaying);
      playBtn.classList.toggle('paused', !isAutoPlaying);
      playBtn.innerHTML = `<i class="fa-solid ${isAutoPlaying ? 'fa-pause' : 'fa-play'}"></i>`;
      playBtn.setAttribute('title', isAutoPlaying ? 'Pause Auto-scroll' : 'Resume Auto-scroll');
      if (isAutoPlaying) startAutoPlay();
      else stopAutoPlay();
    });
  }

  // Pause on mouse hover, resume on mouse leave
  viewport.addEventListener('mouseenter', () => { stopAutoPlay(); });
  viewport.addEventListener('mouseleave', () => { if (isAutoPlaying) startAutoPlay(); });

  // Touch Swipe support for smartphones & tablets
  let touchStartX = 0;
  let touchDeltaX = 0;
  viewport.addEventListener('touchstart', (e) => {
    stopAutoPlay();
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
  }, { passive: true });

  viewport.addEventListener('touchmove', (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });

  viewport.addEventListener('touchend', () => {
    if (Math.abs(touchDeltaX) > 40) {
      if (touchDeltaX < 0) slideNext();
      else slidePrev();
    }
    if (isAutoPlaying) startAutoPlay();
  });

  // Fetch verified authentic dataset (zero network/CORS errors)
  getAudioHabitsData().then(({ data }) => {
    currentArtists = Array.isArray(data) ? data : (data.artists || data.sixMonths || data.allTime);
    renderCards(currentArtists);
    startAutoPlay();
  });

  // Background update listener
  window.addEventListener('audiohabits:updated', (e) => {
    if (e.detail?.data) {
      const data = e.detail.data;
      currentArtists = Array.isArray(data) ? data : (data.artists || data.sixMonths);
      renderCards(currentArtists);
    }
  });

  // Recalculate on window resize
  window.addEventListener('resize', () => {
    calculateMetrics();
    applyTransform(false);
  }, { passive: true });

  // Recalibrate metrics when the user navigates/switches into the Personal view
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          calculateMetrics();
          applyTransform(false);
        }
      });
    }, { threshold: 0.05 });
    observer.observe(viewport);
  }
}
