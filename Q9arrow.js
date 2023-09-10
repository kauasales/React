let rec = () => parseInt(window.prompt("Insira um inteiro: "));

let fatorial = () => {
    
    let r = rec()
    let fat = 1
    
    for(i=r; i>0; i--){
        fat *= i
    }
    return window.alert(`Fatorial de ${r}: ${fat}`);
}
