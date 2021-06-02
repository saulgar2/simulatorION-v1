context("Simulator Test", () => {

    beforeEach(() => {
        cy.visit('/')
        /*cy.fixture("data").then((data) => {
            this.data = data
          })*/
    })

    it("Liquidity Income", () => {
        //cy.dataIncome(this.data.money_do_i_need, this.data.property_collateral, this.data.monthly_income);
        //cy.dataUser(this.data.name, this.data.phone, this.data.email);
        cy.dataIncome('1000000', '1500000', '80000');
        cy.dataUser('pruebas testing qa', '5512345698', 'pruebas@pruebas.com');
    })

})