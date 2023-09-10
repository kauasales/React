let rec = () => window.prompt("Digite algo: ");

let verificar = () => {
    let plv = rec().toLowerCase().split('')
    let tam = plv.length
    let cont = 0

    for (i=0; i<tam; i++){
        if(plv[i] == 'a' || plv[i] == 'e' || plv[i] == 'i' || plv[i] == 'o' || plv[i] == 'u'){
            cont++
        }
    }
    return window.alert(`Ha ${cont} vogais nao acentuadas`);
}