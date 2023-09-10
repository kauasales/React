let array = [10, 2, -5, 6, 7, -8, -10, 2]

function maior(vet){

    let maiorValor = Math.max(...vet);
    
    return window.alert(`Maior valor do array: ${maiorValor}`);
}