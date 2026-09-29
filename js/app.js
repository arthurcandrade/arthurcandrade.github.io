/**
 * Application Core Orchestrator
 * Arthur Cavalcante de Andrade | Cyberpunk Portfolio
 */

import { portfolioData } from './data/portfolio-data.js';
import { audioSynth } from './modules/audio-synth.js';
import { MatrixRain } from './modules/matrix-rain.js';
import { HudClock } from './modules/hud-clock.js';

import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderSkills } from './components/Skills.js';
import { renderExperience } from './components/Experience.js';
import { renderEducation } from './components/Education.js';
import { renderProjects } from './components/Projects.js';
import { renderFooter } from './components/Footer.js';

class PortfolioApp {
  constructor() {
    this.data = portfolioData;
    this.matrixRain = null;
    this.hudClock = null;
  }

  init() {
    console.log(`%c[SYSTEM BOOT] Initializing Arthur Cavalcante Portfolio Node...`, 'color: #00f0ff; font-family: monospace; font-size: 14px; font-weight: bold;');

    // 1. Mount Components into DOM containers
    this.mountComponents();

    // 2. Initialize Background & Audio Modules
    this.initModules();

    console.log(`%c[SYSTEM ACTIVE] All components mounted & telemetry synchronized.`, 'color: #39ff14; font-family: monospace;');
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
    mount('#footer-mount', renderFooter);
  }

  initModules() {
    // Canvas Matrix Rain
    this.matrixRain = new MatrixRain('matrix-canvas');
    this.matrixRain.init();

    // HUD Live Clock
    this.hudClock = new HudClock('sys-clock');
    this.hudClock.init();

    // Audio Synthesizer Global Click Listener
    audioSynth.attachGlobalClickSounds();
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const app = new PortfolioApp();
  app.init();
});
