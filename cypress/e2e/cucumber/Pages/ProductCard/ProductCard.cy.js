/// <reference types="cypress" />

class ProductCard {

    constructor() {
        this.productCard = '.product-thumb';
        this.productCardAction = '.product-action';
        this.viewCart = 'a.btn-block';
    }

    triggerProductCard(productName) {
        return cy.contains(this.productCard, productName).trigger('mouseover')
    }

    clickBtnAddToCard() {
        return cy.get('.cart-33').click({force: true});
    }

    clickProductCart() {
        return cy.get('div.cart-icon').click({ multiple: true });
    }

    clickViewCartBtn(btnName) {
        return cy.contains(this.viewCart, btnName).click()
    }

    productTitle(title) {
        return cy.contains(title).then(($span) => {
            const title = $span.text();
            expect(title).to.eq(title); 
        })
    }

}
const productCard = new ProductCard();
export default productCard;