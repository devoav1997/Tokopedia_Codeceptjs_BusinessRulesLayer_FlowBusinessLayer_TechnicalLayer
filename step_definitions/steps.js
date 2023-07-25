const { I, searchPage, verificationKategoriOnSearchPage} = inject();

Given('I am on the Tokopedia page', () => {
  I.amOnPage(searchPage.url);
});

When('I enter {string} into the search bar', (product) => {
  searchPage.search(product);
});

Then('I should see a list of {string} products', (product) => {
  searchPage.verifySearchResults(product);
});

Then('I look at the {string} section and see:', (section, dataTable) => {
  const textList = dataTable.parse().raw().map(row => row[0]);
  verificationKategoriOnSearchPage.lookAtCategorySection(textList);
});