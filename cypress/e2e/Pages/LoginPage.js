import {loginLocators , constants} from "../../Locators/LoginLocators";

class LoginPage {

    open() {
        cy.visit(constants.url);
    }

    login() {
        cy.get(loginLocators.username).type(constants.userName);
        cy.get(loginLocators.password).type(constants.Password);
        cy.get(loginLocators.loginBtn).click();
    }

    assertSuccessLogin() {
        cy.url().should('include', 'dashboard');
        cy.get(loginLocators.afterLog).should('be.visible');
    }
}

export default LoginPage
