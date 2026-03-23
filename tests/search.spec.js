import { test, expect } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';

test('Search Functionality', async ({ page }) => {
  const productsPage = new ProductsPage(page);

  await page.goto('https://automationexercise.com/');
  await productsPage.searchProduct('Blue Top');

  await expect(page.locator('body')).toContainText('Blue Top');
}, 60000);