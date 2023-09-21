Feature: Adding Selected Product to Cart

  As a user,
  I want to add my chosen item to the cart,
  So that I can verify its presence in the cart.


Background: Navigate to the Website
Given I navigate to the Website

Scenario: Add product to the cart
When I select chosen Product
And I click the "Add to Cart" button
Then I should see chosen Product in the cart
