function string(){
    return (window.prompt("Insira uma string: ")).toLowerCase().split('');
}

function caractere(){
    return window.prompt("Insira um caractere: ");
}

function busca(){

    let vet = string()
    let c = caractere().toLowerCase()
    let cont = 0

    for(i=0; i<vet.length; i++){
        if(vet[i] == c){
            cont++
        }
    }
    return window.alert(`Quantidade de caracteres na string: ${cont}`);
}