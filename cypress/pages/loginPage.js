class LoginPage{

    selectorsList() {
        const selectors = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[data-test='signin-submit']",
    wrongCredentialAlert: "[data-test='signin-error']",
    }

    return selectors
}

accessLoginPage() {
    cy.visit('/signin')
}

    loginWithAnyUser(username, password) {
    cy.get(this.selectorsList().usernameField).type(username)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().loginButton).click()
}

checkAccessInvalid() {
    cy.get(this.selectorsList().wrongCredentialAlert)
}
}
export default LoginPage