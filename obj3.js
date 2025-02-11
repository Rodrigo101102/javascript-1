let persona = {

  nombre: "Claudio",

  edad: 30,

  saludar: function() {

    console.log(`¡Hola! Mi nombre es ${this.nombre} y tengo ${this.edad} años.`);

  },

  cumplirAnios: function() {

    this.edad++;

  }

};


persona.saludar();  // ¡Hola! Mi nombre es Claudio y tengo 30 años.

persona.cumplirAnios();

persona.saludar();  // ¡Hola! Mi nombre es Claudio y tengo 31 años.

