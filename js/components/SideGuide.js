/**
 * SideGuide Component - HUD Section Scroll Spy & Fast Quick Navigator
 * Fixed to the left side of the viewport.
 * Uses rAF-throttled reading-line scroll-spy that works deterministically on all viewports,
 * including mobile touch screens, tall single-column sections, and desktop.
 */

const REALM_SECTIONS = {
  professional: [
    { id: 'hero-section', label: 'PROFILE', num: '01' },
    { id: 'skills-section', label: 'SKILLS', num: '02' },
    { id: 'experience-section', label: 'EXPERIENCE', num: '03' },
    { id: 'education-section', label: 'EDUCATION', num: '04' },
    { id: 'honors-section', label: 'HONORS', num: '05' },
    { id: 'projects-section', label: 'PROJECTS', num: '06' }
  ],
  personal: [
    { id: 'personal-gear', label: 'GEAR & SETUP', num: '01' },
    { id: 'personal-gaming', label: 'GAMING', num: '02' },
    { id: 'personal-music', label: 'MUSIC', num: '03' },
    { id: 'personal-cinema', label: 'CINEMA & SERIES', num: '04' }
  ]
};

export function renderSideGuide(container, initialRealm = 'professional') {
  let activeRealm = initialRealm;
  let isNavigating = false;
  let ticking = false;

  function getSections() {
    return REALM_SECTIONS[activeRealm] || REALM_SECTIONS.professional;
  }

  function renderNodes() {
    const sections = getSections();
    const isPersonal = activeRealm === 'personal';

    const html = `
      <nav class="hud-side-guide ${isPersonal ? 'personal-theme' : ''}" aria-label="Quick Section Navigation">
        <div class="hud-side-guide-rail">
          ${sections.map((s, idx) => `
            <a href="#${s.id}" class="hud-side-node ${idx === 0 ? 'active' : ''}" data-target="${s.id}" aria-label="${s.label}">
              <span class="hud-side-marker">
                <span class="hud-side-marker-dot"></span>
              </span>
              <span class="hud-side-label">
                <span class="hud-side-num">${s.num}</span>
                <span class="hud-side-text">${s.label}</span>
              </span>
            </a>
          `).join('')}
        </div>
      </nav>
    `;

    container.innerHTML = html;
    setupClickEvents();
    updateActiveSection();
  }

  function setupClickEvents() {
    const nodes = container.querySelectorAll('.hud-side-node');
    nodes.forEach(node => {
      node.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const targetId = node.getAttribute('data-target');
        const targetEl = document.getElementById(targetId);

        if (targetEl) {
          setActiveNode(targetId, nodes);

          const header = document.querySelector('.hud-header');
          const headerOffset = header ? header.offsetHeight + 18 : 80;
          const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;

          isNavigating = true;
          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: 'smooth'
          });

          setTimeout(() => {
            isNavigating = false;
            updateActiveSection();
          }, 600);

          history.pushState(null, '', `#${targetId}`);
        }
      });
    });
  }

  function setActiveNode(targetId, nodes) {
    const list = nodes || container.querySelectorAll('.hud-side-node');
    list.forEach(n => {
      n.classList.toggle('active', n.getAttribute('data-target') === targetId);
    });
  }

  function updateActiveSection() {
    if (isNavigating) return;

    const sections = getSections();
    const nodes = container.querySelectorAll('.hud-side-node');
    if (!nodes.length) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // 1. Bottom of page check -> activate last section
    if (scrollY + windowHeight >= documentHeight - 60) {
      setActiveNode(sections[sections.length - 1].id, nodes);
      return;
    }

    // 2. Reading position sampled at ~30% down the viewport
    const sampleLine = scrollY + (windowHeight * 0.32);

    let currentSectionId = sections[0].id;
    for (let i = 0; i < sections.length; i++) {
      const el = document.getElementById(sections[i].id);
      if (el) {
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= sampleLine) {
          currentSectionId = sections[i].id;
        }
      }
    }

    setActiveNode(currentSectionId, nodes);
  }

  function onScroll() {
    if (!ticking && !isNavigating) {
      window.requestAnimationFrame(() => {
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Listen to both scroll and touchmove to ensure instant response on mobile devices
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('touchmove', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  window.addEventListener('orientationchange', () => {
    setTimeout(updateActiveSection, 100);
  }, { passive: true });

  // Initial render
  renderNodes();

  // Listen to realm changes to switch navigation targets
  window.addEventListener('portal:realmchange', (e) => {
    const newRealm = e.detail?.realm || 'professional';
    if (newRealm !== activeRealm) {
      activeRealm = newRealm;
      setTimeout(() => {
        renderNodes();
      }, 50);
    }
  });
}
