/**
 * PersonalHub Component
 * Arthur Cavalcante de Andrade | Personal Portal & Mural
 * Displays creative facets: Tech Notes/Blog, Gear & Setup, Gaming & Steam, and Music & Audio Synthesis.
 */

export function renderPersonalHub(container, data) {
  const { personal } = data;
  if (!personal) return;

  const { blog, gear, gaming, music } = personal;

  const personalHtml = `
    <div class="personal-hub-wrap" style="display: flex; flex-direction: column; gap: 3.5rem;">
      
      <!-- Top Personal Header Banner -->
      <div class="personal-hero-card cyber-card">
        <div class="personal-hero-content">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <span class="badge badge-magenta"><i class="fa-solid fa-shapes"></i> MURAL NODE</span>
              <span class="hud-status-tag">[FEED_STREAM_ACTIVE]</span>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--neon-cyan); letter-spacing: 0.05em;">
              // PERSONAL_DIMENSION
            </span>
          </div>

          <h2 class="personal-main-title">${personal.title}</h2>
          <p class="personal-main-desc">${personal.subtitle}</p>

          <div class="personal-quick-tags">
            <span class="tech-chip"><i class="fa-solid fa-pen-nib text-green"></i> Tech Notes</span>
            <span class="tech-chip"><i class="fa-solid fa-microchip text-yellow"></i> Gear & Setup</span>
            <span class="tech-chip"><i class="fa-brands fa-steam text-magenta"></i> Gaming & Steam</span>
            <span class="tech-chip"><i class="fa-solid fa-guitar text-cyan"></i> Music & Synth</span>
          </div>
        </div>
      </div>

      <!-- Section 1: Tech Notes & Neural Blog -->
      <section id="personal-blog" class="personal-section">
        <div class="section-title-wrap">
          <div class="section-accent-bar green"></div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <h2 class="section-heading">${blog.title}</h2>
              <span class="badge badge-green" style="font-size: 0.65rem;">${blog.badge}</span>
            </div>
            <p class="section-subheading">${blog.subtitle}</p>
          </div>
        </div>

        <div class="personal-posts-grid">
          ${blog.posts.map(post => `
            <div class="cyber-card personal-post-card">
              <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;">
                <span class="badge badge-green" style="font-size: 0.65rem;">${post.category}</span>
                <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--neon-yellow);">${post.status}</span>
              </div>
              <h3 class="post-title">${post.title}</h3>
              <p class="post-summary">${post.summary}</p>
              <div style="display: flex; align-items: center; gap: 0.4rem; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); margin-top: auto; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.06);">
                <i class="fa-solid fa-clock text-green" style="font-size: 0.68rem;"></i>
                <span>FEED PUBLICATION SOON</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

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
              <div class="personal-spec-box">
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
              <div class="personal-spec-box">
                <span class="spec-label">${item.label}</span>
                ${item.isLink ? `
                  <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="spec-val text-magenta personal-ext-link">
                    <span>${item.val}</span>
                    <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.7rem;"></i>
                  </a>
                ` : `
                  <span class="spec-val text-magenta">${item.val}</span>
                `}
              </div>
            `).join('')}
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; padding-top: 0.5rem; border-top: 1px solid rgba(255,255,255,0.06);">
            <div class="personal-tags-row">
              ${gaming.tags.map(t => `<span class="tech-chip">${t}</span>`).join('')}
            </div>
            <a href="${gaming.steamUrl}" target="_blank" rel="noopener noreferrer" class="cyber-button-sm magenta">
              <i class="fa-brands fa-steam"></i>
              <span>VIEW STEAM PROFILE</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Section 4: Music & Audio Synthesis -->
      <section id="personal-music" class="personal-section">
        <div class="section-title-wrap">
          <div class="section-accent-bar cyan"></div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <h2 class="section-heading">${music.title}</h2>
              <span class="badge badge-cyan" style="font-size: 0.65rem;">${music.badge}</span>
            </div>
            <p class="section-subheading">${music.subtitle}</p>
          </div>
        </div>

        <div class="cyber-card personal-detail-card">
          <p class="personal-card-desc">${music.description}</p>
          
          <div class="personal-items-grid">
            ${music.items.map(item => `
              <div class="personal-spec-box">
                <span class="spec-label">${item.label}</span>
                <span class="spec-val text-cyan">${item.val}</span>
              </div>
            `).join('')}
          </div>

          <div class="personal-tags-row">
            ${music.tags.map(t => `<span class="tech-chip">${t}</span>`).join('')}
          </div>
        </div>
      </section>

    </div>
  `;

  container.innerHTML = personalHtml;
}
