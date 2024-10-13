Feature: Login functionality

  Scenario: Successful login
    Given I am on the login page
    When I enter valid credentials
    Then I should see the dashboard

  Scenario: Unsuccessful login
    Given I am on the login page
    When I enter "wrongUser" and "wrongPass"
    Then I should see an error message
