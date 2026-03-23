import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';

test('Checkout Flow', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  await page.goto('https://automationexercise.com/');

  await loginPage.login('manoharrajotiya@gmail.com', '6353843900');
  await productsPage.goToProducts();
  await productsPage.addFirstProductToCart();
  await cartPage.openCart();

  await cartPage.proceedToCheckout();
  await cartPage.placeOrder('Manohar', 'Rajotiya', '123 Street', 'City', 'State', '12345', 'India');
}, 60000);