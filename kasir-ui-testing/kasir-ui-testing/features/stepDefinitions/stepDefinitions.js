const { Given, When, Then } = require('@cucumber/cucumber');
const HomePage = require('../../pages/HomePage');

Given('I am on the login page', async () => {
    await browser.url('https://kasirdemo.belajarqa.com');
});

When('I enter {string} and {string}', async (username, password) => {
    await HomePage.login(username, password);
});

Then('I should see the dashboard', async () => {
    const title = await browser.getTitle();
    expect(title).toContain('Dashboard');
});
