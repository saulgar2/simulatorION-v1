Cypress.Commands.add('dataIncome', (money, garanty, monthly) =>{
    cy.fixture('dataIncome').then((dataIncome) =>{
        cy.get(dataIncome.moneyNeed).type(money, {force : true}).wait(400);
        cy.get(dataIncome.stateGaranty).type(garanty, {force : true}).wait(400);
        cy.get(dataIncome.monthlyIncome).type(monthly, {force : true}).wait(400);
        cy.wait(4000);
        cy.get(dataIncome.firstOfferButton).click({force : true});
    })
})