import { MyWorkshopProjectPage } from './app.po';

describe('my-workshop-project App', function() {
  let page: MyWorkshopProjectPage;

  beforeEach(() => {
    page = new MyWorkshopProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
