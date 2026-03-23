import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage';

test('Register new user', async ({ page }) => {

  const registerPage = new RegisterPage(page);

  await page.goto('https://automationexercise.com/');

  // Generate unique email every time
  const email = `test${Date.now()}@gmail.com`;

  // Step 1: Signup
  await registerPage.registerUser('Manohar', email);

  // Step 2: Fill form
  await registerPage.fillAccountDetails();

  // Step 3: Verify success
  await expect(registerPage.successMsg).toBeVisible();

});