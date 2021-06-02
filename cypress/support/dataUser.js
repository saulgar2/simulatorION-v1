Cypress.Commands.add('dataUser', (name, phone, email) =>{
    cy.fixture('dataUser').then((dataUser) =>{
        cy.get(dataUser.userName).type(name, {force : true}).wait(400);
        cy.get(dataUser.userPhone).type(phone, {force : true}).wait(400);
        cy.get(dataUser.userEmail).type(email, {force : true}).wait(400);
        cy.wait(4000);
        cy.get(dataUser.continueButton).click({force : true});
    })
})