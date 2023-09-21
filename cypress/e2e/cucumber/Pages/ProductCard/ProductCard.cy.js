/// <reference types="cypress" />

class ProductCard {

    constructor() {
        this.productCard = '.product-thumb';
        this.productCardAction = '.product-action';
    }

    triggerProductCard(productName) {
        return cy.contains(this.productCard, productName).trigger('mouseover')
    }

    clickBtnAddToCard() {
        return cy.get('.cart-33').click({force: true});
    }

}
const productCard = new ProductCard();
export default productCard