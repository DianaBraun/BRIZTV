/// <reference types="Cypress" />
import { authorize } from "../support/pages/authorize"
import { basePage } from "../support/pages/basePage"

describe('Registration Process', () => {
    beforeEach(() => {
        basePage.navigate('auth/register');
    });

    it("Successful registration", () => {
        basePage.typePhoneNumberOrEmail('0990000000')
        basePage.typePassword('sgssgsg12')
        basePage.checkShowPassword()
        basePage.submit()
    })

    it("Unsuccessful registration with only digits password", () => {
        basePage.typePhoneNumberOrEmail('0990000000')
        basePage.typePassword('19111994')
        basePage.submit()
    })

    it("Unsuccessful registration with only letters password", () => {
        basePage.typePhoneNumberOrEmail('0990000000')
        basePage.typePassword('qqqqqq')
        basePage.submit()
    })

    it("Unsuccessful registration with <6 symbols password", () => {
        basePage.typePhoneNumberOrEmail('0990000000')
        basePage.typePassword('11111')
        basePage.submit()
    })

    it("Error registration with already registered email", () => {
        basePage.typePhoneNumberOrEmail('braundiana8@gmail.com')
        basePage.typePassword('19111994q')
        basePage.submit()
        basePage.checkAuthorization("Такий аккаунт уже існує!")
    })

    it("Error registration with incorrect confirmation code", () => {
        basePage.typePhoneNumberOrEmail('braundiana8@gmail.com')
        basePage.typePassword('19111994q')
        basePage.submit()
    })

    it("Error registration with incorrect confirmation code and send code once again", () => {
        basePage.typePhoneNumberOrEmail('braundiana8@gmail.com')
        basePage.typePassword('19111994q')
        basePage.submit()
        // basePage.checkConfirmationCode()
        // basePage.sendCodeOnceAgain()
    })

})