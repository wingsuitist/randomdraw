import { browser, element, by } from 'protractor';

export class RandomdrawPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rdr-root h1')).getText();
  }
}
