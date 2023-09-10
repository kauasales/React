const pi = Math.PI;

raio = () => parseFloat(window.prompt("Insira o raio: "));

perimetro = () => {
    r = raio();
    return window.alert(`Perímetro: ${2*pi*r}`);
}

area = () => {
    r = raio();
    return window.alert(`Área: ${pi*r*r}`);
}