//Código para el consejo del día de la página index general
// Definir el mazo de Arcanos Mayores
const mazo = [
    { url: "./img/Arcanos Mayores/elcarro.jpg", descripcion: "El Carro", consejo: "Mantén el control de tu destino y avanza con confianza." },
    { url: "./img/Arcanos Mayores/elcolgado.jpg", descripcion: "El Colgado", consejo: "Es momento de ver las cosas desde otra perspectiva y hacer sacrificios." },
    { url: "./img/Arcanos Mayores/eldiablo.jpg", descripcion: "El Diablo", consejo: "Liberate de las ataduras que te limitan y busca la verdad." },
    { url: "./img/Arcanos Mayores/elemperador.jpg", descripcion: "El Emperador", consejo: "El liderazgo y la estabilidad son claves en este momento." },
    { url: "./img/Arcanos Mayores/elermitaño.jpg", descripcion: "El Ermitaño", consejo: "Busca la sabiduría en tu interior y busca la soledad para encontrar respuestas." },
    { url: "./img/Arcanos Mayores/eljuicio.jpg", descripcion: "El Juicio", consejo: "Es tiempo de tomar decisiones importantes y dejar el pasado atrás." },
    { url: "./img/Arcanos Mayores/elloco.jpg", descripcion: "El Loco", consejo: "Animate a dar el primer paso en una nueva aventura sin miedo." },
    { url: "./img/Arcanos Mayores/elmago.jpg", descripcion: "El Mago", consejo: "Tenes todas las herramientas para manifestar lo que deseas. Aprovecha tu poder." },
    { url: "./img/Arcanos Mayores/elmundo.jpg", descripcion: "El Mundo", consejo: "La armonía y el éxito están a tu alcance. El ciclo se ha completado." },
    { url: "./img/Arcanos Mayores/elpapa.jpg", descripcion: "El Papa", consejo: "Busca la orientación espiritual y la sabiduría de aquellos en quienes confías." },
    { url: "./img/Arcanos Mayores/elsol.jpg", descripcion: "El Sol", consejo: "La claridad y la felicidad están contigo. Disfruta del éxito." },
    { url: "./img/Arcanos Mayores/laemperatriz.jpg", descripcion: "La Emperatriz", consejo: "Fomenta la creatividad y el cuidado, ya sea en el hogar o en tu vida profesional." },
    { url: "./img/Arcanos Mayores/laestrella.jpg", descripcion: "La Estrella", consejo: "La esperanza y la inspiración te guían. Mantén tu fe en el futuro." },
    { url: "./img/Arcanos Mayores/lafuerza.jpg", descripcion: "La Fuerza", consejo: "Tu valentía y fuerza interior te llevarán a superar cualquier obstáculo." },
    { url: "./img/Arcanos Mayores/lajusticia.jpg", descripcion: "La Justicia", consejo: "El equilibrio y la verdad prevalecerán. Haz lo correcto y las cosas se resolverán." },
    { url: "./img/Arcanos Mayores/laluna.jpg", descripcion: "La Luna", consejo: "Presta atención a tus intuiciones y sueños, pero ten cuidado con las ilusiones." },
    { url: "./img/Arcanos Mayores/lamuerte.jpg", descripcion: "La Muerte", consejo: "Es momento de un cierre importante. Deja ir lo que ya no te sirve para hacer espacio a lo nuevo." },
    { url: "./img/Arcanos Mayores/laruedadelafortuna.jpg", descripcion: "La Rueda de la Fortuna", consejo: "El destino está cambiando. Aprovecha las oportunidades cuando lleguen." },
    { url: "./img/Arcanos Mayores/lasacerdotiza.jpg", descripcion: "La Sacerdotiza", consejo: "Escucha tu sabiduría interior. Los secretos están por ser revelados." },
    { url: "./img/Arcanos Mayores/latemplanza.jpg", descripcion: "La Templanza", consejo: "Busca el equilibrio en todos los aspectos de tu vida y no te precipites." },
    { url: "./img/Arcanos Mayores/latorre.jpg", descripcion: "La Torre", consejo: "A veces, la destrucción es necesaria para la renovación. Acepta los cambios." },
    { url: "./img/Arcanos Mayores/losenamorados.jpg", descripcion: "Los Enamorados", consejo: "Es tiempo de tomar decisiones desde el corazón. La armonía en tus relaciones es clave." }
];


// Crear objeto de audio para el sonido "brillos"
const sonidoBrillos = new Audio("sonidos/brillos.mp3");
sonidoBrillos.volume = 0.1; // Ajustar volumen de "brillos.mp3"

// Función para mostrar una carta random
function mostrarCarta() {
    // Reproducir el sonido "brillos.mp3" una sola vez
    sonidoBrillos.play();

    // Seleccionar una carta al azar del mazo
    let cartaAleatoria = mazo[Math.floor(Math.random() * mazo.length)];

    // Obtener el elemento de la carta
    let cartaImg = document.querySelector(".carta");
    
    // Mostrar la imagen de la carta seleccionada
    cartaImg.src = cartaAleatoria.url;
    cartaImg.alt = cartaAleatoria.descripcion; // Cambiar el texto alternativo con el nombre de la carta

    // Obtener el elemento donde mostrar la descripción y el consejo
    let descripcion = document.querySelector("#descripcion");
    descripcion.textContent = `${cartaAleatoria.descripcion}: ${cartaAleatoria.consejo}`; // Mostrar el consejo
}

// Añadir el evento click al botón para mostrar una carta
document.querySelector(".botoncartadeldia").addEventListener("click", mostrarCarta);

//Función para validar formulario
document.querySelector("form").addEventListener("submit", function(event) {
    let isValid = true;

    // Validación de email
    const email = document.getElementById("email").value;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email válido.");
        isValid = false;
    }

    // Validación de teléfono
    const telefono = document.getElementById("telefono").value;
    const telefonoRegex = /^[0-9]{10}$/;  // Asegura exactamente 10 dígitos
    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono debe contener 10 dígitos.");
        isValid = false;
    }

    // Validación de fecha (no permitir fechas pasadas)
    const fecha = document.getElementById("fecha").value;
    const fechaSeleccionada = new Date(fecha);
    const hoy = new Date();
    if (fechaSeleccionada < hoy) {
        alert("La fecha seleccionada no puede ser pasada.");
        isValid = false;
    }

    // Validación de tirada (es obligatorio)
    const tirada = document.getElementById("tirada").value;
    if (tirada === "") {
        alert("Por favor, selecciona una tirada.");
        isValid = false;
    }

    // Validación de cómo nos conociste (es obligatorio)
    const fikatarot = document.getElementById("fikatarot").value;
    if (fikatarot === "") {
        alert("Por favor, selecciona cómo nos conociste.");
        isValid = false;
    }

    // Si alguna validación falla, previene el envío del formulario
    if (!isValid) {
        event.preventDefault();
    }
});

 // Crear un nuevo objeto Audio para el sonido de brillitos
 const brillitosSonido = new Audio("sonidos/brillos.mp3");
 brillitosSonido.volume = 0.5; // Ajustar volumen (0.0 a 1.0)

 // Obtener el elemento de la carta del día
 const cartaDelDia = document.querySelector('.botoncartadeldia');

 // Añadir un event listener al hacer clic en la carta
 cartaDelDia.addEventListener('click', function() {
     brillitosSonido.play(); // Reproducir el sonido de brillitos al hacer clic
 });

