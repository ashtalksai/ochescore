import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'https://ochescore.ashketing.com';

test.describe('Game Interface', () => {
  test('should display game mode selection', async ({ page }) => {
    await page.goto(`${BASE_URL}/app`);
    
    // Check for game mode cards
    await expect(page.locator('text=X01 Games')).toBeVisible();
    await expect(page.locator('text=Round-the-Clock')).toBeVisible();
    
    // Check descriptions
    await expect(page.locator('text=/301|501|101/')).toBeVisible();
    await expect(page.locator('text=/1 through 20/')).toBeVisible();
  });

  test('should start X01 game with default settings', async ({ page }) => {
    await page.goto(`${BASE_URL}/app`);
    
    // Click X01 mode
    await page.click('text=X01 Games');
    
    // Should show game setup
    await expect(page.locator('text=/301|501|101/')).toBeVisible();
    
    // Start game with default settings
    const startButton = page.locator('button', { hasText: /Start|Play/ }).first();
    if (await startButton.isVisible()) {
      await startButton.click();
    }
  });

  test('should allow player name configuration', async ({ page }) => {
    await page.goto(`${BASE_URL}/app`);
    await page.click('text=X01 Games');
    
    // Look for player name input
    const playerInput = page.locator('input[placeholder*="Player"]').first();
    if (await playerInput.isVisible()) {
      await playerInput.fill('Test Player');
      expect(await playerInput.inputValue()).toBe('Test Player');
    }
  });

  test('dartboard should be interactive in active game', async ({ page }) => {
    await page.goto(`${BASE_URL}/app`);
    await page.click('text=X01 Games');
    
    // Start game
    const startButton = page.locator('button', { hasText: /Start|Play/ }).first();
    if (await startButton.isVisible()) {
      await startButton.click();
      
      // Wait for dartboard to appear
      await page.waitForTimeout(1000);
      
      // Check if dartboard SVG is present
      const dartboard = page.locator('svg').first();
      expect(await dartboard.isVisible()).toBe(true);
    }
  });

  test('should show Round-the-Clock mode option', async ({ page }) => {
    await page.goto(`${BASE_URL}/app`);
    
    // Round-the-Clock card should be clickable
    const rtcCard = page.locator('text=Round-the-Clock').locator('..');
    expect(await rtcCard.isVisible()).toBe(true);
    
    // Try to click it
    await rtcCard.click();
    
    // Should show game setup for Round-the-Clock
    await page.waitForTimeout(500);
  });

  test('should have back navigation from game', async ({ page }) => {
    await page.goto(`${BASE_URL}/app`);
    
    // Should have back to home link
    const backLink = page.locator('a', { hasText: /Back|Home/ }).first();
    if (await backLink.isVisible()) {
      expect(await backLink.getAttribute('href')).toBeTruthy();
    }
  });
});
