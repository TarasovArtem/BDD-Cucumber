/// <reference types="cypress" />



class Navigation {

    loginPage() {
        cy.visit('/index.php?route=account/login');
    }

    RegisterPage() {
        cy.visit('/index.php?route=account/register')
    }
}
const navigation = new Navigation();
export default navigation;
