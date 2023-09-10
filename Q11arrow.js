let recebe = () => parseInt(window.prompt("Insira um inteiro: "));

let primo = () => {
    let num = recebe()

    for (i=num-1; i>1; i--){
        if(num%i == 0){
            return window.alert("Não é primo")
        }
    }
    return window.alert("É primo")  
}