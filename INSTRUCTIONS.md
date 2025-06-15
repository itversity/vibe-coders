# Vibe Coders – Requirements & Design

---

## 1. Functional Requirements

1. **Static‐only**  
   - Pure HTML & CSS (optional minimal JS for lightbox or embeds).  
   - No build step or server-side code.

2. **Seven Content Pages**  
   - `index.html` – Home  
   - `about.html` – About Vibe Coders  
   - `projects.html` – Projects Showcase  
   - `contact.html` – Contact & Resources  
   - `replit-workshop.html` – Replit Workshop  
   - `cursor-workshop.html` – Cursor.dev Workshop  
   - `windsurf.html` – Windsurf (CLI & Git) Workshop

3. **Common Layout**  
   - **Header** with site logo/name and nav links to all seven pages.  
   - **Footer** with copyright and “Hosted on GitHub Pages.”

4. **Ownership**  
   - Assign each student 1–2 pages; they populate content, images, and test links.

5. **Deployment**  
   - All files on `main/` branch → GitHub Pages at  
     `https://<org>.github.io/vibe-coders/`

---

## 2. Non-Functional Requirements

- **Responsive**  
  - Mobile-first at 320 px, 768 px, 1024 px.  
  - Use CSS Grid or Flexbox.

- **Performance**  
  - Optimize images (≤ 200 KB each).  
  - Single CSS file (`css/style.css`), no inline styles.

- **Accessibility**  
  - Meaningful `alt` on every `<img>`.  
  - Sufficient color contrast.  
  - Semantic HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.

- **Consistency**  
  - Shared font stack (e.g. `font-family: 'Inter', sans-serif;`).  
  - Single color palette (e.g. `--primary: #5A67D8`, `--accent: #ED64A6`).

---

## 3. Directory Layout

```text
vibe-coders/
├── index.html
├── about.html
├── projects.html
├── contact.html
├── replit-workshop.html
├── cursor-workshop.html
├── windsurf.html
├── css/
│   └── style.css
└── assets/
    ├── hero-bg.jpg
    ├── project1.png
    ├── replit.png
    ├── cursor.png
    └── windsurf.png
```

---

## 4. Global Components

### 4.1 Header & Navigation

```html
<header class="site-header">
  <div class="logo">Vibe Coders</div>
  <nav>
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="contact.html">Contact</a></li>
      <li><a href="replit-workshop.html">Replit</a></li>
      <li><a href="cursor-workshop.html">Cursor.dev</a></li>
      <li><a href="windsurf.html">Windsurf</a></li>
    </ul>
  </nav>
</header>
```

### 4.2 Footer

```html
<footer class="site-footer">
  <p>© 2025 Vibe Coders • Hosted on GitHub Pages</p>
  <div class="social-icons">
    <!-- e.g. Twitter, GitHub SVG links -->
  </div>
</footer>
```

---

## 5. Page-by-Page Design

### 5.1 Home (`index.html`)

- **Hero**: full-viewport `hero-bg.jpg` or CSS gradient  
  - Title: “Welcome to Vibe Coders Workshops”  
  - Subtitle + CTA buttons to each workshop page

- **Workshop Cards** (Grid of 3)

  ```html
  <section class="cards grid-3">
    <a href="replit-workshop.html" class="card">
      <img src="assets/replit.png" alt="Replit Workshop">
      <h3>Replit Workshop</h3>
      <p>Spin up live code in seconds.</p>
    </a>
    <!-- Cursor.dev card, Windsurf card -->
  </section>
  ```

---

### 5.2 About (`about.html`)

- **Our Story**: two-column text + image  
- **Core Values**: 3 icon cards (Collaboration, Creativity, Community)  
- **Timeline**: CSS-based horizontal timeline of milestones

---

### 5.3 Projects (`projects.html`)

- **Grid of Project Cards**:

  ```html
  <section class="grid-3 project-list">
    <div class="card">
      <img src="assets/project1.png" alt="Project 1">
      <h4>Project Title</h4>
      <p>Short description.</p>
      <a href="#" class="button">View Code</a>
    </div>
    <!-- more cards -->
  </section>
  ```

- **Lightbox** (optional pure-CSS modal via `:target`)

---

### 5.4 Contact & Resources (`contact.html`)

- **Contact**:  
  ```html
  <a href="mailto:?subject=Join%20Vibe%20Coders" class="button">
    Join Vibe Coders
  </a>
  ```
- **Resources**: bullet list of links (MDN, freeCodeCamp, CSS Tricks…)  
- **Optional**: Twitter timeline embed snippet

---

### 5.5 Replit Workshop (`replit-workshop.html`)

- **What Is Replit?** brief + logo  
- **Embedded Repl**:
  ```html
  <iframe src="https://replit.com/@…?embed=true" height="400"></iframe>
  ```
- **Exercise**: fork, edit “Hello, Vibe Coders!”, share link

---

### 5.6 Cursor.dev Workshop (`cursor-workshop.html`)

- **Why Cursor.dev?** feature list (real-time, preview, collaboration)  
- **Getting Started**: screenshot + steps to open & live-preview  
- **Exercise**: pair up, style a hero section, commit & push

---

### 5.7 Windsurf Workshop (`windsurf.html`)

- **Intro**: “CLI for Git & GitHub Pages”  
- **Git Basics**:
  ```bash
  windsurf init
  windsurf add .
  windsurf commit -m "Update workshop page"
  windsurf publish
  ```
- **Exercise**: edit your page, run `windsurf publish`, verify live

---

## 6. CSS Style Guidelines

```css
:root {
  --primary: #5A67D8;
  --accent:  #ED64A6;
  --bg-light: #F7FAFC;
  --text-dark: #2D3748;
}

body {
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: var(--text-dark);
  margin: 0;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 1rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
}

.card {
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  overflow: hidden;
}

/* Buttons */
.button {
  display: inline-block;
  padding: 0.6rem 1.2rem;
  background: var(--primary);
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
}
```

---

## 7. Assets & Versioning

- Place all images/icons in `assets/` (optimize to ≤ 200 KB each).  
- Commit behind descriptive PRs (e.g. “Add About page timeline”).  
- Review & merge as a team, then push to `main/` for live updates.
