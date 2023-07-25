const { I, searchPage } = inject();

Given('I am on the tokopedia.com homepage', () => {
  I.amOnPage(searchPage.url);
});

When('I enter {string} into the search bar', (product) => {
  searchPage.search(product);
});

Then('I should see a list of {string} products', (product) => {
  searchPage.verifySearchResults(product);
});
