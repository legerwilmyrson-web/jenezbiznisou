# DESIGN.md — JENEZBIZNISSOU
> Règ design pou Claude Code. Optimizé pou: Ayiti (koneksyon lent), Mobile 3G/4G, SEO Google, AdSense.
> Enpòte: Vitès > Bèlte. Yon paj ki chaje vit bat yon paj ki bèl men lent.

---

## 🚨 PRENSIP #1 — PÈFÒMANS ANVAN TOUT

```
Objektif paj: chaje anba 2 segond sou 3G
Tay paj: maksimòm 200KB (HTML + CSS + JS)
Pa okenn image dekoratif
Pa okenn video background
Pa okenn font ki peze plis ke 2 weights
Pa okenn animation ki itilize backdrop-blur sou kontèn ki scroll
```

**Rezon:** Majorite vizitè Ayiti + Afrik sou 3G/4G. 1 segond anplis = 20% moun kite paj la.

---

## 🎨 SYSTÈME KOULÈ

### Koulè Prensipal (Dark Theme)
```css
:root {
  /* Backgrounds */
  --bg-base:        #0F1117;   /* Background prensipal */
  --bg-surface:     #1A1D2E;   /* Cards, containers */
  --bg-elevated:    #232640;   /* Hover states, inputs */

  /* Accent — Gold */
  --accent:         #F5A623;   /* CTA, highlights, icons aktif */
  --accent-hover:   #E09015;   /* Hover sou accent */
  --accent-soft:    #F5A62320; /* Background soft (badges, tags) */

  /* Texte */
  --text-primary:   #F0F0F0;   /* Heading, tèks prensipal */
  --text-secondary: #9BA3AF;   /* Subtext, deskripsyon */
  --text-muted:     #6B7280;   /* Placeholder, meta */

  /* Borders */
  --border:         #2D3748;   /* Bòd standard */
  --border-accent:  #F5A62340; /* Bòd sou focus/hover */

  /* Status */
  --success:        #10B981;   /* Rezilta pozitif */
  --warning:        #F59E0B;   /* Atansyon */
  --error:          #EF4444;   /* Erè */

  /* Misc */
  --radius-sm:      6px;
  --radius-md:      10px;
  --radius-lg:      16px;
  --radius-xl:      24px;
}
```

### ✅ Fè / ❌ Pa Fè
```
✅ Sèvi ak CSS variables TOUJOU — janm hardcode koulè
✅ Kontrast tèks: minimum 4.5:1 (WCAG AA)
✅ Yon sèl koulè aksyon (gold) — pa melanje plizyè accent
❌ Pa itilize pure black (#000) ni pure white (#fff) kòm background
❌ Pa itilize gradient konplèks (linear ok, mesh gradient non)
❌ Pa mete plis ke 3 koulè diferan nan yon sèl seksyon
```

---

## ✍️ TIPOGRAFI

### Fonts — Google Fonts Sèlman (gratis, CDN rapid)
```html
<!-- Sèlman 2 weights — pa plis -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```

```css
font-family: 'Plus+Jakarta+Sans', system-ui, -apple-system, sans-serif;
```

**Poukisa Plus Jakarta Sans:**
- Gratis, chaje vit
- Premium san parèt jeneric
- Ekselan lisibilite sou mobil
- Mache pafètman ak chif (kalkil, rezilta)

### Echèl Tipografik
```css
--text-xs:   0.75rem;   /* 12px — labels, badges */
--text-sm:   0.875rem;  /* 14px — captions, meta */
--text-base: 1rem;      /* 16px — body (MINIMÒM sou mobil) */
--text-lg:   1.125rem;  /* 18px — subheadings */
--text-xl:   1.25rem;   /* 20px — card titles */
--text-2xl:  1.5rem;    /* 24px — section titles */
--text-3xl:  1.875rem;  /* 30px — page title */
--text-4xl:  2.25rem;   /* 36px — hero title */
```

### Règ Tipografi
```
✅ line-height: 1.6 pou body text
✅ line-height: 1.2 pou heading
✅ Maksimòm 65 karaktè pa liy sou desktop
✅ font-weight: 700 pou H1/H2, 600 pou H3, 400 pou body
✅ letter-spacing: -0.02em pou gwo heading
❌ Pa itilize plis ke 2 font families
❌ Pa itilize font-weight 300 (twò fin pou ekran laba)
❌ Pa mete tèks solid sou background image san overlay
```

---

## 📐 LAYOUT & SPACING

### Grid System
```css
.container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;        /* Mobile: 16px */
}

@media (min-width: 768px) {
  .container { padding: 0 2rem; }  /* Tablet: 32px */
}

@media (min-width: 1024px) {
  .container { padding: 0 3rem; }  /* Desktop: 48px */
}
```

### Spacing Scale
```css
--space-1:  0.25rem;  /* 4px */
--space-2:  0.5rem;   /* 8px */
--space-3:  0.75rem;  /* 12px */
--space-4:  1rem;     /* 16px */
--space-6:  1.5rem;   /* 24px */
--space-8:  2rem;     /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
```

### Règ Layout
```
✅ Mobile-first TOUJOU — kòmanse ak 320px
✅ Sections: padding-top/bottom minimum 48px (mobile), 80px (desktop)
✅ Cards: padding inèn 20px (mobile), 24px (desktop)
✅ Gap ant cards: 16px (mobile), 24px (desktop)
✅ max-width: 600px pou fòmilè tools (lisibilite)
❌ Pa itilize height: 100vh — itilize min-height: 100dvh
❌ Pa kreye layout ki fòse horizontal scroll sou mobile
❌ Pa mete plis ke 2 kolonn sou ekran anba 480px
```

---

## 🧩 KONPOSANT PRENSIPAL

### Buttons
```css
/* Bouton Prensipal */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--accent);
  color: #0F1117;
  font-weight: 700;
  font-size: 1rem;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  border: none;
  cursor: pointer;
  transition: background 200ms ease, transform 150ms ease;
  min-height: 44px;       /* Touch target minimum */
  min-width: 44px;
}

.btn-primary:hover {
  background: var(--accent-hover);
}

.btn-primary:active {
  transform: scale(0.98);  /* Feedback fizik sou klik */
}

/* Bouton Segondè */
.btn-secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border);
  /* ... menm padding ak btn-primary */
  transition: border-color 200ms ease, background 200ms ease;
}

.btn-secondary:hover {
  border-color: var(--accent);
  background: var(--accent-soft);
}
```

### Cards
```css
.card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px;
  transition: border-color 200ms ease, transform 200ms ease;
}

.card:hover {
  border-color: var(--border-accent);
  transform: translateY(-2px);  /* Sèlman 2px — pa twò dramatik */
}

/* ❌ PA mete backdrop-blur sou cards ki scroll */
/* ❌ PA mete box-shadow lou — jis bòd ak hover */
```

### Inputs / Form Elements
```css
.input {
  width: 100%;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-primary);
  font-size: 1rem;
  padding: 12px 16px;
  min-height: 44px;
  transition: border-color 200ms ease;
  outline: none;
}

.input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-soft);
}

.input::placeholder {
  color: var(--text-muted);
}

label {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 6px;
}
```

### Rezilta Tool (Result Box)
```css
.result-box {
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);  /* Mak aksyon gold */
  border-radius: var(--radius-md);
  padding: 20px 24px;
  margin-top: 24px;
}

.result-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1.2;
}

.result-label {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-top: 4px;
}
```

### Badges / Tags
```css
.badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  letter-spacing: 0.03em;
}
```

### CTA Kolonih (Obligatwa sou chak paj)
```css
.cta-kolonih {
  background: linear-gradient(135deg, var(--bg-surface), var(--bg-elevated));
  border: 1px solid var(--border-accent);
  border-radius: var(--radius-lg);
  padding: 20px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 40px;
}

.cta-kolonih a {
  color: var(--accent);
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
}

.cta-kolonih a:hover {
  text-decoration: underline;
}
```

---

## ⚡ ANIMASYON — Règ Estriktif

### ✅ Animasyon Pèmèt (Pèfòman, GPU-safe)
```css
/* Sèlman transition sou: transform, opacity, color, background, border-color */

/* Fade-in senp pou rezilta */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-in {
  animation: fadeIn 250ms ease forwards;
}

/* Scroll reveal (IntersectionObserver sèlman) */
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 400ms ease, transform 400ms ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### ❌ Animasyon ENTÈDI (Ralanti sou 3G/mobile)
```
❌ backdrop-filter: blur() sou kontèn ki scroll
❌ Parallax scroll effects
❌ Spring physics / momentum scroll
❌ Video backgrounds
❌ Lottie animations (peze twò lou)
❌ Transition sou: width, height, top, left, margin, padding
❌ will-change: transform sou plis ke 3 eleman an menm tan
❌ CSS animations ki tourne pou toujou (san prefers-reduced-motion)
```

### Prefers Reduced Motion (Obligatwa)
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 🌐 HEADER / NAVIGATION

```
✅ Navbar: simple, kolè --bg-base, bòd anba --border
✅ Logo agoch, lyen navigasyon adwat
✅ Mobile: hamburger menu (pa dropdown konplèks)
✅ Position: sticky top-0 (pa fixed — evite layout issues)
✅ Height: 60px
❌ Pa glass/blur navbar ki parèt sou scroll
❌ Pa mega-menu konplèks
❌ Pa animasyon sou ouvèti navbar mobile
```

---

## 📱 MOBILE FIRST — Règ Kritik

```css
/* Kòmanse ak mobile, epi ale sou desktop */

/* Mobile (default — 320px+) */
.tool-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .tool-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .tool-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}
```

### Touch Targets (Obligatwa)
```
✅ Tout bouton: minimum 44x44px (Apple HIG standard)
✅ Lyen navigasyon: minimum 44px height
✅ Inputs: minimum 44px height
✅ Espas ant eleman klikab: minimum 8px
```

---

## 🔍 SEO — Règ Teknik Inportant pou Pèfòmans

### Imaj
```html
<!-- TOUJOU lazy load sou imaj ki pa nan hero -->
<img src="..." alt="description" loading="lazy" width="400" height="300">

<!-- Evite imaj dekoratif ki peze — itilize CSS background oswa SVG icon -->
```

### Font Loading (Evite FOUT)
```html
<!-- nan <head>, anvan tout lòt link -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap" rel="stylesheet">
```

### CSS Kritik
```html
<!-- CSS ki nesesè pou above-the-fold: inline nan <style> -->
<!-- Rès CSS: link external -->
```

### JavaScript
```html
<!-- Tout script: defer oswa async -->
<script src="global.js" defer></script>

<!-- Pa janm: <script> nan <head> san defer/async -->
```

---

## 📊 ADSENSE — Konsiderasyon Design

### Plas Pou Ads (Prepare Yo Anvan)
```
✅ Anba H1 / antre tool la (728x90 leaderboard desktop)
✅ Anba rezilta tool la (responsive ad)
✅ Anba contenu SEO (avant footer)
✅ Sidebar si layout pèmèt la (300x250)
❌ Pa mete ad ki bloke wè tool la
❌ Pa mete plis ke 3 ad sou yon paj
❌ Pa mete ad toupre bouton klikab (Google penalize sa)
```

### Placeholder pou Ads (Pandan Development)
```html
<div class="ad-placeholder" style="
  min-height: 90px;
  background: var(--bg-surface);
  border: 1px dashed var(--border);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 0.75rem;
  margin: 24px 0;
">Ad Space</div>
```

---

## ✅ CHECKLIST AVANT CHAK TOOL

Claude Code dwe verifye tout sa anvan li livre kòd:

### Pèfòmans
- [ ] Pa gen font plis ke 2 weights
- [ ] Pa gen imaj dekoratif ki peze
- [ ] Tout script gen `defer` oswa `async`
- [ ] Pa gen `backdrop-blur` sou kontèn ki scroll
- [ ] Animasyon sèlman sou `transform` ak `opacity`

### Mobile
- [ ] Tool fonksyone sou 320px (pi piti ekran)
- [ ] Tout bouton minimum 44px height
- [ ] Pa gen horizontal scroll
- [ ] Tèks: minimum 16px sou mobile
- [ ] Inputs: minimum 44px height

### Aksesibilite
- [ ] Tout imaj gen `alt` text
- [ ] Tout input gen `<label>` asosye
- [ ] Focus states vizib (pa retire outline san ranplasman)
- [ ] Kontrast tèks: minimum 4.5:1
- [ ] `prefers-reduced-motion` respekte

### SEO
- [ ] `<title>` unik, 50-60 karaktè, keyword an premye
- [ ] `<meta description>` 150-160 karaktè
- [ ] Yon sèl `<h1>` ak keyword ladan
- [ ] `loading="lazy"` sou imaj ki pa hero
- [ ] Canonical URL prezan

### Kontèn
- [ ] CTA Kolonih prezan
- [ ] Contenu SEO 200+ mo anba tool
- [ ] Tools rekòmande (3 lyen)
- [ ] Pa gen "Lorem ipsum" ni tèks placeholder

### Koulè & Design
- [ ] Sèlman CSS variables — pa hardcode koulè
- [ ] Kontrast gold sou dark background verifye
- [ ] Hover states prezan sou tout eleman interaktif
- [ ] `cursor: pointer` sou tout eleman klikab

---

## 🚫 ANTI-PATÈN — Sa Claude Code PA DWE Janm Fè

```
❌ Gradient "AI purple/blue" — nou gen gold kòm accent
❌ Glassmorphism sou kontèn ki scroll
❌ Animasyon ki tourne pou toujou (loaders, spinners san fen)
❌ Police Inter, Roboto, Arial — itilize Plus Jakarta Sans
❌ 3 kolonn egal sou mobile
❌ Pure black (#000000) oswa pure white (#ffffff) kòm background
❌ Bouton san feedback vizib (hover + active states obligatwa)
❌ Layout ki kase sou ekran 375px (iPhone standard)
❌ JavaScript ki bloke rendering (async/defer toujou)
❌ Plis ke 3 nivo z-index (nav: 100, modal: 200, toast: 300)
❌ Lorem ipsum oswa "John Doe" kòm placeholder
```

---

## 🎯 OBJEKTIF FINAL

Chak paj JENEZBIZNISSOU dwe:

1. **Chaje anba 2 segond** sou koneksyon 3G Ayiti
2. **Fonksyone pafètman** sou ecran 320px
3. **Parèt pwofesyonèl** san parèt jeneric
4. **Konvèti** — vizitè wè CTA Kolonih, yo klike
5. **Rankin sou Google** — SEO teknik solid

---

*DESIGN.md — JENEZBIZNISSOU | REDPRINT SOLUTION*
*Optimizé pou: Ayiti · Mobile First · SEO · AdSense*
