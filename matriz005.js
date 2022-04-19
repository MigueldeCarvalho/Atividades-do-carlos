var mat1 = [], valor, linha, coluna, mat2 = [], mat3 = [] 

/*mat1 = [
    [1, 'Brasil'],
    [2, 'Argentina'],
    [3, 'Portugal'],
    [4, 'Espanha'],
]

console.log(mat1)*/

/*valor = Number(prompt('Digite o número de cidades'))

for(i=0;i<valor;i++){
    mat1[i] = prompt('Digite o nome da cidade')
    document.write(`O nome da cidade é ${mat1[i]}`)
    document.write('<br/>')*/


linha = Number(prompt('Digite o número de linhas da matriz'))
coluna = Number(prompt('Digite o número de colunas da matriz'))

for(i=0;i<linha;i++){
    mat1[i] = []
    for(j=0;j<coluna;j++){
        mat1[i][j] = Number(prompt('Digite o número'))
        document.write(mat1[i][j]+ '&emsp;')
    }
    document.write('<br/>')
}
document.write('<br/>')
document.write('<hr>')

for(i=0;i<linha;i++){
    mat2[i] = []
    for(j=0;j<coluna;j++){
        mat2[i][j] = Number(prompt('Digite o número'))
        document.write(mat2[i][j]+ '&emsp;')
    }
    document.write('<br/>')
}
document.write('<br/>')
document.write('<hr>')

for(i=0;i<linha;i++){
    mat3[i] = []
    for(j=0;j<coluna;j++){
        mat3[i][j] = mat1[i][j]+ mat2[i][j]
        document.write(mat3[i][j]+ '&emsp;')
    }
    document.write('<br/>')
}
document.write('<br/>')
document.write('<hr>')


