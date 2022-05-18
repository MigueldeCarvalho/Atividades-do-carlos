function calcula(){
    var linha, coluna, lin, col, resposta = [], res

    linha = document.querySelector('input#linha')
    coluna = document.querySelector('input.coluna')
    lin = Number(linha.value)
    col = Number(coluna.value)

    resposta = soma(lin,col)
    console.log(resposta)
    res = document.getElementById('res')
    for(i=0; i<lin; i++){
        for(j=0; j<col; j++){
            res.innerHTML += '&emsp;' + resposta[i][j]
        }

        res.innerHTML = '<br/>'
    }
}

function soma(lin,col){
    var mat1 = [], mat2 = [], mat3 = []

    for(var i=0; i<lin; i++){
        mat1[i] = []
        for(var j=0; j<col; j++){
            mat1[i][j] = Number(prompt('Digite o valor da matriz 1 = '))


        }

    }

    console.log(mat1)

    for(var i=0; i<lin; i++){
        mat2[i] = []
        for(var j=0; j<col; j++){
            mat2[i][j] = Number(prompt('Digite o valor da matriz 2 = '))
        }

}

console.log(mat2)

for(var i=0; i<lin; i++){
    mat3[i] = []
    for(var j=0; j<col; j++){
        mat3[i][j] = 0
    }
}

console.log(mat3)

for(var i=0; i<lin; i++){
    mat3[i] = []
    for(var j=0; j<col; j++){
        mat3[i][j] = mat1[i][j] + mat2[i][j]
    }

}

    return mat3

 }