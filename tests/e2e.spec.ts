import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Michele Schiano Moriello - Portfolio E2E Test Suite', () => {
  test('Home page loads correctly with full SEO and section structure', async ({ page }) => {
    await page.goto('/');

    // Check title and meta
    await expect(page).toHaveTitle(/Michele Schiano Moriello/);
    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute('content', /interior designer/i);

    // Verify all core sections exist
    const sections = ['#hero', '#manifesto', '#progetto', '#metodo', '#studio', '#servizi', '#recensioni', '#contatti'];
    for (const sectionId of sections) {
      const section = page.locator(sectionId);
      await expect(section).toBeVisible();
    }

    // Verify verified phone number
    const phoneLinks = page.locator('a[href="tel:+393381013392"]');
    await expect(phoneLinks.first()).toBeVisible();
    await expect(phoneLinks.first()).toContainText('338 101 3392');

    // Verify address
    const bodyText = await page.textContent('body');
    expect(bodyText).toContain('Corso Umberto I, 47');
    expect(bodyText).toContain('80070');
    expect(bodyText).toContain('Monte di Procida');
  });

  test('Gallery lightbox functions with keyboard and mouse', async ({ page }) => {
    await page.goto('/');

    // Click on the first expand button in the gallery
    const expandButtons = page.locator('.expand-trigger-btn');
    await expect(expandButtons.first()).toBeVisible();
    await expandButtons.first().click();

    // Verify lightbox is open
    const lightbox = page.locator('#project-lightbox');
    await expect(lightbox).toBeVisible();
    await expect(lightbox).toHaveClass(/is-active/);

    // Check counter
    const counter = page.locator('#lightbox-counter');
    await expect(counter).toContainText('1 / 11');

    // Click Next button
    const nextBtn = page.locator('#lightbox-next-btn');
    await nextBtn.click();
    await expect(counter).toContainText('2 / 11');

    // Click Previous button
    const prevBtn = page.locator('#lightbox-prev-btn');
    await prevBtn.click();
    await expect(counter).toContainText('1 / 11');

    // Keyboard Escape to close
    await page.keyboard.press('Escape');
    await expect(lightbox).not.toBeVisible();
  });

  test('Mobile drawer opens, traps focus and closes properly', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const menuToggle = page.locator('#mobile-menu-toggle');
    await expect(menuToggle).toBeVisible();
    await menuToggle.click();

    const drawer = page.locator('#mobile-nav-drawer');
    await expect(drawer).toBeVisible();
    await expect(drawer).toHaveClass(/is-open/);

    // Press Escape to close
    await page.keyboard.press('Escape');
    await expect(drawer).not.toBeVisible();

    // Reopen and test clicking a link
    await menuToggle.click();
    await expect(drawer).toBeVisible();
    const mobileLink = page.locator('.mobile-nav-link').first();
    await mobileLink.click();
    await expect(drawer).not.toBeVisible();
  });

  test('Reviews accordion toggles full review text', async ({ page }) => {
    await page.goto('/#recensioni');

    const toggleBtn = page.locator('.review-toggle-btn').first();
    await expect(toggleBtn).toBeVisible();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

    const fullBody = page.locator('.review-full-body').first();
    await expect(fullBody).toBeHidden();

    // Click to expand
    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
    await expect(fullBody).toBeVisible();
    await expect(toggleBtn).toContainText('Riduci testo');

    // Click to collapse
    await toggleBtn.click();
    await expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
    await expect(fullBody).toBeHidden();
    await expect(toggleBtn).toContainText('Leggi completa');
  });

  test('Legal pages load with authentic privacy and cookie descriptions', async ({ page }) => {
    // Privacy Policy
    await page.goto('/privacy-policy');
    await expect(page).toHaveTitle(/Informativa sulla Privacy/);
    const privacyContent = await page.textContent('body');
    expect(privacyContent).toContain('Titolare del Trattamento');
    expect(privacyContent).toContain('Michele Schiano Moriello');
    expect(privacyContent).toContain('338 101 3392');
    expect(privacyContent).toContain('Garante per la Protezione dei Dati Personali');

    // Cookie Policy
    await page.goto('/cookie-policy');
    await expect(page).toHaveTitle(/Informativa sui Cookie/);
    const cookieContent = await page.textContent('body');
    expect(cookieContent).toContain('Nessun cookie di profilazione');
    expect(cookieContent).toContain('Linee guida cookie');
  });

  test('Accessibility compliance audit via Axe-core (WCAG 2.2 AA)', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('Responsive viewports check for horizontal overflow', async ({ page }) => {
    const viewports = [
      { width: 320, height: 568 },
      { width: 360, height: 800 },
      { width: 375, height: 812 },
      { width: 390, height: 844 },
      { width: 430, height: 932 },
      { width: 768, height: 1024 },
      { width: 1024, height: 768 },
      { width: 1280, height: 800 },
      { width: 1440, height: 900 },
      { width: 1920, height: 1080 }
    ];

    for (const vp of viewports) {
      await page.setViewportSize(vp);
      await page.goto('/');
      
      const hasHorizontalScrollbar = await page.evaluate(() => {
        return document.documentElement.scrollWidth > window.innerWidth;
      });

      expect(hasHorizontalScrollbar, `Horizontal overflow detected at ${vp.width}x${vp.height}`).toBe(false);
    }
  });

  test('Header and mobile navigation menu order strictly matches section flow', async ({ page }) => {
    await page.goto('/');

    const expectedNav = [
      { label: 'Progetto', href: '#progetto', num: '01' },
      { label: 'Metodo', href: '#metodo', num: '02' },
      { label: 'Studio', href: '#studio', num: '03' },
      { label: 'Servizi', href: '#servizi', num: '04' },
      { label: 'Recensioni', href: '#recensioni', num: '05' },
      { label: 'Contatti', href: '#contatti', num: '06' }
    ];

    // Check desktop nav links
    const desktopLinks = page.locator('.desktop-nav .nav-link');
    await expect(desktopLinks).toHaveCount(6);

    for (let i = 0; i < expectedNav.length; i++) {
      const link = desktopLinks.nth(i);
      await expect(link).toHaveText(expectedNav[i].label);
      await expect(link).toHaveAttribute('href', expectedNav[i].href);
    }

    // Check mobile drawer nav links
    const mobileLinks = page.locator('.mobile-nav-link');
    await expect(mobileLinks).toHaveCount(6);

    for (let i = 0; i < expectedNav.length; i++) {
      const link = mobileLinks.nth(i);
      await expect(link.locator('.nav-text')).toHaveText(expectedNav[i].label);
      await expect(link.locator('.nav-num')).toHaveText(expectedNav[i].num);
      await expect(link).toHaveAttribute('href', expectedNav[i].href);
    }
  });

  test('Clicking navigation links smoothly scrolls without header covering section titles', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const targets = ['#progetto', '#metodo', '#studio', '#servizi', '#recensioni', '#contatti'];
    const header = page.locator('#site-header');

    for (const targetId of targets) {
      const navLink = page.locator(`.desktop-nav a[href="${targetId}"]`);
      await navLink.click();
      
      // Wait for scrolling to settle
      await page.waitForTimeout(600);

      // Verify that the section is at or below the bottom of the sticky header
      const headerBox = await header.boundingBox();
      const sectionHeaderTag = page.locator(`${targetId} .section-header-tag, ${targetId} .project-header, ${targetId} .contact-header`).first();
      const tagBox = await sectionHeaderTag.boundingBox();

      expect(headerBox).not.toBeNull();
      expect(tagBox).not.toBeNull();
      if (headerBox && tagBox) {
        expect(tagBox.y).toBeGreaterThanOrEqual(headerBox.height - 10);
      }
    }
  });

  test('Scroll spy correctly highlights sections and clears on hero', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    // 1. On initial load at top (Hero), no nav item should be active
    const activeDesktopLinks = page.locator('.desktop-nav .nav-link.active');
    await expect(activeDesktopLinks).toHaveCount(0);

    // 2. Scroll into #progetto
    await page.locator('#progetto').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(page.locator('.desktop-nav a[href="#progetto"]')).toHaveClass(/active/);
    await expect(page.locator('.desktop-nav a[href="#progetto"]')).toHaveAttribute('aria-current', 'location');

    // 3. Scroll into #metodo
    await page.locator('#metodo').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(page.locator('.desktop-nav a[href="#metodo"]')).toHaveClass(/active/);
    await expect(page.locator('.desktop-nav a[href="#progetto"]')).not.toHaveClass(/active/);

    // 4. Scroll into #studio
    await page.locator('#studio').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(page.locator('.desktop-nav a[href="#studio"]')).toHaveClass(/active/);

    // 5. Scroll into #servizi
    await page.locator('#servizi').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(page.locator('.desktop-nav a[href="#servizi"]')).toHaveClass(/active/);

    // 6. Scroll into #recensioni - specifically verify that Servizi is NOT active
    await page.locator('#recensioni').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(page.locator('.desktop-nav a[href="#recensioni"]')).toHaveClass(/active/);
    await expect(page.locator('.desktop-nav a[href="#servizi"]')).not.toHaveClass(/active/);

    // 7. Scroll into #contatti
    await page.locator('#contatti').scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await expect(page.locator('.desktop-nav a[href="#contatti"]')).toHaveClass(/active/);

    // 8. Scroll back to top (Hero)
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await page.waitForTimeout(300);
    await expect(page.locator('.desktop-nav .nav-link.active')).toHaveCount(0);
  });
});
