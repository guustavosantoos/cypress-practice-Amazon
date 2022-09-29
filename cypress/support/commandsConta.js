Cypress.Commands.add('preenchendoConta', conta => {
    
    cy.get('#ap_email', {timeout:4500})
        .type('gustavo.braulioteste@gmail.com')
    cy.get('#continue').click()
    cy.get('#ap_password').type('@Teste123')
    cy.get('#signInSubmit').click()
})


Cypress.Commands.add('efetuandoLOGOUT', logout => {
    // efetuar o logout na conta logada
    cy.get('.nav-truncate > .nav-line-2').trigger('mouseover')
    cy.get('#nav-item-signout').click()
    cy.get('[class="a-link-nav-icon"]', {timeout:5000}).click()
    cy.get('#nav-logo-sprites').should('be.visible')
})
