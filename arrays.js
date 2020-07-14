// arrays son estructuras de datos de tipo objeto es un valor que guarda mas valores en el

var frutas = ["manzanas", "platano", "cereza", "fresa"];

console.log(frutas);

console.log(frutas.length); //length para medir la longitud del array

console.log(frutas[0]); // para buscar un objeto especifico en el array iniciando en 0

// metodos para mutar arrays

var masfrutas = frutas.push("uvas"); //push incerta un objeto dentro del array

var ultimo = frutas.pop("uvas"); //pop eliminaun objeto del array

var nuevalongitud = frutas.unshift("uvas"); //unshift añade un elemento al inicio se usa para dar prioridad a un objeto

var borrarfruta = frutas.shift("uvas"); // shift elimina el elemento que esta de primero

var posicion = frutas.indexOf("cereza");  //indexOf localiza las posiciones de los objetos en el array

