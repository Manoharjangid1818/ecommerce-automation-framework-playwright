import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Cart Validation - Add & Remove Product', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await page.goto('https://automationexercise.com/');

  await loginPage.login('manoharrajotiya@gmail.com', '6353843900');

  await productsPage.goToProducts();
  await productsPage.addFirstProductToCart();

  await cartPage.openCart();
  await cartPage.verifyFirstProductName('Blue Top'); // replace with correct product name
  await cartPage.verifyFirstProductPrice('$'); // example, verify price symbol
  await cartPage.removeFirstProduct();
}, 60000);