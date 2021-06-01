context('Simulator Web', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Liquidity Test Web', () => {
        cy.get('div.css-1r5ktl label[for="¿Cuánto dinero necesitas?"] + div input').type('1500000', {force : true}).wait(400);
        cy.get('div.css-1r5ktl label[for="¿Cuánto vale el inmueble en garantía?"] + div input').type('1000000', {force : true}).wait(400);
        cy.get('div.css-1r5ktl label[for="¿Cuál es tu ingreso mensual bruto?"] + div input').type('25000', {force : true});

        cy.intercept(
            {
              method: 'POST',
              url: '/quick-simulation'
            },
            {
              body: {
                "data": {
                    "awarded_amount": {
                        "currency": "MXN",
                        "amount": 1000000 //433203.68
                    },
                    "monthly_payment": {
                        "currency": "MXN",
                        "amount": 35000//7990.49
                    },
                    "term": 10
                },
                "notification": {
                    "code": "ILD-100-100",
                    "level": "INFO",
                    "message": "Successful operation",
                    "timestamp": "2021-05-24T22:43:58.959Z"
                }
            }
            }
          ).as('quickSimulation');
        
        cy.wait(4000);
        cy.get('.css-1r5ktl > .css-oujmbf > span').click({force : true});
        cy.get(':nth-child(2) > .css-4cffwv > .css-1sfcbrv').type('Pruebas testing', {force : true}).wait(400);
        cy.get('.css-1iqa09q').type('5578965412', {force : true}).wait(400);
        cy.get(':nth-child(4) > .css-4cffwv > .css-1sfcbrv').type('pruebas@pruebas.com', {force : true}).wait(400);
        cy.wait(2500);
        cy.get('.css-1iwdovu').click({force : true});
        cy.get('.css-16o1gkd').should('contain','En breve nos pondremos en contacto contigo para continuar con la solicitud de tu oferta')
        cy.get('.css-1iwdovu').click({force : true});
    })

})