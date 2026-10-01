/**
 * PersonalHub Component
 * Arthur Cavalcante de Andrade | Personal Portal
 * Displays creative facets: Gear & Setup, Gaming & Steam, and Music & Audio Synthesis.
 */

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

      <!-- Section 4: Music & Audio Synthesis (Green Aesthetic) -->
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
            <a href="${music.spotifyUrl}" target="_blank" rel="noopener noreferrer" class="cyber-button-sm green">
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
}
