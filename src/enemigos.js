class Enemigo {
    constructor(nombre, nivel) {
        this.nombre = nombre;
        this.nivel = nivel;
    }

    recibirAtaque(ataque) {
        // Lógica para recibir daño
        console.log(`${this.nombre} recibe ${ataque} puntos de daño`);
    }
}
<script src="js/main.js"></script>