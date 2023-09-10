let num = "218"

let soma = (x) => {
    let sum = 0
    for(i=0; i<x.length; i++){
        sum += parseInt(x.charAt(i))
    }

    return window.alert(`Soma dos digitos de ${x}: ${sum}`);
}