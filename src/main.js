//Stephanie Orantes
// Lo hare de manera separada para tener un mayor orden, cuando tenga todo el juego lo pasare a una a la menor
// cantidad de archivos posible, pero mantendre este pagina para irme guiando. 
// Clase Personaje
class Personaje {
    constructor(nombre, clase, nivel, experiencia) {
        this.nombre = nombre;
        this.clase = clase;
        this.nivel = nivel;
        this.experiencia = experiencia;
    }

    atacar(enemigo) {
        // Lógica de combate
    }

    ganarExperiencia(experienciaGanada) {
        this.experiencia += experienciaGanada;
        // Lógica para subir de nivel si es necesario
    }
}

// Clase Enemigo
class Enemigo {
    constructor(nombre, nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
    }

    recibirAtaque(ataque) {
        // Lógica para recibir daño
    }
}

// Clase Jugador (extiende de Personaje)
class Jugador extends Personaje {
    constructor(nombre, clase) {
        super(nombre, clase, 1, 0);
    }
}

// Aquí puedes agregar más clases de personajes, habilidades, etc.

// Evento de carga de página
document.addEventListener("DOMContentLoaded", () => {
    // Aquí puedes escribir el código para crear y gestionar personajes
});
