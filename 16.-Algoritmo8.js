/*
Dado un número entero, sumamos sus dígitos repetidamente
hasta que el resultado sea un solo dígito.
*/

var n = 1298;

function algoritmo8(n) {
    while (n >= 10) {
        console.log(n);
        n = n.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return n;
}

console.log(algoritmo8(n));
