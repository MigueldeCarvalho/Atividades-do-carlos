function soma(n1, n2){
    if(typeof n1 !== 'number' || typeof n2 !== 'number'){
        throw('Os valores precisam ser números')
    }
    return n1 + n2
}

try{

    let resultado

    resultado = soma(1,2)
    console.log(resultado)
    resultado = soma('1',2)
    console.log(resultado)


}catch(err){
    console.log(err)

}finally{
    console.log('Opreração realizada')
}