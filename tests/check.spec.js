const { test, expect } = require('@playwright/test');

test('Перевірка доступності головної сторінки', async ({ page }) => {
  await page.goto('https://www.google.com');
  
  // Виправлений унікальний локатор
  const searchInput = page.locator('textarea[name="q"]');
  
  await expect(searchInput).toBeVisible();
  await searchInput.fill('Playwright Test');
  await expect(searchInput).toHaveValue('Playwright Test');
});