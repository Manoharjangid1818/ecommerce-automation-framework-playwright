export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByRole('link', { name: 'Signup / Login' });
    this.email = page.locator('input[data-qa="login-email"]');
    this.password = page.locator('input[data-qa="login-password"]');
    this.loginBtn = page.locator('button[data-qa="login-button"]');
  }

  async login(email, password) {
    await this.loginLink.click();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();
  }
}