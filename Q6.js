function receber(){
    return window.prompt("Insira o número: ");
}

function inverter(){
    
    num = receber()
    return window.alert(num.split('').reverse().join(''));
}