import '../support/commandsConta'
import loc from '../support/locators'
 
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
        cy.get(locators.ACOES.BarraDePesquisa).type('Alexa')
        cy.get(locators.ACOES.btn_Pesquisa).click()
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
        cy.get(loc.ACOES.BarraDePesquisa).type('Kindle')
        cy.get(loc.ACOES.btn_Pesquisa).click()

        
        // Selecionando o produto 
        cy.get(loc.ACOES.selecionandoProduto).click()
        cy.get(loc.ACOES.verificandoProduto).should('have.text', `        Kindle 10a. geração com bateria de longa duração - Cor Preta       `)
        cy.get(loc.ACOES.btn_Compra).click()

        // Tela de Finalização de compra
        cy.get(loc.ACOES.verificarFinalizarCompra).should('contain', `Finalizar a compra`)
        cy.xpath(loc.ACOES.selecionarPix).check()
        cy.get(loc.ACOES.btn_FinalizarCompra).click()
            cy.wait(3500)
        cy.get(loc.ACOES.btn_finalizarCompra2).click()
        cy.get(loc.ACOES.VerificarPedidoReservado , {setTimeout:5000}).should('contain', 'Seu pedido foi reservado.')
    })
});