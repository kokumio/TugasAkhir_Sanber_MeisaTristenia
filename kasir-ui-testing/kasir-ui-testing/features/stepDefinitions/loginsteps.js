const { Given, When, Then } = require('@cucumber/cucumber');
const LoginPage = require('../../pages/LoginPage');

Given('I am on the login page', async () => {
    await LoginPage.open();
});

When('I enter valid credentials', async () => {
    await LoginPage.login('23mencoba@gmail.com', 'akucantik24');
});

Then('I should see the dashboard', async () => {
    const title = await browser.getTitle();
    expect(title).toContain('Dashboard'); // Sesuaikan dengan judul dashboard yang sebenarnya
});

Then('I should see an error message', async () => {
    const errorVisible = await LoginPage.errorMessage.isDisplayed();
    expect(errorVisible).toBe(true);
});
