const codigo = document.getElementById('codigo')
const nome = document.getElementById('nome')
const idade = document.getElementById('idade')
const altura = document.getElementById('altura')
const res = document.getElementById('res')

let db = openDatabase('BD33', 'v1.0', 'miguel_site', 2*1024*1024)

db.transaction(function(tx){ //tx é uma variavel/um parametro para chamar os métodos, como "executeSql"
    tx.executeSql('CREATE TABLE IF NOT EXISTS tabela(codigo INTERGER PRIMARY KEY, nome VARCHAR(12), idade INTEGER, altura INTEGER)')//comando do sql, usar maiusculo
})

function gravar(){
    db.transaction(function(tx){
        tx.executeSql('INSERT INTO tabela(codigo,nome,idade,altura) VALUES(?,?,?,?)',[codigo.value, nome.value, idade.value, altura.value])
        location.reload()
    })
}

function atualizar(){
    db.transaction(function(tx){
        tx.executeSql('UPDATE tabela SET nome=?, idade=?, altura=?, WHERE codigo=?', 
            [nome.value, idade.value, altura.value, codigo.value])
        location.reload()
    })
}

function deletar(){
    db.transaction(function(tx){
        if(codigo.value != ''){
            tx.executeSql('DELETE FROM tabela WHERE codigo=?', [codigo.value]), 
            location.reload()
        }
        if(nome.value != ''){
            tx.executeSql('DELETE FROM tabela WHERE nome=?', [nome.value]), 
            location.reload()
        }
    })
}

function listar(){
    db.transaction(function(tx){
        tx.executeSql( 'SELECT * FROM tabela', [], function(linhas, resultado){
        console.log(resultado) 
        linhas = resultado.rows.lenght
        console.log(linhas)
        for(i=0;i<linhas;i++){
            console.log(resultado.rows.item(i).id, resultado.rows.item(i).nome, resultado.rows.item(i).idade, resultado.rows.item(i).altura)
            res.innerHTML += `Código = <strong> ${resultado.rows.item(i).id}</strong> &emsp;`
            res.innerHTML += `Nome = ${resultado.rows.item(i).nome} &emsp;`
            res.innerHTML += `Idade = ${resultado.rows.item(i).idade} &emsp;`
            res.innerHTML += `Altura = ${resultado.rows.item(i).altura} &emsp;`
            res.innerHTML += '<br/>'
        }                        
        
        })
    })
}