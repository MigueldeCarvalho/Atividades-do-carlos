function fibo(){
    var objfib, valor, fibonacci = []

    objfib = document.getElementById('valfibo')
    console.log(objfib)
    valor = Number(objfib.value)
    console.log(valor)

    fibonacci[0] = 0
    fibonacci[1] = 1
    i = 2

    do{

        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1]
        i++
    }while(i<valor)

    console.log(fibonacci)
}