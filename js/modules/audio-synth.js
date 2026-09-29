/**
 * Audio Synthesizer Module
 * Synthesizes futuristic high-tech sound effects using Web Audio API
 */

class AudioSynthesizer {
  constructor() {
    this.audioContext = null;
    this.isEnabled = true;
  }

  init() {
    if (!this.audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioContext = new AudioCtx();
      }
    }
  }

  toggle() {
    this.isEnabled = !this.isEnabled;
    if (this.isEnabled) {
      this.play('success');
    }
    return this.isEnabled;
  }

  play(type = 'click') {
    if (!this.isEnabled) return;
    this.init();
    if (!this.audioContext) return;

    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    try {
      const now = this.audioContext.currentTime;
      const osc = this.audioContext.createOscillator();
      const gain = this.audioContext.createGain();

      osc.connect(gain);
      gain.connect(this.audioContext.destination);

      switch (type) {
        case 'click':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(1200, now);
          osc.frequency.exponentialRampToValueAtTime(300, now + 0.08);
          gain.gain.setValueAtTime(0.06, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
          osc.start(now);
          osc.stop(now + 0.09);
          break;

        case 'success':
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, now);
          osc.frequency.exponentialRampToValueAtTime(880, now + 0.22);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
          osc.start(now);
          osc.stop(now + 0.25);
          break;

        case 'risk-alert':
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(160, now);
          osc.frequency.linearRampToValueAtTime(360, now + 0.22);
          gain.gain.setValueAtTime(0.05, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
          osc.start(now);
          osc.stop(now + 0.25);
          break;

        case 'node-toggle':
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(600, now);
          osc.frequency.linearRampToValueAtTime(900, now + 0.07);
          gain.gain.setValueAtTime(0.05, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
          osc.start(now);
          osc.stop(now + 0.08);
          break;

        default:
          break;
      }
    } catch (err) {
      console.warn('Audio synthesis not supported or blocked by browser policy.', err);
    }
  }

  attachGlobalClickSounds() {
    document.addEventListener('click', (e) => {
      const clickable = e.target.closest('button, a, .cursor-pointer, .cyber-card');
      if (clickable && !clickable.closest('#sound-toggle')) {
        this.play('click');
      }
    });
  }
}

export const audioSynth = new AudioSynthesizer();
