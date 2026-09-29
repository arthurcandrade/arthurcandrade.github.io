/**
 * Header Component
 * Renders the streamlined top HUD header with clean section navigation and right-aligned Audio toggle
 */

import { audioSynth } from '../modules/audio-synth.js';

export function renderHeader(container, data) {
  const { profile } = data;

  const headerHtml = `
    <header class="hud-header">
      <div class="container hud-header-container">
        
        <!-- Left: Brand / Identity -->
        <a href="#" class="hud-brand" title="Arthur Cavalcante de Andrade Profile Node">
          <div class="hud-avatar-box">AC</div>
          <div class="hud-brand-details">
            <h1>
              ${profile.displayName} 
              <span class="hud-status-tag animate-pulse">[${profile.nodeId}]</span>
            </h1>
            <p class="hud-role-text">SYS STATUS: ACTIVE // ROLE: ${profile.shortRole}</p>
          </div>
        </a>

        <!-- Center: Section Navigation Links (Clean, No slashes, No wrapping) -->
        <nav class="hud-nav-center">
          <a href="#skills-section" class="hud-nav-link">SKILLS</a>
          <a href="#experience-section" class="hud-nav-link">EXPERIENCE</a>
          <a href="#education-honors-section" class="hud-nav-link">EDUCATION</a>
          <a href="#projects-section" class="hud-nav-link">PROJECTS</a>
        </nav>

        <!-- Right: Real-time Clock & Audio Options Toggle -->
        <div class="hud-right-controls">
          <div class="hud-clock-box">
            <span class="hud-clock-label">SYSTEM TIME</span>
            <span class="hud-clock-time" id="sys-clock">00:00:00 UTC</span>
          </div>

          <button id="sound-toggle" class="hud-sound-btn" type="button" title="Toggle audio feedback synthesis">
            <i id="sound-icon" class="fa-solid fa-volume-high"></i>
            <span id="sound-label">AUDIO RX</span>
          </button>
        </div>

      </div>
    </header>
  `;

  container.innerHTML = headerHtml;

  // Sound Toggle Listener
  const soundToggleBtn = container.querySelector('#sound-toggle');
  const soundIcon = container.querySelector('#sound-icon');
  const soundLabel = container.querySelector('#sound-label');

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isEnabled = audioSynth.toggle();
      if (isEnabled) {
        soundIcon.className = 'fa-solid fa-volume-high';
        soundLabel.textContent = 'AUDIO RX';
        soundToggleBtn.style.color = 'var(--neon-magenta)';
        soundToggleBtn.style.borderColor = 'rgba(255, 0, 127, 0.3)';
      } else {
        soundIcon.className = 'fa-solid fa-volume-xmark';
        soundLabel.textContent = 'MUTED';
        soundToggleBtn.style.color = 'var(--text-muted)';
        soundToggleBtn.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      }
    });
  }
}
