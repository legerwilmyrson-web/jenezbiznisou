# CLAUDE.md — JENEZBIZNISSOU
> Dokiman referans pou Claude Code. Li sa anvan ou touche nenpòt kòd.

---

## 🎯 KONTÈKS PWOJÈ

**Non:** JENEZBIZNISSOU  
**Domèn:** jenezbiznisou.online  
**Kreye pa:** REDPRINT SOLUTION (Wilmyr Leger, Ayiti)  
**Objektif:** Platfòm tools gratis pou entrepreneurs — trafik SEO → monetizasyon AdSense + funnel pou Kolonih.com

### Kisa sit la ye
Yon koleksyon de 20 tools gratis pou entrepreneurs (Ayiti, dyaspora, Afrik, entènasyonal). Chak tool = yon paj HTML endepandan optimizé pou SEO. Modèl: iLovePDF / Small SEO Tools — men pou bizniss.

### Objektif Prensipal
1. Rale trafik SEO masif (Google)
2. Monetize via Google AdSense
3. Dirije vizitè yo sou **Kolonih.com** (digital marketplace Ayiti)
4. Bati lis email/WhatsApp (lead generation)

---

## 🛠️ STACK TEKNIK

```
Frontend:  HTML5 + CSS3 + JavaScript vanilla (PAS React, PAS Next.js, PAS framework)
Hosting:   Cloudflare Pages (gratis, bandwidth ilimite)
Repo:      GitHub
Deploy:    Push GitHub → Cloudflare Pages deploy otomatik
Domèn:     jenezbiznisou.online (Cloudflare DNS)
Analytics: Google Analytics 4 (gratis)
AdSense:   Google AdSense (apre lancement)
```

### ❌ ENTÈDI
- Pa itilize okenn framework (React, Vue, Angular, Next.js)
- Pa itilize npm/node pou production
- Pa itilize backend server (tout logic = client-side JavaScript)
- Pa itilize localStorage pou done sensitif

---

## 📁 ESTRIKTI DOSYE

```
jenezbiznissou/
├── index.html              ← Homepage (grid tout tools)
├── CLAUDE.md               ← Dokiman sa
├── assets/
│   ├── css/
│   │   ├── global.css      ← Styles global, variables, reset
│   │   └── components.css  ← Cards, buttons, forms, results
│   ├── js/
│   │   └── global.js       ← Functions partagé (copyResult, trackEvent...)
│   └── images/
│       └── logo.svg
├── tools/
│   ├── finance/
│   │   ├── calculateur-benefice.html
│   │   ├── calculateur-prix-vente.html
│   │   ├── calculateur-marge.html
│   │   ├── calculateur-seuil-rentabilite.html
│   │   ├── calculateur-salaire-net.html
│   │   ├── calculateur-tva.html
│   │   ├── convertisseur-devises.html
│   │   └── tracker-depenses.html
│   ├── documents/
│   │   ├── generateur-facture.html
│   │   ├── generateur-devis.html
│   │   ├── generateur-recu.html
│   │   ├── generateur-bon-commande.html
│   │   └── generateur-business-plan.html
│   ├── startup/
│   │   ├── generateur-nom-business.html
│   │   ├── generateur-idee-business.html
│   │   ├── generateur-slogan.html
│   │   └── generateur-bio-instagram.html
│   └── digital/
│       ├── generateur-email-alias.html
│       ├── generateur-mot-de-passe.html
│       └── generateur-qr-code.html
└── sitemap.xml
```

---

## 🎨 DESIGN SYSTEM

### Koulè
```css
--color-primary:     #1A1A2E;   /* Background fonse */
--color-secondary:   #16213E;   /* Cards fonse */
--color-accent:      #F5A623;   /* Gold — koulè aksyon */
--color-accent-hover:#E09015;   /* Gold foncé hover */
--color-white:       #FFFFFF;
--color-text:        #E8E8E8;   /* Tèks sou fonse */
--color-text-muted:  #9BA3AF;   /* Tèks segondè */
--color-success:     #10B981;   /* Vert rezilta */
--color-border:      #2D3748;   /* Bòd */
--color-card:        #1E2A3A;   /* Background card */
```

### Tipografi
```css
Font prensipal: 'Inter', sans-serif (Google Fonts — gratis)
H1: 2.5rem, bold
H2: 1.8rem, semibold
Body: 1rem, regular
Small: 0.875rem
```

### Konposant Estanda
- **Bouton Prensipal:** background gold (#F5A623), tèks nwa, border-radius 8px
- **Card Tool:** background #1E2A3A, bòd #2D3748, hover shadow gold
- **Input:** background #0F1923, bòd #2D3748, focus bòd gold
- **Rezilta:** background #0D2137, bòd goch 4px solid gold

### Prensip Design
- Mobile-first TOUJOU
- Rapid ak senplis
- Valè parèt imedyatman (rezilta vizib san scroll)
- Pa gen animasyon konplèks ki ralanti chajman

---

## 📄 TEMPLATE CHAK PAJI TOOL

Chak tool HTML dwe genyen **egzakteman** striktire sa:

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO OBLIGATWA -->
  <title>[Non Tool] Gratuit | JenezBiznissou</title>
  <meta name="description" content="[Description 150-160 karaktè, rich keyword]">
  <meta name="keywords" content="[keywords relevan]">
  <link rel="canonical" href="https://jenezbiznisou.online/tools/[kategori]/[non-tool].html">
  
  <!-- Open Graph -->
  <meta property="og:title" content="[Non Tool] — JenezBiznissou">
  <meta property="og:description" content="[Menm deskripsyon]">
  <meta property="og:url" content="https://jenezbiznisou.online/tools/[kategori]/[non-tool].html">
  
  <link rel="stylesheet" href="../../assets/css/global.css">
  <link rel="stylesheet" href="../../assets/css/components.css">
</head>
<body>

  <!-- HEADER -->
  <header>
    <nav>
      <a href="/" class="logo">JenezBiznissou</a>
      <span class="tagline">Tools Gratis pou Entrepreneurs</span>
    </nav>
  </header>

  <!-- BREADCRUMB (pou SEO) -->
  <nav class="breadcrumb">
    <a href="/">Akèy</a> › <a href="/tools/[kategori]/">[Kategori]</a> › [Non Tool]
  </nav>

  <!-- HERO TOOL -->
  <main>
    <section class="tool-hero">
      <h1>[Non Tool Konplè]</h1>
      <p class="tool-description">[1-2 fraz ki eksplike valè tool la]</p>
    </section>

    <!-- TOOL INTERFACE -->
    <section class="tool-container">
      <!-- Inputs -->
      <div class="tool-inputs">
        <!-- Fòmilè tool isit -->
      </div>
      
      <!-- Bouton Kalkile -->
      <button class="btn-primary" onclick="calculate()">
        [Aksyon] →
      </button>
      
      <!-- Rezilta -->
      <div class="tool-result" id="result" style="display:none;">
        <!-- Rezilta parèt isit -->
      </div>
    </section>

    <!-- CTA KOLONIH — OBLIGATWA sou chak paj -->
    <section class="cta-kolonih">
      <p>🛒 Prèt pou vann pwodui dijital ou? <a href="https://kolonih.com" target="_blank" rel="noopener"><strong>Lanse sou Kolonih.com →</strong></a></p>
    </section>

    <!-- WHATSAPP OPT-IN -->
    <section class="cta-whatsapp">
      <p>📱 Resevwa 1 tip business gratis chak semèn → 
        <a href="https://wa.me/[NUMERO]?text=Mwen+vle+tips+business+gratis" target="_blank">
          Rejwenn sou WhatsApp
        </a>
      </p>
    </section>

    <!-- CONTENU SEO (obligatwa anba chak tool) -->
    <section class="seo-content">
      <h2>Kijan [Non Tool] sa travay?</h2>
      <p>[Eksplikasyon 100-150 mo, keyword rich, lang: Kreyòl oswa Fransè]</p>
      
      <h2>Poukisa itilize [Non Tool] sa?</h2>
      <p>[Avantaj, 100 mo]</p>
    </section>

    <!-- TOOLS REKÒMANDE -->
    <section class="related-tools">
      <h3>Tools ou ka itilize tou:</h3>
      <!-- 3 tools ki asosye -->
    </section>
  </main>

  <!-- FOOTER -->
  <footer>
    <p>© 2025 JenezBiznissou — Kreye pa <a href="https://redprintsolution.com">REDPRINT SOLUTION</a></p>
    <p>
      <a href="https://kolonih.com">Kolonih.com</a> |
      <a href="/outils/">Tout Tools</a>
    </p>
  </footer>

  <script src="../../assets/js/global.js"></script>
  <script>
    // Logic tool la isit — vanilla JS sèlman
    function calculate() {
      // ...
    }
  </script>

</body>
</html>
```

---

## 🔢 20 TOOLS — ESPESIFIKASYON KONPLÈT

### 💰 FINANCE

#### 1. Calculateur Bénéfice
- **Input:** Prix vente, Coût de revient, Quantité
- **Output:** Bénéfice brut, Bénéfice net, % marge
- **URL:** `/tools/finance/calculateur-benefice.html`
- **Keyword SEO:** "calculateur benefice gratuit", "calculer profit business"

#### 2. Calculateur Prix de Vente
- **Input:** Coût achat, % marge souhaitée
- **Output:** Prix vente recommandé, bénéfice estimé
- **URL:** `/tools/finance/calculateur-prix-vente.html`

#### 3. Calculateur Marge
- **Input:** Prix vente, Coût
- **Output:** Marge brute (HTG + %), Marge nette
- **URL:** `/tools/finance/calculateur-marge.html`

#### 4. Calculateur Seuil de Rentabilité
- **Input:** Charges fixes, Charges variables/unité, Prix vente/unité
- **Output:** Seuil rentabilité (unités + HTG), Graphique simple
- **URL:** `/tools/finance/calculateur-seuil-rentabilite.html`

#### 5. Calculateur Salaire Net
- **Input:** Salaire brut, % cotisations (ONA, OFATMA default Ayiti)
- **Output:** Salaire net, détail déductions
- **URL:** `/tools/finance/calculateur-salaire-net.html`
- **NB:** Mete valè default pou Ayiti (ONA 6%, OFATMA 2%)

#### 6. Calculateur TVA/Taxes
- **Input:** Montant HT, Taux TVA (default 10% pou Ayiti)
- **Output:** TVA, Montant TTC
- **URL:** `/tools/finance/calculateur-tva.html`

#### 7. Convertisseur Devises
- **Input:** Montant, Devise source, Devise cible
- **Devises:** HTG, USD, EUR, CAD (dyaspora)
- **Output:** Montant converti
- **NB:** Taux manuèl (pa API) — update chak semèn, montre dat dènye update
- **URL:** `/tools/finance/convertisseur-devises.html`

#### 8. Tracker Dépenses
- **Input:** Catégorie, Montant, Description (ajoute plizyè)
- **Output:** Total, pie chart senp, liste
- **Storage:** localStorage (sesyon sèlman)
- **URL:** `/tools/finance/tracker-depenses.html`

---

### 📄 DOCUMENTS

#### 9. Générateur Facture PDF
- **Input:** Info biznis, Info kliyan, Lignes produits/services, Taux taxes
- **Output:** Facture formatted, bouton "Imprimer / Sove PDF" (window.print())
- **NB:** Itilize CSS @media print pou paj pwòp — pa bezwen library PDF
- **URL:** `/tools/documents/generateur-facture.html`

#### 10. Générateur Devis
- **Menm logik ak Facture** men titre = "DEVIS", pa gen "Payé"
- **URL:** `/tools/documents/generateur-devis.html`

#### 11. Générateur Reçu
- **Input:** Vendè, Achetè, Montant, Description, Date
- **Output:** Reçu printable
- **URL:** `/tools/documents/generateur-recu.html`

#### 12. Générateur Bon de Commande
- **Input:** Fournisseur, Achetè, Produits, Quantités, Prix
- **Output:** Bon de commande printable
- **URL:** `/tools/documents/generateur-bon-commande.html`

#### 13. Générateur Business Plan Simple
- **Input:** Formulaire guidé (Nom biznis, Produit/Service, Cible, Concurrents, Revenus prévus, Dépenses)
- **Output:** Business plan formaté, printable, downloadable kòm .txt
- **URL:** `/tools/documents/generateur-business-plan.html`

---

### 🚀 STARTUP / VIRAL

#### 14. Générateur Nom Business
- **Input:** Secteur aktivite, Mots-clés, Style (moderne/classique/créatif)
- **Output:** 10 suggestions non biznis + disponibilité konsèy
- **NB:** Logik JavaScript pur — listes kombinatwa (pa AI API)
- **URL:** `/tools/startup/generateur-nom-business.html`

#### 15. Générateur Idée Business
- **Input:** Budget disponible, Compétences, Secteur préféré
- **Output:** 5 idées biznis detayé (nom, description, marché cible, revenus potentiels)
- **NB:** Baz done JavaScript — 50+ idées kategorizé
- **URL:** `/tools/startup/generateur-idee-business.html`

#### 16. Générateur Slogan
- **Input:** Non biznis, Secteur, Valeurs (3 mo kle)
- **Output:** 8 slogans diferan (tonalite diferan: professionnel, fun, impactant...)
- **URL:** `/tools/startup/generateur-slogan.html`

#### 17. Générateur Bio Instagram
- **Input:** Non biznis, Secteur, Spécialité, CTA souhaité
- **Output:** 3 versions bio (150 karaktè max chak) + emojis
- **Bouton:** "Kopye" pou chak version
- **URL:** `/tools/startup/generateur-bio-instagram.html`

---

### ⚙️ DIGITAL

#### 18. Générateur Email Alias ⭐ (Tool Viral)
- **Input:** Email konplè, Objectif (business, marketing, commandes, ads...)
- **Output:**
  - Alias avec + : `jean+business@gmail.com`, `jean+commandes@gmail.com`
  - Alias avec point : `j.ean@gmail.com`, `je.an@gmail.com`
  - 10 kombinezyon total avec eksplakasyon chak
- **Bouton:** "Kopye" pou chak alias
- **URL:** `/tools/digital/generateur-email-alias.html`

#### 19. Générateur Mot de Passe Sécurisé
- **Input:** Longueur, Majuscules/Chiffres/Symboles (checkboxes)
- **Output:** Mot de passe + Score sécurité (Faible/Moyen/Fort/Très Fort)
- **Bouton:** "Kopye", "Générer Nouveau"
- **NB:** Crypto.getRandomValues() — PAS Math.random()
- **URL:** `/tools/digital/generateur-mot-de-passe.html`

#### 20. Générateur QR Code
- **Input:** URL, Texte, WhatsApp, Email
- **Output:** QR Code image (itilize library qrcode.js via CDN)
- **Bouton:** "Télécharger PNG"
- **Library:** `https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js`
- **URL:** `/tools/digital/generateur-qr-code.html`

---

## 🔗 ESTRATEJI CTA → KOLONIH

### Règ Obligatwa
**CHAK tool** dwe genyen yon CTA Kolonih — adapte ak kontèks tool la:

| Tool | CTA Kolonih |
|------|-------------|
| Tous tools Finance | "Vann ebooks finansyè ou sou Kolonih.com →" |
| Business Plan | "Prèt? Vann aksè biznis plan ou sou Kolonih.com →" |
| Générateur Nom/Slogan | "Lanse boutik dijital ou sou Kolonih.com →" |
| Tous tools Startup | "Mete biznis ou anliy sou Kolonih.com →" |
| Tools Digital | "Vann fòmasyon dijital ou sou Kolonih.com →" |

### Style CTA
```html
<div class="cta-kolonih">
  <span>🛒</span>
  <p>Prèt pou vann pwodui dijital ou?</p>
  <a href="https://kolonih.com" target="_blank" class="btn-kolonih">
    Lanse sou Kolonih.com →
  </a>
</div>
```

---

## 🌐 SEO — RÈG OBLIGATWA

### Pou Chak Paj
```html
<!-- Title: 50-60 karaktè, keyword an premye -->
<title>Calculateur Bénéfice Gratuit | JenezBiznissou</title>

<!-- Description: 150-160 karaktè -->
<meta name="description" content="Kalkile bénéfice biznis ou an segond. Tool gratuit, san inscription. Marge, profit net, chiffre d'affaires — tout nan yon sèl klik.">

<!-- H1: youn sèlman, keyword ladan -->
<h1>Calculateur Bénéfice Gratuit pour Entrepreneurs</h1>

<!-- Contenu SEO: 200+ mo anba chak tool -->
```

### Lang Kontèks
- Tools: **Fransè** (pi bon pou SEO Google.fr/Google.ht)
- Descriptions paj: **Fransè + Kreyòl** (bilingual)
- CTA WhatsApp: **Kreyòl**
- Footer: **Fransè**

---

## 📊 ANALYTICS

Ajoute nan `<head>` chak paj:
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Evènman pou track:
- `tool_used` — chak fwa kalkil fèt
- `cta_kolonih_click` — klik sou lyen Kolonih
- `whatsapp_click` — klik sou WhatsApp opt-in
- `result_copied` — bouton "kopye" klike

---

## ✅ CHECKLIST AVANT PUSH

Anvan chak push sou GitHub:
- [ ] Tool la fonksyone sou mobile (320px min)
- [ ] Meta title + description prezan
- [ ] H1 prezan ak keyword
- [ ] CTA Kolonih prezan
- [ ] Bouton "Kopye" travay
- [ ] Rezilta klè epi vizib
- [ ] Contenu SEO 200+ mo anba tool
- [ ] Chajman paj < 2 segond
- [ ] Pa gen konsòl errors

---

## 🚀 ORDRE DÉVELOPPEMENT

```
Fase 1 (Semèn 1):  Homepage + 5 tools Finance
Fase 2 (Semèn 2):  5 tools Documents
Fase 3 (Semèn 3):  4 tools Startup + 3 tools Digital
Fase 4 (Semèn 4):  SEO final, sitemap.xml, Google Analytics, AdSense apply
```

---

*Dokiman sa kreye pa REDPRINT SOLUTION — Pou pwojè JENEZBIZNISSOU*  
*Dènye update: 2025*
