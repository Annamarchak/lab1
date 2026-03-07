import { test, expect } from '@playwright/test';

test('перевірка роботи інтерфейсу', async ({ page }) => {
  await page.goto('https://google.com'); 
  
  // Оновлений унікальний локатор
  const searchInput = page.locator('textarea[name="q"]');
  await expect(searchInput).toBeVisible();
  
});