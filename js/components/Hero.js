/**
 * Hero Component
 * Renders the primary profile terminal card with quote, animated workflow status, and contact links
 */

export function renderHero(container, data) {
  const { profile } = data;

  const heroHtml = `
    <section class="hero-section" id="hero-section">
      <div class="cyber-card profile-card">
        <div style="display: flex; flex-direction: column; gap: 1.15rem;">
          
          <div class="profile-card-header">
            <span class="badge badge-cyan">ENGINEERING & AI</span>
            <span style="color: var(--text-muted); font-size: 0.74rem;">LOC: ${profile.location.toUpperCase()}</span>
          </div>

          <div>
            <h2 class="profile-name">
              ARTHUR <span class="text-cyan">CAVALCANTE</span> DE ANDRADE
            </h2>
            <p class="profile-title">// ${profile.role}</p>
          </div>

          <!-- Glowing Computational Decrypt Bar -->
          <div class="decrypt-bar-container">
            <div class="decrypt-bar-fill"></div>
          </div>

          <p class="profile-bio">${profile.bio}</p>

          <!-- Quote & Animated Workflow Status Block -->
          <div class="hero-quote-container">
            <div class="hero-quote-box">
              "${profile.quote}"
            </div>

            <div class="hero-workflow-status">
              <span class="hero-workflow-text">
                <i class="fa-solid fa-code-branch text-cyan" style="margin-right: 0.45rem;"></i>Neural Workflows Active
              </span>
              <div class="hero-status-dots">
                <div class="ci-dot" style="background: var(--neon-magenta);"></div>
                <div class="ci-dot" style="background: var(--neon-cyan);"></div>
                <div class="ci-dot" style="background: var(--neon-green);"></div>
                <div class="ci-dot" style="background: var(--neon-yellow);"></div>
              </div>
            </div>
          </div>

        </div>

        <!-- Professional, Academic & Personal Links (4-column responsive) -->
        <div class="contacts-grid">
          <a href="${profile.contacts.github}" target="_blank" rel="noopener noreferrer" class="contact-link-btn magenta-hover" title="GitHub Code Repositories">
            <i class="fa-brands fa-github text-magenta"></i>
            <span class="truncate">github/${profile.contacts.githubUser}</span>
          </a>

          <a href="${profile.contacts.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link-btn green-hover" title="LinkedIn Professional Network">
            <i class="fa-brands fa-linkedin text-green"></i>
            <span class="truncate">in/${profile.contacts.linkedinUser}</span>
          </a>

          <a href="${profile.contacts.lattes}" target="_blank" rel="noopener noreferrer" class="contact-link-btn" title="Lattes Academic CV (CNPq)">
            <i class="fa-solid fa-graduation-cap text-yellow"></i>
            <span class="truncate">lattes/${profile.contacts.lattesUser}</span>
          </a>

          <a href="mailto:${profile.contacts.email}" class="contact-link-btn" title="Direct Email Contact">
            <i class="fa-solid fa-envelope text-cyan"></i>
            <span class="truncate">${profile.contacts.email}</span>
          </a>
        </div>

      </div>
    </section>
  `;

  container.innerHTML = heroHtml;
}
