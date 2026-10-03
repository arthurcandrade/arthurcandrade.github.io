/**
 * Projects Component
 * Renders key software projects and patented intellectual property
 */

export function renderProjects(container, data) {
  const { projects } = data;

  const projectCardsHtml = projects.map(proj => {
    const badgeClass = proj.badgeType === 'magenta' ? 'badge-magenta' : 'badge-green';
    const cardVariant = proj.badgeType === 'magenta' ? 'magenta-variant' : '';

    const featuresHtml = proj.features.map(f => `
      <div class="project-highlight-item">
        <i class="${f.icon} text-cyan"></i>
        <span>${f.text}</span>
      </div>
    `).join('');

    const tagsHtml = proj.technologies.map(t => `
      <span class="badge">${t}</span>
    `).join('');

    return `
      <div class="cyber-card ${cardVariant} project-card" id="${proj.id}">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div class="project-meta-top">
            <span class="badge ${badgeClass}">${proj.badge}</span>
            <span class="project-client">${proj.client}</span>
          </div>

          <div>
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-role">${proj.role}</p>
          </div>

          <p class="project-desc">${proj.description}</p>

          <div class="project-highlights-list">
            ${featuresHtml}
          </div>
        </div>

        <div class="project-card-footer">
          <div class="project-tags-list">
            ${tagsHtml}
          </div>
          <span class="project-date-badge">
            <i class="fa-regular fa-calendar-check"></i> ${proj.date}
          </span>
        </div>
      </div>
    `;
  }).join('');

  const projectsHtml = `
    <section id="projects-section">
      <div class="section-title-wrap">
        <div class="section-accent-bar magenta"></div>
        <div>
          <h2 class="section-heading">Key Engineering Projects</h2>
        </div>
      </div>

      <div class="projects-grid">
        ${projectCardsHtml}
      </div>
    </section>
  `;

  container.innerHTML = projectsHtml;
}
