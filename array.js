//Unir elementos

const palabras = ['Buen día', 'mundo'];

const frase = palabras.join(' '); // frase es 'Hola mundo'

// Mostramos el resultado en la consola

console.log("Unión de palabras como:", frase);


// Crear un array con algunos números

let numeros = [10, 20, 30, 40, 50];


// Acceder a los elementos del array

console.log("Primer elemento:", numeros[0]);  // 10

console.log("Último elemento:", numeros[numeros.length - 1]);  // 50


// Modificar un valor en el array

numeros[1] = 25;

console.log("Array modificado:", numeros);  // [10, 25, 30, 40, 50]


// Agregar un nuevo elemento al final del array

numeros.push(60);

console.log("Array con un nuevo elemento:", numeros);  // [10, 25, 30, 40, 50, 60]


// Eliminar el último elemento del array

numeros.pop();

console.log("Array después de eliminar el último elemento:", numeros);  // [10, 25, 30, 40, 50]