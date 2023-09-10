let str = "comer é muito bom e dormir também"

function contar(x){

    let array = str.split(" ")
    return window.alert(`Quantidade de palavras em ${x}: ${array.length}`);
}