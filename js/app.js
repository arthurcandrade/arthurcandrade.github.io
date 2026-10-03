/**
 * Application Core Orchestrator
 * Arthur Cavalcante de Andrade | Cyberpunk Portfolio & Personal Hub
 */

import { portfolioData } from './data/portfolio-data.js';
import { MatrixRain } from './modules/matrix-rain.js';
import { HudClock } from './modules/hud-clock.js';

import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderSkills } from './components/Skills.js';
import { renderExperience } from './components/Experience.js';
import { renderEducation } from './components/Education.js';
import { renderHonors } from './components/Honors.js';
import { renderProjects } from './components/Projects.js';
import { renderPersonalHub } from './components/PersonalHub.js';
import { renderSideGuide } from './components/SideGuide.js';
import { renderFooter } from './components/Footer.js';

class PortfolioApp {
  constructor() {
    this.data = portfolioData;
    this.matrixRain = null;
    this.hudClock = null;
    this.activeRealm = 'professional';
  }

  init() {
    console.log(`%c[SYSTEM BOOT] Initializing Arthur Cavalcante Portfolio & Systems Node...`, 'color: #00f0ff; font-family: monospace; font-size: 14px; font-weight: bold;');

    // 1. Mount Components into DOM containers
    this.mountComponents();

    // 2. Initialize Background & Audio Modules
    this.initModules();

    // 3. Setup Portal Realm Orchestration & Fluid Navigation
    this.setupRealmOrchestration();

    console.log(`%c[SYSTEM ACTIVE] Dual-portal telemetry synchronized.`, 'color: #00f0ff; font-family: monospace;');
  }

  mountComponents() {
    const mount = (selector, renderFn) => {
      const el = document.querySelector(selector);
      if (el) {
        renderFn(el, this.data);
      } else {
        console.warn(`Mount container '${selector}' not found in DOM.`);
      }
    };

    mount('#header-mount', renderHeader);
    mount('#hero-mount', renderHero);
    mount('#skills-mount', renderSkills);
    mount('#experience-mount', renderExperience);
    mount('#education-mount', renderEducation);
    mount('#honors-mount', renderHonors);
    mount('#projects-mount', renderProjects);
    mount('#personal-mount', renderPersonalHub);
    mount('#footer-mount', renderFooter);
    mount('#side-guide-mount', (el) => renderSideGuide(el, this.activeRealm));
  }

  initModules() {
    // Canvas Matrix Rain
    this.matrixRain = new MatrixRain('matrix-canvas');
    this.matrixRain.init();

    // Floating Quick FX Button (Bottom-Right)
    const btnFx = document.getElementById('btn-fx-toggle');
    const updateFxUI = (enabled) => {
      document.body.classList.toggle('fx-eco', !enabled);
      document.documentElement.classList.toggle('fx-eco', !enabled);

      if (!btnFx) return;
      btnFx.classList.toggle('fx-active', enabled);
      btnFx.classList.toggle('fx-eco', !enabled);
      btnFx.setAttribute('title', enabled ? 'Animation Mode: ACTIVE (Click to Disable All Animations)' : 'Animation Mode: ECO (Click to Enable Animations)');
      btnFx.setAttribute('aria-label', enabled ? 'Animation Mode Active' : 'Eco Mode Active');
      btnFx.innerHTML = `<i class="fa-solid ${enabled ? 'fa-bolt' : 'fa-leaf'}"></i>`;
    };

    if (btnFx) {
      btnFx.addEventListener('click', () => {
        if (this.matrixRain) {
          const newState = this.matrixRain.toggle();
          updateFxUI(newState);
        }
      });
      updateFxUI(this.matrixRain.getState());
    }

    // HUD Live Clock
    this.hudClock = new HudClock('sys-clock');
    this.hudClock.init();
  }

  setupRealmOrchestration() {
    const realmProf = document.getElementById('realm-professional');
    const realmPers = document.getElementById('realm-personal');

    const switchRealm = (realmName, targetHash = null, updateUrl = true) => {
      this.activeRealm = realmName;
      const isProf = realmName === 'professional';

      if (realmProf && realmPers) {
        if (isProf) {
          realmPers.classList.remove('active-view');
          realmPers.classList.add('hidden-view');
          realmProf.classList.remove('hidden-view');
          realmProf.classList.add('active-view');
        } else {
          realmProf.classList.remove('active-view');
          realmProf.classList.add('hidden-view');
          realmPers.classList.remove('hidden-view');
          realmPers.classList.add('active-view');
        }
      }

      // Synchronize Header UI state
      if (window.__setPortalRealmUI) {
        window.__setPortalRealmUI(realmName, false);
      }

      // Update URL hash without triggering extra scroll
      if (updateUrl) {
        const targetUrl = targetHash || `#${realmName}`;
        if (window.location.hash !== targetUrl) {
          history.replaceState(null, '', targetUrl);
        }
      }

      if (targetHash) {
        setTimeout(() => {
          const targetEl = document.querySelector(targetHash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    };

    // Determine initial realm from URL path, query params, or hash
    const parseUrlRoute = () => {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const params = new URLSearchParams(window.location.search);
      const queryRealm = (params.get('realm') || params.get('view') || params.get('tab') || '').toLowerCase();

      // 1. Direct pathname check (e.g. /personal, /personal/, /personal.html)
      if (pathname.includes('/personal') || pathname.endsWith('personal.html')) {
        return { realm: 'personal', targetHash: window.location.hash || null };
      }
      if (pathname.includes('/professional') || pathname.endsWith('professional.html')) {
        return { realm: 'professional', targetHash: window.location.hash || null };
      }

      // 2. Query parameter check (e.g. ?realm=personal, ?view=personal, ?tab=personal, ?personal)
      if (queryRealm === 'personal' || params.has('personal')) {
        return { realm: 'personal', targetHash: window.location.hash || null };
      }
      if (queryRealm === 'professional' || params.has('professional')) {
        return { realm: 'professional', targetHash: window.location.hash || null };
      }

      // 3. Hash routing check
      if (
        hash.startsWith('#personal') || 
        hash.startsWith('#/personal') || 
        hash.includes('gaming') || 
        hash.includes('cinema') || 
        hash.includes('music') || 
        hash.includes('workstation')
      ) {
        return { realm: 'personal', targetHash: window.location.hash };
      }

      if (
        hash.startsWith('#professional') || 
        hash.startsWith('#/professional') || 
        hash.startsWith('#skills') || 
        hash.startsWith('#experience') || 
        hash.startsWith('#education') || 
        hash.startsWith('#honors') || 
        hash.startsWith('#projects') || 
        hash.startsWith('#hero')
      ) {
        return { realm: 'professional', targetHash: window.location.hash };
      }

      return { realm: 'professional', targetHash: null };
    };

    // Listen to Header Realm button event
    window.addEventListener('portal:realmchange', (e) => {
      const realm = e.detail?.realm || 'professional';
      switchRealm(realm, null, true);
      // Smooth scroll to top of content
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Intercept clicks on links that target personal or professional sections
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      if (link.closest('.hud-side-guide')) return;

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const isPersonalTarget = hash.startsWith('#personal');
      const isProfTarget = hash.startsWith('#skills') || 
                           hash.startsWith('#experience') || 
                           hash.startsWith('#education') || 
                           hash.startsWith('#honors') || 
                           hash.startsWith('#projects') || 
                           hash.startsWith('#hero');

      if (isPersonalTarget && this.activeRealm !== 'personal') {
        e.preventDefault();
        switchRealm('personal', hash, true);
      } else if (isProfTarget && this.activeRealm !== 'professional') {
        e.preventDefault();
        switchRealm('professional', hash, true);
      }
    });

    // Handle initial load based on URL (path, query, or hash)
    const initialRoute = parseUrlRoute();
    switchRealm(initialRoute.realm, initialRoute.targetHash, false);

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      const currentRoute = parseUrlRoute();
      if (this.activeRealm !== currentRoute.realm) {
        switchRealm(currentRoute.realm, currentRoute.targetHash, false);
      }
    });

    window.addEventListener('hashchange', () => {
      const currentRoute = parseUrlRoute();
      if (this.activeRealm !== currentRoute.realm) {
        switchRealm(currentRoute.realm, currentRoute.targetHash, false);
      }
    });
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp();
  app.init();
});
