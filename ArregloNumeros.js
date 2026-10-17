//Ejercicio 3
const num = [ 10, 20, 30, 40, 50 ]
let numB = 30; 

if (num.includes(numB)) {
    console.log("El número ", numB, " se encuentra en el arreglo.");
} else {
    console.log("El número ", numB, " no se encuentra en el arreglo.");
}

//Ejercicio 4
const v = [1, 2, 3, 2, 4, 2, 5];
let cont = 0;

for (let i = 0; i < v.length; i++) {
    if (v[i] === 2) {
        cont++;
    }
}
console.log(`El número 2 se repite ${cont} veces.`);

//Ejercicio 5
const original = [5, 12, 8, 20, 3, 15];
const mayor = [];

for (let i = 0; i < original.length; i++) {
    if (original[i] > 10) {
        mayor.push(original[i]);
    }
}
console.log("Números mayores a 10:", mayor);