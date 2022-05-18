const nome = document.querySelector('input#nome')
const idade = document.querySelector('input#idade')

nome.addEventListener("keypress", function(e) {
    
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    console.log(keyCode)

    if(keyCode > 8 && keyCode < 64){
        e.preventDefault()
    }else if(keyCode > 90 && keyCode < 97){
        e.preventDefault()
    }else if(keyCode > 122){
        e.preventDefault()
    }
})

idade.addEventListener("keypress", function(e) {
    
    const keyCode = (e.keyCode ? e.keyCode : e.wich)

    console.log(keyCode)

    if(keyCode < 48 || keyCode > 57){
        e.preventDefault()
    }
})

/*

https://adrianorosa.com/blog/jquery/jquery-keycode-tabela-de-referencia.html

*/