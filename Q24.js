let x = 10
let y = 32

function pares(j, k){

    let array = []

    for(i=j+1; i<k; i++){
        if(i%2 == 0){
            array.push(i)
        }
    }

    return window.alert(array);
}