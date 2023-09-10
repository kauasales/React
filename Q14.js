let array = [10, 2, -5, 6, 7, -8, -10, 2]

function positivo (vet) {

    let pos = []
    let cont = 0

    for(i=0; i<vet.length; i++){
        if(vet[i] >= 0){
            pos[cont] = vet[i]
            cont ++
        }
    }

    return window.alert(`Vetor com números positivos: ${pos}`);
}