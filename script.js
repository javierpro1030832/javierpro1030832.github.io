// Función para abrir la carta
document.getElementById('openButton').addEventListener('click', () => {
    const card = document.getElementById('card');
    card.classList.remove('closed'); // Abre la carta
    card.classList.add('open'); // Muestra el contenido de la carta
    document.getElementById('hearts').style.display = 'block'; // Muestra los corazones
    createHearts(); // Genera los corazones
    document.getElementById('openButton').style.display = 'none'; // Oculta el botón
});

// Función para generar corazones animados
function createHearts() {
    setInterval(() => {
        const heart = document.createElement("span");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        // Posicionamos el corazón en una posición aleatoria
        const maxX = document.getElementById("hearts").offsetWidth;
        const maxY = document.getElementById("hearts").offsetHeight;
        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        document.getElementById("hearts").appendChild(heart);

        // Elimina el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }, 500);
}
