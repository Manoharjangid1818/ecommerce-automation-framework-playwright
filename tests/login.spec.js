import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('login test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('https://automationexercise.com/');

  await loginPage.login('manoharrajotiya@gmail.com', '6353843900');

  await expect(page.getByText('Logged in as')).toBeVisible();

});