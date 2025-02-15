// Definir las cartas y sus descripciones (mazo)
const mazo = [
  { url: "../img/Arcanos Mayores/elcarro.jpg", descripcion: "El Carro" },
  { url: "../img/Arcanos Mayores/elcolgado.jpg", descripcion: "El Colgado" },
  { url: "../img/Arcanos Mayores/eldiablo.jpg", descripcion: "El Diablo" },
  { url: "../img/Arcanos Mayores/elemperador.jpg", descripcion: "El Emperador" },
  { url: "../img/Arcanos Mayores/elermitaño.jpg", descripcion: "El Ermitaño" },
  { url: "../img/Arcanos Mayores/eljuicio.jpg", descripcion: "El Juicio" },
  { url: "../img/Arcanos Mayores/elloco.jpg", descripcion: "El Loco" },
  { url: "../img/Arcanos Mayores/elmago.jpg", descripcion: "El Mago" },
  { url: "../img/Arcanos Mayores/elmundo.jpg", descripcion: "El Mundo" },
  { url: "../img/Arcanos Mayores/elpapa.jpg", descripcion: "El Papa" },
  { url: "../img/Arcanos Mayores/elsol.jpg", descripcion: "El Sol" },
  { url: "../img/Arcanos Mayores/laemperatriz.jpg", descripcion: "La Emperatriz" },
  { url: "../img/Arcanos Mayores/laestrella.jpg", descripcion: "La Estrella" },
  { url: "../img/Arcanos Mayores/lafuerza.jpg", descripcion: "La Fuerza" },
  { url: "../img/Arcanos Mayores/lajusticia.jpg", descripcion: "La Justicia" },
  { url: "../img/Arcanos Mayores/laluna.jpg", descripcion: "La Luna" },
  { url: "../img/Arcanos Mayores/lamuerte.jpg", descripcion: "La Muerte" },
  { url: "../img/Arcanos Mayores/laruedadelafortuna.jpg", descripcion: "La Rueda de la Fortuna" },
  { url: "../img/Arcanos Mayores/lasacerdotiza.jpg", descripcion: "La Sacerdotiza" },
  { url: "../img/Arcanos Mayores/latemplanza.jpg", descripcion: "La Templanza" },
  { url: "../img/Arcanos Mayores/latorre.jpg", descripcion: "La Torre" },
  { url: "../img/Arcanos Mayores/losenamorados.jpg", descripcion: "Los Enamorados" }
];

// Significados de combinaciones de cartas
const meanings = {
  "El Carro + El Sol": "Victoria y éxito",
  "El Sol + El Carro": "Victoria y éxito",
  "La Muerte + El Juicio": "Transformación profunda",
  "El Juicio + La Muerte": "Transformación profunda",
  "El Loco + La Fuerza": "Nuevo comienzo valiente",
  "La Fuerza + El Loco": "Nuevo comienzo valiente",
  "La Torre + El Sol": "Cambio abrupto pero positivo",
  "El Sol + La Torre": "Cambio abrupto pero positivo",
  "El Ermitaño + La Luna": "Búsqueda introspectiva",
  "La Luna + El Ermitaño": "Búsqueda introspectiva",
  "La Sacerdotisa + El Diablo": "Tentaciones ocultas",
  "El Diablo + La Sacerdotisa": "Tentaciones ocultas",
  "La Estrella + La Luna": "Esperanza incierta",
  "La Luna + La Estrella": "Esperanza incierta",
  "El Papa + La Emperatriz": "Sabiduría maternal",
  "La Emperatriz + El Papa": "Sabiduría maternal",
  "La Fuerza + El Mundo": "Superación total",
  "El Mundo + La Fuerza": "Superación total",
  "La Rueda de la Fortuna + El Mago": "Oportunidad de manifestar",
  "El Mago + La Rueda de la Fortuna": "Oportunidad de manifestar",
  "La Templanza + El Juicio": "Equilibrio en el despertar",
  "El Juicio + La Templanza": "Equilibrio en el despertar",
  "El Colgado + El Sol": "Claridad tras el sacrificio",
  "El Sol + El Colgado": "Claridad tras el sacrificio",
  "La Luna + El Carro": "Confusión en el viaje",
  "El Carro + La Luna": "Confusión en el viaje",
  "El Ermitaño + El Diablo": "Aislamiento por adicciones",
  "El Diablo + El Ermitaño": "Aislamiento por adicciones",
  "La Sacerdotisa + La Rueda de la Fortuna": "Intuición en el destino",
  "La Rueda de la Fortuna + La Sacerdotisa": "Intuición en el destino",
  "El Mago + La Fuerza": "Poder para crear",
  "La Fuerza + El Mago": "Poder para crear",
  "La Torre + La Emperatriz": "Ruina en la estabilidad",
  "La Emperatriz + La Torre": "Ruina en la estabilidad",
  "La Estrella + El Papa": "Fe espiritual",
  "El Papa + La Estrella": "Fe espiritual",
  "El Colgado + La Muerte": "Sacrificio para transformación",
  "La Muerte + El Colgado": "Sacrificio para transformación",
  "La Templanza + El Loco": "Equilibrio en la aventura",
  "El Loco + La Templanza": "Equilibrio en la aventura"
};

// Variables para el puntaje, tiempo y rondas
let score = 0;
let timeLeft = 60;
let roundsLeft = 20;
let timerInterval;

// Iniciar el juego cuando se hace clic en el botón de inicio
document.getElementById('start-button').addEventListener('click', startGame);

// Función que comienza el juego
function startGame() {
  // Muestra el área del juego y oculta el botón de inicio
  document.getElementById('game').style.display = 'block';
  document.getElementById('start-button').style.display = 'none';
  document.getElementById('cartabase').style.display = 'none';
  
  // Restablece el puntaje, las rondas y el tiempo
  score = 0;
  roundsLeft = 20;
  timeLeft = 60;
  
  // Muestra los valores iniciales en la interfaz
  document.getElementById('score').innerText = "Puntos: " + score;
  document.getElementById('time-left').innerText = "Tiempo: " + timeLeft;
  document.getElementById('rounds-left').innerText = "Rondas restantes: " + roundsLeft;
  
  // Inicia el temporizador y comienza la primera ronda
  startTimer();
  nextRound();
}

// Función para iniciar el temporizador
function startTimer() {
  timerInterval = setInterval(() => {
      timeLeft--; // Resta un segundo
      document.getElementById('time-left').innerText = "Tiempo: " + timeLeft; // Muestra el tiempo restante

      // Si el tiempo se acaba o las rondas llegan a cero, finaliza el juego
      if (timeLeft <= 0 || roundsLeft <= 0) {
          clearInterval(timerInterval); // Detiene el temporizador
          alert("¡Tiempo finalizado o se han completado las rondas! Tu puntaje es: " + score); // Muestra el puntaje final
          resetGame(); // Reinicia el juego
      }
  }, 1000); // Ejecuta la función cada segundo
}

// Función para reiniciar el juego
function resetGame() {
  document.getElementById('game').style.display = 'none'; // Oculta el área del juego
  document.getElementById('start-button').style.display = 'block'; // Muestra el botón de inicio
}

// Función para comenzar la siguiente ronda
function nextRound() {
  if (roundsLeft <= 0) return; // Si ya no quedan rondas, termina la función

  // Selecciona dos cartas aleatorias
  const card1 = getRandomCard();
  const card2 = getRandomCard();

  // Intenta encontrar una combinación válida de cartas que tenga un significado
  let correctMeaning = meanings[`${card1.descripcion} + ${card2.descripcion}`];

  // Si no existe el significado para la combinación, buscamos la combinación inversa
  if (!correctMeaning) {
      correctMeaning = meanings[`${card2.descripcion} + ${card1.descripcion}`];
  }

  // Si la combinación no tiene significado (lo cual no debería pasar), simplemente encuentra una combinación válida
  if (!correctMeaning) {
      // Aquí puede poner una validación más compleja, pero por ahora seleccionamos una combinación válida aleatoria
      const validCombinations = Object.keys(meanings);
      const randomCombination = validCombinations[Math.floor(Math.random() * validCombinations.length)];
      correctMeaning = meanings[randomCombination];
  }

  // Muestra las cartas seleccionadas
  document.getElementById('cards').innerHTML = `
      <div class="card"><img src="${card1.url}" alt="${card1.descripcion}" style="width: 100%; height: auto; border-radius: 8px;" /></div>
      <div class="card"><img src="${card2.url}" alt="${card2.descripcion}" style="width: 100%; height: auto; border-radius: 8px;" /></div>
  `;

  // Genera las opciones (correcta e incorrecta)
  generateOptions(correctMeaning);

  // Reduce las rondas restantes
  roundsLeft--;
  document.getElementById('rounds-left').innerText = "Rondas restantes: " + roundsLeft;
}

// Función para obtener una carta aleatoria del mazo
function getRandomCard() {
  return mazo[Math.floor(Math.random() * mazo.length)]; // Selecciona una carta aleatoria
}

// Función para generar las opciones de respuesta
function generateOptions(correctMeaning) {
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = "";  // Limpiar opciones anteriores

  // Filtra los significados incorrectos
  const allMeanings = Object.values(meanings).filter(m => m !== correctMeaning);
  const incorrectMeaning = allMeanings[Math.floor(Math.random() * allMeanings.length)];

  // Mezcla las opciones (correcta + incorrecta)
  const allOptions = [correctMeaning, incorrectMeaning].sort(() => Math.random() - 0.5);
  
  // Crea un botón para cada opción
  allOptions.forEach(option => {
      const button = document.createElement('button');
      button.innerText = option;
      button.addEventListener('click', () => checkAnswer(option, correctMeaning)); // Verifica la respuesta
      optionsContainer.appendChild(button); // Añade el botón al contenedor de opciones
  });
}

// Función para verificar si la respuesta seleccionada es correcta
function checkAnswer(selectedOption, correctMeaning) {
  if (selectedOption === correctMeaning) {
      score++; // Si la respuesta es correcta, incrementa el puntaje
  }
  
  // Muestra el puntaje actualizado
  document.getElementById('score').innerText = "Puntos: " + score;
  
  // Pasa a la siguiente ronda
  nextRound();
}
