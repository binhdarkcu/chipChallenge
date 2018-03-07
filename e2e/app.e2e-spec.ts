import { Challenge1Page } from './app.po';

describe('challenge1 App', () => {
  let page: Challenge1Page;

  beforeEach(() => {
    page = new Challenge1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
