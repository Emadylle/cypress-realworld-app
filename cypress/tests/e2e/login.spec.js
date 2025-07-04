import userData from "../../fixtures/userData.json"
import LoginPage from "../../pages/loginPage"
import HomePage from "../../pages/homePage"
import SignUpPage from "../../pages/signupPage"


const loginPage = new LoginPage()
const homePage = new HomePage()
const signupPage = new SignUpPage()

describe('New user registration successful', () => {
  it('Must register a new user with valid information', () => {
    signupPage.accessSignUpPage()
    signupPage.fillSignupForm(userData.newUserSuccess.firstName, userData.newUserSuccess.lastName, userData.newUserSuccess.username, userData.newUserSuccess.password, userData.newUserSuccess.confirmPassword)
    loginPage.accessLoginPage()
  })
})

describe('Attempting to register a new user with incomplete information', () => {
  it('Should display error messages when trying to register a new user without filling in all mandatory information', () => {
    signupPage.accessSignUpPage()
    signupPage.emptySignupForm(userData.newUserFail.firstName, userData.newUserFail.lastName, userData.newUserFail.username, userData.newUserFail.password, userData.newUserFail.confirmPassword)
    signupPage.validateUsernameField()
    signupPage.validateConfirmPasswordField()
  })
})

describe('Login Success', () => {
  it('Must log in with a valid username', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    homePage.checkHomePage()
  })
})

describe('Attempting to log in with invalid credentials', () => {
  it('Should display an error message when logging in with invalid credentials', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
})

