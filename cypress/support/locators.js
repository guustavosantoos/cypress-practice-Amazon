
const loc = {
    ACOES: {
        // botão e input
        BarraDePesquisa:     '#twotabsearchtextbox',
        btn_Pesquisa:        '#nav-search-submit-button',
        btn_Compra:          '#buy-now-button[name="submit.buy-now"]',
        btn_FinalizarCompra: '.a-box-inner > .a-button > .a-button-inner > .a-button-input',
        btn_finalizarCompra2:'.place-order-btn > .continue-buttons > .continue-button > .a-button-inner > .a-button-input' ,


        // Validar e Selecionar
        selecionandoProduto: '[data-asin="B07FQK1TS9"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base',
        verificandoProduto:  '#productTitle',
        verificarFinalizarCompra: 'div > h1',
        selecionarPix: '/html/body/div[5]/div[2]/div/div/div[1]/div[1]/div/div[4]/div/div[3]/div/div[2]/div/div/div[2]/div/form/div/div[1]/div/div[2]/div[2]/div/div/div/div/div[1]/span/div/label/input',
        VerificarPedidoReservado: '.a-alert-heading',
    },

    LOGIN: {
        btn_login:                    '#nav-link-accountList',
        btn_continuarLogin:           '#continue',
        btn_finalizarLogin:           '#signInSubmit',
        campoEMAIL:                   '#ap_email',
        campoSENHA:                   '#ap_password',
        verificarMensagemERRO:        'div h4',
        verificarMensagemERRO_SENHA: 'div  ul li > span'
    },

    CONTAS_LISTAS: {
        btn_suaConta:                 '#nav-link-accountList',
    },

    ENDERECOS: { 
        verificar_SuaConta: 'div div h1',
        verificar_SeusEnderecos: '[class="a-spacing-medium"]',
        verificar_MensagemSalvo: '[class="a-alert-heading"]',
        verificar_Exclusao: '.a-alert-heading',
        

        btn_Endereco: ':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner',
        btn_AdicionarEndereco: '.a-link-normal > .a-box > .a-box-inner > .a-section',
        btn_SalvarEndereco: '[type="submit"][aria-labelledby="address-ui-widgets-form-submit-button-announce"]',
        btn_ExcluirEndereco: '#ya-myab-address-delete-btn-1',
        btn_Confirmacao: '[type="submit"][class="a-button-input"]',
        btn_ConfirmarExcluir: '[class="a-button-input"][aria-labelledby="deleteAddressModal-2-submit-btn-announce"]',

        campo_Nome: '#address-ui-widgets-enterAddressFullName',
        campo_Telefone: '#address-ui-widgets-enterAddressPhoneNumber',
        campo_CEP: '#address-ui-widgets-enterAddressPostalCode',
        campo_Complemento: '#address-ui-widgets-complement',
        campo_Número: '#address-ui-widgets-buildingNumber',
    }   
}

export default loc;