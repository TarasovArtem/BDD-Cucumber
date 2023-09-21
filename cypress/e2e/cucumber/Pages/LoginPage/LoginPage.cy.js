/// <reference types="cypress" />


class LoginPage {

    enterUserNameEmail(username) {
        return cy.get('[name="email"]').type(username);
    }

    enterUserNamePassword(password) {
        return cy.get('[name="password"]').type(password);
    }

    clickSubmitButton() {
        return cy.get('[type="submit"]').eq(0).click();
    
    }

    verifyPageTitle() {
        return cy.title().should("eq", "Search -")
    }
}
const login = new LoginPage();
export default login;