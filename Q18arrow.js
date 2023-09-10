let num = 11

let primo = (x) => {

    for (i=x-1; i>1; i--){
        if(x%i == 0){
            return false
        }
    }
    return true
}

let botao = () => {

    if(primo(num) == true){
        return window.alert("Primo")
    }
    else{
        return window.alert("Nao primo")       
    }
}