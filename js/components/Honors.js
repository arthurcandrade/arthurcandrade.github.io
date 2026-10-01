/**
 * Honors & Recognitions Component
 * Renders competitive awards, hackathons, and scientific incubation.
 */

export function renderHonors(container, data) {
  const { honors } = data;

  if (!honors || !honors.length) return;

  const honorsCardsHtml = honors.map(h => {
    const statsHtml = h.stats.map(s => `
      <div class="honors-stat-box">
        <span>${s.label}</span>
        <span style="font-weight: 700; color: ${s.isHighlight ? 'var(--neon-green)' : '#ffffff'};">${s.value}</span>
      </div>
    `).join('');

    return `
      <div class="cyber-card honors-card">
        <div class="honors-header-row">
          <span class="badge badge-yellow">${h.categoryBadge}</span>
          <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">${h.year}</span>
        </div>

        <div>
          <h4 class="honors-title">${h.title}</h4>
          <p class="honors-issuer">${h.issuer}</p>
        </div>

        <p class="honors-desc">${h.description}</p>

        <div class="honors-stats-grid">
          ${statsHtml}
        </div>
      </div>
    `;
  }).join('');

  const honorsHtml = `
    <section id="honors-section">
      <div class="section-title-wrap">
        <div class="section-accent-bar yellow"></div>
        <div>
          <h2 class="section-heading">Honors & Recognitions</h2>
          <p class="section-subheading">Competitive achievements, hackathons, and scientific incubation</p>
        </div>
      </div>

      <div>
        ${honorsCardsHtml}
      </div>
    </section>
  `;

  container.innerHTML = honorsHtml;
}
