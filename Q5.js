const pi = Math.PI;

function raio(){
    return parseFloat(window.prompt("Insira o raio: "));
}

function perimetro(){
    r = raio();
    return window.alert(`Perímetro: ${2*pi*r}`);
}

function area(){
    r = raio();
    return window.alert(`Área: ${pi*r*r}`);
}