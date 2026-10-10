# Arthur Cavalcante de Andrade | Portfolio & Personal Terminal

[![Website](https://img.shields.io/badge/Live-arthurcandrade.github.io-00f0ff?style=flat-square&logo=googlechrome&logoColor=white)](https://arthurcandrade.github.io/)
[![Stack](https://img.shields.io/badge/Stack-Vanilla%20JS%20%7C%20CSS3%20%7C%20HTML5-ff007f?style=flat-square)](https://arthurcandrade.github.io/)
[![License](https://img.shields.io/badge/License-MIT%20(Code)-39ff14?style=flat-square)](LICENSE)

Personal website and interactive cyberpunk terminal portfolio of **Arthur Cavalcante de Andrade** — Software Engineer & AI Researcher.

Live at: **[arthurcandrade.github.io](https://arthurcandrade.github.io/)**

---

## Highlights & Features

- **Dual Realm Architecture**:
  - **`REALM 01: PROFESSIONAL`**: Terminal CV showcasing Summary Telemetry, Skills Matrix, Experience Motherboard Bus, Education, Honors, and Key Projects with interactive collapsible nodes.
  - **`REALM 02: PERSONAL`**: Curated hub covering hardware gear, gaming profile, cinema/TV favorites, and music habits.
- **Cyberpunk Visual Design System**:
  - Hardware-accelerated Matrix code rain canvas background (`#matrix-canvas`).
  - Ambient 3D wireframe scanner hologram with screen-blend filtering.
  - Lateral HUD Section Guide (dynamic scroll spy navigation).
  - Modern typography pairing Orbitron (display), Share Tech Mono (HUD), and Inter (clean reading).
- **Performance & Eco Mode**:
  - Built-in **ECO Mode** toggle (`fx-eco`) that shuts down canvas animations and intense filters to preserve battery and CPU.
  - Audio FX / sound synthesizers for cybernetic UI feedback.
- **Zero Heavy Frameworks**:
  - Pure native ES6+ modules and Vanilla CSS architecture with custom CSS properties.
  - Instant load times, high SEO score, and frictionless static hosting on GitHub Pages.

---

## Technology Stack

- **Core**: Vanilla JavaScript (ES6+ Modules), HTML5 Semantic Structure
- **Styling**: Vanilla CSS3 (Modular Component Architecture, CSS Variables, Hardware-Accelerated Transforms)
- **Canvas**: Native HTML5 Canvas 2D API for Matrix digital rain
- **Typography & Icons**: [Google Fonts](https://fonts.google.com/) (*Orbitron*, *Share Tech Mono*, *Inter*), [FontAwesome 6](https://fontawesome.com/)

---

## Project Structure

```text
.
├── assets/                  # Static media, icons, avatars, and GIF visualizers
├── css/
│   ├── variables.css        # Cyberpunk palette tokens, glow filters & typography
│   ├── base.css             # Base resets, container grid, matrix canvas & hologram
│   └── components/          # Componentized stylesheets (header, hero, skills, etc.)
├── js/
│   ├── app.js               # Main application bootstrapper & realm controller
│   ├── data/
│   │   └── portfolio-data.js# Centralized telemetry, career, and personal data store
│   ├── components/          # Reusable DOM components (Hero, Skills, Experience, etc.)
│   └── utils/               # Audio synth, matrix rain engine, eco toggle & scroll spy
├── scripts/                 # Automation scripts
├── index.html               # Main entrypoint & mount points
└── 404.html                 # Fallback routing page
```

---

## Running Locally

Because the project uses native ES6 JavaScript modules, it should be served through a local HTTP server:

### Option 1: Python
```bash
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Option 2: Node.js (npx)
```bash
npx serve .
```

### Option 3: VS Code
Install the **Live Server** extension and click **"Go Live"** from `index.html`.

---

## Contact & Links

- **Website**: [arthurcandrade.github.io](https://arthurcandrade.github.io/)
- **GitHub**: [@arthurcandrade](https://github.com/arthurcandrade)
- **LinkedIn**: [arthurdeandrade](https://linkedin.com/in/arthurdeandrade)
- **Email**: [arthurcandrade@hotmail.com](mailto:arthurcandrade@hotmail.com)

---

## License

This project adopts a **hybrid licensing model**:

- **Source Code & Architecture**: Licensed under the **[MIT License](LICENSE)**. You are free to inspect, learn from, and adapt the codebase, design system, and scripts for your own projects.
- **Personal Content & Identity**: All personal data, biography, credentials, career history (`js/data/portfolio-data.js`), and media files (`assets/`) are **Copyright © 2026 Arthur Cavalcante de Andrade. All rights reserved.**

If you use this repository as a template or reference:
1. Replace all personal data, biography, and media assets with your own.
2. Provide visible attribution and credit linking back to the original repository ([arthurcandrade/arthurcandrade.github.io](https://github.com/arthurcandrade/arthurcandrade.github.io)).
