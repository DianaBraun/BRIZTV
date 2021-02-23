/// <reference types="Cypress" />
import { authorize } from "../support/pages/authorize"
import { basePage } from "../support/pages/basePage"


it("Successful registration", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    cy.get(".reg-link").click()
    basePage.typePhoneNumberOrEmail('0996730022').typePassword('19111994q').checkShowPassword().clickSubmit()
    //Add MOCK
})

it("Unsuccessful registration with only digits password", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    cy.get(".reg-link").click()
    basePage.typePhoneNumberOrEmail('0996730022').typePassword('19111994').clickSubmit()
})

it("Unsuccessful registration with only letters password", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    cy.get(".reg-link").click()
    basePage.typePhoneNumberOrEmail('0996730022').basePage.typePassword('qqqqqq').clickSubmit()
})

it("Unsuccessful registration with <6 symbols password", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    cy.get(".reg-link").click()
    basePage.typePhoneNumberOrEmail('0996730022').typePassword('11111').clickSubmit()
})

it("Error registration with already registered email", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    cy.get(".reg-link").click()
    basePage.typePhoneNumberOrEmail('braundiana8@gmail.com').typePassword('19111994q').clickSubmit().checkAuthorization("Такий аккаунт уже існує!")
})

it("Error registration with incorrect confirmation code", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    cy.get(".reg-link").click()
    basePage.typePhoneNumberOrEmail('braundiana8@gmail.com').typePassword('19111994q').clickSubmit()
})

it("Error registration with incorrect confirmation code and send code once again", () => {
    basePage.open("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    cy.get(".reg-link").click()
    basePage.typePhoneNumberOrEmail('braundiana8@gmail.com').typePassword('19111994q').clickSubmit().checkConfirmationCode().sendCodeOnceAgain()
})


