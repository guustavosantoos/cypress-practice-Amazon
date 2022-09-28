Cypress.Commands.add('preenchendoConta', conta => {
    
    cy.get('#ap_email', {timeout:4500})
        .type('gh.company04@gmail.com')
    cy.get('#continue').click()
    cy.get('#ap_password').type('mamageral10')
    cy.get('#signInSubmit').click()
})
