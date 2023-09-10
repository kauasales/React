function media(){

    let array = [10, 2, 3]
    let sum = array.reduce((acumulador, elemento) => acumulador + elemento, 0);

    return window.alert(`Média do array: ${sum/array.length}`);
}