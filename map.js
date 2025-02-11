// Crear un Map

let contenedorMap = new Map();


// Añadir elementos (clave, valor)

contenedorMap.set("nombre", "Isaias");

contenedorMap.set("edad", 30);

contenedorMap.set(100, "cien"); // Clave numérica


// Obtener valores usando claves

console.log(contenedorMap.get("nombre")); // Imprime: Juan

console.log(contenedorMap.get(100)); // Imprime: cien


// Comprobar si una clave existe

console.log(contenedorMap.has("edad")); // Imprime: true

console.log(contenedorMap.has("profesion")); // Imprime: false


// Eliminar un elemento por clave

contenedorMap.delete("edad");