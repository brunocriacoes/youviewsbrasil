const app = new Vue( {
    el: "#app",
    data: {
        chamada: {
            titulo1: "Bem-Vindo(a)",
            titulo2: "Consiga INSCRITOS REAIS, hoje mesmo!",
        },
        itensChamada: [
            "Inscritos Brasileiros 100% reais para seu canal",
            "Visualizações 100% reais para seus vídeos",
            "Contamos com 5 anos de experiência!",
            "Serviços 100% fornecidos por campanhas",
            "Suporte 24 horas online",
        ],
        menus: [
            { link: "./services", text: "Serviços", sclass: "smooth-scroll" },
            { link: "./api", text: "API", sclass: "smooth-scroll" },
            { link: "javascript:void( app.methods.my_link() )", text: "CADASTRE-SE AGORA", sclass: "btn-nav btn-red " },
        ],
        beneficio: {
            title: "Benefícios para seu Canal",
            sub_title: "Conheça Nossos Serviços",
            list_1: [
                { 
                    title: "INSCRITOS 100% REAIS",
                    description: "Começe hoje mesmo a receber inscritos brasileiros 100% reais e ativos para seu canal.",
                    delay: '0.2s'
                },
                { 
                    title: "VISUALIZAÇÕES 100% REAIS",
                    description: "Aumente as visualizações dos seus vídeos, cresça seu canal por inteiro, likes e views.",
                    delay: '0.3s'
                },
                { 
                    title: "LIKES EM SEUS VÍDEOS",
                    description: "O YouTube nada mais é que uma maquina de algoritmos, e conhecemos muito bem como funciona este sistema, likes são essenciais para o crescimento organico do seu canal.",
                    delay: '0.4s'
                },
            ],
            list_2: [
                { 
                    title: "SERVIÇOS DE MARKETING EFETIVOS",
                    description: "Trabalhamos com a criação de identidade visual para seu projeto, iremos te ajudar a tirar os seus sonhos do papel e dar vida a ele.",
                    delay: '0.2s'
                },
                { 
                    title: "PRODUÇÃO E PUBLICAÇÃO",
                    description: "Aqui criamos as ferramentas e o conteúdo determinados. Depois publicamos, mensuramos e analisamos a resposta do público.",
                    delay: '0.3s'
                },
                { 
                    title: "RELATÓRIOS",
                    description: "Categorizamos o público alvo para fazer ainda mais efetiva nossa campanha. Finalimente teremos os relatórios e conclusões de cada campanha.",
                    delay: '0.4s'
                },
            ],
        },
        steps: {
            title: "Como Utilizar?",
            sub_title: "Começe hoje mesmo a receber inscritos e visualizações para seu canal!",
            list: [
                {
                    ico: "icon-user",
                    delay: "0.2s",
                    title: "Primeiro Passo",
                    content: "Inicialmente, você deve criar um cadastro logo a cima em nossa plataforma, você nao precisa informar nenhuma de suas senhas neste cadastro. Lembrando que este cadastro é para o acompanhamento em tempo real dos seus pedidos."
                },
                {
                    ico: "icon-cart",
                    delay: "0.3s",
                    title: "Segundo Passo",
                    content: "Você deve adicionar seu primeiro saldo, é com ele que você vai conseguir fazer seu primeiro pedido. Lembrando que aceitamos cartão, boleto, e transferencia bancaria (para TED ou DOC, envie o comprovante para o whatsapp para a liberação do saldo)."
                },
                {
                    ico: "icon-coffee",
                    delay: "0.4s",
                    title: "Ultimo Passo",
                    content: `Com seu saldo liberado, você deve fazer seu primeiro pedido, caso opte por inscritos, você deve selecionar o serviço de "Inscritos Brasileiros", colocar o link do seu canal, e a quantidade de inscritos que deseja. Você pode conferir o andamento do seu pedido pelo menu "Histórico".`
                },
            ],
        },
        form: 'login',
        methods: {
            my_link: () => {
                let is_home = window.location.href.indexOf('.html') == -1
                if( is_home ) {
                   app.form = 'cadastrar' 
                } else {
                    window.location.href = `//${window.location.hostname}/#me-cadastrar`
                }
            }
        }
    }
} )

if( window.location.hash == '#me-cadastrar' ) {
    app.form = 'cadastrar'
}