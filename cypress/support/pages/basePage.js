export class BasePage{

    baseUrl       = "https://ottdevfront.briz.ua/";

    navigate(path) {
        cy
            .visit(this.baseUrl + path)
    }
    
    open(url){
        cy.visit(url)
    }

    typePhoneNumberOrEmail(phoneNumber) {
        cy.get("input[type='text']")
            .type(phoneNumber)
    }
    typePassword(password) {
        cy.get("input[type='password']")
            .type(password)
    }
    submit(){
        cy.get("button[type='submit']").click()
    }
    checkAuthorization(toastMessage) {
        cy.get(".Toastify__toast-body ")
            .should("have.text", toastMessage)
    }
    checkValidation(errorvalidatiion) {
        cy.get(".i-m-error")
            .should("have.text", errorvalidatiion)
    }
    focusOnPassword() {
        cy.get("#password").focus()
    }
    checkShowPassword() {
        cy.get('#password').should('have.attr', 'type', 'password')
        cy.get('.FormInput').find('svg').click()
        cy.get('#password').should('have.attr', 'type', 'text')
    }
    
}

export const basePage = new BasePage()


