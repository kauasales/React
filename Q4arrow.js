base = () => parseFloat(window.prompt("Insira a base do triângulo"));

altura = () => parseFloat(window.prompt("Insira a altura do triângulo"));

area = () => {
    
    b = base()
    a = altura()
    return window.alert(`Área do triângulo: ${b*a}`);
}