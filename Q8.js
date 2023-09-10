function capital(){
    return parseFloat(window.prompt("Insira o capital inicial investido: "));
}

function taxa(){
    return parseFloat(window.prompt("Insira a taxa de juros, em percentual: "));
}

function tempo(){
    return parseFloat(window.prompt("Insira o tempo de investimento, em meses: "));
}

function investimento(){
    let cap = capital()
    let tax = taxa()/100
    let temp = tempo()
    let m = cap * Math.pow((tax + 1), temp)

    return window.alert(`Retorno do investimento: ${m.toFixed(2)}`);
}