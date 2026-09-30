/**
 * FloatingAudio Component
 * Fixed floating HUD audio toggle in the bottom right corner of the screen.
 */

import { audioSynth } from '../modules/audio-synth.js';

export function renderFloatingAudio(container) {
  const isEnabled = audioSynth.isEnabled;

  const html = `
    <div class="hud-floating-audio-wrap">
      <button id="floating-sound-btn" class="hud-floating-audio-btn ${isEnabled ? '' : 'muted'}" type="button" title="Toggle audio feedback synthesis" aria-label="Toggle audio feedback">
        <i id="floating-sound-icon" class="fa-solid ${isEnabled ? 'fa-volume-high' : 'fa-volume-xmark'}"></i>
        <span id="floating-sound-tooltip" class="hud-floating-audio-tooltip">
          ${isEnabled ? 'AUDIO RX: ACTIVE' : 'AUDIO RX: MUTED'}
        </span>
      </button>
    </div>
  `;

  container.innerHTML = html;

  const btn = container.querySelector('#floating-sound-btn');
  const icon = container.querySelector('#floating-sound-icon');
  const tooltip = container.querySelector('#floating-sound-tooltip');

  if (btn) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const state = audioSynth.toggle();
      if (state) {
        btn.classList.remove('muted');
        icon.className = 'fa-solid fa-volume-high';
        tooltip.textContent = 'AUDIO RX: ACTIVE';
      } else {
        btn.classList.add('muted');
        icon.className = 'fa-solid fa-volume-xmark';
        tooltip.textContent = 'AUDIO RX: MUTED';
      }
    });
  }
}
