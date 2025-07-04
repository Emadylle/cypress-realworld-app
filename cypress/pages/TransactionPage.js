class TransactionPage {

    selectorsList() {
        const selectors = {
            newButon: "[data-test='nav-top-new-transaction']",
            contactField: "[data-test='user-list-item-WHjJ4qR2R2']",
            amountField: "[name='amount']",
            addNoteField: "[placeholder='Add a note']",
            payButton: "[data-test='transaction-create-submit-payment']",
        }

        return selectors

    }

    accessNewTransactions() {
        cy.get(this.selectorsList().newButon).click()
    }

    
}


export default TransactionPage