context("Simulator Test", () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it("Liquidity WEB", () => {
        cy.dataIncome('1000000', '1500000', '80000');
        cy.dataUser('pruebas testing qa', '5512345698', 'pruebas@pruebas.com');

    })
})