/**
 * Matrix Rain Module
 * Renders cyberpunk data-stream rain on HTML5 Canvas
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

    this.resize = this.resize.bind(this);
    this.render = this.render.bind(this);
  }

  init() {
    if (!this.canvas) return;
    this.resize();
    window.addEventListener('resize', this.resize);
    this.start();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    this.columns = Math.floor(this.width / this.fontSize);

    this.drops = [];
    for (let i = 0; i < this.columns; i++) {
      this.drops[i] = Math.floor(Math.random() * -100);
    }
  }

  render() {
    // Translucent dark fill for tail persistence
    this.ctx.fillStyle = 'rgba(5, 5, 10, 0.055)';
    this.ctx.fillRect(0, 0, this.width, this.height);

    this.ctx.font = `${this.fontSize}px 'Share Tech Mono', monospace`;

    for (let i = 0; i < this.drops.length; i++) {
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
    if (this.interval) clearInterval(this.interval);
    this.interval = setInterval(this.render, 45);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}
