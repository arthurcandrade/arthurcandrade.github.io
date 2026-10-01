/**
 * SideGuide Component - HUD Section Scroll Spy & Fast Quick Navigator
 * Fixed to the left side of the viewport.
 * Tracks active section in real-time on load and scroll, with instant, snappy jump-to navigation.
 */


const REALM_SECTIONS = {
  professional: [
    { id: 'hero-section', label: 'PROFILE', num: '01' },
    { id: 'skills-section', label: 'SKILLS', num: '02' },
    { id: 'experience-section', label: 'EXPERIENCE', num: '03' },
    { id: 'education-honors-section', label: 'EDUCATION', num: '04' },
    { id: 'projects-section', label: 'PROJECTS', num: '05' }
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
  let scrollTicking = false;
  let isNavigating = false;

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
            <a href="#${s.id}" class="hud-side-node ${idx === 0 ? 'active' : ''}" data-target="${s.id}" title="${s.label}">
              <span class="hud-side-marker">
                <span class="hud-side-marker-dot"></span>
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
          // 1. Immediately highlight target node
          setActiveNode(targetId, nodes);

          // 2. Calculate snappy scroll destination accounting for sticky header offset
          const header = document.querySelector('.hud-header');
          const headerOffset = header ? header.offsetHeight + 18 : 95;
          const targetTop = targetEl.getBoundingClientRect().top + window.scrollY - headerOffset;

          // 3. Temporarily pause scroll spy to avoid flickering intermediate sections
          isNavigating = true;
          window.scrollTo({
            top: Math.max(0, targetTop),
            behavior: 'smooth'
          });

          setTimeout(() => {
            isNavigating = false;
            updateActiveSection();
          }, 650);

          history.pushState(null, '', `#${targetId}`);
        }
      });
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
      const lastSection = sections[sections.length - 1];
      setActiveNode(lastSection.id, nodes);
      return;
    }

    // 2. Sample line at ~35% down viewport for natural reading position
    const sampleLine = scrollY + (windowHeight * 0.35);

    let currentSectionId = sections[0].id;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.getBoundingClientRect().top + scrollY;
        if (sampleLine >= top) {
          currentSectionId = section.id;
        }
      }
    }

    setActiveNode(currentSectionId, nodes);
  }

  function setActiveNode(targetId, nodes) {
    nodes.forEach(n => {
      n.classList.toggle('active', n.getAttribute('data-target') === targetId);
    });
  }

  // Scroll listener with requestAnimationFrame throttling
  function onScroll() {
    if (!scrollTicking && !isNavigating) {
      window.requestAnimationFrame(() => {
        updateActiveSection();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });

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
