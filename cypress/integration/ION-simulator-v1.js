context("Simulator Test", () => {

    beforeEach(() => {
        cy.visit('/')
        /*cy.fixture("inputData").then((inputData) => {
            this.inputData = inputData;
          })*/
    })

    it("Liquidity Income", () => {
        //cy.dataIncome(this.inputData.money_do_i_need, this.inputData.property_collateral, this.inputData.monthly_income);
        //cy.dataUser(this.inputData.name, this.inputData.phone, this.inputData.email);
        cy.dataIncome('1000000', '1500000', '80000');
        cy.dataUser('pruebas testing qa', '5512345698', 'pruebas@pruebas.com');
    })

})