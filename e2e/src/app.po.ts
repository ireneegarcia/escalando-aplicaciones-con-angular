import { browser, by, element } from 'protractor';

export class AppPage {
  selectors = {
    'title' : 'app-root h1',
    'card-tittles': 'mat-card-title'
  };

  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css(this.selectors['title'])).getText();
  }

  getCardTitles() {
    return element.all(by.css(this.selectors['card-tittles']));
  }
}
