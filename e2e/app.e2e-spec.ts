import { AcexercisesPage } from './app.po';

describe('acexercises App', () => {
  let page: AcexercisesPage;

  beforeEach(() => {
    page = new AcexercisesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
