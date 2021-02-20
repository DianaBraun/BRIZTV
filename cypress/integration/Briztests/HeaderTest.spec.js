describe("Header Units", function() {
    it("Add a channel to favorite", function() {
        cy.visit("https://ottdevfront.briz.ua/")
        cy.contains("Увійти").click()
        cy.get("input[type='text']").type("braundiana8@gmail.com")
        cy.get("input[type='password']").type("19111994q")
        cy.get("button[type='submit']").click()
    })
})


(".NavBar [href='/tv-channels']") - CSS selector for TV Channels in menu