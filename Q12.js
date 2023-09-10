function soma(){

    let array = [10, 2, 5, 3]
    let tam = array.length
    let soma = 0

    for(i=0; i<tam; i++){
        soma += array[i]
    }
    
    return window.alert(`Soma do array: ${soma}`)
}