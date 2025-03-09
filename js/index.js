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
    typewriter.typeString('¡Hace Click en la carta para recibir tu conejo!')
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


 //VALIDAR FORMULARIO 
 // Espera a que todo el contenido de la página se haya cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    
    // Seleccionamos el formulario y los campos específicos por su id
    const form = document.querySelector('form'); // El formulario en sí
    const email = document.getElementById('email'); // El campo de email
    const telefono = document.getElementById('telefono'); // El campo de teléfono
    const fecha = document.getElementById('fecha'); // El campo de fecha
    
    // Agregamos un "escuchador" de eventos para cuando el formulario sea enviado
    form.addEventListener('submit', function(event) {
        let valid = true; // Variable para llevar el estado de la validación

        // Validación del email: Verifica si el formato del email es correcto
        if (!validateEmail(email.value)) {
            valid = false; // Si la validación falla, cambiamos el estado a false
            alert('Por favor ingrese un email válido'); // Mostramos un mensaje de alerta
        }

        // Validación del teléfono: Verifica si el teléfono tiene exactamente 10 dígitos
        if (!validatePhone(telefono.value)) {
            valid = false; // Si la validación falla, cambiamos el estado a false
            alert('El teléfono debe tener 10 dígitos'); // Mostramos un mensaje de alerta
        }

        // Validación de la fecha: Verifica si se ha seleccionado una fecha
        if (!fecha.value) {
            valid = false; // Si la validación falla, cambiamos el estado a false
            alert('Por favor seleccione una fecha'); // Mostramos un mensaje de alerta
        }

        // Si alguna validación ha fallado, evitamos que el formulario sea enviado
        if (!valid) {
            event.preventDefault(); // Detiene el envío del formulario
        }
    });

    // Función para validar el formato de un email utilizando una expresión regular
    function validateEmail(email) {
        // Expresión regular que valida un formato de email estándar
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return emailRegex.test(email); // Retorna true si el formato es válido
    }

    // Función para validar el formato del teléfono utilizando una expresión regular
    function validatePhone(phone) {
        // Expresión regular que asegura que el teléfono tenga 10 dígitos numéricos
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone); // Retorna true si el teléfono tiene 10 dígitos
    }
});
