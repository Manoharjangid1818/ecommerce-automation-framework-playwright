import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';

test('Product Flow - View & Add to Cart', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await page.goto('https://automationexercise.com/', { waitUntil: 'domcontentloaded' });

  // Login
  await loginPage.login('manoharrajotiya@gmail.com', '6353843900');

  // Go to products and view details
  await productsPage.goToProducts();
  await productsPage.viewFirstProductDetails();

  // Add first product to cart
  await productsPage.addFirstProductToCart();

  // Go to cart page
  await productsPage.goToCart();

  // Verify cart has product
  await expect(page.locator('.cart_info')).toBeVisible();
}, 60000);  // 60s timeout