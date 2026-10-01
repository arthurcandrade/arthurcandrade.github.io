/**
 * HUD Clock & Telemetry Module
 * Keeps real-time UTC clock synchronized and manages sticky header styles efficiently
 */

export class HudClock {
  constructor(clockElementId = 'sys-clock') {
    this.clockEl = document.getElementById(clockElementId);
    this.interval = null;
  }

  init() {
    this.update();
    this.interval = setInterval(() => this.update(), 1000);
    this.initHeaderScrollListener();

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.update();
      }
    });
  }

  update() {
    if (!this.clockEl) {
      this.clockEl = document.getElementById('sys-clock');
    }
    if (this.clockEl) {
      const now = new Date();
      const timeStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
      this.clockEl.textContent = timeStr;
    }
  }

  initHeaderScrollListener() {
    const header = document.querySelector('.hud-header');
    if (!header) return;

    let isScrolled = false;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldScroll = window.scrollY > 25;
          if (shouldScroll !== isScrolled) {
            isScrolled = shouldScroll;
            header.classList.toggle('scrolled', isScrolled);
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  destroy() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
