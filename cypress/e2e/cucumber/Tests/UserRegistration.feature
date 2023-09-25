Feature: User Registration

    As a user,
    I want to register my own account,
    So that I can access the platform and receive registration confirmation.

    Background: Navigate to the Website
    Given I navigate to the Registration page

    Scenario: Register a new account
    When I fill in the necessary registration fields
    And I click the "Continue" button
    Then I should receive a registration confirmation

