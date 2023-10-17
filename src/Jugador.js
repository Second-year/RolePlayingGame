//Stephanie Orantes
class Jugador extends Personaje {
    constructor(nombre, clase) {
        super(nombre, clase, 1, 0);
    }
}

// Clase Guerrero (extiende de Jugador)
class Guerrero extends Jugador {
    constructor(nombre) {
        super(nombre, "Guerrero");
    }

    //Habilidades específicas del Guerrero
    usarHabilidadEspecial(enemigo) {
        console.log(`${this.nombre} usa una habilidad especial contra ${enemigo.nombre}`);
        // Lógica de la habilidad especial
    }
}

// Evento de carga de página
document.addEventListener("DOMContentLoaded", () => {
    // Creación y gestión de personajes
    const jugador1 = new Guerrero("Aragorn");
    const enemigo1 = new Enemigo("Orco", 1);

    jugador1.atacar(enemigo1);
    enemigo1.recibirAtaque(10);
    jugador1.ganarExperiencia(50);
    jugador1.usarHabilidadEspecial(enemigo1);
});
<script src="js/main.js"></script>