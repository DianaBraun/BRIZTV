export class Authorization {
    // fb_email_input = 
    // fb_passwd_input = 
    // fb_login_btn = 

    checkForgotPassword() {
        cy.get("a[class='l-forgot-pass']").click()
        cy.get('.Modal__title').should('have.text', 'Відновлення пароля')
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
        cy.visit("https://ottdevfront.briz.ua/")
        cy.contains("Увійти").click()
        cy.wait(5000)
        cy.get('.Modal__socials-btn').find('svg').eq(0)
            .click()

    }

    checkGoogleLogin() {
        cy.visit("https://ottdevfront.briz.ua/")
        cy.contains("Увійти").click()
        cy.wait(5000)
        cy.get('.Modal__socials-btn').find('svg').eq(1)
            .click()
    }
}
export const authorize = new Authorization()

