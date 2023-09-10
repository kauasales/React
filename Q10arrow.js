let str = () => (window.prompt("Insira uma string: ")).toLowerCase().split('');

let c = () => (window.prompt("Insira um caractere: ")).toLowerCase();

let busca = () => {

    let vet = str()
    let car = c()
    let cont = 0;

    for(i=0; i<vet.length; i++){
        if(vet[i] == car){
            cont++
        }
    }
    return window.alert(`Quantidade de caracteres na string: ${cont}`);
}