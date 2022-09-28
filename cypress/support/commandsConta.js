Cypress.Commands.add('preenchendoConta', conta => {
    
    cy.get('#ap_email', {timeout:4500})
        .type('gustavo.braulioteste@gmail.com')
    cy.get('#continue').click()
    cy.get('#ap_password').type('@Teste123')
    cy.get('#signInSubmit').click()
})
