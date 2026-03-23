export class RegisterPage {
  constructor(page) {
    this.page = page;

    // Signup section
    this.signupLink = page.getByRole('link', { name: 'Signup / Login' });
    this.nameInput = page.locator('input[data-qa="signup-name"]');
    this.emailInput = page.locator('input[data-qa="signup-email"]');
    this.signupBtn = page.locator('button[data-qa="signup-button"]');

    // Account info
    this.titleMr = page.locator('#id_gender1');
    this.password = page.locator('#password');
    this.days = page.locator('#days');
    this.months = page.locator('#months');
    this.years = page.locator('#years');

    // Address info
    this.firstName = page.locator('#first_name');
    this.lastName = page.locator('#last_name');
    this.address = page.locator('#address1');
    this.country = page.locator('#country');
    this.state = page.locator('#state');
    this.city = page.locator('#city');
    this.zipcode = page.locator('#zipcode');
    this.mobile = page.locator('#mobile_number');

    this.createAccountBtn = page.locator('button[data-qa="create-account"]');

    // Success
    this.successMsg = page.getByText('Account Created!');
  }

  async registerUser(name, email) {
    await this.signupLink.click();
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.signupBtn.click();
  }

  async fillAccountDetails() {
    await this.titleMr.click();
    await this.password.fill('123456');

    await this.days.selectOption('10');
    await this.months.selectOption('5');
    await this.years.selectOption('2000');

    await this.firstName.fill('Manohar');
    await this.lastName.fill('Rajotiya');
    await this.address.fill('Ahmedabad');

    await this.country.selectOption('India');
    await this.state.fill('Gujarat');
    await this.city.fill('Ahmedabad');
    await this.zipcode.fill('380001');
    await this.mobile.fill('9999999999');

    await this.createAccountBtn.click();
  }
}