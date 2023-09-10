let array = [10, 2, -5, 6, 7, -8, -10, 2]

let positivo = (vet) => {

    let pos = vet.filter(numero => numero >= 0)

    return window.alert(`Vetor com números positivos: ${pos}`);
}
