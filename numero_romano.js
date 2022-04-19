function converte(){
    var numero, resultado

    numero = document.getElementById('textRomano')
    console.log(numero)
    num1 = Number(numero.value)
    console.log(num1)
    resultado = document.getElementsByTagName('h2')[0]
    console.log(resultado)

    switch(num1){
        case 1:
          resultado.innerText = '1 em Romano é igual a I'
        break

        case 2:
            resultado.innerText = '2 em Romano é igual a II'
        break

        case 3:
            resultado.innerText = '3 em Romano é igual a III'
        break
      
        case 4:
            resultado.innerText = '4 em Romano é igual a IV'
        break

        case 5:
          resultado.innerText = '5 em Romano é igual a V'
        break

        case 6:
            resultado.innerText = '6 em Romano é igual a VI'
        break

        case 7:
            resultado.innerText = '7 em Romano é igual a VII'
        break
      
        case 8:
            resultado.innerText = '8 em Romano é igual a VIII'
        break

        case 9:
          resultado.innerText = '9 em Romano é igual a IX'
        break

        case 10:
            resultado.innerText = '10 em Romano é igual a X'
        break

        default:
            resultado.innerText = 'não é um número'
        
    }



    
}