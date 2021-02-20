describe("Not Authorized User", function() {
    it("Add a channel to favorite", function() {
        cy.visit("https://ottdevfront.briz.ua/")
        cy.contains("Увійти").click()
        cy.get("input[type='text']").type("braundiana8@gmail.com")
        cy.get("input[type='password']").type("19111994q")
        cy.get("button[type='submit']").click()
    })

it("Add a content unit to favorite", function() {
    cy.visit("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    cy.get("input[type='text']").type("braundiana8@gmail.com")
    cy.get("input[type='password']").type("19111994q")
    cy.get("button[type='submit']").click()

})

it("Buy a subscription", function() {
    cy.visit("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    cy.get("input[type='text']").type("braundiana8@gmail.com")
    cy.get("input[type='password']").type("19111994q")
    cy.get("button[type='submit']").click()

})

it("Buy a content unit", function() {
    cy.visit("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    cy.get("input[type='text']").type("braundiana8@gmail.com")
    cy.get("input[type='password']").type("19111994q")
    cy.get("button[type='submit']").click()

})

it("Watch free channels", function() {
    cy.visit("https://ottdevfront.briz.ua/")
    cy.contains("Увійти").click()
    cy.get("input[type='text']").type("braundiana8@gmail.com")
    cy.get("input[type='password']").type("19111994q")
    cy.get("button[type='submit']").click()

})
})