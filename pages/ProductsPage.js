export class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productsLink = page.getByRole('link', { name: 'Products' });
    this.firstProduct = page.locator('.product-image-wrapper').first();
    this.addToCartBtn = this.firstProduct.locator('a.add-to-cart');
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
  }

  async goToProducts() {
    await this.productsLink.click();
    // Wait until first product is visible
    await this.page.waitForSelector('.product-image-wrapper', { timeout: 10000 });
  }

  async viewFirstProductDetails() {
    await this.firstProduct.locator('a[href*="product_details"]').click();
  }

  async addFirstProductToCart() {
    // Hover to make the Add to Cart button visible
    await this.firstProduct.hover();

    // Wait for button to be visible before clicking
    await this.addToCartBtn.waitFor({ state: 'visible', timeout: 10000 });
    await this.addToCartBtn.click();

    // Wait for “Added to cart” popup
    await this.page.waitForSelector('#cartModal', { timeout: 5000 }).catch(() => {});
  }

  async goToCart() {
    await this.viewCartLink.click();
    // Wait until cart info is visible
    await this.page.waitForSelector('.cart_info', { timeout: 10000 });
  }
}