import { test, expect } from '@playwright/test';

test.describe('Критичний шлях користувача', () => {
  test('Успішне додавання нового дедлайну', async ({ page }) => {
    await page.goto('https://www.google.com'); 

    // Оновлений унікальний локатор (тільки textarea)
    const searchBar = page.locator('textarea[name="q"]');
    await expect(searchBar).toBeVisible();

    await searchBar.fill('Дедлайн: Лабораторна 2');
    await expect(searchBar).toHaveValue('Дедлайн: Лабораторна 2');
    
  });
});