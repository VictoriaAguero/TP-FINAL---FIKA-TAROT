//Librería JS - SAFY ME - Efector escribir
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos el elemento donde aplicaremos el efecto
    const element = document.getElementById('typewriter-text');

    // Creamos una instancia del efecto
    const typewriter = new Typewriter(element, {
        loop: true,          // Para que el texto se repita
        delay: 75,           // Ajusta la velocidad de escritura
        deleteSpeed: 50,     // Ajusta la velocidad de borrado
    });

    // Definimos el texto que se escribirá
    typewriter.typeString('¡Hace Click en la carta para recibir tu consejo!')
        .pauseFor(1500)  // Pausa de 1.5 segundos
        .deleteAll()     // Elimina todo el texto
        .typeString('Pero ojo porque tenes que confiar en el primero que te toca, no existen las coincidencias pero si existe la sincronicidad...')
        .pauseFor(1500)
        .deleteAll()
        .start();  // Inicia el efecto
});



//Código para el consejo del día de la página index general
// Definir el mazo de Arcanos Mayores
const mazo = [
    { url: "./img/arcanosmayores/elcarro.jpg", descripcion: "El Carro", consejo: "Mantén el control de tu destino y avanza con confianza." },
    { url: "./img/arcanosmayores/elcolgado.jpg", descripcion: "El Colgado", consejo: "Es momento de ver las cosas desde otra perspectiva y hacer sacrificios." },
    { url: "./img/arcanosmayores/eldiablo.jpg", descripcion: "El Diablo", consejo: "Liberate de las ataduras que te limitan y busca la verdad." },
    { url: "./img/arcanosmayores/elemperador.jpg", descripcion: "El Emperador", consejo: "El liderazgo y la estabilidad son claves en este momento." },
    { url: "./img/arcanosmayores/elermitaño.jpg", descripcion: "El Ermitaño", consejo: "Busca la sabiduría en tu interior y busca la soledad para encontrar respuestas." },
    { url: "./img/arcanosmayores/eljuicio.jpg", descripcion: "El Juicio", consejo: "Es tiempo de tomar decisiones importantes y dejar el pasado atrás." },
    { url: "./img/arcanosmayores/elloco.jpg", descripcion: "El Loco", consejo: "Animate a dar el primer paso en una nueva aventura sin miedo." },
    { url: "./img/arcanosmayores/elmago.jpg", descripcion: "El Mago", consejo: "Tenes todas las herramientas para manifestar lo que deseas. Aprovecha tu poder." },
    { url: "./img/arcanosmayores/elmundo.jpg", descripcion: "El Mundo", consejo: "La armonía y el éxito están a tu alcance. El ciclo se ha completado." },
    { url: "./img/arcanosmayores/elpapa.jpg", descripcion: "El Papa", consejo: "Busca la orientación espiritual y la sabiduría de aquellos en quienes confías." },
    { url: "./img/arcanosmayores/elsol.jpg", descripcion: "El Sol", consejo: "La claridad y la felicidad están contigo. Disfruta del éxito." },
    { url: "./img/arcanosmayores/laemperatriz.jpg", descripcion: "La Emperatriz", consejo: "Fomenta la creatividad y el cuidado, ya sea en el hogar o en tu vida profesional." },
    { url: "./img/arcanosmayores/laestrella.jpg", descripcion: "La Estrella", consejo: "La esperanza y la inspiración te guían. Mantén tu fe en el futuro." },
    { url: "./img/arcanosmayores/lafuerza.jpg", descripcion: "La Fuerza", consejo: "Tu valentía y fuerza interior te llevarán a superar cualquier obstáculo." },
    { url: "./img/arcanosmayores/lajusticia.jpg", descripcion: "La Justicia", consejo: "El equilibrio y la verdad prevalecerán. Haz lo correcto y las cosas se resolverán." },
    { url: "./img/arcanosmayores/laluna.jpg", descripcion: "La Luna", consejo: "Presta atención a tus intuiciones y sueños, pero ten cuidado con las ilusiones." },
    { url: "./img/arcanosmayores/lamuerte.jpg", descripcion: "La Muerte", consejo: "Es momento de un cierre importante. Deja ir lo que ya no te sirve para hacer espacio a lo nuevo." },
    { url: "./img/arcanosmayores/laruedadelafortuna.jpg", descripcion: "La Rueda de la Fortuna", consejo: "El destino está cambiando. Aprovecha las oportunidades cuando lleguen." },
    { url: "./img/arcanosmayores/lasacerdotiza.jpg", descripcion: "La Sacerdotiza", consejo: "Escucha tu sabiduría interior. Los secretos están por ser revelados." },
    { url: "./img/arcanosmayores/latemplanza.jpg", descripcion: "La Templanza", consejo: "Busca el equilibrio en todos los aspectos de tu vida y no te precipites." },
    { url: "./img/arcanosmayores/latorre.jpg", descripcion: "La Torre", consejo: "A veces, la destrucción es necesaria para la renovación. Acepta los cambios." },
    { url: "./img/arcanosmayores/losenamorados.jpg", descripcion: "Los Enamorados", consejo: "Es tiempo de tomar decisiones desde el corazón. La armonía en tus relaciones es clave." }
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

 // Crear un nuevo objeto Audio para el sonido de brillitos
 const brillitosSonido = new Audio("sonidos/brillos.mp3");
 brillitosSonido.volume = 0.5; // Ajustar volumen (0.0 a 1.0)

 // Obtener el elemento de la carta del día
 const cartaDelDia = document.querySelector('.botoncartadeldia');

 // Añadir un event listener al hacer clic en la carta
 cartaDelDia.addEventListener('click', function() {
     brillitosSonido.play(); // Reproducir el sonido de brillitos al hacer clic
 });


// VALIDACIÓN DEL FORMULARIO
document.querySelector("#validarform").addEventListener("submit", function(event) {
    let isValid = true;  // Variable para controlar si el formulario es válido

    // Función para validar el correo electrónico
    function emailCorrecto(email) {
        // Expresión regular para verificar que el correo tenga formato válido y dominios específicos
        const patron = /^[a-zA-Z0-9._%+-]+@(gmail\.com|[a-zA-Z0-9.-]+\.(ar|com\.ar))$/;
        return patron.test(email);  // Devuelve true si el correo cumple con el patrón
    }

    // Obtener el valor del campo de email
    const email = document.getElementById("email").value;  
    // Si el email no es válido, muestra un alert y marca el formulario como no válido
    if (!emailCorrecto(email)) {
        alert("Por favor, ingresa un email válido con dominio permitido (gmail.com, .ar, .com.ar).");
        isValid = false;
    }

    // Obtener el valor del campo de teléfono
    const telefono = document.getElementById("telefono").value;
    // Expresión regular para validar que el teléfono tenga 10 dígitos
    const telefonoRegex = /^[0-9]{10}$/;
    // Si el teléfono no es válido, muestra un alert y marca el formulario como no válido
    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono debe contener 10 dígitos.");
        isValid = false;
    }

    // Obtener el valor de la fecha seleccionada
    const fecha = document.getElementById("fecha").value;
    const fechaSeleccionada = new Date(fecha);  // Convertir la fecha a un objeto Date
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);  // Resetear las horas para comparar solo las fechas
    // Si la fecha seleccionada es anterior a la fecha actual, muestra un alert y marca el formulario como no válido
    if (fechaSeleccionada < hoy) {
        alert("La fecha seleccionada no puede ser pasada.");
        isValid = false;
    }

    // Obtener el valor de la tirada seleccionada
    const tirada = document.getElementById("tirada").value;
    // Si no se ha seleccionado ninguna tirada, muestra un alert y marca el formulario como no válido
    if (tirada === "") {
        alert("Por favor, selecciona una tirada.");
        isValid = false;
    }

    // Obtener el valor de cómo nos conoció el usuario
    const fikatarot = document.getElementById("fikatarot").value;
    // Si no se selecciono cómo nos conoció el usuario, muestra un alert y marca el formulario como no válido
    if (fikatarot === "") {
        alert("Por favor, selecciona cómo nos conociste.");
        isValid = false;
    }

    // Si alguna validación falla, prevenimos el envío del formulario
    if (!isValid) {
        event.preventDefault(); // Previene el envío del formulario
    } else {
        // Si todas las validaciones son correctas, muestra un mensaje de éxito
        alert("¡Formulario enviado exitosamente!");
    }
});
