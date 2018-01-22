@ForSalePropertiesFeature
Feature: For Sale properties results header title
  
  As a user
  I want to see the location string in the header title
  So that I can verify I am searching for properties in the correct location

  # line 14 allows for auto complete in the dropdown
  @SalePropertiesResultsScenario
  Scenario Outline: Verify that the location is correct.....
    Given the Runmode is "<Runmode>"
    When I navigate to "testUrl" on "browserType"
    And I enter "<searchLocation>" into "searchLocationText"
    And I click on "searchButton"
    Then the For Sale properties results page "headerTitleLabel" should show "<Expected>"

    Examples: 
      | Runmode | searchLocation | Expected |
      | Y       | London         | London   |
      | Y       | London         | Test     |
