/**
 * Education & Certifications Component
 * Renders university degrees in ascending chronological order,
 * and official certifications from Cisco, NVIDIA, EF-SET, SENAI.
 */

export function renderEducation(container, data) {
  const { education, certifications } = data;

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
          ${edu.focus ? `<p style="font-family: var(--font-sans); font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.6rem; line-height: 1.5; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 0.5rem;"><i class="fa-solid fa-layer-group ${degreeColor}" style="font-size: 0.65rem; margin-right: 0.35rem;"></i>${edu.focus}</p>` : ''}
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
    const hasLink = Boolean(cert.url && cert.url.trim().length > 0);

    return `
      <div class="cert-card ${hasLink ? 'has-cert-link' : ''}">
        <div class="cert-icon-box ${textColor}">
          <i class="${cert.icon}"></i>
        </div>
        <div class="cert-meta">
          <div class="cert-header-meta">
            <span class="badge ${badgeColor}" style="width: fit-content; padding: 0.1rem 0.4rem; font-size: 0.62rem;">${cert.year}</span>
            ${hasLink ? `<a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="cert-ext-btn ${textColor}" title="Verify Credential: ${cert.title}"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>` : ''}
          </div>
          <h5 class="cert-title">${cert.title}</h5>
          <p class="cert-issuer">${cert.issuer}</p>
        </div>
      </div>
    `;
  }).join('');

  const educationHtml = `
    <section id="education-section" class="education-wrap">
      
      <!-- Academic Timeline -->
      <div>
        <div class="section-title-wrap">
          <div class="section-accent-bar green"></div>
          <div>
            <h2 class="section-heading">Academic Timeline</h2>
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
          </div>
        </div>

        <div class="certifications-grid">
          ${certsHtml}
        </div>
      </div>

    </section>
  `;

  container.innerHTML = educationHtml;
}
