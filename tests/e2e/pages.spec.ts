import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://ochescore.ashketing.com';

test.describe('All Pages Load', () => {
  const pages = [
    { path: '/', title: 'Tap the board' },
    { path: '/about', title: 'Our Mission' },
    { path: '/pricing', title: 'Simple Pricing' },
    { path: '/signup', title: 'Create your account' },
    { path: '/login', title: 'Welcome back' },
    { path: '/app', title: 'Select Game Mode' },
    { path: '/deck', title: 'Score like a pro' },
  ];

  for (const { path, title } of pages) {
    test(`${path} should load without errors`, async ({ page }) => {
      const response = await page.goto(`${BASE_URL}${path}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator(`text=${title}`).first()).toBeVisible({ timeout: 10000 });
    });
  }

  test('all pages should have proper meta tags', async ({ page }) => {
    await page.goto(BASE_URL);
    
    // Check title
    expect(await page.title()).toContain('OcheScore');
    
    // Check meta description exists
    const metaDescription = page.locator('meta[name="description"]');
    expect(await metaDescription.count()).toBeGreaterThan(0);
  });

  test('pages should load within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;
    
    // Should load in less than 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });
});
