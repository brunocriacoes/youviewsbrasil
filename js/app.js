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
            { link: "./servicos.html", text: "Serviços", sclass: "smooth-scroll" },
            { link: "./api.html", text: "API", sclass: "smooth-scroll" },
            { link: "javascript:void( app.methods.my_link() )", text: "CADASTRE-SE AGORA", sclass: "btn-nav btn-red " },
        ],
        beneficio: {
            title: "Benefícios para seu Canal",
            sub_title: "Conheça Nossos Serviços",
            list_1: [
                { 
                    title: "Use para si ou venda os serviços",
                    description: "Utilize todos os serviços para si próprio ou ainda ganhe dinheiro vendendo os serviços pelo painel de revenda. Atualmente os serviços para redes sociais são uma ótima fonte de renda.",
                    delay: '0.2s'
                },
                { 
                    title: "Garantias",
                    description: "Comprar inscritos no YouTube é uma forma 100% legal e está em conformidade com as rigorosas regras e políticas do YouTube, pois tudo que vendemos, são pessoas reais, feitos por pessoas como eu e você.",
                    delay: '0.3s'
                },
                { 
                    title: "Suporte",
                    description: "Suporte 24 horas por dia, todos os dias da semana, incluindo sábados, domingos e feriados.",
                    delay: '0.4s'
                },
            ],
            list_2: [
                { 
                    title: "Inscritos Brasileiros",
                    description: "Somos a unica plataforma do mercado que possui o serviço de Inscritos Brasileiros 100% reais e ativos, podendo ser enviado até 100.000 por canal! incrivel não?",
                    delay: '0.2s'
                },
                { 
                    title: "Qualidade no Serviço",
                    description: "Todos os serviços disponíveis na plataforma são providos de usuários reais e perfis ativos na rede social desejada, fornecendo assim, maior segurança e credibilidade para quem for visitar o perfil de sua marca ou seu perfil pessoal.",
                    delay: '0.3s'
                },
                { 
                    title: "Como fazemos isso?",
                    description: "Nós trabalhamos no mercado de Inscritos e Visualizações a mais de 5 anos, criando campanhas com métodos de divulgações proprios para que você receba inscritos e visualizações reais, feitos por pessoas como eu e você!",
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