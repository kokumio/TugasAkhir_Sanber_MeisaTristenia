class LoginPage {
    get usernameField() { return $('#email'); }
    get passwordField() { return $('#password'); }
    get submitButton() { return $('.chakra-button[type="submit"]'); }
    get errorMessage() { return $('.error-message'); } // Sesuaikan selector jika ada pesan error

    async open() {
        await browser.url('https://kasirdemo.vercel.app/login');
    }

    async login(email, password) {
        await this.usernameField.setValue(email);
        await this.passwordField.setValue(password);
        await this.submitButton.click();
    }
}

module.exports = new LoginPage();
