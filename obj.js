let persona = {

    nombre: "Claudio",

    edad: 30,

    saludar: function() {

      console.log("¡Hola! Soy " + this.nombre);

    }

  };


console.log(persona.nombre); // Imprime: Claudio

persona.saludar(); // Imprime: ¡Hola! Soy Claudio

