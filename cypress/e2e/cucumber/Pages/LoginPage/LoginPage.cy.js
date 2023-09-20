/// <reference types="cypress" />


class LoginPage {
    enterURL() {
        cy.visit();
    }

    enterUserNamePassword(username, password) {
        cy.get('#input-email').type(username);
        cy.get('#input-password').type(password);
        return this;
    }

    clickSubmitButton() {
        cy.get('[type="submit"]').eq(0).click();
        return this;
    }

    verifyPageTitle() {
        return cy.title().should("eq", "Search -")
    }
}
const login = new LoginPage();
export default login;