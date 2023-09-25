/// <reference types="cypress" />

import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import navigation from "../../Pages/Navigation/Navigation.cy";
import registration from './../../Pages/RegisterPage/RegisterPage.cy';

const firstName = Math.random().toString(5).substring(2)
const lastName = Math.random().toString(5).substring(2)
const telephone = Math.random().toString(9).substring(2)
const regEmail = Math.random().toString(5).substring(2) + "@test.com"
const password = "12345678"

Given("I navigate to the Registration page", () => {
    navigation.registerPage();
});

When("I fill in the necessary registration fields", (datatable) => {
    registration.enterFirstName(firstName), 
    registration.enterLastName(lastName),
    registration.enterEmail(regEmail),
    registration.enterTelephone(telephone),
    registration.enterPassword(password),
    registration.enterconfirmPassword(password)    
    
    registration.radioBtnSubscribeYes();
    registration.checkBoxPrivacyPolicy();
});

And('I click the "Continue" button', () => {
    registration.continueBtn();
});

Then('I should receive a registration confirmation', () => {
    registration.verifyRegistrationConfirmation();
})


