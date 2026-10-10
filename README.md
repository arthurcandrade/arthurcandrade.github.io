# Arthur Cavalcante de Andrade

Personal website and interactive cyberpunk terminal portfolio.

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

## License & Attribution

The source code and design architecture of this project are licensed under the **[MIT License](LICENSE)**.

### Usage & Exceptions

You are welcome to use this codebase, design system, and architecture as a template or reference for your own portfolio, provided that:

1. **Personal Identity & Data**: All personal data, biography, credentials, academic records, and career history contained in `js/data/portfolio-data.js` and HTML files are **All Rights Reserved** to Arthur Cavalcante de Andrade.
2. **Third-Party Assets**: Media, images, album covers, posters, and GIF visualizers located in `assets/` belong to their respective copyright owners. If you adapt this project, please replace them with your own media.
3. **Attribution**: You must provide visible attribution and credit linking back to the original repository ([arthurcandrade/arthurcandrade.github.io](https://github.com/arthurcandrade/arthurcandrade.github.io)).
