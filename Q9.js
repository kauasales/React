function receber(){
    return parseInt(window.prompt("Insira um inteiro: "));
}

function fatorial(){

    let num = receber()
    let fat = 1

    for(i=num; i>0; i--){
        fat *= i
    }

    return window.alert(`Fatorial de ${num}: ${fat}`);
}