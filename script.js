function ingresar() {
    // Animación de salida
    const portada = document.querySelector('.portada');
    portada.style.animation = 'fadeOut 0.5s ease';
    
    setTimeout(() => {
        // Redirigir al contenido principal del portafolio
        // Puedes cambiar esta URL por la página principal de tu portafolio
        alert('¡Bienvenido al Portafolio de JavaScript!');
        // window.location.href = "contenido.html";
        
        // O mostrar mensaje y reiniciar animación
        portada.style.animation = 'fadeIn 1s ease';
    }, 500);
}

// Agregar animación fadeOut
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: translateY(0); }
        to { opacity: 0; transform: translateY(-30px); }
    }
`;
document.head.appendChild(style);

// Efecto adicional: cambiar color de la marquesina cada cierto tiempo
let colors = ['#ffd700', '#ff6b6b', '#4ecdc4', '#45b7d1'];
let index = 0;
setInterval(() => {
    const marquesina = document.getElementById('marquesina');
    if (marquesina) {
        marquesina.style.color = colors[index % colors.length];
        index++;
    }
}, 3000);

console.log('Portafolio JS cargado correctamente');
console.log('Alumno: Santiago Gybram Juarez');
console.log('Docente: Felix Jonathan');
console.log('Campus: Texcoco');