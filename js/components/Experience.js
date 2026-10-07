/**
 * Experience Component
 * Renders the chronological experience timeline with motherboard bus styling
 */

export function renderExperience(container, data) {
  const { experiences } = data;

  const expItemsHtml = experiences.map(exp => {
    const isExpanded = false;
    const cardVariant = exp.statusColor ? `${exp.statusColor}-variant` : '';

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
      <div class="experience-item ${cardVariant}" id="${exp.id}" data-exp-id="${exp.id}">
        <div class="timeline-node">
          <div class="node-pulse-dot"></div>
        </div>

        <div class="cyber-card ${cardVariant} experience-card" tabindex="0" role="button" aria-expanded="false" title="Click to expand details" aria-label="${exp.company} - ${exp.role}">
          <div class="experience-card-inner">
            <div class="exp-header-row">
              <div class="exp-company-info">
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

            <div class="exp-body">
              <p class="exp-description">${exp.summary}</p>

              <div class="exp-collapsible-wrapper">
                <div class="exp-collapsible-inner">
                  <div class="exp-bullets-grid">
                    ${bulletsHtml}
                  </div>

                  <div class="exp-tags-list">
                    ${tagsHtml}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="exp-card-footer" aria-hidden="true">
            <div class="exp-footer-handle">
              <svg class="exp-footer-icon" viewBox="0 0 32 8" width="32" height="8" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="2 1.5 16 6.5 30 1.5"></polyline>
              </svg>
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

  // Interactivity
  const expItems = container.querySelectorAll('.experience-item');

  function updateItemState(item, expand) {
    item.classList.toggle('is-expanded', expand);
    const card = item.querySelector('.experience-card');
    if (card) {
      card.setAttribute('aria-expanded', expand);
      card.setAttribute('title', expand ? 'Click to collapse details' : 'Click to expand details');
    }
  }

  // Wire up per-item click events (clicking anywhere on the card toggles expansion)
  expItems.forEach(item => {
    const card = item.querySelector('.experience-card');
    if (card) {
      card.addEventListener('click', (e) => {
        // Prevent toggle if the user is selecting text to copy
        const selection = window.getSelection();
        if (selection && selection.toString().trim().length > 0) {
          return;
        }

        // Prevent toggle if clicking an interactive anchor link
        if (e.target.closest('a')) {
          return;
        }

        const isCurrentlyExpanded = item.classList.contains('is-expanded');
        updateItemState(item, !isCurrentlyExpanded);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const isCurrentlyExpanded = item.classList.contains('is-expanded');
          updateItemState(item, !isCurrentlyExpanded);
        }
      });
    }
  });

  // If URL hash points to an experience item, expand it automatically
  if (window.location.hash) {
    const targetId = window.location.hash.replace('#', '');
    const matchedItem = container.querySelector(`.experience-item[id="${targetId}"]`);
    if (matchedItem) {
      updateItemState(matchedItem, true);
    }
  }
}
