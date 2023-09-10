let soma = () => {
    let array = [10, 2, 5, 3];
    let sum = array.reduce((acumulador, elemento) => acumulador + elemento, 0);
    window.alert(`Soma do array: ${sum}`);
}
