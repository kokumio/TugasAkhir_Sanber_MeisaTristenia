Feature: Login functionality

  Scenario: Successful login
    Given I am on the login page
    When I enter "admin" and "admin123"
    Then I should see the dashboard
