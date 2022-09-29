import "../support/commandsConta"
import loc from "../support/locators"

// npm run open - para executar o cypress
describe('Tela de login', () => {
    before(() => {
        cy.visit('/')
    })

    
    
    it('login com sucesso', () => {
        cy.get(loc.LOGIN.btn_login).click()
        cy.get(loc.LOGIN.campoEMAIL, {timeout:4500})
            .should('exist', true)
            .type('gustavo.braulioteste@gmail.com')
        cy.get(loc.LOGIN.btn_continuarLogin).click()
        cy.get(loc.LOGIN.campoSENHA).type('@Teste123')
        cy.get(loc.LOGIN.btn_finalizarLogin).click()

        // logout
        cy.efetuandoLOGOUT()

    });

    it('tentar realizar login com e-mail inválido', () => {
        // Depois realizar a refatoração desse código em locators
        
        // Acessando a tela de preencher o login
        cy.get(loc.LOGIN.btn_login).click()

        // Tentando realizar login com e-mail falando o '@' 
        cy.get(loc.LOGIN.campoEMAIL).type('gustavo.brauliotestegmail.com')
        cy.get(loc.LOGIN.btn_continuarLogin).click()

        // Verificar mensagem de error
        cy.get(loc.LOGIN.verificarMensagemERRO).should('contain', 'Houve um problema') 
        
        // Voltando para a tela inicial
        cy.get('[class="a-link-nav-icon"]', {timeout:5000}).click()
        cy.get('#nav-logo-sprites').should('be.visible')

        cy.pause()
    })

    it('tentar realizar o login com o telefone errado', () =>{
    // Depois realizar a refatoração desse código em locators
        
        // Acessando a tela de preencher o login
        cy.get(loc.LOGIN.btn_login).click()

        // Tentando realizar login com e-mail falando o '@' 
        cy.get(loc.LOGIN.campoEMAIL).type('1199999999999')
        cy.get(loc.LOGIN.btn_continuarLogin).click()

        // Verificar mensagem de error
        cy.get(loc.LOGIN.verificarMensagemERRO).should('contain', 'Número de telefone incorreto') 
        
        // Voltando para a tela inicial
        cy.get('[class="a-link-nav-icon"]', {timeout:5000}).click()
        cy.get('#nav-logo-sprites').should('be.visible')
    })

    it('preenchendo a senha de forme inválida', () => {
        // depois realizar a refatoração desse código em locators
        
        // Acessando a tela de preencher o login
        cy.get(loc.LOGIN.btn_login).click()

        // Preenchendo o email corretamente
        cy.get(loc.LOGIN.campoEMAIL).type('gustavo.braulioteste@gmail.com')
        cy.get(loc.LOGIN.btn_continuarLogin).click()  

        // Preenchendo a senha apenas com 'a'
        cy.get(loc.LOGIN.campoSENHA).type('a')
        cy.get(loc.LOGIN.btn_finalizarLogin).click()
        
        // Validando a mensagem de error da senha
        cy.get(loc.LOGIN.verificarMensagemERRO_SENHA).should('contain', 'Sua senha está incorreta')

        // Voltando para a tela inicial
        cy.get('[class="a-link-nav-icon"]', {timeout:5000}).click()
        cy.get('#nav-logo-sprites').should('be.visible')
    })


});