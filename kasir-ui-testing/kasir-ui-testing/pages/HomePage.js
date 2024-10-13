class HomePage {
    get usernameField() { return $('#username'); }
    get passwordField() { return $('#password'); }
    get submitButton() { return $('#submit'); }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.submitButton.click();
    }
}

module.exports = new HomePage();
