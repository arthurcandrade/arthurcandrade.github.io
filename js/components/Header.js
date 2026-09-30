/**
 * Header Component
 * Renders the top HUD header with:
 * - Row 1: Brand (left) and Controls with AUDIO RX to the left of SYSTEM TIME (right)
 * - Row 2 (Below name, aligned left): Realm Switcher (Professional / Personal) & Contextual Subnav Links
 */

import { audioSynth } from '../modules/audio-synth.js';

export function renderHeader(container, data) {
  const { profile } = data;

  const headerHtml = `
    <header class="hud-header">
      <div class="container hud-header-container">
        
        <!-- Row 1: Brand Node (Left) & Controls (Right) -->
        <div class="hud-top-row">
          <!-- Left: Brand / Identity -->
          <a href="#hero-mount" class="hud-brand" title="Arthur Cavalcante de Andrade Profile Node">
            <div class="hud-avatar-box">AC</div>
            <div class="hud-brand-details">
              <h1 class="hud-brand-heading">
                <span class="hud-brand-name">${profile.displayName}</span>
                <span class="hud-status-tag animate-pulse">[${profile.nodeId}]</span>
              </h1>
              <p class="hud-role-text">
                <span class="hud-status-prefix">SYS STATUS: ACTIVE // </span>ROLE: ${profile.shortRole}
              </p>
            </div>
          </a>

          <!-- Right: Real-time System Clock -->
          <div class="hud-right-controls">
            <div class="hud-clock-box">
              <span class="hud-clock-label">SYSTEM TIME</span>
              <span class="hud-clock-time" id="sys-clock">00:00:00 UTC</span>
            </div>
          </div>
        </div>

        <!-- Row 2: Sub-bar below name, aligned to the left: Portal Realm Switcher & Section Links -->
        <div class="hud-nav-row">
          <!-- Realm Mode Switcher -->
          <div class="hud-realm-switcher" role="tablist">
            <button class="hud-realm-btn active" data-realm="professional" id="btn-realm-prof" type="button" role="tab" aria-selected="true" title="Professional Engineering Portfolio">
              <i class="fa-solid fa-terminal"></i>
              <span>PROFESSIONAL</span>
            </button>
            <button class="hud-realm-btn" data-realm="personal" id="btn-realm-pers" type="button" role="tab" aria-selected="false" title="Personal Mural, Music, Gaming & Gear">
              <i class="fa-solid fa-shapes"></i>
              <span>PERSONAL</span>
            </button>
          </div>

          <span class="hud-nav-divider">//</span>

          <!-- Professional Subnav Links (aligned left) -->
          <nav class="hud-subnav-links active" id="subnav-prof" aria-label="Professional Sections">
            <a href="#skills-section" class="hud-nav-link">SKILLS</a>
            <a href="#experience-section" class="hud-nav-link">EXPERIENCE</a>
            <a href="#education-honors-section" class="hud-nav-link">EDUCATION</a>
            <a href="#projects-section" class="hud-nav-link">PROJECTS</a>
          </nav>

          <!-- Personal Subnav Links (aligned left, shown when Personal realm is active) -->
          <nav class="hud-subnav-links" id="subnav-pers" aria-label="Personal Sections">
            <a href="#personal-blog" class="hud-nav-link">TECH NOTES</a>
            <a href="#personal-gear" class="hud-nav-link">GEAR & SETUP</a>
            <a href="#personal-gaming" class="hud-nav-link">GAMING</a>
            <a href="#personal-music" class="hud-nav-link">MUSIC</a>
          </nav>
        </div>

      </div>
    </header>
  `;

  container.innerHTML = headerHtml;

  // Realm Switcher Listeners
  const btnProf = container.querySelector('#btn-realm-prof');
  const btnPers = container.querySelector('#btn-realm-pers');
  const subnavProf = container.querySelector('#subnav-prof');
  const subnavPers = container.querySelector('#subnav-pers');

  function setRealm(realmName, emitEvent = true) {
    const isProf = realmName === 'professional';

    btnProf.classList.toggle('active', isProf);
    btnProf.setAttribute('aria-selected', isProf ? 'true' : 'false');

    btnPers.classList.toggle('active', !isProf);
    btnPers.setAttribute('aria-selected', !isProf ? 'true' : 'false');

    subnavProf.classList.toggle('active', isProf);
    subnavPers.classList.toggle('active', !isProf);

    if (emitEvent) {
      window.dispatchEvent(new CustomEvent('portal:realmchange', {
        detail: { realm: realmName }
      }));
    }
  }

  btnProf.addEventListener('click', () => {
    setRealm('professional');
    audioSynth.playChirp();
  });

  btnPers.addEventListener('click', () => {
    setRealm('personal');
    audioSynth.playChirp();
  });

  // Export helper on window for app-level synchronization
  window.__setPortalRealmUI = setRealm;
}
