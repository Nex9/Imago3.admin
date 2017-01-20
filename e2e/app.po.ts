import { browser, element, by, ExpectedConditions } from 'protractor';

export class Imago3AdminPage {
  navigateTo() {
    return browser.get('/');
  }

  getCounter() {
    const progress = element(by.css('app-root .in-progress'));
    browser.wait(ExpectedConditions.invisibilityOf(progress), 1000);
    return element(by.css('app-root .count')).getText();
  }

  incrementCounter() {
    return element(by.css('app-root button.increment')).click();
  }

  resetCounter() {
    return element(by.css('app-root button.reset')).click();
  }
}
