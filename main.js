// Barra de navegación - animación

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

// show/hide respuesta

const preguntas = document.querySelectorAll('.pregunta');

preguntas.forEach(pregunta => {
    pregunta.addEventListener('click', () => {
        pregunta.classList.toggle('open');

        // Cambio de ícono
        const icon = pregunta.querySelector('.pregunta__icon i');
        if(icon.className == 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }else{
            icon.className = "uil uil-plus";
        }
    })
})

/* show/hide Nav Bar */

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close navBar

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

/* ACTIVIDAD 1 NIVEL INTERMEDIO */

function verificarPalabra(campoIndex, palabraCorrecta) {
    const campo = document.getElementById(`campo${campoIndex + 1}`);
    const valorCampo = campo.value.trim();
    
    if (valorCampo.toLowerCase() === palabraCorrecta.toLowerCase()) {
      campo.style.backgroundColor = 'green';
      campo.disabled = true;
      campo.value = palabraCorrecta;
      campo.setAttribute('title', 'Palabra correcta');
    } else {
      campo.style.backgroundColor = '#439A86';
      campo.removeAttribute('title');
    }
  }
  
  /* Actividad de Completar Campos */

  function verificarRespuestas() {
    var respuestasCorrectas = ["Hacer Mientras", "Mientras", "para"];
    var campo1 = document.getElementById("campo1").value;
    var campo2 = document.getElementById("campo2").value;
    var campo3 = document.getElementById("campo3").value;
    var messageElement = document.getElementById("message");
  
    if (campo1.toLowerCase() === respuestasCorrectas[0].toLowerCase() && campo2.toLowerCase() === respuestasCorrectas[1].toLowerCase() && campo3.toLowerCase() === respuestasCorrectas[2].toLowerCase()) {
      messageElement.textContent = "¡Respuestas correctas!";
      messageElement.className = "correct";
    } else {
      messageElement.textContent = "Respuestas incorrectas. Intenta nuevamente.";
      messageElement.className = "incorrect";
    }
  
    messageElement.style.display = "block";
  }

  /* mantenimiento */
  // Define the term-definition pairs
const pairs = [
    {
      term: 'Análisis del Problema',
      definition: 'Identificar las funcionalidades que deben incorporarse en el sistema para solucionar el problema'
    },
    {
      term: 'Codificación',
      definition: 'Transcribir las instrucciones del pseudocódigo a algún lenguaje de programación'
    },
    {
      term: 'Documentación',
      definition: 'Redactar un documento indicando cómo funciona internamente el programa incluyendo el significado del nombre de las variables'
    },
    {
      term: 'Definición del Problema',
      definition: 'Explicar de forma clara en qué consiste el problema a resolver'
    },
    {
      term: 'Pruebas y Depuración',
      definition: 'Verificar el funcionamiento del programa mediante la aplicación de pruebas de sintaxis y lógica'
    },
    {
      term: 'Formulación del Algoritmo',
      definition: 'Diseñar los algoritmos de las funcionalidades definidas en la etapa de análisis del problema'
    },
    {
      term: 'Mantenimiento',
      definition: 'Tener en cuenta las sugerencias, ajustes o extensiones que el usuario final requiera para mejoras en el Sistema'
    }
  ];
  
  // Shuffle the pairs
  const shuffledPairs = pairs.sort(() => Math.random() - 0.5);
  
  // Display the term-definition pairs on the cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    const term = card.querySelector('h2');
    term.textContent = shuffledPairs[index].term;
    card.querySelector('p.definition').textContent = shuffledPairs[index].definition;
  });
  
  let selectedCard = null;
  let matchedPairs = 0;
  
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      if (card.classList.contains('selected')) {
        return;
      }
  
      card.classList.add('selected');
  
      if (selectedCard === null) {
        selectedCard = card;
      } else {
        const firstTerm = selectedCard.querySelector('h2').textContent;
        const secondTerm = card.querySelector('h2').textContent;
  
        if (firstTerm === secondTerm) {
          selectedCard.removeEventListener('click', () => {});
          card.removeEventListener('click', () => {});
          selectedCard = null;
          matchedPairs++;
  
          if (matchedPairs === pairs.length / 2) {
            setTimeout(() => {
              alert('¡Has completado todas las definiciones!');
            }, 500);
          }
        } else {
          setTimeout(() => {
            selectedCard.classList.remove('selected');
            card.classList.remove('selected');
            selectedCard = null;
          }, 500);
        }
      }
    });
  });
  
  /* mantenimiento */


  /* Modulo4-pseudocodigo */
  function checkVisibility() {
    const paragraphs = document.querySelectorAll('.caracteristicasDisenio p');
    
    paragraphs.forEach((paragraph) => {
      const position = paragraph.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (position < windowHeight) {
        paragraph.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', checkVisibility);
  
  /* Modulo4-pseudocodigo */

  /* actividadForm */
  document.getElementById('actividadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    
    // Obtiene los valores ingresados por el usuario
    const instrucciones = document.getElementById('instrucciones').value.trim().toLowerCase();
    const variable = document.getElementById('variable').value.trim().toLowerCase();
    const condicionales = document.getElementById('condicionales').value.trim().toLowerCase();
    const iterativas = document.getElementById('iterativas').value.trim().toLowerCase();
    const secuenciales = document.getElementById('secuenciales').value.trim().toLowerCase();
    const programa = document.getElementById('programa').value.trim().toLowerCase();
    
    // Define las respuestas correctas
    const respuestasCorrectas = {
        instrucciones: 'en programación, las instrucciones son comandos o líneas de código que indican a un programa qué acciones debe realizar',
        variable: 'una variable es un contenedor que almacena un valor en la memoria durante la ejecución de un programa',
        condicionales: 'las condicionales son estructuras de control utilizadas en programación para tomar decisiones basadas en una condición',
        iterativas: 'las estructuras iterativas, también conocidas como bucles, permiten repetir un conjunto de instrucciones varias veces',
        secuenciales: 'las instrucciones secuenciales son aquellas que se ejecutan en orden, una tras otra, en un programa',
        programa: 'un programa es un conjunto de instrucciones escritas en un lenguaje de programación que se utiliza para realizar una tarea específica en una computadora'
    };
    
    // Verifica las respuestas y muestra el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    for (const key in respuestasCorrectas) {
        const respuestaUsuario = eval(key);
        const respuestaCorrecta = respuestasCorrectas[key];
        
        const resultadoItem = document.createElement('p');
        resultadoItem.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ': ';
        
        if (respuestaUsuario === respuestaCorrecta) {
            resultadoItem.textContent += 'Correcto';
            resultadoItem.style.color = 'green';
        } else {
            resultadoItem.textContent += 'Incorrecto';
            resultadoItem.style.color = 'red';
        }
        
        resultadoDiv.appendChild(resultadoItem);
    }
});

  /* actividadForm */

  function goToNextSection() {
    const selectedRating = document.querySelector('input[name="rating"]:checked');
    if (selectedRating) {
        // Bloquear las estrellas
        const stars = document.querySelectorAll('.rating input');
        for (let i = 0; i < stars.length; i++) {
            stars[i].disabled = true;
        }

        // Navegar a la siguiente sección
        window.location.href = "siguiente_seccion.html";
    } else {
        alert("Por favor, seleccione una valoración.");
    }
}