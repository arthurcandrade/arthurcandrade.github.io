/**
 * HUD Clock & Telemetry Module
 * Keeps real-time UTC clock synchronized and manages sticky header styles
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

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  destroy() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
