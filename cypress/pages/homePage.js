class HomePage {

    selectorsList() {
        const selectors = {
         homePage: "[data-test='nav-transaction-tabs']",
        }

        return selectors
    }

    checkHomePage() {
        cy.location('pathname').should('equal', '/')
        cy.get(this.selectorsList().homePage).should('be.visible')
    }
}


export default HomePage