let cap = () => parseFloat(window.prompt("Insira o capital inicial investido: "));
let tax = () => parseFloat(window.prompt("Insira a taxa de juros, em percentual: "))/100;
let tem = () => parseFloat(window.prompt("Insira o tempo de investimento, em meses: "));

let investimento = () => window.alert(`Retorno do investimento: ${(cap() * Math.pow((tax() + 1), tem())).toFixed(2)}`);
