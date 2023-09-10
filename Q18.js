let num = 11

function primo(x){

    for (i=x-1; i>1; i--){
        if(x%i == 0){
            return false
        }
    }
    return true
}

function botao (){

    bool = primo(num)

    if(bool == true){
        return window.alert("Primo")
    }
    else{
        return window.alert("Nao primo")       
    }
}