import { basePage } from "./basePage"

export default class Authorization {

    checkForgotPassword(numberOrEmail) {
        cy.get("a[class='l-forgot-pass']").click()
        cy.get("input[name='login']").type(numberOrEmail)
        cy.get("button[type='submit']").click()

    }

    checkConfirmationMessage(toastMessage) {
        cy.get(".Toastify__toast-body").should("have.text", toastMessage)
    }

    checkRememberMe() {

        cy.get('[type="checkbox"]').should('have.attr', 'value', 'true')
        cy.get('[type="checkbox"]').uncheck({ force: true })
        cy.get('[type="checkbox"]').should('have.attr', 'value', 'false')

    }
    checkRegistrationLink() {

        cy.get("a[class='reg-link']").click()
        cy.get('.Modal__title').should('have.text', 'Реєстрація')

    }
    checkFacebookLogin() {
        cy.wait(2000)
        cy.get('.Modal__socials-btn').find('svg').eq(0)
            .click()

    }

    checkGoogleLogin() {
        cy.wait(2000)
        cy.get('.Modal__socials-btn').find('svg').eq(1)
            .click()
    }
}

export const authorize = new Authorization()

