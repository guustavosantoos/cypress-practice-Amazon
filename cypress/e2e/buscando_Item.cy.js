import '../support/commandsConta'
import locators from '../support/locators'

describe('Buscando produto pela barra', () => {
    before(() => {
        cy.visit('/')
        cy.get('#nav-link-accountList').click()
        cy.preenchendoConta()

        /*         cy.get('#ap_email', {timeout:4500})
            .type('gh.company04@gmail.com')
            .should('exist', true)
        cy.get('#continue').click()
        cy.get('#ap_password').type('mamageral10')
        cy.get('#signInSubmit').click() */
    });
    
    
    
    it('Comprando alexa pela barra de pesquisa', () => {
        cy.get('#twotabsearchtextbox').type('Alexa')
        cy.get('#nav-search-submit-button').click()
        cy.get('span div h1 > div>div>div>div:nth-child(1)').should('contain', 'Alexa')
        
        // clicando na alexa
        cy.get('[data-asin="B084DWCZY6"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base').click()
        cy.get('#productTitle').should('contain', 'Echo Dot')

        // comprando alexa 
        cy.get('#buy-now-button[name="submit.buy-now"]').click()
        cy.get('div > h1').should('contain', 'Finalizar a compra')
        cy.get('[type="radio"][value="instrumentId=amzn1.pm.pma.blt-Ym9sZXRv.QTJGSEkzTkMxVDhMVjU&isExpired=false&paymentMethod=Boleto&tfxEligible=false"]')
            .check()
        cy.get('[class="a-button-input"][aria-labelledby="orderSummaryPrimaryActionBtn-announce"]')
            .click()
        cy.wait(5000)
        cy.get('[class="a-color-base"][data-testid]')
            .should('contain', 'Revisar itens e envio')
        cy.get('[name="placeYourOrder1"][aria-labelledby="bottomSubmitOrderButtonId-announce"]').click()

        // Verificando processo de compra
        cy.get('#widget-purchaseConfirmationStatus').should('contain', 'Obrigado,')
    });


    it.only('Comprando um kindle através da barra de pesquisa', () => {
        // Pesquisando o Kindle
        cy.get('#twotabsearchtextbox').type('Kindle')
        cy.get('#nav-search-submit-button').click()
        
        // Selecionando o produto 
        cy.get(`[data-asin="B07FQK1TS9"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base`).click()
        cy.get('#productTitle').should('have.text', `        Kindle 10a. geração com bateria de longa duração - Cor Preta       `)
        cy.get('#buy-now-button[name="submit.buy-now"]').click()

        // Tela de Finalização de compra
        cy.get('div > h1').should('contain', `Finalizar a compra`)
        cy.xpath('/html/body/div[5]/div[2]/div/div/div[1]/div[1]/div/div[4]/div/div[3]/div/div[2]/div/div/div[2]/div/form/div/div[1]/div/div[2]/div[2]/div/div/div/div/div[1]/span/div/label/input')
            .check()
        cy.get('.a-box-inner > .a-button > .a-button-inner > .a-button-input').click()
            cy.wait(3500)
        cy.get('.place-order-btn > .continue-buttons > .continue-button > .a-button-inner > .a-button-input').click()
        cy.get('.a-alert-heading', {timeout:3000}).should('contain', 'Seu pedido foi reservado.')
    })
});