const { I } = inject();

module.exports = {
    categorySection: '//div[@class="css-1ghv7i5"]',
    categoryButton: '//button[@class="css-9bjn9j"]',
    categoryTitle: '//h6[@data-unify="Typography"]',
    categoryList: '//div[@class="css-1f3b7q2"]',
    categoryItem: '//span[@data-testid="spnSRPLevel2Filter"]',



    lookAtCategorySection(textList) {
        I.waitForElement(this.categorySection, 5);
        I.scrollTo(this.categorySection);
        I.wait(2);
        for (let text of textList) {
          I.see(text, this.categorySection);
        }
      }

    
  
}
