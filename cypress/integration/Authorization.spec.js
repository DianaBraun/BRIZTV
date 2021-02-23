/// <reference types="Cypress" />
import { authorize } from "../support/pages/authorize"
import { basePage } from "../support/pages/basePage"

it("Successful login with '^0\d{9}$'", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    basePage.typePhoneNumberOrEmail('0671919160').typePassword('19111994q').clickSubmit().checkAuthorization("Ви залогінились успішно")
})

it("Successful login with '^+380\d{9}$'", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    basePage.typePhoneNumberOrEmail('+380671919160').typePassword('19111994q').clickSubmit().checkAuthorization("Ви залогінились успішно")
})
it('Checks the account was not approved', () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    basePage.typePhoneNumberOrEmail('0996735401').typePassword('123456q').clickSubmit().checkAuthorization('Аккаунт не підтверджений!')
    cy.contains("Натисніть, щоб підтвердити").click()
    cy.get('.Modal__title').should('have.text', 'Код підтвердження')
})


it("Successful login with email", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    basePage.typePhoneNumberOrEmail('braundiana8@gmail.com').typePassword('19111994q').clickSubmit().checkAuthorization("Ви залогінились успішно")
})

it("Error login with not registered email", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    basePage.typePhoneNumberOrEmail('braundiana0@gmail.com').typePassword('19111994q').clickSubmit().checkAuthorization("Введений невірний логін або пароль")
})


it("Error login with not registered phone number", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    basePage.typePhoneNumberOrEmail('+380939999999').typePassword('19111994q').clickSubmit().checkAuthorization("Введений невірний логін або пароль")
})

it("Error login with not correct email", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    basePage.typePhoneNumberOrEmail('braundiana@gmail').focusOnPassword().checkValidation("Введіть вірний Email або номер телефону")
})

it("Error login with not correct phone", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    basePage.typePhoneNumberOrEmail('80671919160').focusOnPassword().checkValidation("Введіть вірний Email або номер телефону")
})

it("Checks Minimum 6 symbols for password", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    basePage.typePhoneNumberOrEmail('0671919160').typePassword('19111').clickSubmit().checkValidation("Мінімальна довжина пароля 6 символів")
})

it("Checks Show password", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    basePage.typePhoneNumberOrEmail('0671919160').typePassword('19111994q').checkShowPassword()
})

it("Checks Remember Me", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    authorize.checkRememberMe()
})

it('Checks Password Recovery Availability', () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    authorize.checkForgotPassword()
})

it('Checks the presence of registration link', () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    authorize.checkRegistrationLink()

})


it('Checks FB Visit', () => {
    authorize.checkFacebookLogin()
})

it('Checks GGL visit', () => {
    authorize.checkGoogleLogin()
})


