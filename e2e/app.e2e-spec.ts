import { Imago3AdminPage } from './app.po';

describe('imago3-admin App', function() {
  let page: Imago3AdminPage;

  beforeEach(() => {
    page = new Imago3AdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
