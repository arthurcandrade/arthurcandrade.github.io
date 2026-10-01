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
      btnFx.setAttribute('title', enabled ? 'Modo Animações Ativo (Clique para Desativar Todas as Animações)' : 'Modo Eco / Sem Animações (Clique para Ativar Animações)');
      btnFx.setAttribute('aria-label', enabled ? 'Modo Animações Ativo' : 'Modo Sem Animações Ativo');
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

    const switchRealm = (realmName, targetHash = null) => {
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

      if (targetHash) {
        setTimeout(() => {
          const targetEl = document.querySelector(targetHash);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      }
    };

    // Listen to Header Realm button event
    window.addEventListener('portal:realmchange', (e) => {
      const realm = e.detail?.realm || 'professional';
      switchRealm(realm);
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
                           hash.startsWith('#projects') || 
                           hash.startsWith('#hero');

      if (isPersonalTarget && this.activeRealm !== 'personal') {
        e.preventDefault();
        switchRealm('personal', hash);
        history.pushState(null, '', hash);
      } else if (isProfTarget && this.activeRealm !== 'professional') {
        e.preventDefault();
        switchRealm('professional', hash);
        history.pushState(null, '', hash);
      }
    });

    // Handle initial load based on URL hash
    const initialHash = window.location.hash;
    if (initialHash.startsWith('#personal')) {
      switchRealm('personal', initialHash);
    } else {
      switchRealm('professional', (initialHash.startsWith('#skills') || initialHash.startsWith('#experience') || initialHash.startsWith('#education') || initialHash.startsWith('#projects') || initialHash.startsWith('#hero')) ? initialHash : null);
    }

    // Handle browser back/forward buttons
    window.addEventListener('hashchange', () => {
      const currentHash = window.location.hash;
      if (currentHash.startsWith('#personal')) {
        switchRealm('personal', currentHash);
      } else if (currentHash.startsWith('#skills') || currentHash.startsWith('#experience') || currentHash.startsWith('#education') || currentHash.startsWith('#projects') || currentHash.startsWith('#hero')) {
        switchRealm('professional', currentHash);
      }
    });
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp();
  app.init();
});
