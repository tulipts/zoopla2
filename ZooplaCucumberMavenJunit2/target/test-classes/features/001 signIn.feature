@SignInFeature
Feature: Sign In to Zoopla
  
  As a user
  I want to SignIn to Zoopla successfully
  So that I can start searching for properties

  @signin
  Scenario Outline: Verify that the user can sign-in successfully to Zoopla
    Given the Runmode is "<Runmode>"
    When I navigate to "testUrl" on "browserType"
    And I click on "signinLink"
    And I enter "emailText" as "<Email>"
    And I enter "passwordText" as "<Password>"
    And I click on "signinButton"
    Then Signin should be "<Expected_Result>"

    Examples: 
      | Runmode | Email               | Password    | Expected_Result |
      | Y       | planmex@hotmail.com | selenium321 | successful      |
