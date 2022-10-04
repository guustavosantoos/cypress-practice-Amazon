
import "../support/commandsConta"
import loc from "../support/locators"


describe('testes referente a troca de contas', () => {
    beforeEach(() => {
        cy.viewport(1820, 1080)
        cy.visit('/')

        // logando na conta
        cy.logando_conta()
    })
    
    it.only('adicionando conta nova', () => {
        // Acessando a página de trocar de conta
        cy.get('#nav-link-accountList')
            .trigger('mouseover')
        cy.get('#nav-item-switch-account')
            .click()
        cy.get('div h1')
            .first()
            .should('contain', 'Trocar contas')

        // Adicionando a nova conta
        cy.get('[class="a-column a-span12"]')
            .last()
            .click()
        cy.get('[class="a-spacing-small"]')
            .should('contain', `Fazer login`)
        cy.get('#ap_email')
            .type('gh.company04@gmail.com')
        cy.get('#continue')
            .last()
            .click()
        cy.get('#signInSubmit')
            .type('mamageral10')
        cy.get('#signInSubmit')
            .click()

        cy.get('#nav-link-accountList')
            .trigger('mouseover')
        cy.get('#nav-item-switch-account')
            .click()
        cy.get('div h1')
            .first()
            .should('contain', 'Trocar contas')    
    });

    it.only('excluindo conta existente', () => {
        // Acessando a página de trocar de conta
        cy.get('#nav-link-accountList')
            .trigger('mouseover')
        cy.get('#nav-item-switch-account')
            .click()
        cy.get('div h1')
            .first()
            .should('contain', 'Trocar contas')
        cy.get('[data-name="sign_out_request"]')
            .first()
            .click()
        
    })
});