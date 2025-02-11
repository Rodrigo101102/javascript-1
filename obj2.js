let persona = new Object();

persona.nombre = "Claudio";

persona.edad = 30;

persona.saludar = function() {

  console.log("¡Buen día! Soy " + this.nombre);

};



console.log(persona.nombre); // Imprime: Claudio

persona.saludar(); // Imprime: ¡Hola! Soy Claudio