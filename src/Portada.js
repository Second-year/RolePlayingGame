// STEPHANIE ORANTES
// Clase base para pantallas de bienvenida
class WelcomeScreen {
    constructor(title, backgroundClass) {
        this.title = title;
        this.backgroundClass = backgroundClass;
    }

    display() {
        const container = document.body;
        container.classList.add(this.backgroundClass);

        const titleElement = document.createElement('h1');
        titleElement.textContent = this.title;
        titleElement.classList.add('text-4xl', 'font-bold', 'text-white', 'mb-6');
        document.body.appendChild(titleElement);
    }
}

// Subclase para la pantalla de bienvenida de Orantes Castle
class OrantesCastleWelcomeScreen extends WelcomeScreen {
    constructor() {
        super('------La mejor batalla', 'bg-castle');
    }
}

// Función para iniciar el juego
function startGame() {
    // Redirige al siguiente archivo HTML
    window.location.href = 'index.html';

    // Muestra un mensaje de buena suerte al usuario
    alert('Para controlar el juego utiliza tu mouse. SUERTE');
}

// Agregar un controlador de clic al botón de inicio
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', startGame);

// Crear una instancia de la pantalla de bienvenida de Orantes Castle
const welcomeScreen = new OrantesCastleWelcomeScreen();
welcomeScreen.display();
