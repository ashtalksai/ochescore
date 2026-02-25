import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://ochescore.ashketing.com';

test.describe('Responsive Design', () => {
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1280, height: 720 },
    { name: 'Large Desktop', width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    test(`landing page should be usable on ${viewport.name} (${viewport.width}x${viewport.height})`, async ({ page }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto(BASE_URL);
      
      // Hero should be visible
      await expect(page.locator('text=Tap the board').first()).toBeVisible();
      
      // At least one CTA should be visible without scrolling
      const cta = page.locator('a, button').filter({ hasText: /Try|Start/ }).first();
      const isVisible = await cta.isVisible();
      expect(isVisible).toBe(true);
      
      // Check no horizontal scroll
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      expect(bodyWidth).toBeLessThanOrEqual(viewport.width + 20); // Allow 20px tolerance
    });
  }

  test('navigation should work on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    
    // Check if hamburger menu exists on mobile
    const mobileMenu = page.locator('button[aria-label*="menu" i]').or(
      page.locator('button').filter({ hasText: /menu/i })
    );
    
    if (await mobileMenu.count() > 0) {
      await mobileMenu.first().click();
      await page.waitForTimeout(300);
    }
    
    // Navigation links should be accessible
    await expect(page.locator('a[href="/app"]')).toBeVisible({ timeout: 3000 });
  });

  test('game interface should be usable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/app`);
    
    // Game mode cards should stack vertically on mobile
    await expect(page.locator('text=X01 Games')).toBeVisible();
    await expect(page.locator('text=Round-the-Clock')).toBeVisible();
    
    // Cards should be tappable
    const x01Card = page.locator('text=X01 Games').locator('..');
    const boundingBox = await x01Card.boundingBox();
    expect(boundingBox).toBeTruthy();
    if (boundingBox) {
      expect(boundingBox.height).toBeGreaterThan(44); // Minimum tap target size
    }
  });

  test('forms should be usable on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE_URL}/signup`);
    
    // Form inputs should be large enough
    const emailInput = page.locator('input[type="email"]');
    const inputBox = await emailInput.boundingBox();
    expect(inputBox).toBeTruthy();
    if (inputBox) {
      expect(inputBox.height).toBeGreaterThan(40); // Comfortable input height
    }
    
    // Form should fit viewport
    const formWidth = await emailInput.evaluate(el => el.offsetWidth);
    expect(formWidth).toBeLessThan(375);
  });
});
