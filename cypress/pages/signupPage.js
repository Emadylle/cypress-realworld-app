class SignUpPage {


    selectorList() {
        const selectors = {
            signinButton: "[data-test='signup']",
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            userNameField: "[name='username']",
            passwordField: "[name='password']",
            confirmPasswordField: "[name='confirmPassword']",
            signupButton: "[data-test='signup-submit']",
            requiredMessage: "[data-test='signup-username']",
            requiredMessagePassword: "[data-test='signup-confirmPassword']",
        }

        return selectors
    }


    accessSignUpPage() {
        cy.visit('/signup')
    }


    fillSignupForm(firstName, lastName, userName, password, confirmPassword) {
        cy.get(this.selectorList().firstNameField).type(firstName)
        cy.get(this.selectorList().lastNameField).type(lastName)
        cy.get(this.selectorList().userNameField).type(userName)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().confirmPasswordField).type(confirmPassword)
        cy.get(this.selectorList().signupButton).click()
    }


    emptySignupForm(firstName, lastName, userName, password, confirmPassword) {
        cy.get(this.selectorList().firstNameField).type(firstName)
        cy.get(this.selectorList().lastNameField).type(lastName)
        cy.get(this.selectorList().userNameField).clear()
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().confirmPasswordField).type(confirmPassword)
        cy.get(this.selectorList().signupButton).should('be.disabled')
    }


    validateUsernameField() {
        cy.get(this.selectorList().requiredMessage).should('contain', 'Username is required')
    } 


    validateConfirmPasswordField() {
        cy.get(this.selectorList().requiredMessagePassword).should('contain', 'Password does not match')
    }

}

export default SignUpPage