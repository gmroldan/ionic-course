import { AngularbasesPage } from './app.po';

describe('angularbases App', () => {
  let page: AngularbasesPage;

  beforeEach(() => {
    page = new AngularbasesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
