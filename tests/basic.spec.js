import { test, expect } from '@playwright/test';

test('open website', async ({ page }) => {
  await page.goto('https://automationexercise.com/');
  await expect(page).toHaveTitle(/Automation Exercise/);
});