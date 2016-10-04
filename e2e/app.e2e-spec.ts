import { AddressBookPage } from './app.po';

describe('address-book App', function() {
  let page: AddressBookPage;

  beforeEach(() => {
    page = new AddressBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
