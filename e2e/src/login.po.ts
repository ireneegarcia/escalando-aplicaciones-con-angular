import { browser, by, element } from 'protractor';

export class LoginPage {
  selectors = {
    'form' : 'form',
    'email' : 'input[name="email"]',
    'password' : 'input[name="password"]',
    'selectGroup' : '[name="group"]',
    'loginButton' : '[name="botonLogin"]',
    'checkbox' : 'input[name="rememberMe"]'
  };

    navigateToLogin() {
        return browser.get('/login');
    }

    setEmail(text) {
        element(by.css(this.selectors.email)).sendKeys(text);
    }

    setPassword(text) {
        element(by.css(this.selectors.password)).sendKeys(text);
    }

    selectGroupOptionLastValue() {
        element(by.css(this.selectors.selectGroup)).click()
        .then(() => element.all(by.css('mat-option')).last().click());
    }

    logIn() {
        element(by.css(this.selectors.loginButton)).click();
    }

    navigateTo() {
        return browser.get('/');
    }

    getTitleText() {
        return element(by.css(this.selectors['title'])).getText();
    }

}
