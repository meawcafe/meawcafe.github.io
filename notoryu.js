function getAge() {
    return  Math.abs(new Date(Date.now() - (new Date('11/23/2002').getTime())).getUTCFullYear() - 1970)
}


// <a href="bbb" target="_blank">aaa</a>
const choices = [ 
    [ ['oi'], ['oi'] ],
    [ ['meaw, você pode comentar sobre você?'], 
    [`me reconheça como meawto. tenho ${getAge()} anos atualmente. Sou brasileiro e vivo no interior de São Paulo`,
        'comecei meus estudos como desenvolvedor no final de 2018 e minha atuação como estudante de design no final de 2015. Estou estudando para melhorar cada vez mais meus conhecimentos e minhas habilidades',
        'os meus estudos sérios começaram na metade de 2019, quando entrei para a <a href="https://www.cps.sp.gov.br/" target="_blank">escola técnica estadual</a>. me considero muito criativo e, sempre que consigo, me dedico ao máximo nos meus estudos e projetos',
        'gosto muito de gatinhos, chuva, sorvete, frio, climas nublados, café e principalmente da noite. Um dos meus principais desejos é morar sozinho, conseguir me manter financeiramente e comprar carros para dirigir de madrugada ou quando houver chuva'] ],
    [ ['e a sua experiência?', 'você já trabalhou na área de desenvolvimento?'], 
        ['completei um curso Técnico em Informática para Internet na <a href="https://www.cps.sp.gov.br/" target="_blank">ETEC</a>, e fui um dos melhores alunos. também completei um estágio na secretaria da saúde na minha cidade, onde me destaquei com algorítmos que me ajudaram (e muito) nas minhas tarefas. Atualmente estou cursando Sistemas para Internet na <a href="https://www.cps.sp.gov.br/" target="_blank">FATEC</a>',
        '<strong>sobre sua segunda pergunta:</strong> ainda não. Atualmente estou apenas estudando. O meu primeiro projeto sério foi o <a href="https://www.youtube.com/watch?v=8Pem6rCfct8" target="_blank">notoryu</a>, ele foi o meu TCC da <a href="https://www.cps.sp.gov.br/" target="_blank">ETEC</a> (ficou bonitin 👍). Atualmente estou trabalhando com meu segundo projeto sério: <a href="https://github.com/meawto/meawto.github.io" target="_blank">noto os</a>. Esses projetos sérios me fazem aprender muitas coisas novas, e eu gosto muito disso.'] ],
    [ ['quais são seus conhecimentos?', 'me refiro sobre o que você estuda ou tem experiência'],
    ['basicamente:\n- <strong>Adobe</strong> (Photoshop, Premiere e After Effects);\n- <strong>Office</strong> (Word, Outlook, Teams e Excel);\n- <strong>Informática</strong> (montagem, manutenção, detecção e correção de problemas em computadores e instalação e configuração de redes e softwares);\n- <strong>desenvolvedor</strong> full stack;',
        'e as linguagens de desenvolvimento que estudo são:\n<a href="https://www.w3.org/standards/webdesign/htmlcss.html" target="_blank">html</a>, <a href="https://www.w3.org/standards/webdesign/htmlcss.html" target="_blank">css</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">javascript</a>, <a href="https://www.php.net/" target="_blank">php</a> e <a href="https://www.python.org/" target="_blank">python</a>',
        'eu não tenho problemas em aprender. Eu me adapto conforme as necessidades.\nEstou estudando sobre <strong>frameworks</strong>, mais especificamente o <a href="https://reactjs.org/" target="_blank">react</a>. Conheço bem o poder dos frameworks e por isso pretendo dominá-los'] ],
    [ ['como posso me comunicar com você?'], ['minha preferência é pelo <a href="https://discord.com/" target="_blank">discord</a>: <strong>meaw#1690</strong>', 'mas se preferir: twitter <a href="https://twitter.com/meawwwto" target="_blank">@meawwwto</a>']],
    [ ['meaw, você prefere café com açúcar ou sem?'], ['então... eu prefiro com açúcar, mas minha preferência é com pouco açúcar para sentir melhor o gosto do café'] ],
    [ ['216158'], ['esse é bom', 'emoji aqui'] ],
    [ ['como posso sugerir melhorias ou ideias para seus projetos?', 'eu queria poder ajudar'], ['você pode conversar comigo sobre isso no <a href="https://discord.com/" target="_blank">discord</a>. Caso seja referente ao <a href="https://github.com/meawto/meawto.github.io" target="_blank">noto os</a> ou outro projeto meu, é possível enviar issues no repositório do mesmo, se preferir']],
    [ ['como posso estar ajudando você com doações?'], ['fico feliz em ler isso e agradeço pela consideração, mas não posso aceitar por enquanto. Pretendo começar a desenvolver coisas legais para você (como jogos, ferramentas e etc), daí seria legal permitir doações para sempre melhorar os meus projetos',
        'mesmo que você insista em ajudar, eu não tenho <a href="https://ko-fi.com/" target="_blank">ko-fi</a>, <a href="https://www.patreon.com/" target="_blank">patreon</a> ou outra coisa que aceite essa ajuda. Não se preocupe, a sua ajuda com ideias e recomendações é tão valiosa quanto uma doação']],
]

const chat = $('#chat-data')
let span = $('#input-user-message div')


function MessageInfo(info) {
    this.elemChoice = info.elem
    this.messageList = choices[info.elem.data('choice-id')]
    this.message = ''
    this.status = true
    this.fullMessage = this.messageList[0][0]
    this.renderMessage()


    this.sendMessage = function(data) {
        let username = data.username
        let avatar = data.avatar
        let message = ((data.username == 'meawto') ? this.messageList[1][0] : data.message)
        let that = this

        let msgContainer = `<div class="message-wrapper-container"><div class="message-container"><img class="mc-user-avatar" src="${avatar}"><div class="mc-user-info"><span>${username}</span><span>${message}</span></div></div>`


        if (username == 'meawto') {
            let randomTimer = (Math.floor(Math.random() * (1200 - 600 + 1) + 600))
            $('#meaw-is-typing').css('opacity', '1')
            setTimeout(()=>{
                that.scrollChatBottom()
                chat.append($(msgContainer))
            $('#meaw-is-typing').css('opacity', '0')
                that.messageList[1].shift()
    
                if (that.messageList[1][0]) {
                    setTimeout(()=> {
                        that.sendMessage({username: 'meawto', avatar: 'https://avatars0.githubusercontent.com/u/44252635?s=460&u=18c398ad431d7c96cf4bcdd6d8a19f48cccaaa25&v=4'})
                    }, randomTimer)
                } else {
                    that.finishChoice()
                }
            }, timer = (that.messageList[1][0].length*20 > 1000) ? that.messageList[1][0].length*20 : 1000)

        } else {
            this.scrollChatBottom()
            chat.append($(msgContainer))
            
            this.messageList[0].shift()
    
            if (this.messageList[0][0]) {
                return true
            } else {
                return false
            }
        }
    }

    this.finishChoice = function(data) {
        setTimeout(()=>{
            $('.chat-choices-container').css('opacity', '1')
            $('.chat-choices-container').css('z-index', '6')
            $('.chat-choices-container').css('width', '100%')
            $('#input-blinking-cursor').removeClass("input-blinking-cursor-anim")
            $('#input-blinking-cursor').css('opacity', '0')
            if ($('.chat-choices-container').children().length == 0) {
                $('.chat-choices-container').html('mensagem show toda torta dizendo que acabou')
            }
        }, 400)
    }


    this.scrollChatBottom = function() {
        $("#chat-data").stop().animate({ scrollTop: $("#chat-data")[0].scrollHeight }, 500)
    }

}


MessageInfo.prototype.renderMessage = function() {
    let that = this
    let typingDelay = (Math.floor(Math.random() * (70 - 30 + 1) + 30))

    this.fullMessage = this.messageList[0][0]

    if (!(this.message === this.fullMessage)) {
        this.message = this.fullMessage.substring(0, this.message.length + 1)
        span.html(this.message)
        $('#input-blinking-cursor').removeClass("input-blinking-cursor-anim")
        setTimeout(()=> {
            that.renderMessage()
        }, typingDelay)
    } else {
        setTimeout(()=>{
            span.html('')
            that.elemChoice.remove()
            if (that.sendMessage({username: NotoOS.session_username, avatar: NotoOS.session_avatar, message: that.message})) {
                that.message = ''
                $('#input-blinking-cursor').addClass("input-blinking-cursor-anim")
                setTimeout(()=> {
                    that.renderMessage()
                }, 1200)
            } else {
                $('#input-blinking-cursor').addClass("input-blinking-cursor-anim")
                setTimeout(()=>{
                    that.sendMessage({username: 'meawto', avatar: 'https://avatars0.githubusercontent.com/u/44252635?s=460&u=18c398ad431d7c96cf4bcdd6d8a19f48cccaaa25&v=4'})
                }, timer = (that.message.length*50 > 1400) ? that.message.length*50 : 1400)
            }
        }, 400)
    }
}




$(".chat-choices").click(function() {
    $('.chat-choices-container').css('opacity', '0')
    $('.chat-choices-container').css('z-index', '4')
    $('.chat-choices-container').css('width', '0')

    $('#input-blinking-cursor').css('opacity', '1')

    if (!($('#chat-data-welcome').css('height') == '0px')) {
        $('#chat-data-welcome').css('height', '0')
        $('#chat-data-welcome').css('opacity', '0')
    }
    
    setTimeout(()=>{
        var Notoryu = new MessageInfo({elem: $(this)})
    }, 1000)
    
})
