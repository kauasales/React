let array = ['arroz', 'feijão', 'macarrão']

function string(x){

    let tam = x[0].length
    let str = x[0]

    for(i=1; i<x.length; i++){
        
        if (tam < x[i].length){
            str = x[i]
        }
    }

    return window.alert(`Maior string do array ${x}: ${str}`);
}