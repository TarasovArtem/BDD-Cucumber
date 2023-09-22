/// <reference types="cypress" />

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import navigation from "../../Pages/Navigation/Navigation.cy";
import navigationMenu from "../../Pages/Menu/NavigationMenu.cy";
import productCard from "../../Pages/ProductCard/ProductCard.cy";


Given("I navigate to the Website", () => {
    navigation.loginPage();
});

When("I select chosen Product", () => {
    navigationMenu.clickItemNavigationMenu('Mega Menu');
    navigationMenu.clickDropDownMenuItem('Headphones')
    productCard.triggerProductCard('Samsung SyncMaster 941BW')
});

And('I click the "Add to Cart" button', () => {
    productCard.clickBtnAddToCard();
})

Then("I should see chosen Product in the cart", () => {
    productCard.clickViewCartBtn('View Cart');
    productCard.productTitle('Samsung SyncMaster 941BW');
})
