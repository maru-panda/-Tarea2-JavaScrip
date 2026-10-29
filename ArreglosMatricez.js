//Ejercicio 8
const matriz = [
    [2, 65, -55],
    [1000, 0, 88],
    [-13, 89, 67]
];

sumaTotal = 0;

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        sumaTotal += matriz[i][j];
    }
}

console.log("La suma total de todos los elementos es:", sumaTotal);

//Ejercicio 9
const oceano = [
    ["~", "~", "~"],
    ["~", "B", "~"],
    ["~", "~", "~"]
];

let filaBarco = -1;
let columnaBarco = -1;

for (let i = 0; i < oceano.length; i++) {
    for (let j = 0; j < oceano[i].length; j++) {
        if (oceano[i][j] === "B") {
            filaBarco = i;
            columnaBarco = j;
            break;
        }
    }
}
console.log("El barco se encuentra en la Fila: ", filaBarco, ", Columna: ", columnaBarco);
