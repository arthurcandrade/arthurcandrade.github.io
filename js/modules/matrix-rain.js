/**
 * Matrix Rain Module (Ultra-Optimized)
 * Renders cyberpunk data-stream rain on HTML5 Canvas using requestAnimationFrame,
 * frame-throttling (~24 FPS for low battery consumption), tab visibility pause,
 * and user-toggleable ECO mode.
 */

export class MatrixRain {
  constructor(canvasId = 'matrix-canvas') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.fontSize = 14;
    this.characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@%+=-*<>';
    this.drops = [];
    this.animationId = null;
    this.lastFrameTime = 0;
    this.targetFpsInterval = 1000 / 24; // Smooth ~24 FPS target for minimal CPU/GPU overhead
    this.isRunning = false;
    
    // Check stored preference or system reduced motion
    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const storedState = localStorage.getItem('hud_matrix_fx');
    this.isEnabled = storedState !== null ? storedState === 'true' : !prefersReducedMotion;

    this.resize = this.resize.bind(this);
    this.loop = this.loop.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  init() {
    if (!this.canvas) return;
    this.resize();

    window.addEventListener('resize', this.debounce(this.resize, 200), { passive: true });
    document.addEventListener('visibilitychange', this.handleVisibilityChange);

    if (this.isEnabled) {
      this.start();
    } else {
      this.clearCanvas();
    }
  }

  debounce(fn, delay) {
    let timer = null;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  resize() {
    if (!this.canvas) return;
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.columns = Math.floor(this.width / this.fontSize);

    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = Math.floor(Math.random() * -80);
    }

    if (!this.isEnabled) {
      this.clearCanvas();
    }
  }

  handleVisibilityChange() {
    if (document.hidden) {
      this.stop();
    } else if (this.isEnabled) {
      this.start();
    }
  }

  loop(currentTime) {
    if (!this.isRunning || !this.isEnabled) return;

    this.animationId = requestAnimationFrame(this.loop);

    const elapsed = currentTime - this.lastFrameTime;
    if (elapsed < this.targetFpsInterval) return;

    // Adjust for interval drift
    this.lastFrameTime = currentTime - (elapsed % this.targetFpsInterval);

    this.render();
  }

  render() {
    // Translucent dark fill for smooth stream fade tail
    this.ctx.fillStyle = 'rgba(5, 5, 10, 0.055)';
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.font = `${this.fontSize}px 'Share Tech Mono', monospace`;

    const len = this.drops.length;
    for (let i = 0; i < len; i++) {
      const char = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
      const x = i * this.fontSize;
      const y = this.drops[i] * this.fontSize;

      // Color variation for characters
      const rand = Math.random();
      if (rand > 0.985) {
        this.ctx.fillStyle = '#ff007f'; // Neon Magenta highlight
      } else if (rand > 0.95) {
        this.ctx.fillStyle = '#00f0ff'; // Cyan highlight
      } else {
        this.ctx.fillStyle = 'rgba(0, 240, 255, 0.22)'; // Cyber Cyan stream
      }

      if (y > 0) {
        this.ctx.fillText(char, x, y);
      }

      if (y > this.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.lastFrameTime = performance.now();
    this.animationId = requestAnimationFrame(this.loop);
  }

  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
  }

  clearCanvas() {
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
    localStorage.setItem('hud_matrix_fx', this.isEnabled ? 'true' : 'false');

    if (this.isEnabled) {
      this.start();
    } else {
      this.stop();
      this.clearCanvas();
    }
    return this.isEnabled;
  }

  getState() {
    return this.isEnabled;
  }
}
