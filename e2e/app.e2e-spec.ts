import { APage } from './app.po';

describe('a App', function() {
  let page: APage;

  beforeEach(() => {
    page = new APage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
