/// <reference types="cypress" />

class RegisterPage {

    enterFirstName(firstName) {
        return cy.get('#input-firstname').type(firstName);
    }

    enterLastName(lastName) {
        return cy.get('#input-lastname').type(lastName);
    }

    enterEmail(email) {
        return cy.get('#input-email').type(email);
    }

    enterTelephone(telephone) {
        return cy.get('#input-telephone').type(telephone);
    }

    enterPassword(password) {
        return cy.get('#input-password').type(password);
    }

    enterconfirmPassword(password) {
        return cy.get('#input-confirm').type(password);
    }

    radioBtnSubscribeYes() {
        return cy.get('#input-newsletter-no').check();
    }

    radioBtnSubscribeNo() {
        return cy.get('#input-newsletter-yes').check();
    }

    checkBoxPrivacyPolicy() {
        return cy.get('[type="checkbox"]').check( {force: true});
    }

    continueBtn() {
        return cy.contains('Continue').click();    
    }

    verifyRegistrationConfirmation() {
        return cy.title().should("eq", "Your Account Has Been Created!")
    }

}
const registration = new RegisterPage();
export default registration;

