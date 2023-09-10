function inserir_temp(){
    let num = parseFloat(window.prompt("Insira a temperatura em F: "))
    return num;
}

function conversao(a){
    c = (a-32)*(5/9)
    return window.alert(`${a}F -> ${c}°C`);
}