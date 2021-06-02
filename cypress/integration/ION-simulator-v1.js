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



describe('Test Single Input Field Form', function(){ 
declare : const testData = require("../../fixtures/multipleInputFields.json").and.then.testData.forEach((data) => {
       const message = data.message  
       it('Test Case', function(){
                  cy.log("data is:" + data)  
                  cy.get('#user-message').type(message).should('have.value', message)  
                  cy.get('#get-input > button').click()   
                  cy.wait(200)  
                  cy.get('span#display').should('have.text', message)
        })  
  });