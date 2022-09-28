

// npm run open - para executar o cypress
describe('login', () => {
    before(() => {
        cy.visit('/')
    })
    
    
    it('login com sucesso', () => {
        cy.get('#nav-link-accountList').click()
        cy.get('#ap_email', {timeout:4500})
            .type('gh.company04@gmail.com')
            .should('exist', true)
        cy.get('#continue').click()
        cy.get('#ap_password').type('mamageral10')
        cy.get('#signInSubmit').click()
    });
});