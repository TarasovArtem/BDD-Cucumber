/// <reference types="cypress" />


class NavigationMenu {

    constructor() {
        this.navigationMenuItem = '.title';
        this.dropDownMenuItem = '.nav-link';
    }

    clickItemNavigationMenu(itemText) {
        return cy.contains(this.navigationMenuItem, itemText).trigger('mouseover');
    }

    clickDropDownMenuItem(itemText) {
        return cy.contains(this.dropDownMenuItem, itemText).click();
    }
}
const navigationMenu = new NavigationMenu();
export default navigationMenu;