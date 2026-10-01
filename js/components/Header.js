/**
 * Header Component
 * Renders the top HUD header with:
 * - Row 1: Brand (left) and System Time Clock (right)
 * - Row 2: Centered Portal Realm Switcher (Professional / Personal)
 */

export function renderHeader(container, data) {
  const { profile } = data;

  const headerHtml = `
    <header class="hud-header">
      <div class="container hud-header-container">
        
        <!-- Row 1: Brand Node (Left) & Controls (Right) -->
        <div class="hud-top-row">
          <!-- Left: Brand / Identity -->
          <a href="#hero-section" class="hud-brand" title="Arthur Cavalcante de Andrade Profile Node">
            <div class="hud-avatar-box">AA</div>
            <div class="hud-brand-details">
              <h1 class="hud-brand-heading">
                <span class="hud-brand-name text-cyan">WHOAMI</span>
              </h1>
              <p class="hud-role-text">
                <span class="hud-status-prefix">ACTIVE // </span>ROLE: ${profile.shortRole}
              </p>
            </div>
          </a>

          <!-- Right: Controls (Real-time Clock) -->
          <div class="hud-right-controls">
            <div class="hud-clock-box">
              <span class="hud-clock-label">SYS TIME</span>
              <span class="hud-clock-time" id="sys-clock">00:00:00 UTC</span>
            </div>
          </div>
        </div>

        <!-- Row 2: Centered Portal Realm Switcher -->
        <div class="hud-nav-row">
          <div class="hud-realm-switcher" role="tablist">
            <button class="hud-realm-btn active" data-realm="professional" id="btn-realm-prof" type="button" role="tab" aria-selected="true" title="Professional Engineering Portfolio">
              <i class="fa-solid fa-terminal"></i>
              <span>PROFESSIONAL</span>
            </button>
            <button class="hud-realm-btn" data-realm="personal" id="btn-realm-pers" type="button" role="tab" aria-selected="false" title="Personal Gear, Gaming & Audio">
              <i class="fa-solid fa-shapes"></i>
              <span>PERSONAL</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  `;

  container.innerHTML = headerHtml;

  // Realm Switcher Listeners
  const btnProf = container.querySelector('#btn-realm-prof');
  const btnPers = container.querySelector('#btn-realm-pers');

  function setRealm(realmName, emitEvent = true) {
    const isProf = realmName === 'professional';

    btnProf.classList.toggle('active', isProf);
    btnProf.setAttribute('aria-selected', isProf ? 'true' : 'false');

    btnPers.classList.toggle('active', !isProf);
    btnPers.setAttribute('aria-selected', !isProf ? 'true' : 'false');

    if (emitEvent) {
      window.dispatchEvent(new CustomEvent('portal:realmchange', {
        detail: { realm: realmName }
      }));
    }
  }

  btnProf.addEventListener('click', () => {
    setRealm('professional');
  });

  btnPers.addEventListener('click', () => {
    setRealm('personal');
  });

  // Export helper on window for app-level synchronization
  window.__setPortalRealmUI = setRealm;
}
