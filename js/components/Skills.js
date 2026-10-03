/**
 * Skills & Expertise Component
 * Renders verified technical competencies with tags cleanly positioned below titles
 */

export function renderSkills(container, data) {
  const { skillsCategories } = data;

  const colorToBorderClass = {
    cyan: 'cyan-accent',
    magenta: 'magenta-accent',
    green: 'green-accent',
    yellow: 'yellow-accent'
  };

  const colorToTextClass = {
    cyan: 'text-cyan',
    magenta: 'text-magenta',
    green: 'text-green',
    yellow: 'text-yellow'
  };

  const categoryIcons = {
    'ai-deep-learning': 'fa-solid fa-brain',
    'backend-distributed': 'fa-solid fa-server',
    'cybersecurity-governance': 'fa-solid fa-shield-halved',
    'it-processes-hpc': 'fa-solid fa-sitemap'
  };

  const categoriesHtml = skillsCategories.map(cat => {
    const accentClass = colorToBorderClass[cat.color] || 'cyan-accent';
    const textClass = colorToTextClass[cat.color] || 'text-cyan';
    const iconClass = categoryIcons[cat.id] || 'fa-solid fa-code';

    const itemsHtml = cat.skills.map(skill => `
      <div class="skill-chip">
        <i class="${skill.icon} skill-chip-icon ${textClass}"></i>
        <div class="skill-chip-body">
          <span class="skill-chip-name">${skill.name}</span>
          <span class="skill-chip-tag">${skill.tag}</span>
        </div>
      </div>
    `).join('');

    return `
      <div class="skill-category-card ${accentClass}">
        <div>
          <div class="skill-cat-header">
            <h3 class="skill-cat-title ${textClass}">
              <i class="${iconClass}"></i>
              <span>${cat.title}</span>
            </h3>
          </div>

          <div class="skill-items-list">
            ${itemsHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');

  const skillsHtml = `
    <section id="skills-section">
      <div class="section-title-wrap">
        <div class="section-accent-bar cyan"></div>
        <div>
          <h2 class="section-heading">Skills & Specializations</h2>
        </div>
      </div>

      <div class="skills-grid">
        ${categoriesHtml}
      </div>
    </section>
  `;

  container.innerHTML = skillsHtml;
}
