/// <reference types="cypress" />

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import login from "../../Pages/LoginPage/LoginPage.cy";
import navigation from "../../Pages/Navigation/Navigation.cy"

Given("I navigate to the Website", () => {
    navigation.loginPage();
});
When("I entered valid credential", (datatable) => {
    datatable.hashes().forEach((element) => {
        login.enterUserNameEmail(element.email, { log: false }), 
        login.enterUserNamePassword(element.validpassword, { log: false });
    });
});

And("User click on sign in button to login", () => {
    login.clickSubmitButton();
});

Then("Validate the title after login", () => {
    login.verifyPageTitle();
});
