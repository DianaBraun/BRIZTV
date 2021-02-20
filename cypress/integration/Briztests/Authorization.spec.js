// describe("Authorization", function() {
//     it("Authorize users with phone ^0\d{9}$", function() {
//         cy.visit("https://ottdevfront.briz.ua/")
//         cy.contains("Увійти").click()
//         cy.get("input[type='text']").type("0671919160")
//         cy.get("input[type='password']").type("19111994q")
//         cy.get("button[type='submit']").click()
//         cy.contains("Вийти").click()
//     })
//     it("Authorize users with phone +380\d{9}$", function() {
//         cy.visit("https://ottdevfront.briz.ua/")
//         cy.contains("Увійти").click()
//         cy.get("input[type='text']").type("+380671919160")
//         cy.get("input[type='password']").type("19111994q")
//         cy.get("button[type='submit']").click()
//         //проверка через тоаст
//     })
//     it("Authorize users with phone email", function() {
//         cy.visit("https://ottdevfront.briz.ua/")
//         cy.contains("Увійти").click()
//         cy.get("input[type='text']").type("braundiana8@gmail.com")
//         cy.get("input[type='password']").type("19111994q")
//         cy.get("button[type='submit']").click()
//         //проверка через тоаст
//     })
//     it("NOT Authorize users with unregistered email", function() {
//         cy.visit("https://ottdevfront.briz.ua/")
//         cy.contains("Увійти").click()
//         cy.get("input[type='text']").type("braundiana@gmail.com")
//         cy.get("input[type='password']").type("19111994q")
//         cy.get("button[type='submit']").click()
//         //проверка через тоаст
//     })
//     it("NOT Authorize users with unregistered phone", function() {
//         cy.visit("https://ottdevfront.briz.ua/")
//         cy.contains("Увійти").click()
//         cy.get("input[type='text']").type("0671919190")
//         cy.get("input[type='password']").type("19111994q")
//         cy.get("button[type='submit']").click()
//         //проверка через тоаст
//     })
//     it("NOT Authorize users with incorrect email", function() {
//         cy.visit("https://ottdevfront.briz.ua/")
//         cy.contains("Увійти").click()
//         cy.get("input[type='text']").type("braundiana.com")
//         cy.get("input[type='password']").type("19111994q")
//         cy.get("button[type='submit']").click()
//         //проверка через тоаст
//     })
    it("NOT Authorize users with incorrect phone", function() {
        cy.visit("https://ottdevfront.briz.ua/")
        cy.contains("Увійти").click()
        cy.get("input[type='text']").type("80671919160")
        cy.get("input[type='password']").type("19111994q")
        cy.get("button[type='submit']").click()
        //проверка через тоаст
    })
})

///<reference types="Cypress"/> 

it('By name', () => {
    cy.visit('https://ottdevfront.briz.ua/')
    cy.contains("Увійти").click()
    cy.get("input[name='login']").type("0671919160")
    

})

