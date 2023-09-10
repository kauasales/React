let num = "218"

function soma(x){
    let soma = 0
    for(i=0; i<x.length; i++){
        soma += parseInt(x.charAt(i))
    }

    return window.alert(`Soma dos digitos de ${num}: ${soma}`);
}