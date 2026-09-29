/**
 * Education, Certifications & Honors Component
 * Renders university degrees in ascending chronological order,
 * official certifications from Cisco, NVIDIA, EF-SET, SENAI, and competitive awards.
 */

export function renderEducation(container, data) {
  const { education, certifications, honors } = data;

  // 1. Education Cards
  const eduCardsHtml = education.map(edu => {
    const isMaster = edu.degreeType.includes('MASTER');
    const cardClass = isMaster ? 'edu-card highlight-card' : 'edu-card';
    const degreeColor = isMaster ? 'text-magenta' : 'text-cyan';

    const statusBadgeClass = edu.statusTag === 'SCHEDULED' 
      ? 'badge-magenta' 
      : (edu.statusTag === 'IN PROGRESS' ? 'badge-yellow' : 'badge-green');

    return `
      <div class="${cardClass}">
        <div>
          <div class="edu-degree-header">
            <span class="edu-degree-type ${degreeColor}">${edu.degreeType}</span>
            ${edu.statusTag ? `<span class="badge ${statusBadgeClass}">${edu.statusTag}</span>` : ''}
          </div>
          <h4 class="edu-degree-name">${edu.title}</h4>
          <p class="edu-institution">${edu.institution}</p>
          ${edu.focus ? `<p style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-secondary); margin-top: 0.6rem; line-height: 1.45; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.5rem;"><i class="fa-solid fa-layer-group ${degreeColor}" style="font-size: 0.65rem; margin-right: 0.35rem;"></i>${edu.focus}</p>` : ''}
        </div>
        <div class="edu-footer">
          <span class="edu-period ${degreeColor}">${edu.period}</span>
          <span class="edu-location">${edu.location}</span>
        </div>
      </div>
    `;
  }).join('');

  // 2. Certifications Cards
  const certsHtml = (certifications || []).map(cert => {
    const textColor = `text-${cert.badgeColor || 'cyan'}`;
    const badgeColor = `badge-${cert.badgeColor || 'cyan'}`;

    return `
      <div class="cert-card">
        <div class="cert-icon-box ${textColor}">
          <i class="${cert.icon}"></i>
        </div>
        <div class="cert-meta">
          <span class="badge ${badgeColor}" style="width: fit-content; padding: 0.1rem 0.4rem; font-size: 0.62rem;">${cert.year}</span>
          <h5 class="cert-title">${cert.title}</h5>
          <p class="cert-issuer">${cert.issuer}</p>
        </div>
      </div>
    `;
  }).join('');

  // 3. Honors Cards
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

  const educationHtml = `
    <section id="education-honors-section" class="education-honors-wrap">
      
      <!-- Academic Timeline -->
      <div>
        <div class="section-title-wrap">
          <div class="section-accent-bar green"></div>
          <div>
            <h2 class="section-heading">Academic Timeline</h2>
            <p class="section-subheading">Chronological academic journey from Bachelor's in CS (UFG) to M.Sc. in HPC & AI</p>
          </div>
        </div>

        <div class="education-grid">
          ${eduCardsHtml}
        </div>
      </div>

      <!-- Official Certifications -->
      <div>
        <div class="section-title-wrap">
          <div class="section-accent-bar cyan"></div>
          <div>
            <h2 class="section-heading">Certifications</h2>
            <p class="section-subheading">Accredited certifications in accelerated computing, networking, cybersecurity, and data protection</p>
          </div>
        </div>

        <div class="certifications-grid">
          ${certsHtml}
        </div>
      </div>

      <!-- Honors & Recognitions -->
      <div>
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
      </div>

    </section>
  `;

  container.innerHTML = educationHtml;
}
