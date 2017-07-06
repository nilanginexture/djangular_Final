import { AnguFinalPage } from './app.po';

describe('angu-final App', () => {
  let page: AnguFinalPage;

  beforeEach(() => {
    page = new AnguFinalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
