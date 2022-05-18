const formulario = document.getElementById('formulario')
const nome = document.getElementById('nome')
const textNome = document.getElementById('textNome')
const email = document.getElementById('email')
const textEmail = document.getElementById('textEmail')
const senha = document.getElementById('senha')
const textSenha = document.getElementById('textSenha')
const botao = document.getElementById('botao')
const textFormulario = document.getElementById('textFormulario')
const telefone = document.getElementById('telefone')
const textTelefone = document.getElementById('textTelefone')

botao.addEventListener('click', function (e) {
    e.preventDefault()  
    
    if(nome.value == '' && email.value =='' && senha.value == '' && telefone.value =='' ){
        textFormulario.textContent = 'Você precisa preencher todos os campos'
    }else{
        textFormulario.textContent = ''
    }
    
    console.log(nome.value)
    console.log(email.value)
    console.log(senha.value)
    console.log(telefone.value)

})

email.addEventListener('keyup', function () {
    if(validarEmail(email.value) !== true){
        textEmail.textContent = 'O formato do email deve ser com letras minúsculas ex.: teste@gmail.com'    
    }else{
        textEmail.textContent = ''
    }
}) 

function validarEmail(e_mail){
    let padraoEmail = /^[a-z0-9.]+@[a-z0-9]+\.([a-z]+)?$/
    return padraoEmail.test(e_mail)
}

senha.addEventListener('keyup', function() {
    if(validarSenha(senha.value) !== true){
        textSenha.textContent = 'O formato da senha deve ter 6 caracteres, com 1 letra maiúscula, 1 minúscula, 1 número e 1 carctere especial. ex.: Br@sil2022'    
    }else{
        textSenha.textContent = ''
    }
})

function validarSenha(senhaValor){
    let padraoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/

    return padraoSenha.test(senhaValor)

    /* 
        /^
            (?=.*\d)              // deve conter ao menos um dígito
            (?=.*[a-z])           // deve conter ao menos uma letra minúscula
            (?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
            (?=.*[$*&@#])         // deve conter ao menos um caractere especial
            [0-9a-zA-Z$*&@#]{6,}  // deve conter ao menos 6 dos caracteres mencionados
        $/
    
    */    
}

telefone.addEventListener('keyup', function() {
    if(validarTelefone(telefone.value) !== true){
        textTelefone.textContent = 'O formato do telefone deve ser (##) #####-####'    
    }else{
        textTelefone.textContent = ''
    }
})

function validarTelefone(telefoneValor){
    let padraoTelefone = /^\([1-9]\d\)\s9?\d{4}-\d{4}$/

    return padraoTelefone.test(telefoneValor)

    /*
    A explicação completa dela é:

        \( = Caracter (, caso contrário teríamos um grupo
        [1-9]\d = Dígito qualquer de 1-9
        \) = Caracter ), caso contrário teríamos um fechamento de grupo
        \s = Espaço
        9? = Caracter 9, a interrogação serve para dizer que ele é opcional
        \d{4} = espera 4 dígitos
        - = espera um separador -
        \d{4} = espera 4 dígitos

    */
    
}

/*  

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions

http://www.regexplained.co.uk/  

*/