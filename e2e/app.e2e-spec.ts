import { BookFinderPage } from './app.po';

describe('book-finder App', function() {
  let page: BookFinderPage;

  beforeEach(() => {
    page = new BookFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
