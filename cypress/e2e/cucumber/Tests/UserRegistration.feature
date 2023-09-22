Feature: User Registration

    As a user,
    I want to register my own account,
    So that I can access the platform and receive registration confirmation.

    Scenario: Register a new account
    Given I am on the registration page
    When I fill in the necessary registration fields
    And I click the "Register" button
    Then I should receive a registration confirmation
