# Deployment & DevOps Guide: GitHub & Netlify

This document outlines the complete, production-grade procedures for pushing the **Michele Schiano Moriello — Interior Design Studio** codebase to **GitHub** and deploying it to **Netlify** with continuous integration, automated testing, custom domain routing, and strict security headers.

---

## 1. Project Architecture & Audit Summary

The website is engineered as a zero-JS runtime, static-first web application designed for maximum performance, strict GDPR compliance, and accessibility.

### Technology Stack
- **Framework:** [Astro 5+](https://astro.build/) in `static` output mode (`dist/`).
- **Language:** TypeScript in strict configuration (`tsconfig.json`).
- **Image Pipeline:** Sharp engine converting high-resolution source photography to responsive, multi-size WebP formats with intrinsic aspect ratio definitions.
- **Typography:** Self-hosted `Space Grotesk` (Sans-serif) and `Cormorant Garamond` (Serif) served locally as WOFF2 (no external CDN calls to Google Fonts).
- **Quality Assurance:** Playwright E2E browser automation + `@axe-core/playwright` verifying WCAG 2.2 Level AA compliance.
- **Audit Benchmarks:** Google Lighthouse scores:
  - **Desktop:** Performance 100 | Accessibility 100 | Best Practices 96 | SEO 100 (LCP: 0.7s, CLS: 0, TBT: 0ms)
  - **Mobile:** Performance 90 | Accessibility 100 | Best Practices 96 | SEO 100 (CLS: 0, TBT: 0ms)

---

## 2. Pre-Push Verification

Before initializing or updating Git branches, execute local validation to guarantee zero regressions.

```bash
# 1. Clean build verification
npm run build

# 2. End-to-end and accessibility test suite
npm run test

# 3. (Optional) Run Lighthouse performance audit
npm run audit:lighthouse
```

All 10 test specs and the 4 static routes (`/index.html`, `/privacy-policy/index.html`, `/cookie-policy/index.html`, `/404.html`) must complete with code `0`.

---

## 3. GitHub Setup & Code Publication

### Step 3.1: Initialize Git Repository
If Git has not yet been initialized in your local directory, execute:

```bash
cd /path/to/MicheleSchianoMoriello

# Initialize repository
git init -b main

# Stage all project files (verifying .gitignore excludes dist/ and node_modules/)
git add .

# Create initial commit
git commit -m "feat: initial commit of Michele Schiano Moriello portfolio with Astro 5, WCAG 2.2 AA and Netlify config"
```

### Step 3.2: Create a New Repository on GitHub
1. Log in to your [GitHub Account](https://github.com/).
2. Click **New Repository** (or visit `https://github.com/new`).
3. Set the repository name (e.g., `michele-schiano-moriello` or `micheleschianomoriello`).
4. Choose **Public** or **Private**.
5. **Do NOT** initialize with a `README`, `.gitignore`, or license (these already exist locally).
6. Click **Create repository**.

### Step 3.3: Link Remote and Push

#### Option A: Using SSH (Recommended)
```bash
git remote add origin git@github.com:<YOUR_GITHUB_USERNAME>/micheleschianomoriello.git
git branch -M main
git push -u origin main
```

#### Option B: Using HTTPS
```bash
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/micheleschianomoriello.git
git branch -M main
git push -u origin main
```

#### Option C: Using GitHub CLI (`gh`)
If you have the GitHub CLI installed and authenticated:
```bash
gh repo create micheleschianomoriello --public --source=. --remote=origin --push
```

---

## 4. Continuous Integration (GitHub Actions)

A pre-configured CI pipeline is located in `.github/workflows/ci.yml`.

Whenever code is pushed to `main` or a Pull Request is submitted, GitHub Actions will:
1. Check out the repository.
2. Set up Node.js 24.x with npm caching.
3. Install dependencies via `npm ci`.
4. Install Playwright browser binaries and system libraries (`chromium`).
5. Execute `npm run build` to verify clean static site generation.
6. Run `npm test` covering accessibility, responsive layouts, lightbox interactivity, and navigation.

---

## 5. Netlify Deployment

We recommend **Continuous Deployment via GitHub**, which automatically builds and redeploys the site on every push to the `main` branch, alongside automatic Deploy Previews for pull requests.

### Method A: Automated Continuous Deployment (Recommended)

1. **Log in to Netlify:**
   Navigate to [app.netlify.com](https://app.netlify.com/) and authenticate (using your GitHub account).

2. **Import Repository:**
   - Click **Add new site** > **Import an existing project**.
   - Select **GitHub** as your Git provider.
   - Authorize Netlify to access your repository: select `micheleschianomoriello`.

3. **Verify Build Configuration:**
   Netlify will automatically detect the settings from `netlify.toml`:
   - **Branch to deploy:** `main`
   - **Base directory:** *(leave empty / root)*
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

4. **Deploy Site:**
   - Click **Deploy micheleschianomoriello**.
   - Netlify will pull the code, execute `npm run build`, process the Sharp image assets, and publish to a unique URL (e.g., `https://michele-schiano-moriello.netlify.app`).

---

### Method B: Manual Deployment via Netlify CLI

If you prefer to deploy directly from your local terminal without Git integration:

1. **Install Netlify CLI globally:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Authenticate with Netlify:**
   ```bash
   netlify login
   ```

3. **Build the production bundle:**
   ```bash
   npm run build
   ```

4. **Deploy preview:**
   ```bash
   netlify deploy --dir=dist
   ```

5. **Deploy directly to production:**
   ```bash
   netlify deploy --dir=dist --prod
   ```

---

## 6. Custom Domain & DNS Setup (`micheleschianomoriello.it`)

The site is pre-configured with canonical URLs pointing to `https://micheleschianomoriello.it`.

### Step 6.1: Add Custom Domain in Netlify
1. In the Netlify dashboard, go to **Site configuration** > **Domain management**.
2. Click **Add a domain**.
3. Enter `micheleschianomoriello.it` and click **Verify**.
4. Confirm by clicking **Add domain**. Both `micheleschianomoriello.it` and `www.micheleschianomoriello.it` will be registered.
5. Set `https://micheleschianomoriello.it` as the **Primary domain** (recommended, matching `site` in `astro.config.mjs`).

### Step 6.2: Configure DNS Records at Domain Registrar
Access the DNS management panel of your domain registrar (e.g., Register.it, Aruba, Namecheap, Cloudflare, OVH):

| Type | Name / Host | Target / Value | TTL | Note |
|---|---|---|---|---|
| **A** | `@` (or leave blank) | `75.2.60.5` | 3600 (or Auto) | Netlify Apex Load Balancer IP |
| **CNAME** | `www` | `<your-site-name>.netlify.app.` | 3600 (or Auto) | Points www to Netlify subdomain |

*(Alternatively, you can delegate nameservers directly to Netlify DNS if you prefer Netlify to manage all DNS zones).*

### Step 6.3: Provision Automated SSL/TLS (HTTPS)
1. In Netlify's **Domain management** screen, scroll down to **HTTPS**.
2. Once DNS propagation is complete (typically 10 minutes to a few hours), Netlify automatically provisions a free **Let's Encrypt SSL/TLS Certificate**.
3. If not triggered automatically, click **Verify DNS configuration** and then **Provision certificate**.
4. Enable **Force HTTPS** to redirect all insecure HTTP traffic to HTTPS.

---

## 7. Performance & Security Headers Verification

The project includes a root [netlify.toml](file:///home/alex/Projects/MicheleSchianoMoriello/netlify.toml) file enforcing strict production headers:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "24"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=(), payment=()"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self';"

[[headers]]
  for = "/_astro/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/fonts/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### Key Architectural Benefits:
1. **Immutable Asset Caching:** All hashed scripts, bundled CSS, self-hosted WOFF2 fonts, and gallery images are cached by CDN edge nodes for 1 year (`max-age=31536000, immutable`), minimizing server latency.
2. **GDPR Integrity:** Because no third-party CDNs (such as Google Fonts or external trackers) are referenced, no end-user IP addresses are transferred outside the secure hosting infrastructure.
3. **Automated 404 Routing:** Netlify maps missing URLs directly to `/404.html`, rendering the bespoke architectural error page.

---

## 8. Ongoing Maintenance & Workflow

### Editing Site Data
All texts, review entries, studio address details, phone numbers, and service descriptions are decoupled from markup in:
👉 `src/data/siteData.ts`

### Typical Update Flow
```bash
# 1. Create a feature branch
git checkout -b update/content-refresh

# 2. Make your edits in src/data/siteData.ts or components

# 3. Verify locally
npm run build && npm test

# 4. Commit and push
git commit -am "chore: update studio services and address"
git push origin update/content-refresh

# 5. Open Pull Request on GitHub
# Netlify will automatically generate a Deploy Preview URL for client review.

# 6. Merge to 'main'
# Netlify automatically triggers production build and goes live in ~30 seconds.
```
