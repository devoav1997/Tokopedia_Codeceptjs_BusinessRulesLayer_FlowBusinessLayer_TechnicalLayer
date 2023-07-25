const { I } = inject();

module.exports = {
  url: 'https://www.tokopedia.com/',
  inputSearch: '//input[@data-unify="Search"]',
  pressEnter: 'Enter',


  search(keyword) {
    I.fillField(this.inputSearch, keyword);
    I.pressKey(this.pressEnter);
    I.wait(4);
  },

  verifySearchResults(product) {
    I.see(`${product}`);
    I.wait(2);
  }
  
}
