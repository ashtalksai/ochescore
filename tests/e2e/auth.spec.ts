import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://ochescore.ashketing.com';

test.describe('Authentication Pages', () => {
  test('signup page should load and display form', async ({ page }) => {
    await page.goto(`${BASE_URL}/signup`);
    
    // Check page elements
    await expect(page.locator('text=Create your account')).toBeVisible();
    await expect(page.locator('input[type="text"]').first()).toBeVisible(); // Name field
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    
    // Check link to login
    await expect(page.locator('text=Already have an account')).toBeVisible();
  });

  test('login page should load and display form', async ({ page }) => {
    await page.goto(`${BASE_URL}/login`);
    
    // Check page elements
    await expect(page.locator('text=Welcome back')).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator('input[type="password"]')).toBeVisible();
    
    // Check link to signup
    await expect(page.locator('text=Don\'t have an account')).toBeVisible();
  });

  test('should navigate between login and signup', async ({ page }) => {
    // Start at signup
    await page.goto(`${BASE_URL}/signup`);
    await expect(page.locator('text=Create your account')).toBeVisible();
    
    // Click link to login
    await page.click('text=Sign in');
    await expect(page.locator('text=Welcome back')).toBeVisible();
    
    // Click link back to signup
    await page.click('text=Sign up');
    await expect(page.locator('text=Create your account')).toBeVisible();
  });

  test('form validation should work', async ({ page }) => {
    await page.goto(`${BASE_URL}/signup`);
    
    // Try to submit empty form (HTML5 validation)
    const submitButton = page.locator('button[type="submit"]').first();
    await submitButton.click();
    
    // Email field should be invalid
    const emailInput = page.locator('input[type="email"]');
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.validity.valid);
    expect(isInvalid).toBe(true);
  });
});
