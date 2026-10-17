//Ejercicio 1
const frutas = ["manzana", "banana", "pera", "naranja"]

for(let i = 0; i < frutas.length; i++) {
    console.log("Indice:", i, ", Valor:", frutas[i]);
}

//Ejercicio 2
frutas.push("kiwi");
frutas.unshift("sandía");
frutas.shift();
frutas.pop();

console.log("Arreglo final:", frutas);