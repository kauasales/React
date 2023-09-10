let rec = () => window.prompt("Insira um número");

let inver = () => {
    num = rec()
    return window.alert(num.split('').reverse().join(''));
}