// Clase base para elementos interactivos
class InteractiveElement {
    constructor(imageUrl) {
      this.imageUrl = imageUrl;
    }
  
    render() {
      const image = document.createElement('img');
      image.src = this.imageUrl;
      image.classList.add('cursor-pointer');
      return image;
    }
  }
  
  // Clase para imágenes interactivas
  class InteractiveImage extends InteractiveElement {
    constructor(imageUrl, id) {
      super(imageUrl);
      this.id = id;
    }
  
    render() {
      const image = super.render();
      image.addEventListener('click', () => onImageClick(this.id));
      return image;
    }
  }
  
  // Función para manejar el clic en las imágenes
  function onImageClick(imageId) {
    console.log(`Has hecho clic en la imagen ${imageId}`);
    // Acciones específicas según la imagen
  }
  
  // Función para iniciar el juego
  function startGame() {
    // Redirige a la siguiente pantalla del juego o realiza otras acciones de inicio
  }
  
  // Crear objetos de imágenes interactivas
  const image1 = new InteractiveImage('imagen1.png', 1);
  const image2 = new InteractiveImage('imagen2.png', 2);
  
  // Agregar las imágenes al DOM
  const imageContainer = document.getElementById('image-container');
  imageContainer.appendChild(image1.render());
  imageContainer.appendChild(image2.render());
  
  // Agregar un controlador de clic al botón de inicio
  const startButton = document.getElementById('start-button');
  startButton.addEventListener('click', startGame);
  