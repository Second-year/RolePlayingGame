class Personaje {
    constructor(nombre, clase, nivel, experiencia) {
        this.nombre = nombre;
        this.clase = clase;
        this.nivel = nivel;
        this.experiencia = experiencia;
    }

    atacar(enemigo) {
        // Lógica de combate
        console.log(`${this.nombre} ataca a ${enemigo.nombre}`);
    }

    ganarExperiencia(experienciaGanada) {
        this.experiencia += experienciaGanada;
        // Lógica para subir de nivel si es necesario
        if (this.experiencia >= this.nivel * 100) {
            this.nivel++;
            console.log(`${this.nombre} sube de nivel a ${this.nivel}`);
        }
    }
}
<script src="js/main.js"></script>