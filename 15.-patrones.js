var filasCuadrado = 5;
let asteriscos = '';
for (let altura = 0; altura < filasCuadrado; altura++) {
    for (let relleno = 0; relleno < filasCuadrado; relleno++) {
        asteriscos += '*';
    } asteriscos += '\n';
} console.log(asteriscos);

/*-------------------------------------------------------------------- */

var filasPiramide = 5;
for (let altura = 1; altura <= filasPiramide; altura++) {
    let asteriscos = '';
    for (let agregar = 1; agregar <= altura; agregar++) {
        asteriscos += '*';
    }
    console.log(asteriscos);
}

console.log(""); /*------------------------------------------------- */


var filasRombo = 5;
if (filasRombo % 2 === 0) {
    console.log("El número de filas debe ser impar.");
} else {
    const mitad = Math.floor(filasRombo / 2);
    for (let altura = 0; altura < filasRombo; altura++) {
        let asteriscos = "";
        for (let espBlanco = 0; espBlanco < Math.abs(mitad - altura); espBlanco++) {
            asteriscos += " ";
        }
        for (let agregar = 0; agregar < 2 * (mitad - Math.abs(mitad - altura)) + 1; agregar++) {
            asteriscos += "*";
        }
        console.log(asteriscos);
    }
}

console.log(""); /*------------------------------------------------- */

