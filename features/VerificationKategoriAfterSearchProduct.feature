Feature: Verification Text Kategori Tokopedia After Search Product

Scenario: Verify text in Category section
  Given I am on the Tokopedia page
  When I enter "iPhone" into the search bar
  Then I should see a list of "iPhone" products
  And I look at the "Kategori" section and see:
    | Kategori             |
    | Handphone & Tablet   |
    | Aksesoris Handphone  |
    | Handphone            |
    | Power Bank           |




