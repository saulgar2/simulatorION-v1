context("Simulator Test", () => {

    beforeEach(() => {
        cy.visit('/')
        cy.fixture("inputData").then((data) => {
            this.data = data
        })
    })

    it("Liquidity WEB", () => {
            cy.dataIncome(this.data.money, this.data.property, this.data.monthly);
            cy.dataUser(this.data.name, this.data.phone, this.data.email);
            
    })
})