context("Simulator Test", () => {

    /*before(() =>{
        cy.fixture('inputData.json').as('input')
    })*/

    beforeEach(() => {
        cy.visit('/')
        /*cy.fixture("inputData").then((data) => {
      this.data = data
    })*/
    })

    it("Liquidity Income", () => {
        //const datos = this.input;
        //cy.get(datos).each((dataObject) =>{
            //cy.dataIncome(this.data.money_do_i_need, this.inputData.property_collateral, this.inputData.monthly_income);
            //cy.dataUser(this.inputData.name, this.inputData.phone, this.inputData.email);
            cy.dataIncome('1000000', '1500000', '80000');
            cy.dataUser('pruebas testing qa', '5512345698', 'pruebas@pruebas.com');
        //})

        
    })

})