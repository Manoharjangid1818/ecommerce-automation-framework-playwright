export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('a[href="/view_cart"]');
    this.firstProductName = page.locator('.cart_info .product-name').first();
    this.firstProductPrice = page.locator('.cart_info .cart_price').first();
    this.removeBtn = page.locator('a.cart_quantity_delete').first();
    this.checkoutBtn = page.locator('a.checkout');
  }

  async openCart() {
    await this.cartLink.click();
  }

  async verifyFirstProductName(expectedName) {
    await expect(this.firstProductName).toHaveText(expectedName);
  }

  async verifyFirstProductPrice(expectedPrice) {
    await expect(this.firstProductPrice).toContainText(expectedPrice);
  }

  async removeFirstProduct() {
    await this.removeBtn.click();
  }

  async proceedToCheckout() {
    await this.checkoutBtn.click();
  }

  async placeOrder(firstName, lastName, address, city, state, zipcode, country) {
    await this.page.fill('input[name="name"]', firstName);
    await this.page.fill('input[name="last_name"]', lastName);
    await this.page.fill('input[name="address"]', address);
    await this.page.fill('input[name="city"]', city);
    await this.page.fill('input[name="state"]', state);
    await this.page.fill('input[name="zipcode"]', zipcode);
    await this.page.selectOption('select[name="country"]', { label: country });
    await this.page.click('button[type="submit"]');
  }
}