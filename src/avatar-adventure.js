//Stephanie Orantes
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Cargar imágenes de personajes
//Inuyasha
const playerImage = new Image();
playerImage.src = 'https://th.bing.com/th/id/R.db5eca0d43b9b412b32749c0bc2290fb?rik=uXQ9sESWoDAGLA&pid=ImgRaw&r=0';
//sesshomaru
const playerImage = new Image();
playerImage.src = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c715c1a4-51a2-4e2a-8786-7057fcbae3e3/dc9qcca-ada5b6ce-e537-4a34-b400-a5495cb8cf31.png/v1/fill/w_600,h_659/sesshomaru_by_katelinelaine_dc9qcca-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjU5IiwicGF0aCI6IlwvZlwvYzcxNWMxYTQtNTFhMi00ZTJhLTg3ODYtNzA1N2ZjYmFlM2UzXC9kYzlxY2NhLWFkYTViNmNlLWU1MzctNGEzNC1iNDAwLWE1NDk1Y2I4Y2YzMS5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.PnBp7WsKwFCdcFW2LtMVcjlCznS2FHQdwz694DRduKg';
//Kikio
const playerImage = new Image();
playerImage.src = 'https://th.bing.com/th/id/OIP.fh0VojfeXeX0yAnLbn7OTAHaNp?pid=ImgDet&rs=1';
//Kaome
const playerImage = new Image();
playerImage.src = 'https://th.bing.com/th/id/R.32369472c2e3cb7853c76df63dd9fe08?rik=kpCpke9mskkNzQ&riu=http%3a%2f%2fimg05.deviantart.net%2f7924%2fi%2f2013%2f305%2fe%2f9%2fkagome_png_by_animepng-d6soxpv.png&ehk=KpkLrCtFmOLX%2fMeyIcKFn7lbVYFuZ0WsI4Z0Wv%2bteZo%3d&risl=&pid=ImgRaw&r=0';

// Definir el personaje
const player = {
    x: 50,
    y: 50,
    width: 64, // Ancho de la imagen
    height: 64, // Alto de la imagen
    speed: 2,
};

// Función para dibujar al personaje
function drawPlayer() {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

// Función para actualizar el juego
function update() {
    // Lógica de movimiento del personaje
    if (keys["ArrowUp"]) {
        player.y -= player.speed;
    }
    if (keys["ArrowDown"]) {
        player.y += player.speed;
    }
    if (keys["ArrowLeft"]) {
        player.x -= player.speed;
    }
    if (keys["ArrowRight"]) {
        player.x += player.speed;
    }

    // Borrar el lienzo
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar al personaje
    drawPlayer();

    // Llamar a la función 'update' de manera recursiva
    requestAnimationFrame(update);
}

// Manejo de teclas
const keys = {};
window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});
window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

// Comenzar el juego
update();
