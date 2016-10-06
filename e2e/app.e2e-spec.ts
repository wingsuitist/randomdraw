import { RandomdrawPage } from './app.po';

describe('randomdraw App', function() {
  let page: RandomdrawPage;

  beforeEach(() => {
    page = new RandomdrawPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rdr works!');
  });
});
