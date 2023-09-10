let skills = ["Javascript", "ReactJS", "React Native", "Angular"]

function temHabilidades(x){

    for(i=0; i<x.length; i++){
        if(x[i] == 'Javascript'){
            return true
        }
    }

    return false;
}

function botao(y){
    if(y){
        return window.alert("True")
    }
    return window.alert("False");
}