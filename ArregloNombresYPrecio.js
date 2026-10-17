//Ejercicio 8
const nombres = ["Ana", "Carlos", "Sofía", "Mateo"];
const nombresInv = [];

for (let i = nombres.length - 1; i >= 0; i--) {
    nombresInv.push(nombres[i]);
}
console.log("Nombres en orden inverso:", nombresInv);

//Ejercicio 7
const precios = [150, 320, 80, 450, 140];
let acumulador = 0;

for (let precio of precios) {
    acumulador += precio;
}
const promedio = precios.length > 0 ? acumulador / precios.length : 0;
console.log("Gasto total:", acumulador);
console.log("Precio promedio:", promedio);