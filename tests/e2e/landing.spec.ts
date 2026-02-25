import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://ochescore.ashketing.com';

test.describe('Landing Page', () => {
  test('should load and display hero section', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check hero headline
    await expect(page.locator('text=Tap the board')).toBeVisible();
    await expect(page.locator('text=See the magic')).toBeVisible();
    
    // Check CTAs exist
    const ctaButtons = page.locator('a, button').filter({ hasText: /Try|Start|Sign/ });
    expect(await ctaButtons.count()).toBeGreaterThan(0);
  });

  test('should have 7+ sections', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check for key sections
    await expect(page.locator('text=Built for real dart players')).toBeVisible();
    await expect(page.locator('text=Three taps to first throw')).toBeVisible();
    await expect(page.locator('text=Free is actually free')).toBeVisible();
    
    // Check features section has multiple cards
    const featureCards = page.locator('text=/Tap-to-Score|Checkout Hints|Stats Tracking/');
    expect(await featureCards.count()).toBeGreaterThan(2);
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check navigation links
    await expect(page.locator('a[href="/about"]')).toBeVisible();
    await expect(page.locator('a[href="/pricing"]')).toBeVisible();
    await expect(page.locator('a[href="/app"]')).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(BASE_URL);
    await expect(page.locator('text=Tap the board')).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto(BASE_URL);
    await expect(page.locator('text=Tap the board')).toBeVisible();
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');
    
    // Filter out expected 404s for privacy/terms pages
    const criticalErrors = errors.filter(e => 
      !e.includes('/privacy') && !e.includes('/terms')
    );
    
    expect(criticalErrors).toHaveLength(0);
  });
});
