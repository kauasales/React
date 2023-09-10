function base(){
    return parseFloat(window.prompt("Insira a base do triângulo"));
}

function altura(){
    return parseFloat(window.prompt("Insira a altura do triângulo"));
}

function area(a, b){
    a = base();
    b = altura();
    
    return window.alert(`Área do triângulo: ${a*b}`);
}