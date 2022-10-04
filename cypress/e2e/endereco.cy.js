
import "../support/commandsConta"
import loc from "../support/locators"

describe('Endereço ', () => {
    
    beforeEach(() => {
        cy.viewport(1820, 1080)
        cy.visit('/')

        // logando na conta
        cy.logando_conta()
    });
    
    it.only('adicionando endereço novo', () => {
        // acessando painel de 'sua conta'
        cy.get(loc.CONTAS_LISTAS.btn_suaConta).trigger('mouseover')
        cy.xpath('//*[@id="nav-al-your-account"]/a[1]/span').click()

        // painel
        cy.get(loc.ENDERECOS.verificar_SuaConta).should('contain', 'Sua conta')
        cy.get(loc.ENDERECOS.btn_Endereco).click()

        cy.pause()
        // endereço
        cy.get(loc.ENDERECOS.verificar_SeusEnderecos).should('contain', 'Seus endereços')
        cy.get(loc.ENDERECOS.btn_AdicionarEndereco).click()

        // ===== painel para preencher os campos ===== // 

        // Nome e Sobrenome
        cy.get(loc.ENDERECOS.campo_Nome)
            .clear()
            .type('Gustavo Teste')

        // Telefone
        cy.get(loc.ENDERECOS.campo_Telefone).type('11 7436-8313')

        // CEP
        cy.get(loc.ENDERECOS.campo_CEP).type('79814-270')
        
        // Complemento
        cy.get(loc.ENDERECOS.campo_Complemento).type('casa')

        // Número residência
        cy.wait(3500)
        cy.get(loc.ENDERECOS.campo_Número, {timeout:2500}).type('203') 
                
        // btn Salvar_Endereço
        cy.get(loc.ENDERECOS.btn_SalvarEndereco).click()

        // verificando mensagem de endereco salvo 
        cy.get(loc.ENDERECOS.verificar_MensagemSalvo).should('contain', 'Endereço salvo')


    });

    it.only('excluindo endereço', () => {
        // entrando no painel 'sua conta'
        cy.get(loc.CONTAS_LISTAS.btn_suaConta).trigger('mouseover')
        cy.xpath('//*[@id="nav-al-your-account"]/a[1]/span').click()
        cy.get(loc.ENDERECOS.verificar_SuaConta).should('contain', 'Sua conta')
        cy.get(loc.ENDERECOS.btn_Endereco).click()

        // selecionando 'excluir' endereco
        cy.get(loc.ENDERECOS.btn_ExcluirEndereco).click()
        // tela de confirmação

        cy.get('.a-popover-inner > .a-section > :nth-child(4) > .a-span-last > .a-row').should('exist');
        cy.get('.a-spacing-none > .a-button').click()
            .click()
    })


});