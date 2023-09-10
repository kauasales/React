let fib = []
fib[0] = 1
fib[1] = 1

function fibonacci(x){
    for(i=2; i<10; i++){
        x[i] = x[i-1] + x[i-2]
    }

    return window.alert(x);
}