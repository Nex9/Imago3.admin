import { Imago3AdminPage } from './app.po';

describe('imago3-admin App', function() {
  let page: Imago3AdminPage;

  beforeEach(() => {
    page = new Imago3AdminPage();
  });

  it('should display the counter, increment it and reset it', () => {
    page.navigateTo();

    page.resetCounter();
    expect(page.getCounter()).toEqual('0');
    page.incrementCounter();
    expect(page.getCounter()).toEqual('1');
    page.incrementCounter();
    expect(page.getCounter()).toEqual('2');

    page.resetCounter();
    expect(page.getCounter()).toEqual('0');
    page.incrementCounter();
    expect(page.getCounter()).toEqual('1');
  });
});
