/// <reference types="Cypress" />

import { authorize } from "../support/pages/authorize"
import { basePage } from "../support/pages/basePage"

describe('Login Process', () => {

    beforeEach(() => {
        basePage.navigate('auth/login');
    });


    it("Successful login with '^0\d{9}$'", () => {
        basePage.typePhoneNumberOrEmail('0930005740')
        basePage.typePassword('19111994q')
        basePage.submit()
        basePage.checkAuthorization("Ви залогінились успішно")
    })

    it("Successful login with '^+380\d{9}$'", () => {
        basePage.typePhoneNumberOrEmail('+380930005740')
        basePage.typePassword('19111994q')
        basePage.submit()
        basePage.checkAuthorization("Ви залогінились успішно")
    })
    it('Checks the account was not approved', () => {
        basePage.typePhoneNumberOrEmail('0996735401')
        basePage.typePassword('123456q')
        basePage.submit()
        basePage.checkAuthorization('Аккаунт не підтверджений!')
        cy.contains("Натисніть, щоб підтвердити").click()
        cy.get('.Modal__title').should('have.text', 'Код підтвердження')
    })


    it("Successful login with email", () => {
        basePage.typePhoneNumberOrEmail('braundiana8@gmail.com')
        basePage.typePassword('19111994q')
        basePage.submit()
        basePage.checkAuthorization("Ви залогінились успішно")
    })

    it("Error login with not registered email", () => {
        basePage.typePhoneNumberOrEmail('braundiana0@gmail.com')
        basePage.typePassword('19111994q')
        basePage.submit()
        basePage.checkAuthorization("Введений невірний логін або пароль")
    })


    it("Error login with not registered phone number", () => {
        basePage.typePhoneNumberOrEmail('+380939999999')
        basePage.typePassword('19111994q')
        basePage.submit()
        basePage.checkAuthorization("Введений невірний логін або пароль")
    })

    it("Error login with not correct email", () => {
        basePage.typePhoneNumberOrEmail('braundiana@gmail')
        basePage.focusOnPassword()
        basePage.checkValidation("Введіть вірний Email або номер телефону")
    })

    it("Error login with not correct phone", () => {
        basePage.typePhoneNumberOrEmail('80671919160')
        basePage.focusOnPassword()
        basePage.checkValidation("Введіть вірний Email або номер телефону")
    })

    it("Checks Minimum 6 symbols for password", () => {
        basePage.typePhoneNumberOrEmail('0671919160')
        basePage.typePassword('19111')
        basePage.submit()
        basePage.checkValidation("Мінімальна довжина пароля 6 символів")
    })

    it("Checks Show password", () => {
        basePage.typePhoneNumberOrEmail('0671919160')
        basePage.typePassword('19111994q')
        basePage.checkShowPassword()
    })

    it("Checks Remember Me", () => {
        authorize.checkRememberMe()
    })

    it.only('Checks FB Visit', () => {
        authorize.checkFacebookLogin()
    })

    it.only('Checks GGL visit', () => {
        authorize.checkGoogleLogin()
    })
})