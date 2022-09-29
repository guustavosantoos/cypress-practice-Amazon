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

        
    }


}

export default loc; 