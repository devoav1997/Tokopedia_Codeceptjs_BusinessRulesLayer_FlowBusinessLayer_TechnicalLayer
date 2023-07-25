Feature: Search for a product on tokopedia.com

  Scenario: User searches for a product
    Given I am on the tokopedia.com homepage
    When I enter "iPhone" into the search bar
    Then I should see a list of "iPhone" products
