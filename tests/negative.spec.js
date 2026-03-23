import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('Negative Login Test', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://automationexercise.com/');
  await loginPage.login('wrong@gmail.com', 'wrong123');

  await expect(page.locator('.login-form')).toContainText('Your email or password is incorrect');
}, 60000);