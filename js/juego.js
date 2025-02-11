// Definir las cartas y sus descripciones (mazo)
    const mazo = [
      { url: "./img/Arcanos Mayores/elcarro.jpg", descripcion: "El Carro" },
      { url: "./img/Arcanos Mayores/elcolgado.jpg", descripcion: "El Colgado" },
      { url: "./img/Arcanos Mayores/eldiablo.jpg", descripcion: "El Diablo" },
      { url: "./img/Arcanos Mayores/elemperador.jpg", descripcion: "El Emperador" },
      { url: "./img/Arcanos Mayores/elermitaño.jpg", descripcion: "El Ermitaño" },
      { url: "./img/Arcanos Mayores/eljuicio.jpg", descripcion: "El Juicio" },
      { url: "./img/Arcanos Mayores/elloco.jpg", descripcion: "El Loco" },
      { url: "./img/Arcanos Mayores/elmago.jpg", descripcion: "El Mago" },
      { url: "./img/Arcanos Mayores/elmundo.jpg", descripcion: "El Mundo" },
      { url: "./img/Arcanos Mayores/elpapa.jpg", descripcion: "El Papa" },
      { url: "./img/Arcanos Mayores/elsol.jpg", descripcion: "El Sol" },
      { url: "./img/Arcanos Mayores/laemperatriz.jpg", descripcion: "La Emperatriz" },
      { url: "./img/Arcanos Mayores/laestrella.jpg", descripcion: "La Estrella" },
      { url: "./img/Arcanos Mayores/lafuerza.jpg", descripcion: "La Fuerza" },
      { url: "./img/Arcanos Mayores/lajusticia.jpg", descripcion: "La Justicia" },
      { url: "./img/Arcanos Mayores/laluna.jpg", descripcion: "La Luna" },
      { url: "./img/Arcanos Mayores/lamuerte.jpg", descripcion: "La Muerte" },
      { url: "./img/Arcanos Mayores/laruedadelafortuna.jpg", descripcion: "La Rueda de la Fortuna" },
      { url: "./img/Arcanos Mayores/lasacerdotiza.jpg", descripcion: "La Sacerdotiza" },
      { url: "./img/Arcanos Mayores/latemplanza.jpg", descripcion: "La Templanza" },
      { url: "./img/Arcanos Mayores/latorre.jpg", descripcion: "La Torre" },
      { url: "./img/Arcanos Mayores/losenamorados.jpg", descripcion: "Los Enamorados" }
    ];

    // Significados de combinaciones de cartas
    const meanings = {
      "El Carro + El Sol": "Victoria y éxito",
      "La Muerte + El Juicio": "Transformación profunda",
      "El Loco + La Fuerza": "Nuevo comienzo valiente",
      "La Torre + El Sol": "Cambio abrupto pero positivo",
      "El Ermitaño + La Luna": "Búsqueda introspectiva",
      "La Sacerdotisa + El Diablo": "Tentaciones ocultas",
      "La Estrella + La Luna": "Esperanza incierta",
      "El Papa + La Emperatriz": "Sabiduría maternal",
      "La Fuerza + El Mundo": "Superación total",
      "La Rueda de la Fortuna + El Mago": "Oportunidad de manifestar",
      "La Templanza + El Juicio": "Equilibrio en el despertar",
      "El Colgado + El Sol": "Claridad tras el sacrificio",
      "La Luna + El Carro": "Confusión en el viaje",
      "El Ermitaño + El Diablo": "Aislamiento por adicciones",
      "La Sacerdotisa + La Rueda de la Fortuna": "Intuición en el destino",
      "El Mago + La Fuerza": "Poder para crear",
      "La Torre + La Emperatriz": "Ruina en la estabilidad",
      "La Estrella + El Papa": "Fe espiritual",
      "El Colgado + La Muerte": "Sacrificio para transformación",
      "La Templanza + El Loco": "Equilibrio en la aventura"
    };

    let score = 0;
    let timeLeft = 60;
    let roundsLeft = 20;
    let timerInterval;

    document.getElementById('start-button').addEventListener('click', startGame);

    function startGame() {
      document.getElementById('game').style.display = 'block';
      document.getElementById('start-button').style.display = 'none';
      score = 0;
      roundsLeft = 20;
      timeLeft = 60;
      document.getElementById('score').innerText = "Puntos: " + score;
      document.getElementById('time-left').innerText = "Tiempo: " + timeLeft;
      document.getElementById('rounds-left').innerText = "Rondas restantes: " + roundsLeft;
      startTimer();
      nextRound();
    }

    function startTimer() {
      timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById('time-left').innerText = "Tiempo: " + timeLeft;
        if (timeLeft <= 0 || roundsLeft <= 0) {
          clearInterval(timerInterval);
          alert("¡Tiempo finalizado o se han completado las rondas! Tu puntaje es: " + score);
          resetGame();
        }
      }, 1000);
    }

    function resetGame() {
      document.getElementById('game').style.display = 'none';
      document.getElementById('start-button').style.display = 'block';
    }

    function nextRound() {
      if (roundsLeft <= 0) return;

      const card1 = getRandomCard();
      const card2 = getRandomCard();
      const correctMeaning = meanings[`${card1.descripcion} + ${card2.descripcion}`] || "";

      document.getElementById('cards').innerHTML = `
        <div class="card"><img src="${card1.url}" alt="${card1.descripcion}" style="width: 100%; height: auto; border-radius: 8px;" /></div>
        <div class="card"><img src="${card2.url}" alt="${card2.descripcion}" style="width: 100%; height: auto; border-radius: 8px;" /></div>
      `;

      generateOptions(correctMeaning);
      roundsLeft--;
      document.getElementById('rounds-left').innerText = "Rondas restantes: " + roundsLeft;
    }

    function getRandomCard() {
      return mazo[Math.floor(Math.random() * mazo.length)];
    }

    function generateOptions(correctMeaning) {
      const optionsContainer = document.getElementById('options');
      optionsContainer.innerHTML = "";  // Limpiar opciones anteriores

      // Generar una opción incorrecta aleatoria
      const allMeanings = Object.values(meanings).filter(m => m !== correctMeaning);
      const incorrectMeaning = allMeanings[Math.floor(Math.random() * allMeanings.length)];

      // Crear las opciones (correcta + incorrecta)
      const allOptions = [correctMeaning, incorrectMeaning].sort(() => Math.random() - 0.5);
      
      allOptions.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => checkAnswer(option, correctMeaning));
        optionsContainer.appendChild(button);
      });
    }

    function checkAnswer(selectedOption, correctMeaning) {
      if (selectedOption === correctMeaning) {
        score++;
      }
      document.getElementById('score').innerText = "Puntos: " + score;
      nextRound();
    }
  