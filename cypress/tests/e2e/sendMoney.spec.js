import HomePage from "../../pages/homePage"
import userData from "../../fixtures/userData.json"
import LoginPage from "../../pages/loginPage"
import TransactionPage from "../../pages/TransactionPage"

const homePage = new HomePage()
const loginPage = new LoginPage()
const transactionPage = new TransactionPage()

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    homePage.checkHomePage()

    transactionPage.accessNewTransactions()
  })
})