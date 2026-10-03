/**
 * Experience Component
 * Renders the chronological experience timeline with motherboard bus styling
 */

export function renderExperience(container, data) {
  const { experiences } = data;

  const expItemsHtml = experiences.map(exp => {
    const badgeColorClass = `badge-${exp.statusColor || 'cyan'}`;
    const cardVariant = exp.statusColor === 'magenta' ? 'magenta-variant' : (exp.statusColor === 'green' ? 'green-variant' : '');

    const bulletsHtml = exp.bullets.map(b => `
      <div class="exp-bullet-item">
        <span class="exp-bullet-arrow">▶</span>
        <span>${b}</span>
      </div>
    `).join('');

    const tagsHtml = exp.technologies.map(t => `
      <span class="badge">${t}</span>
    `).join('');

    const formerRoleBadge = exp.formerRole
      ? `<span style="display: block; font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-dim); margin-top: 0.2rem; font-weight: 500;">
           <i class="fa-solid fa-turn-up fa-rotate-90 text-cyan" style="font-size: 0.65rem;"></i> ${exp.formerRole}
         </span>`
      : '';

    return `
      <div class="experience-item" id="${exp.id}">
        <div class="timeline-node">
          <div class="node-pulse-dot"></div>
        </div>

        <div class="cyber-card ${cardVariant}">
          <div class="experience-card-inner">
            <div class="exp-header-row">
              <div class="exp-company-info">
                <span class="badge ${badgeColorClass}">${exp.status}</span>
                <h3>${exp.company}</h3>
                <p class="exp-role-badge">${exp.role}</p>
                ${formerRoleBadge}
              </div>

              <div class="exp-date-meta">
                <span class="exp-period">
                  <i class="fa-regular fa-calendar"></i> ${exp.period}
                </span>
                <p class="exp-location">${exp.location}</p>
              </div>
            </div>

            <p class="exp-description">${exp.summary}</p>

            <div class="exp-bullets-grid">
              ${bulletsHtml}
            </div>

            <div class="exp-tags-list">
              ${tagsHtml}
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  const experienceHtml = `
    <section id="experience-section">
      <div class="section-title-wrap">
        <div class="section-accent-bar cyan"></div>
        <div>
          <h2 class="section-heading">Chronological Experience</h2>
        </div>
      </div>

      <div class="experience-timeline">
        ${expItemsHtml}
      </div>
    </section>
  `;

  container.innerHTML = experienceHtml;
}
